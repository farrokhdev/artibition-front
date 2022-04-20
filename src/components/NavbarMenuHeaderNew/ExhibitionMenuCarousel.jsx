import React, { useEffect, useState } from "react";
import { GetLanguage } from "../../utils/utils";
import moment from "moment-jalaali";
import { isNil } from "lodash";
import Timer from "react-compound-timer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ExhibitionMenuCarousel = ({ exhibitionsList, sliderNumber = 2 }) => {
  const { t } = useTranslation();
  const timeFormat = "YYYY-MM-DD HH:mm";
  const Language = GetLanguage();
  const [indicators, setIndicators] = useState([]);
  useEffect(() => {
    const getCarouselIndicators = () => {
      const size =
        Math.floor(exhibitionsList?.length) % sliderNumber === 0
          ? exhibitionsList?.length / sliderNumber
          : exhibitionsList?.length / sliderNumber + 1;

      const indicators = [];
      for (let i = 1; i < Math.floor(size); i++) {
        indicators.push(
          <li data-target="#myCarousel" data-slide-to={`${i}`}></li>
        );
      }
      return indicators;
    };
    setIndicators(getCarouselIndicators());
  }, []);
  const chunk = (arr, size) =>
    arr.reduce(
      (acc, e, i) => (
        i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc
      ),
      []
    );
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <div className="event-control">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            // className="active"
          ></li>
          {indicators}
        </ol>
      </div>
      <div className="carousel-inner">
        {!isNil(exhibitionsList) &&
          chunk(exhibitionsList, sliderNumber).map(
            (innerListExhibitions, index) => {
              return (
                <div
                  className={`${
                    index === 0 ? "carousel-item active" : "carousel-item"
                  }`}
                >
                  {innerListExhibitions?.map((exhibition) => {
                    let timerInMilliSeconds = 0;
                    if (
                      moment(
                        Object.values(exhibition?.start_date)[0],
                        timeFormat
                      ).isAfter(moment())
                    ) {
                      timerInMilliSeconds = moment(
                        Object.values(exhibition?.start_date)[0],
                        timeFormat
                      ).diff(moment());
                    } else if (
                      moment().isBetween(
                        moment(
                          Object.values(exhibition?.start_date)[0],
                          timeFormat
                        ),
                        moment(
                          Object.values(exhibition?.end_date)[0],
                          timeFormat
                        )
                      )
                    ) {
                      timerInMilliSeconds = moment(
                        Object.values(exhibition?.end_date)[0],
                        timeFormat
                      ).diff(moment());
                    }
                    return (
                      <Link
                        to="/site/exhibitionDetail"
                        className="d-flex owl-carousel"
                        state={{
                          id: exhibition?.id,
                          gallery_id: exhibition?.gallery?.id,
                        }}
                      >
                        <div className="col-img">
                          <div className="tags tags-events">
                            {Language === "fa-IR" ? "مجازی" : "online"}
                          </div>
                          <img
                            src={exhibition?.poster?.[0]?.exact_url}
                            style={{ width: "100%" }}
                            alt="آرتیبیشن"
                            className="img-responsive"
                          />
                        </div>
                        <div className="col-body">
                          {timerInMilliSeconds <= 0 && (
                            <div className="finished-tag">
                              {" "}
                              {Language === "fa-IR"
                                ? "پایان یافته"
                                : "finished"}
                            </div>
                          )}
                          <h6 className="col-title">
                            <span className="col-name">
                              {Language === "fa-IR"
                                ? exhibition?.translations?.fa?.name
                                : exhibition?.translations?.en?.name}
                            </span>
                          </h6>
                          <div className="col-dimension">
                            <span className="col-dimension-title">
                              {Language === "fa-IR"
                                ? exhibition?.gallery?.translations?.fa?.title
                                : exhibition?.gallery?.translations?.en?.title}
                            </span>
                          </div>
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
                                    display: "flex",
                                  }}
                                  className="timers"
                                >
                                  <div className="days">
                                    <span className="persian-num timer">
                                      <Timer.Days />
                                    </span>
                                    <span className="timer-title">
                                      {t("day")}
                                    </span>
                                  </div>
                                  <div className="hours">
                                    <span className="persian-num timer">
                                      <Timer.Hours />
                                    </span>
                                    <span className="timer-title">
                                      {t("hour")}
                                    </span>
                                  </div>
                                  <div className="minutes">
                                    <span className="persian-num timer">
                                      <Timer.Minutes />
                                    </span>
                                    <span className="timer-title">
                                      {t("minute")}
                                    </span>
                                  </div>
                                </div>
                              )}
                            </Timer>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};

export default ExhibitionMenuCarousel;
