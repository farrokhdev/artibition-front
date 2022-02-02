import React from 'react';
import slider1 from '../../assets/img/slider-en-1.jpg';
import slider2 from '../../assets/img/slider-en-2.jpg';
import slider1_fa from '../../assets/img/mainpage/slider-1.jpg';
import slider2_fa from '../../assets/img/mainpage/slider-2.jpg';
import previousIcon from '../../assets/img/previous.svg';
import nextIcon from '../../assets/img/next.svg';
import { t } from 'i18next';
import Timer from 'react-compound-timer';
import { useTranslation } from 'react-i18next';

export default function Slider() {
    const { t, i18n } = useTranslation();

    function timeExpire(time) {
        let expire = new Date(time)
        let now = new Date()
        if (expire > now) {
            return expire - now
        } else {
            return 0

        }
    }
    return (
        <div className="slider">
            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
                <div className="carousel-inner">
                    <div className="item active">
                        {i18n.language === 'fa-IR' ?
                        <img src={slider1_fa} width="3648" height="1200" alt="آرتیبیشن" />
                        :
                        <img src={slider1} width="3648" height="1200" alt="آرتیبیشن" />
                        }
                        <div className="carousel-txt text-dir">
                            <div className="coundown">
                                <h6 className="countdown-title hidden-sm hidden-xs">{t("deadline-send-artwroks")}</h6>
                                <Timer
                                    initialTime={timeExpire("2022/02/30")}
                                    direction="backward"
                                >
                                    {({ start, resume, pause, stop, reset, timerState }) => (
                                        <div style={{
                                            direction: 'ltr',
                                            textAlign: "center"
                                        }}
                                            className="timers"
                                        >
                                            <div className="days">
                                                <span className="persian-num timer"><Timer.Days /></span>
                                                <span className="timer-title">روز</span>
                                            </div>
                                            <div className="hours">
                                                <span className="persian-num timer"><Timer.Hours /></span>
                                                <span className="timer-title">ساعت</span>
                                            </div>
                                            <div className="minutes">
                                                <span className="persian-num timer"><Timer.Minutes /></span>
                                                <span className="timer-title">دقیقه</span>
                                            </div>

                                        </div>
                                    )}
                                </Timer>
                            </div>
                            <div className="clearfix"></div>
                            <button type="button" className="btn btn-default">{t("show-details")}</button>
                        </div>
                    </div>
                    <div className="item">
                        {i18n.language === 'fa-IR' ?
                        <img src={slider2_fa} height="1200" width="3648" alt="آرتیبیشن" />
                        :
                        <img src={slider2} height="1200" width="3648" alt="آرتیبیشن" />
                        }
                    </div>
                </div>
                <a className="left carousel-control hidden-xs" href="#myCarousel" data-slide="prev">
                    <img src={previousIcon} width="58" height="58" alt="" />
                </a>
                <a className="right carousel-control hidden-xs" href="#myCarousel" data-slide="next">
                    <img src={nextIcon} width="58" height="58" alt="" />
                </a>
            </div>
        </div>
    )
}
