import React, { useEffect, useState } from "react";

import info_pink_icon from "../../assets/img/info-pink.png";
import dates_icon from "../../assets/img/dates.svg";
import tip_icon from "../../assets/img/tip.svg";
import i18next, { t } from "i18next";
import apiServices from "../../utils/api.services";
import { PROMOTIONS } from "../../utils";
import { message } from "antd";
import { GetLanguage } from "../../utils/utils";
import moment from "jalali-moment";
import { Link } from "react-router-dom";
import queryString from 'query-string';

function Promotions() {
  
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  
  const [promotions, setPromotions] = useState([]);
  const [params, setParams] = useState({
    start_date_after :moment(today).locale('en').format('YYYY-MM-DD'),
  })


  const translate = GetLanguage() === "fa-IR" ? "fa" : "en";
  useEffect(() => {
    apiServices.get(PROMOTIONS, queryString.stringify(params)).then((res) => {
      if (res.data) {
        setPromotions(res.data.data.results);
      } else {
        message.error(res.response.data.message);
      }
    });
  }, []);

  return (
    <div className="box artistpanel-4 ">
      <div className="d-flex box-dir-reverse justify-content-between public-header ">
        <div className="pull-dir">
          <h2 className="d-flex default-title box-dir-reverse ">
            <span className="mx-2">
              {t("content-panel-dashboard.promotion.title")}
            </span>
            <a href="#">
              <img src={tip_icon} width="18" height="18" alt="" />
            </a>
          </h2>
        </div>
        <div className="pull-dir ">
          <a href="#">
            <img src={dates_icon} width="20" height="20" alt="dates-icon" />
          </a>
        </div>
      </div>
      <div className="promotion-blocks">
        {/* {console.log(promotions)} */}
        {promotions &&
          promotions.map((promotion, index) => {
            return (
              <div className="promotion-block">
                <Link to={`/site/promotions`}>
                  <h3 className="d-flex box-dir-reverse pink-title">
                    <img
                      src={info_pink_icon}
                      width="16"
                      height="16"
                      alt=""
                      className="mx-2"
                    />
                    <span>
                      {i18next.language === "fa-IR"
                        ? promotion.translations?.fa?.title
                        : promotion.translations?.en?.title}
                    </span>
                  </h3>
                  <h3 className="d-flex box-dir-reverse gray-title">
                    <i className="glyphicon glyphicon-time mx-2"></i>
                    {promotion?.start_date && promotion?.end_date ? (
                      moment(promotion?.start_date, "YYYY/MM/DD")
                        .locale(i18next?.language === "fa-IR" ? "fa" : "en")
                        .format("MMMM") ===
                      moment(promotion?.end_date, "YYYY/MM/DD")
                        .locale(i18next?.language === "fa-IR" ? "fa" : "en")
                        .format("MMMM") ? (
                        <>
                          <span className="persian-num">
                            {moment(promotion?.start_date, "YYYY/MM/DD")
                              .locale(
                                i18next?.language === "fa-IR" ? "fa" : "en"
                              )
                              .format("DD")}
                          </span>
                          <span>
                            {t("content-panel-dashboard.promotion.to")}
                          </span>
                          <span className="persian-num">
                            {moment(promotion?.end_date, "YYYY/MM/DD")
                              .locale(
                                i18next?.language === "fa-IR" ? "fa" : "en"
                              )
                              .format("DD")}
                          </span>
                          <span>
                            {moment(promotion?.end_date, "YYYY/MM/DD")
                              .locale(
                                i18next?.language === "fa-IR" ? "fa" : "en"
                              )
                              .format("MMMM")}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="persian-num">
                            {moment(promotion?.start_date, "YYYY/MM/DD")
                              .locale(
                                i18next?.language === "fa-IR" ? "fa" : "en"
                              )
                              .format("DD MMMM")}
                          </span>
                          <span>
                            {t("content-panel-dashboard.promotion.to")}
                          </span>
                          <span className="persian-num">
                            {moment(promotion?.end_date, "YYYY/MM/DD")
                              .locale(
                                i18next?.language === "fa-IR" ? "fa" : "en"
                              )
                              .format("DD MMMM")}
                          </span>
                        </>
                      )
                    ) : (
                      ""
                    )}
                  </h3>
                  <p className="text-dir">
                    {i18next.language === "fa-IR"
                      ? promotion.translations?.fa?.description
                      : promotion.translations?.en?.description}
                  </p>
                </Link>
              </div>
            );
          })}
        {/* <div className="promotion-block">
                    <h3 className="d-flex box-dir-reverse pink-title">
                        <img src={info_pink_icon} width="16" height="16" alt="" className="mx-2" />
                        <span>?????????? ???????? ?????????? ????</span>
                    </h3>
                    <h3 className="d-flex box-dir-reverse gray-title">
                        <i className="glyphicon glyphicon-time mx-2"></i>
                        <span>???? ?????? ?????? ?? ???? ??????</span>
                    </h3>
                    <p className="text-dir">
                        ???? ???????????? ???? ???????? ?????????? ???????? ???? ?????????????? ???? ???? ???????? ?????????? ????
                        .???????? ???????? ???????????? ????????
                    </p>
                </div> */}

        {/* <div className="promotion-block">
                    <h3 className="d-flex box-dir-reverse pink-title">
                        <img src={info_pink_icon} width="16" height="16" alt="" className="mx-2" />
                        <span>?????????? ???????? ?????????? ????????????????</span>
                    </h3>
                    <h3 className="d-flex box-dir-reverse gray-title">
                        <i className="glyphicon glyphicon-time mx-1"></i>
                        <span>???? ?????? ???? ?????????? ??????</span>
                    </h3>
                    <p className="text-dir">
                        ???? ?????????? ?????????? ???????????????? ?????? ?????????? ???? ???? ?????????? ???????? ?????????? ??????????? ????
                        ???? ???????? ?????? ?????????????? ???????????? ???????? ????????. ???? ???????????? ?????? ???????? ?? ????
                        ???????????? ?????????? ???????? ???????? ?????????? ?????? ??????????????????? ?????????? ???????? ????????
                        ?? ???????? ???????????? ???? ???????? ??????????????.
                    </p>
                </div> */}
      </div>
      <button type="button" className="btn btn-more">
        {t("content-panel-dashboard.promotion.veiw_more")}
      </button>
    </div>
  );
}

export default Promotions;
