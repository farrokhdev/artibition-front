import { isNil } from "lodash";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
const ExhibitionDetail = (exhibition) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <Link
      to="/site/exhibitionDetail"
      className="event-row "
      state={{
        id: exhibition?.id,
        gallery_id: exhibition?.gallery?.id,
      }}
    >
      <div className="event-img pull-right">
        <img
          src={exhibition?.poster?.[0]?.exact_url}
          alt="رویداد آرتیبیشن"
          className="img-responsive"
          style={{
            maxWidth: "60px",
            maxHeight: "60px",
            minHeight: "60px",
            minWidth: "60px",
          }}
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
    </Link>
  );
};
const ExhibitionCarousel = ({ exhibitionsList }) => {
  const [indicators, setIndicators] = useState([]);
  useEffect(() => {
    const getCarouselIndicators = () => {
      const size =
        Math.floor(exhibitionsList?.length) % 3 === 0
          ? exhibitionsList?.length / 3
          : exhibitionsList?.length / 3 + 1;

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
      <div className="carousel-inner">
        {!isNil(exhibitionsList) &&
          chunk(exhibitionsList, 3).map((innerListExhibitions, index) => {
            return (
              <div
                className={`${
                  index === 0 ? "carousel-item active" : "carousel-item"
                }`}
              >
                {innerListExhibitions?.map((exhibition) => {
                  return <ExhibitionDetail {...exhibition} />;
                })}
              </div>
            );
          })}
      </div>

      <div className="event-control">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          {indicators}
        </ol>
      </div>
    </div>
  );
};

export default ExhibitionCarousel;
