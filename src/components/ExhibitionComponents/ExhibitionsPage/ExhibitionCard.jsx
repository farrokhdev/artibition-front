import React from "react";
import { Link } from "react-router-dom";
import moment from "moment-jalaali";
import { useTranslation } from "react-i18next";
import Countdown from "antd/lib/statistic/Countdown";

const ExhibitionCard = (exhibition) => {
  const { t, i18n } = useTranslation();
  const CustomCountDown = (props) => (
    <span className="text-left" style={{ textAlign: "left" }}>
      <Countdown format={`D : HH : mm`} {...props} />
      <span className=" ant-statistic-content-value mt-1 text-left d-block">
        {t("exhibitions-page.min")} {t("exhibitions-page.hour")}{" "}
        {t("exhibitions-page.day")}
      </span>
    </span>
  );
  return (
    <div className="col-sm-4">
      <Link
        to={{
          pathname: "/site/exhibitionDetail",
        }}
        state={{
          id: exhibition?.id,
          gallery_id: exhibition?.gallery?.id,
        }}
        replace={false}
        className="cols"
      >
        <div className="col-img">
          {exhibition?.type !== "virtual" && (
            <div className="tags tags-events">
              {t("exhibitions-page.local")}
            </div>
          )}
          {exhibition?.type !== "real" && (
            <div className="tags tags-events">
              {t("exhibitions-page.online")}
            </div>
          )}

          <img
            src={exhibition?.poster?.[0]?.exact_url}
            width="840"
            height="840"
            alt="آرتیبیشن"
            className="img-responsive"
          />
        </div>
        <div className="col-body">
          {moment(Object.values(exhibition?.end_date)[0]).isBefore(
            moment.utc(moment().format("YYYY-MM-DD HH:mm:ss"))
          ) && (
            <div className="finished-tag">{t("exhibitions-page.finished")}</div>
          )}
          <h6 className="col-title">
            <span className="col-name">
              {i18n.language === "fa-IR"
                ? exhibition?.translations?.fa?.name
                : exhibition?.translations?.en?.name}
            </span>
          </h6>
          <div className="col-dimension">
            <span className="col-dimension-title">
              {i18n.language === "fa-IR"
                ? exhibition?.gallery?.translations?.fa?.title
                : exhibition?.gallery?.translations?.en?.title}
            </span>
          </div>

          {moment(Object.values(exhibition?.start_date)[0]).isAfter(
            moment.utc(moment().format("YYYY-MM-DD HH:mm:ss"))
          ) && (
            <CustomCountDown
              value={moment(Object.values(exhibition?.start_date)[0])}
            />
            // <span>
            //   <Countdown
            //     style={{ fontFamily: "Tahrir_Extra Bold" }}
            //     value={moment(Object.values(exhibition?.start_date)[0])}
            //     format={`D : HH : mm`}
            //   />
            //   <span className="ant-statistic-content-value mt-1">
            //     {t("exhibitions-page.min")} {t("exhibitions-page.hour")}{" "}
            //     {t("exhibitions-page.day")}
            //   </span>
            // </span>
          )}
          {moment(Object.values(exhibition?.start_date)[0]).isBefore(
            moment.utc(moment().format("YYYY-MM-DD HH:mm:ss"))
          ) &&
            moment(Object.values(exhibition?.end_date)[0]).isAfter(
              moment.utc(moment().format("YYYY-MM-DD HH:mm:ss"))
            ) && (
              <CustomCountDown
                value={moment(Object.values(exhibition?.end_date)[0])}
              />
            )}
          {/* <div className="coundown">
            <div className="timers" data-newdate="August 28, 2020 12:00 PDT">
              <span className="timer-status">
                {t("exhibitions-page.to-end")}
              </span>
              <div className="days"></div>
              <div className="hours"></div>
              <div className="minutes"></div>
            </div>
          </div> */}
        </div>
      </Link>
    </div>
  );
};

export default ExhibitionCard;
