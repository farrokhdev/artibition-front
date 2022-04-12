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
import moment from "jalali-moment";
const timeFormat = "YYYY-MM-DD HH:mm";
export default function Slider() {
  const { t, i18n } = useTranslation();
  const [sliders, setSliders] = useState();
  const [activeSlide, setActiveSlide] = useState(0);

  const insertValue = (arr, value) => [
    ...arr.filter((n) => Number(n.order) <= Number(value.order)),
    value,
    ...arr.filter((n) => Number(n.order) > Number(value.order)),
  ];

  const getSlider = () => {
    apiServices
      .get(SLIDER_PIC)
      .then((res) => {
        if (res.data) {
          const tempSliders = res.data.data.reduce(insertValue, []);
          setSliders(tempSliders);
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
    const tempSlider =
      activeSlide !== 0 ? activeSlide - 1 : sliders?.length - 1;
    setActiveSlide(tempSlider);
  };
  const gotoNextSlider = () => {
    const tempSlider =
      activeSlide === sliders?.length - 1 ? 0 : activeSlide + 1;

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
          {sliders?.map((slider, index) => {
            console.log("index", index, slider);
            console.log("activeSlide", activeSlide);
            let timerInMilliSeconds = 0;

            if (
              !isNil(slider.from_date) &&
              moment(slider.from_date, timeFormat).isAfter(moment())
            ) {
              timerInMilliSeconds = moment(slider.from_date, timeFormat).diff(
                moment()
              );
            } else if (
              !isNil(slider.from_date) &&
              !isNil(slider.to_date) &&
              moment().isBetween(
                moment(slider.from_date, timeFormat),
                moment(slider.to_date, timeFormat)
              )
            ) {
              timerInMilliSeconds = moment(slider.to_date, timeFormat).diff(
                moment()
              );
            }
            return (
              <div className={index === activeSlide ? "item active" : "item"}>
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

                    {timerInMilliSeconds > 0 && (
                      <Timer
                        initialTime={timerInMilliSeconds}
                        direction="backward"
                        startImmediately={true}
                      >
                        {({
                          start,
                          resume,
                          pause,
                          stop,
                          reset,
                          timerState,
                        }) => (
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
                    <a
                      type="button"
                      className="btn btn-default"
                      href={slider.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("show-details")}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
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
