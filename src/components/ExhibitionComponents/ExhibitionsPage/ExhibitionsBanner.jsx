import { isNil } from "lodash";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { EXHIBITION_LIST } from "../../../utils";
import apiServices from "../../../utils/api.services";
import queryString from "query-string";

const ExhibitionsBanner = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [exhibitions, setExhibitions] = useState([]);
  const getData = () => {
    apiServices
      .get(EXHIBITION_LIST, queryString.stringify({ page_size: 12 }))
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
  const ExhibitionDetail = (exhibition) => {
    return (
      <a
        href="#"
        className="event-row "
        onClick={() =>
          navigate("/site/exhibitionDetail", {
            state: {
              id: exhibition?.id,
              gallery_id: exhibition?.gallery?.id,
            },
            replace: false,
          })
        }
      >
        <div className="event-img pull-right">
          <img
            src={exhibition?.poster?.[0]?.exact_url}
            height="240"
            width="240"
            alt="رویداد آرتیبیشن"
            className="img-responsive"
          />
        </div>
        <div className="event-body">
          <h6 className="event-title">
            {i18n.language === "fa-IR"
              ? exhibition?.translations?.fa?.name
              : exhibition?.translations?.en?.name}
          </h6>
          <p className="event-txt">
            {i18n.language === "fa-IR"
              ? exhibition?.translations?.fa?.statement
              : exhibition?.translations?.en?.statement}
          </p>
        </div>
      </a>
    );
  };

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
          <div className="gallery-banner-container">
            <div className="col-md-6 hidden-sm hidden-xs">
              <h3 className="event-title">{t("exhibitions-page.events")}</h3>
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  {!isNil(exhibitions?.results) &&
                    new Array(Math.ceil(exhibitions?.results?.length / 3))
                      .fill()
                      .map((_) => exhibitions?.results?.splice(0, 3))
                      .map((innerListExhibitions, index) => {
                        return (
                          <div
                            className={`${
                              index === 3
                                ? "carousel-item active"
                                : "carousel-item"
                            }`}
                          >
                            {innerListExhibitions?.map((exhibition) => {
                              return <ExhibitionDetail {...exhibition} />;
                            })}
                          </div>
                        );
                      })}
                </div>
                <div class="controls-top">
                  <a
                    class="btn-floating"
                    href="#multi-item-example"
                    data-slide="prev"
                  >
                    <i class="fa fa-chevron-left"></i>
                  </a>
                  <a
                    class="btn-floating"
                    href="#multi-item-example"
                    data-slide="next"
                  >
                    <i class="fa fa-chevron-right"></i>
                  </a>
                </div>
                <div className="event-control">
                  <ol className="carousel-indicators">
                    <li
                      data-target="#myCarousel"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="event-title">
                {t("exhibitions-page.select-event-date")}
              </h3>
              <div className="event-select">
                <span>پنجشنبه ۱۶ تیر ۹۹</span>
                <span>دوشنبه ۲۰ تیر ۹۹</span>
                <span>جمعه ۲۴ تیر ۹۹</span>
              </div>
              <div className="caleander-event">
                <div className="caleander-month">
                  <ul>
                    <li className="next">&#10095;</li>
                    <li className="prev">&#10094;</li>
                    <li className="limonth">تیر</li>
                  </ul>
                </div>
                <ul className="caleander-weekdays">
                  <li>ش</li>
                  <li>ی</li>
                  <li>د</li>
                  <li>س</li>
                  <li>چ</li>
                  <li>پ</li>
                  <li>ج</li>
                </ul>
                <ul className="caleander-days">
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                  <li className="active">10</li>
                  <li>11</li>
                  <li>12</li>
                  <li>13</li>
                  <li>14</li>
                  <li>15</li>
                  <li>16</li>
                  <li>17</li>
                  <li className="active">18</li>
                  <li>19</li>
                  <li>20</li>
                  <li className="active">21</li>
                  <li>22</li>
                  <li>23</li>
                  <li>24</li>
                  <li>25</li>
                  <li>26</li>
                  <li>27</li>
                  <li>28</li>
                  <li>29</li>
                  <li>30</li>
                  <li>31</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionsBanner;
