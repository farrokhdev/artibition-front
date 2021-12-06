import React from 'react';
import slider1 from '../../assets/img/mainpage/slider-1.jpg';
import slider2 from '../../assets/img/mainpage/slider-2.jpg';
import previousIcon from '../../assets/img/previous.svg';
import nextIcon from '../../assets/img/next.svg';
import { t } from 'i18next';

export default function Slider() {
    return (
        <div className="slider">
        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
            <div className="carousel-inner">
                <div className="item active">
                    <img src={slider1} width="3648" height="1200" alt="آرتیبیشن"/>
                    <div className="carousel-txt">
                        <div className="coundown">
                            <h6 className="countdown-title hidden-sm hidden-xs">{t("deadline-send-artwroks")}</h6>
                            <div className="timers" data-newdate="september 16, 2020 12:00 PDT">
                                <div className="days"></div>
                                <div className="hours"></div>
                                <div className="minutes"></div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <button type="button" className="btn btn-default">{t("show-details")}</button>
                    </div>
                </div>
                <div className="item">
                    <img src={slider2} height="1200" width="3648" alt="آرتیبیشن"/>
                </div>
            </div>
            <a className="left carousel-control hidden-xs" href="#myCarousel" data-slide="prev">
                <img src={previousIcon} width="58" height="58" alt=""/>
            </a>
            <a className="right carousel-control hidden-xs" href="#myCarousel" data-slide="next">
                <img src={nextIcon} width="58" height="58" alt=""/>
            </a>
        </div>
    </div>
    )
}
