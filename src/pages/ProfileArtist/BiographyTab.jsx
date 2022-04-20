import React, { useEffect, useState } from "react";
import { t } from "i18next";
import { ARTIST_CATEGORY, ARTIST_EXHIBITION, ARTIST_RESUME } from "../../utils";
import QueryString from "qs";
import apiServices from "../../utils/api.services";
import { useTranslation } from "react-i18next";
import moment from "jalali-moment";
import { isNil } from "lodash";
import { Link } from "react-router-dom";
function BiographyTab({ artistBio, artistId }) {
  const { t, i18n } = useTranslation();
  const [artistExhibition, setArtistExhibition] = useState();
  const [years, setYears] = useState(new Set());

  const [params, setParams] = useState({
    // search: "",
    page: 1,
  });
  const getArtistExhibition = () => {
    apiServices
      .get(ARTIST_RESUME(artistId), QueryString.stringify(params))
      .then((res) => {
        if (res.data) {
          const tempYears = new Set();
          const tempArtistExhibition = res.data.data.map((item) => {
            let tempDate;
            if (i18n.language === "fa-IR") {
              tempDate = moment(item?.start_date, "YYYY-MM-DD")
                .locale("fa")
                .format("YYYY-MMMM-DD")
                .split("-");
            } else {
              tempDate = moment(item?.start_date, "YYYY-MM-DD")
                .format("YYYY-MMMM-DD")
                .split("-");
            }
            const date = {
              year: tempDate[0],
              month: tempDate[1],
              day: tempDate[2],
            };

            tempYears.add(tempDate[0]);

            return { ...item, date };
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
  }, []);
  useEffect(() => {
    getArtistExhibition();
  }, [params]);
  return (
    <div id="artist3" className="tab-pane ">
      <div className="d-flex box-dir-reverse ">
        <div className="col-sm-7">
          <h5 className="custom-title text-dir">
            {t("artist_profile.introduction")}
          </h5>
          <p className="text-justify" style={{ fontSize: "18px" }}>
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

          {!isNil(years) &&
            [...years]?.map((year) => {
              return (
                <div className="row-timeline">
                  <div className="pull-dir">
                    <h5 className="persian-num year-timeline">{year}</h5>
                  </div>
                  {artistExhibition
                    ?.filter((item) => item.date.year === year)
                    .sort(
                      (a, b) =>
                        new Date(b?.start_date) - new Date(a?.start_date)
                    )
                    ?.map((exhibition) => {
                      return (
                        <div className="sec-timeline">
                          <h6 className="title-timeline text-dir">
                            {i18n.language === "fa-IR"
                              ? exhibition?.translations?.fa?.name
                              : exhibition?.translations?.en?.name}
                          </h6>
                          {exhibition?.has_profile && (
                            <button className="btn-readmore">
                              <Link
                                to={{
                                  pathname: "/site/exhibitionDetail",
                                }}
                                state={{
                                  id: exhibition?.id,
                                }}
                                replace={false}
                              >
                                {t("artist_profile.veiw")}
                              </Link>
                            </button>
                          )}
                          <div className="text-dir">
                            {i18n.language === "fa-IR"
                              ? exhibition?.gallery?.translations?.fa?.title
                              : exhibition?.gallery?.translations?.en?.title}
                          </div>
                          <div className="date-timeline text-dir">
                            <span className="persian-num">
                              {exhibition.date.day}
                            </span>
                            <span className="mx-2 h4">
                              {exhibition.date.month}
                            </span>
                            <span className="persian-num">
                              {exhibition.date.year}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default BiographyTab;
