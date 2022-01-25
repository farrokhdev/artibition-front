import React, { useEffect, useState } from 'react';
import { t } from 'i18next';
import gallery201 from '../../assets/img/gallery/201.jpg';
import HanLogo from '../../assets/img/gallery/hanlogo.jpg';
import { useTranslation } from 'react-i18next';
import { timeToStr } from '../../utils/utils';
import moment from 'moment-jalaali';

function IntroducingTheExhibition({ galleryIntroduction, galleryExhibition }) {
    const { t, i18n } = useTranslation();
    const [expired, setExpired] = useState([]);
    const [onPerforming, setOnPerforming] = useState([]);
    const [progressive, setProgressive] = useState([]);
    const [toggleConfig, setToggleConfig] = useState(false);
    const Moment = require('moment')


    useEffect(() => {
        if (!toggleConfig) {
        galleryExhibition?.results?.map(item =>{
            let start =  item.type === "real" ? new Date(item.start_date?.real_start_date) : item.type === "virtual" ? new Date(item.start_date?.virtual_start_date) : new Date(item.start_date?.virtual_real_start_date)
            let expire =  item.type === "real" ? new Date(item.end_date?.real_end_date) : item.type === "virtual" ? new Date(item.end_date?.virtual_end_date) : new Date(item.end_date?.virtual_real_end_date)
            let now = new Date()
            let a = moment(start)
            let b = moment(expire)
            let c = moment(now)

            setToggleConfig(true)
            console.log("time",b.diff(c, 'days')  )
            return expire < now ? expired.push(item) : start < now < expire ? onPerforming.push(item) : now < start ?  progressive.push(item) :null
        })}
        }, [galleryExhibition]);

    console.log("gallery", galleryExhibition)
    const sortedProgressive  = progressive?.sort((a,b) => new Moment(a.start_date[`${a.type}_start_date`]).format('YYYYMMDD') - new Moment(b.start_date[`${b.type}_start_date`]).format('YYYYMMDD'))
    const sortedExpired  = expired?.sort((a,b) => new Moment(b.start_date[`${b.type}_start_date`]).format('YYYYMMDD') - new Moment(a.start_date[`${a.type}_start_date`]).format('YYYYMMDD'))

    return (
        <div class="row gallery-ex">
            {onPerforming?.length > 0 ? 
            <>
            <div class="col-md-6 col-sm-3 sm-absolute">
                <div class="col-img">
                    <div class="tags tags-events">حضوری</div>
                    <img src={onPerforming[0]?.poster[0]?.exact_url} width="1776" height="1776" alt="آرتیبیشن"
                        class="img-responsive" />
                </div>
            </div>
            <div class="clearfix visible-sm"></div>
            <div class="col-md-6 ">
                <div class="row">
                    <div class="col-sm-9">
                        <h3 class="gallery-innername">
                            {i18n.language === 'fa-IR' ?
                                onPerforming && onPerforming[0]?.translations?.fa?.statement
                                :
                                onPerforming && onPerforming[0]?.translations?.en?.statement
                            }
                        </h3>
                        <div class="row-galleryinfo">
                            <div class="col-sm-7">
                                <img src={HanLogo} width="110" height="110" alt=""
                                    class="img-responsive pull-right" />
                                <div class="gallery-innerinfo">
                                    {i18n.language === 'fa-IR' ?
                                        <>
                                            <h3>
                                                {onPerforming && onPerforming[0]?.translations?.fa?.name}

                                            </h3>
                                            <p>
                                                {/* {onPerforming && onPerforming[0]?.locations[0]?.translations?.city} */}
                                            </p>
                                        </>
                                        :
                                        <>
                                            <h3>
                                                {onPerforming && onPerforming[0]?.translations?.fa?.title}

                                            </h3>
                                            <p>
                                                {/* {onPerforming && onPerforming[0]?.locations[0]?.translations?.city} */}
                                            </p>
                                        </>}
                                </div>
                            </div>
                            <div class="col-sm-5">
                                <div class="gallery-daterow">
                                    <span class="gallery-date">آغاز</span>
                                    <span class="gallery-datenum persian-num">{timeToStr(onPerforming && onPerforming[0]?.start_date[`${onPerforming[0]?.type}_start_date`], "jYYYY/jMM/jDD")}</span>
                                </div>
                                <div class="clearfix"></div>
                                <div class="gallery-daterow">
                                    <span class="gallery-date">پایان</span>
                                    <span class="gallery-datenum persian-num">{timeToStr(onPerforming && onPerforming[0]?.end_date[`${onPerforming[0]?.type}_end_date`], "jYYYY/jMM/jDD")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gallery-txt">
                    <p>
                        {i18n.language === 'fa-IR' ?
                            galleryIntroduction?.translations?.fa?.description
                            :
                            galleryIntroduction?.translations?.en?.description
                        }
                    </p>
                </div>
                <button type="button" class="btn btn-default d-flex">{t("show-details")}</button>
            </div>
            </>
            :
            sortedProgressive?.length > 0 ?
            <>
            <div class="col-md-6 col-sm-3 sm-absolute">
                <div class="col-img">
                    <div class="tags tags-events">حضوری</div>
                    <img src={sortedProgressive && sortedProgressive[0]?.poster[0]?.exact_url} width="1776" height="1776" alt="آرتیبیشن"
                        class="img-responsive" />
                </div>
            </div>
            <div class="clearfix visible-sm"></div>
            <div class="col-md-6 ">
                <div class="row">
                    <div class="col-sm-9">
                        <h3 class="gallery-innername">
                            {i18n.language === 'fa-IR' ?
                                sortedProgressive && sortedProgressive[0]?.translations?.fa?.statement
                                :
                                sortedProgressive && sortedProgressive[0]?.translations?.en?.statement
                            }
                        </h3>
                        <div class="row-galleryinfo">
                            <div class="col-sm-7">
                                <img src={HanLogo} width="110" height="110" alt=""
                                    class="img-responsive pull-right" />
                                <div class="gallery-innerinfo">
                                    {i18n.language === 'fa-IR' ?
                                        <>
                                            <h3>
                                                {sortedProgressive && sortedProgressive[0]?.translations?.fa?.name}

                                            </h3>
                                            <p>
                                                {/* {sortedProgressive && sortedProgressive[0]?.locations[0]?.translations?.city} */}
                                            </p>
                                        </>
                                        :
                                        <>
                                            <h3>
                                                {sortedProgressive && sortedProgressive[0]?.translations?.fa?.title}

                                            </h3>
                                            <p>
                                                {/* {sortedProgressive && sortedProgressive[0]?.locations[0]?.translations?.city} */}
                                            </p>
                                        </>}
                                </div>
                            </div>
                            <div class="col-sm-5">
                                <div class="gallery-daterow">
                                    <span class="gallery-date">آغاز</span>
                                    <span class="gallery-datenum persian-num">{timeToStr(sortedProgressive && sortedProgressive[0]?.start_date[`${sortedProgressive[0]?.type}_start_date`], "jYYYY/jMM/jDD")}</span>
                                </div>
                                <div class="clearfix"></div>
                                <div class="gallery-daterow">
                                    <span class="gallery-date">پایان</span>
                                    <span class="gallery-datenum persian-num">{timeToStr(sortedProgressive && sortedProgressive[0]?.end_date[`${sortedProgressive[0]?.type}_end_date`], "jYYYY/jMM/jDD")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gallery-txt">
                    <p>
                        {i18n.language === 'fa-IR' ?
                            galleryIntroduction?.translations?.fa?.description
                            :
                            galleryIntroduction?.translations?.en?.description
                        }
                    </p>
                </div>
                <button type="button" class="btn btn-default d-flex">{t("show-details")}</button>
            </div>
            </> 
            :
            sortedExpired?.length > 0 ?
            <>
            <div class="col-md-6 col-sm-3 sm-absolute">
                <div class="col-img">
                    <div class="tags tags-events">حضوری</div>
                    <img src={sortedExpired && sortedExpired[0]?.poster[0]?.exact_url} width="1776" height="1776" alt="آرتیبیشن"
                        class="img-responsive" />
                </div>
            </div>
            <div class="clearfix visible-sm"></div>
            <div class="col-md-6 ">
                <div class="row">
                    <div class="col-sm-9">
                        <h3 class="gallery-innername">
                            {i18n.language === 'fa-IR' ?
                                sortedExpired && sortedExpired[0]?.translations?.fa?.statement
                                :
                                sortedExpired && sortedExpired[0]?.translations?.en?.statement
                            }
                        </h3>
                        <div class="row-galleryinfo">
                            <div class="col-sm-7">
                                <img src={HanLogo} width="110" height="110" alt=""
                                    class="img-responsive pull-right" />
                                <div class="gallery-innerinfo">
                                    {i18n.language === 'fa-IR' ?
                                        <>
                                            <h3>
                                                {sortedExpired && sortedExpired[0]?.translations?.fa?.name}

                                            </h3>
                                            <p>
                                                {/* {sortedExpired && sortedExpired[0]?.locations[0]?.translations?.city} */}
                                            </p>
                                        </>
                                        :
                                        <>
                                            <h3>
                                                {sortedExpired && sortedExpired[0]?.translations?.fa?.title}

                                            </h3>
                                            <p>
                                                {/* {sortedExpired && sortedExpired[0]?.locations[0]?.translations?.city} */}
                                            </p>
                                        </>}
                                </div>
                            </div>
                            <div class="col-sm-5">
                                <div class="gallery-daterow">
                                    <span class="gallery-date">آغاز</span>
                                    <span class="gallery-datenum persian-num">{timeToStr(sortedExpired && sortedExpired[0]?.start_date[`${sortedExpired[0]?.type}_start_date`], "jYYYY/jMM/jDD")}</span>
                                </div>
                                <div class="clearfix"></div>
                                <div class="gallery-daterow">
                                    <span class="gallery-date">پایان</span>
                                    <span class="gallery-datenum persian-num">{timeToStr(sortedExpired && sortedExpired[0]?.end_date[`${sortedExpired[0]?.type}_end_date`], "jYYYY/jMM/jDD")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gallery-txt">
                    <p>
                        {i18n.language === 'fa-IR' ?
                            galleryIntroduction?.translations?.fa?.description
                            :
                            galleryIntroduction?.translations?.en?.description
                        }
                    </p>
                </div>
                <button type="button" class="btn btn-default d-flex">{t("show-details")}</button>
            </div>
            </> : null


            }
        </div>

    )
}

export default IntroducingTheExhibition; 