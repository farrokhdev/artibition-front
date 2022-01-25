import React from 'react';
import { t } from 'i18next';
import gallery201 from '../../assets/img/gallery/201.jpg';
import HanLogo from '../../assets/img/gallery/hanlogo.jpg';
import { useTranslation } from 'react-i18next';
import { timeToStr } from '../../utils/utils';

function IntroducingTheExhibition({ galleryIntroduction }) {
    const { t, i18n } = useTranslation();

    console.log("gallery", galleryIntroduction)
    return (
        <div class="row gallery-ex">
            <div class="col-md-6 col-sm-3 sm-absolute">
                <div class="col-img">
                    <div class="tags tags-events">حضوری</div>
                    <img src={galleryIntroduction?.media[0]?.exact_url} width="1776" height="1776" alt="آرتیبیشن"
                        class="img-responsive" />
                </div>
            </div>
            <div class="clearfix visible-sm"></div>
            <div class="col-md-6 ">
                <div class="row">
                    <div class="col-sm-9">
                        <h3 class="gallery-innername">
                            {i18n.language === 'fa-IR' ?
                                galleryIntroduction?.translations?.fa?.title
                                :
                                galleryIntroduction?.translations?.en?.title
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
                                                {galleryIntroduction?.translations?.fa?.title}

                                            </h3>
                                            <p>
                                                {galleryIntroduction?.locations && galleryIntroduction?.locations[0]?.translations?.city}
                                            </p>
                                        </>
                                        :
                                        <>
                                            <h3>
                                                {galleryIntroduction?.translations?.fa?.title}

                                            </h3>
                                            <p>
                                                {galleryIntroduction?.locations && galleryIntroduction?.locations[0]?.translations?.city}
                                            </p>
                                        </>}
                                </div>
                            </div>
                            <div class="col-sm-5">
                                <div class="gallery-daterow">
                                    <span class="gallery-date">آغاز</span>
                                    <span class="gallery-datenum persian-num">{timeToStr(galleryIntroduction?.creation_date, "jYYYY/jMM/jDD")}</span>
                                </div>
                                <div class="clearfix"></div>
                                <div class="gallery-daterow">
                                    <span class="gallery-date">پایان</span>
                                    <span class="gallery-datenum persian-num">{timeToStr(galleryIntroduction?.modified_date, "jYYYY/jMM/jDD")}</span>
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
        </div>

    )
}

export default IntroducingTheExhibition; 