import React, { useEffect, useState } from "react";
import slider1 from "../../assets/img/slider-en-1.jpg";
import slider2 from "../../assets/img/slider-en-2.jpg";
import slider1_fa from "../../assets/img/mainpage/slider-1.jpg";
import slider2_fa from "../../assets/img/mainpage/slider-2.jpg";
import previousIcon from "../../assets/img/previous.svg";
import nextIcon from "../../assets/img/next.svg";
import { t } from "i18next";
import Timer from "react-compound-timer";
import { useTranslation } from "react-i18next";
import apiServices from "../../utils/api.services";
import { SLIDER_PIC } from "../../utils";
import { isNil } from "lodash";

export default function Slider() {
  const { t, i18n } = useTranslation();
  const [sliders, setSliders] = useState();
  const [activeSlide, setActiveSlide] = useState(5);
  function timeExpire(time) {
    let expire = new Date(time);
    let now = new Date();
    if (expire > now) {
      return expire - now;
    } else {
      return 0;
    }
  }
  const getSlider = () => {
    apiServices
      .get(SLIDER_PIC)
      .then((res) => {
        if (res.data) {
          setSliders(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getSlider();
  }, []);
  const gotoPrevSlider = () => {
    console.log("gotoPrevSlider", activeSlide);
    const tempSlider = activeSlide !== 1 ? activeSlide - 1 : sliders?.length;
    setActiveSlide(tempSlider);
  };
  const gotoNextSlider = () => {
    console.log("gotoNextSlider", activeSlide);
    const tempSlider = activeSlide !== sliders?.length ? activeSlide + 1 : 1;
    setActiveSlide(tempSlider);
  };
  return (
    <div className="slider">
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="0"
      >
        <div className="carousel-inner">
          {sliders?.map((slider) => (
            <div
              className={slider.order === activeSlide ? "item active" : "item"}
            >
              {i18n.language === "fa-IR" ? (
                <img
                  src={slider?.media_fa?.exact_url}
                  style={{
                    width: "1200px",
                    height: "400px",
                  }}
                  alt="آرتیبیشن"
                />
              ) : (
                <img
                  src={slider?.media_en?.exact_url}
                  style={{
                    width: "1200px",
                    height: "400px",
                  }}
                  alt="آرتیبیشن"
                />
              )}
              <div className="carousel-txt text-dir">
                <div className="coundown">
                  <h6 className="countdown-title hidden-sm hidden-xs">
                    {i18n.language === "fa-IR"
                      ? slider?.translations?.fa?.title
                      : slider?.translations?.en?.title}
                  </h6>
                  {!isNil(slider.end_date) && (
                    <Timer
                      initialTime={timeExpire(slider.end_date)}
                      direction="backward"
                    >
                      {({ start, resume, pause, stop, reset, timerState }) => (
                        <div
                          style={{
                            direction: "ltr",
                            textAlign: "center",
                          }}
                          className="timers"
                        >
                          <div className="days">
                            <span className="persian-num timer">
                              <Timer.Days />
                            </span>
                            <span className="timer-title">{t("day")}</span>
                          </div>
                          <div className="hours">
                            <span className="persian-num timer">
                              <Timer.Hours />
                            </span>
                            <span className="timer-title">{t("hour")}</span>
                          </div>
                          <div className="minutes">
                            <span className="persian-num timer">
                              <Timer.Minutes />
                            </span>
                            <span className="timer-title">{t("minute")}</span>
                          </div>
                        </div>
                      )}
                    </Timer>
                  )}
                </div>
                <div className="clearfix"></div>
                {!isNil(slider?.link) && (
                  <button type="button" className="btn btn-default">
                    {t("show-details")}
                  </button>
                )}
              </div>
            </div>
          ))}
          {/* <div className="item">
            {i18n.language === "fa-IR" ? (
              <img src={slider2_fa} height="1200" width="3648" alt="آرتیبیشن" />
            ) : (
              <img src={slider2} height="1200" width="3648" alt="آرتیبیشن" />
            )}
          </div> */}
        </div>
        <a
          className="left carousel-control hidden-xs"
          onClick={() => gotoPrevSlider()}
          data-slide="prev"
          href="#myCarousel"
        >
          <img src={previousIcon} width="58" height="58" alt="" />
        </a>
        <a
          className="right carousel-control hidden-xs"
          href="#myCarousel"
          data-slide="next"
          onClick={() => gotoNextSlider()}
        >
          <img src={nextIcon} width="58" height="58" alt="" />
        </a>
      </div>
    </div>
  );
}
