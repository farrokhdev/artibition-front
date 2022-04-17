import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { EXHIBITION_LIST } from "../../../utils";
import apiServices from "../../../utils/api.services";
import queryString from "query-string";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian_en from "react-date-object/locales/gregorian_en";
import moment from "moment-jalaali";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ExhibitionCarousel from "./ExhibitionCarousel";
const ExhibitionsBanner = () => {
  const { t, i18n } = useTranslation();
  const [exhibitions, setExhibitions] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);

  const date = selectedDates.map(
    (item) => item.format("dddd DD MMMM YYYY")
    // item.convert(gregorian, gregorian_en).format("YYYY-MMMM-DD hh:mm:ss dddd")
  );

  const getData = () => {
    apiServices
      .get(
        EXHIBITION_LIST,
        queryString.stringify({
          page_size: 1000,
          active_exhibitions: moment().format("YYYY-MM-DD"),
        })
      )
      .then((res) => {
        setExhibitions(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="gallery-banner">
      <div
        className="container"
        style={{
          textAlign: "right",
          //   direction: i18n.language !== "fa-IR" ? "rtl" : "ltr",
        }}
      >
        <div className="col-md-10 col-md-offset-1">
          <div className=" gallery-banner-container">
            <div className="col-md-6">
              <h3 className="event-title">
                {t("exhibitions-page.select-event-date")}
              </h3>
              <div className="event-select">
                {selectedDates?.map((item) => (
                  <span>{item.format("dddd DD MMMM YYYY")}</span>
                ))}
              </div>
              <div className="caleander-event">
                <Calendar
                  multiple
                  value={selectedDates}
                  onChange={setSelectedDates}
                  calendar={i18n.language === "fa-IR" ? persian : gregorian}
                  locale={i18n.language === "fa-IR" ? persian_fa : gregorian_en}
                  calendarPosition="bottom-right"
                  className="custom-calendar"
                />
              </div>
            </div>
            {exhibitions?.results?.length > 0 && (
              <div className="col-md-6 hidden-sm hidden-xs">
                <h3 className="event-title">{t("exhibitions-page.events")}</h3>
                <ExhibitionCarousel exhibitionsList={exhibitions?.results} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionsBanner;
