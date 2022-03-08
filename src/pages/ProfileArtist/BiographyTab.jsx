import React, { useEffect, useState } from "react";
import { t } from "i18next";
import { ARTIST_CATEGORY, ARTIST_EXHIBITION } from "../../utils";
import QueryString from "qs";
import apiServices from "../../utils/api.services";
import { useTranslation } from "react-i18next";
import moment from "jalali-moment";

function BiographyTab({ artistBio, artistId }) {
  const { t, i18n } = useTranslation();
  const [artistExhibition, setArtistExhibition] = useState();
  const [years, setYears] = useState();
  const [params, setParams] = useState({
    // search: "",
    page: 1,
  });
  const getArtistExhibition = () => {
    apiServices
      .get(ARTIST_EXHIBITION(artistId), QueryString.stringify(params))
      .then((res) => {
        if (res.data) {
          const tempYears = new Set();
          const tempArtistExhibition = res.data.data.map((item) => {
            const tempYear = moment(
              Object.values(item?.start_date)[0],
              "YYYY-MM-DD"
            )
              .locale("fa")
              .format("YYYY");
            years.add(tempYear);
            return { ...item, yearFA: tempYear };
          });
          setYears(tempYears);
          setArtistExhibition(tempArtistExhibition);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getArtistExhibition();
  }, [params]);
  console.log("exhibition", artistExhibition);
  return (
    <div id="artist3" className="tab-pane ">
      <div className="d-flex box-dir-reverse ">
        <div className="col-sm-7">
          <h5 className="custom-title text-dir">
            {t("artist_profile.introduction")}
          </h5>
          <p className="text-justify">
            {i18n.language === "fa-IR"
              ? artistBio?.fa?.biography
              : artistBio?.en?.biography}
          </p>
          <h5 className="custom-title mrgt16 text-dir">
            {t("artist_profile.style")}
          </h5>
        </div>
        <div className="col-sm-5">
          <h5 className="custom-title mrgr104 text-dir">
            {t("artist_profile.activities")}
          </h5>
          {years?.map((year) => {
            return (
              <div className="row-timeline">
                <div className="pull-dir">
                  <h5 className="persian-num year-timeline">{year}</h5>
                </div>
                {artistExhibition
                  ?.filter((item) => item.year === year)
                  ?.map((exhibition) => {
                    return (
                      <div className="sec-timeline">
                        <h6 className="title-timeline text-dir">
                          {t("artist_profile.versions")}
                        </h6>
                        <div className="text-dir">
                          {t("artist_profile.aknon_gallery")}
                        </div>
                        <div className="date-timeline text-dir">
                          <span className="persian-num">22</span>
                          <span>خرداد</span>
                          <span className="persian-num">1399</span>
                        </div>
                      </div>
                    );
                  })}

                <div className="sec-timeline">
                  <h6 className="title-timeline text-dir">
                    {t("artist_profile.versions")}
                  </h6>
                  <div className="text-dir">
                    {t("artist_profile.aknon_gallery")}
                  </div>
                  <div className="date-timeline text-dir">
                    <span className="persian-num">22</span>
                    <span>خرداد</span>
                    <span className="persian-num">1399</span>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="row-timeline">
            <div className="pull-dir">
              <h5 className="persian-num year-timeline">1398</h5>
            </div>
            <div className="sec-timeline">
              <h6 className="title-timeline text-dir">
                {t("artist_profile.man")}
              </h6>
              <div className="text-dir">
                {t("artist_profile.aknon_gallery")}
              </div>
              <div className="date-timeline text-dir">
                <span className="persian-num">22</span>
                <span>خرداد</span>
                <span className="persian-num">1398</span>
              </div>
            </div>
            <a className="sec-timeline" href="#">
              <h6 className="title-timeline text-dir">
                {t("artist_profile.collection")} ۵
              </h6>
              <button className="d-flex align-items-center  box-dir-reverse d-flex align-items-center  box-dir-reverse btn-readmore">
                {t("artist_profile.veiw")}
              </button>
              <div className="text-dir">
                {t("artist_profile.aknon_gallery")}
              </div>
              <div className="date-timeline text-dir">
                <span className="persian-num">22</span>
                <span>خرداد</span>
                <span className="persian-num">1399</span>
              </div>
            </a>
            <div className="sec-timeline">
              <h6 className="title-timeline text-dir">
                {t("artist_profile.versions")}
              </h6>
              <div className="text-dir">
                {t("artist_profile.aknon_gallery")}
              </div>
              <div className="date-timeline text-dir">
                <span className="persian-num">22</span>
                <span>خرداد</span>
                <span className="persian-num">1399</span>
              </div>
            </div>
            <div className="sec-timeline">
              <h6 className="title-timeline text-dir">
                {t("artist_profile.versions")}
              </h6>
              <div className="text-dir">
                {t("artist_profile.aknon_gallery")}
              </div>
              <div className="date-timeline text-dir">
                <span className="persian-num">22</span>
                <span>خرداد</span>
                <span className="persian-num">1399</span>
              </div>
            </div>
            <a className="sec-timeline" href="#">
              <h6 className="title-timeline text-dir">
                {t("artist_profile.collection")} 3
              </h6>
              <button className="d-flex align-items-center  box-dir-reverse btn-readmore">
                {t("artist_profile.veiw")}
              </button>
              <div className="text-dir">
                {t("artist_profile.aknon_gallery")}
              </div>
              <div className="date-timeline text-dir">
                <span className="persian-num">22</span>
                <span>خرداد</span>
                <span className="persian-num">1399</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiographyTab;
