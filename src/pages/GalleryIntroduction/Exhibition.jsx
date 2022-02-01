import React, { useEffect, useState } from 'react';
import gallery201 from '../../assets/img/gallery/201.jpg';
import HanLogo from '../../assets/img/gallery/hanlogo.jpg';
import gallery102 from '../../assets/img/gallery/102.jpg';
import { t } from 'i18next';
import apiServices from '../../utils/api.services';
import { GALLERY_EXHIBITION } from '../../utils';
import QueryString from 'qs';
import { useTranslation } from 'react-i18next';
import { timeToStr } from '../../utils/utils';

function Exhibition({ id , galleryExhibition}) {
    const { t, i18n } = useTranslation();
    const [toggle, setToggle] = useState(false);
    const [expired, setExpired] = useState([]);
    const [onPerforming, setOnPerforming] = useState([]);
    const [progressive, setProgressive] = useState([]);
    const [toggleConfig, setToggleConfig] = useState(false);
    const [params, setParams] = useState({
        search: "",
        page: 1,

    })

    function callback(key) {
        console.log(key);
    }

    const getToggle = () => setToggle(true)

    useEffect(() => {
        if (!toggleConfig) {
        galleryExhibition?.results?.map(item =>{
            let start =  item.type === "real" ? new Date(item.start_date?.real_start_date) : item.type === "virtual" ? new Date(item.start_date?.virtual_start_date) : new Date(item.start_date?.virtual_start_date)
            let expire =  item.type === "real" ? new Date(item.end_date?.real_end_date) : item.type === "virtual" ? new Date(item.end_date?.virtual_end_date) : new Date(item.end_date?.virtual_end_date)
            let now = new Date()
            setToggleConfig(true)
            return expire < now ? expired.push(item) : start < now < expire ? onPerforming.push(item) : now < start ?  progressive.push(item) :null
        })}
        }, [galleryExhibition]);

console.log("expired",expired)

    return (
        <div id="gallery2" className="tab-pane fade in active">
            {onPerforming.length > 0 && onPerforming?.map((item,index) =>
            <div className="row gallery-ex">
            <div class="col-md-6 col-sm-3 sm-absolute">
                <div class="col-img">
                <div className="tags tags-events">
                {i18n.language === 'fa-IR' ?
                item.type === "real" ? 'حضوری' : item.type === 'virtual' ? 'مجازی' : 'مجازی - حضوری'
                :
                item.type
            }</div>
                    <img src={item?.poster[0]?.exact_url} width="1776" height="1776" alt="آرتیبیشن"
                        class="img-responsive" />
                </div>
            </div>
            <div class="clearfix visible-sm"></div>
            <div class="col-md-6 ">
                <div class="row">
                    <div class="col-sm-9">
                        <h3 class="gallery-innername">
                            {i18n.language === 'fa-IR' ?
                                item.translations?.fa?.statement
                                :
                                item.translations?.en?.statement
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
                                                {item.translations?.fa?.name}

                                            </h3>
                                            <p>
                                                {/* {onPerforming && onPerforming[0]?.locations[0]?.translations?.city} */}
                                            </p>
                                        </>
                                        :
                                        <>
                                            <h3>
                                                {item.translations?.fa?.title}

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
                                    <span class="gallery-datenum persian-num">{timeToStr(item.start_date[`${item.type=== 'virtual_real'? 'virtual' : item.type}_start_date`], "jYYYY/jMM/jDD")}</span>
                                </div>
                                <div class="clearfix"></div>
                                <div class="gallery-daterow">
                                    <span class="gallery-date">پایان</span>
                                    <span class="gallery-datenum persian-num">{timeToStr(item.end_date[`${item.type=== 'virtual_real'? 'virtual' : item.type}_end_date`], "jYYYY/jMM/jDD")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gallery-txt">
                    <p>
                        {i18n.language === 'fa-IR' ?
                            item.gallery?.translations?.fa?.description
                            :
                            item.gallery?.translations?.en?.description
                        }
                    </p>
                </div>
                <button type="button" class="btn btn-default d-flex">{t("show-details")}</button>
            </div>
            </div>
            )}
            {progressive.length > 0 &&
            <div className="public-header">
                <h2 className="default-title">نمایشگاه‌های پیش‌رو</h2>
            </div>
            }
            {progressive.length > 0 && progressive?.map((item,index) => 
            <div className="row gallery-ex">
                <div className="col-md-6 ">
                    <div className="row">
                        <div className="col-sm-9">
                            <h3 className="gallery-innername">
                            {i18n.language === 'fa-IR' ?
                                item.translations?.fa?.statement
                                :
                                item.translations?.en?.statement
                            }
                            </h3>
                            <div className="row-galleryinfo">
                                <div className="col-sm-7">
                                    <img src={HanLogo} width="110" height="110" alt=""
                                        className="img-responsive pull-right" />
                                    <div className="gallery-innerinfo">
                                    {i18n.language === 'fa-IR' ?
                                        <>
                                            <h3>
                                                {item.translations?.fa?.name}

                                            </h3>
                                            <p>
                                                {/* {onPerforming && onPerforming[0]?.locations[0]?.translations?.city} */}
                                            </p>
                                        </>
                                        :
                                        <>
                                            <h3>
                                                {item.translations?.fa?.title}

                                            </h3>
                                            <p>
                                                {/* {onPerforming && onPerforming[0]?.locations[0]?.translations?.city} */}
                                            </p>
                                        </>}
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="gallery-daterow">
                                        <span className="gallery-date">آغاز</span>
                                        <span class="gallery-datenum persian-num">{timeToStr(item.start_date[`${item.type=== 'virtual_real'? 'virtual' : item.type}_start_date`], "jYYYY/jMM/jDD")}</span>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="gallery-daterow">
                                        <span className="gallery-date">پایان</span>
                                        <span class="gallery-datenum persian-num">{timeToStr(item.end_date[`${item.type=== 'virtual_real'? 'virtual' : item.type}_end_date`], "jYYYY/jMM/jDD")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-txt">
                        <p>
                        {i18n.language === 'fa-IR' ?
                            item.gallery?.translations?.fa?.description
                            :
                            item.gallery?.translations?.en?.description
                        }
                        </p>
                    </div>
                    <button type="button" className="btn btn-default">مشاهده جزئیات</button>
                </div>
                <div className="clearfix visible-sm"></div>
                <div className="col-md-6 col-sm-3 sm-absolute">
                    <div className="col-img">
                    <div className="tags tags-events">{item.type === "real" ? 'حضوری' : item.type === 'virtual' ? 'مجازی' : 'مجازی - حضوری'}</div>
                    <img src={item.poster[0]?.exact_url} width="1776" height="1776" alt="آرتیبیشن"
                            className="img-responsive" />
                    </div>
                </div>
            </div>
            )}
            {expired.length > 0 &&
            <div className="public-header">
                <h2 className="default-title">نمایشگاه‌های پیشین</h2>
            </div>
            }
            {expired.length > 0 && expired?.map((item,index) => 
            <div className="previous-ex">
                        <div className="col-sm-3">
                            <a href="#" className="cols finished">
                                <div className="col-img">
                                    <div className="tags tags-events">{item.type === "real" ? 'حضوری' : item.type === 'virtual' ? 'مجازی' : 'مجازی - حضوری'}</div>
                                    <img src={item.poster[0]?.exact_url} width="840" height="840" alt="آرتیبیشن"
                                        className="img-responsive" />
                                </div>
                                <div className="col-body ">
                                {i18n.language === 'fa-IR' ?
                                <>
                                    <div className="finished-tag">پایان یافته</div>
                                    <h6 className="col-title">
                                        <span className="col-name">{item.translations?.fa?.statement}</span>
                                    </h6>
                                    <div className="col-dimension">
                                        <span className="col-dimension-title">{item.translations?.fa?.name}</span>
                                    </div>
                                    <div className="col-date">
                                        <span className="persian-num">{timeToStr(item.start_date[`${item.type=== 'virtual_real'? 'virtual' : item.type}_start_date`], "jDD")}</span>
                                        <span>الی</span>
                                        <span className="persian-num">{timeToStr(item.end_date[`${item.type=== 'virtual_real'? 'virtual' : item.type}_end_date`], "jDD")}</span>
                                        <span>{timeToStr(item.end_date[`${item.type=== 'virtual_real'? 'virtual' : item.type}_end_date`], "jMM")}</span>
                                    </div>
                                </>
                                    :
                                    <>
                                    <div className="finished-tag">Ended</div>
                                    <h6 className="col-title">
                                        <span className="col-name">{item.translations?.en?.statement}</span>
                                    </h6>
                                    <div className="col-dimension">
                                        <span className="col-dimension-title">{item.translations?.en?.name}</span>
                                    </div>
                                    <div className="col-date">
                                        <span className="persian-num">{timeToStr(item.start_date[`${item.type=== 'virtual_real'? 'virtual' : item.type}_start_date`], "jDD")}</span>
                                        <span>to</span>
                                        <span className="persian-num">{timeToStr(item.end_date[`${item.type=== 'virtual_real'? 'virtual' : item.type}_end_date`], "jDD")}</span>
                                        <span>{timeToStr(item.end_date[`${item.type=== 'virtual_real'? 'virtual' : item.type}_end_date`], "jMM")}</span>
                                    </div>
                                    </>
            }
                                </div>
                            </a>
                        </div>
            </div>
            )}
            <div className="clearfix"></div>
            <div className="row-pagination">
                <ul className="pagination">
                    <li className="active"><a href="#">1</a></li>
                    <li ><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Exhibition;