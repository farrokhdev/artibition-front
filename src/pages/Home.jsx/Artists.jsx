import React, { useEffect, useState } from "react";
import mainpage5 from "../../assets/img/mainpage/5.jpg";
import mainpage6 from "../../assets/img/mainpage/6.jpg";
import mainpage7 from "../../assets/img/mainpage/7.jpg";
import mainpage8 from "../../assets/img/mainpage/8.jpg";
import mainpage9 from "../../assets/img/mainpage/9.jpg";
import mainpage10 from "../../assets/img/mainpage/10.jpg";
import mainpage11 from "../../assets/img/mainpage/11.jpg";
import mainpage12 from "../../assets/img/mainpage/12.jpg";
import Aydin_Aghdashloo from "../../assets/img/Aydin_Aghdashloo_04@3x.jpg";
import { t } from "i18next";
import { Link } from "react-router-dom";
import apiServices from "../../utils/api.services";
import { ARTISTS } from "../../utils";
import QueryString from "qs";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

function Artists(props) {
  const { t, i18n } = useTranslation();
  const [artists, setArtists] = useState();
  const [params, setParams] = useState({
    page: 1,
  });
  const getArtists = () => {
    apiServices
      .get(ARTISTS, QueryString.stringify(params))
      .then((res) => {
        if (res.data) {
          setArtists(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  console.log("store", props);
  useEffect(() => {
    getArtists();
  }, [params]);
  return (
    <div className="artists">
      <div className="d-block d-lg-flex flex-row-reverse">
        {/* <h5 className="artists-title visible-xs">هنرمندان آرتیبشن</h5> */}
        {/* <h5 className="artists-title">هنرمندان آرتیبشن</h5> */}
        <div className="col col-lg-8">
          <div style={{ overflowY: "hidden" }} className="d-flex">
            {/* <div className="rowdesign "> */}
            {console.log("artists", artists)}
            {artists?.results?.map((item, index) => (
              <div className="col col-sm-3 my-4">
                <Link to={`/site/artist-profile/?id=${item?.id}`} className="artist-latest">
                  <img
                    src={item.artworks_images[0]?.exact_url}
                    width="528"
                    height="528"
                    className="img-responsive"
                    alt="آرتیبیشن"
                  />
                  <div className="artists-overly">
                    <div className="artist-avatar">
                      <img
                        className="img-responsive"
                        src={item.bg_image}
                        height="192"
                        width="192"
                        alt={
                          i18n.language === "fa-IR"
                            ? item?.owner?.translations?.fa?.first_name +
                              " " +
                              item?.owner?.translations?.fa?.last_name
                            : item?.owner?.translations?.en?.first_name +
                              " " +
                              item?.owner?.translations?.en?.last_name
                        }
                      />
                    </div>
                    <h4 className="artists-name">
                      <span>
                        {i18n.language === "fa-IR"
                          ? item?.owner?.translations?.fa?.first_name +
                            " " +
                            item?.owner?.translations?.fa?.last_name
                          : item?.owner?.translations?.en?.first_name +
                            " " +
                            item?.owner?.translations?.en?.last_name}
                      </span>
                    </h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="col col-lg-4 ">
          {/* <h5 className="artists-title hidden-xs">هنرمندان آرتیبشن</h5> */}
          <h5 className="artists-title d-flex">
            {t("artibition-artists-home.title")}
          </h5>
          <p className="artists-body">
            {t("artibition-artists-home.text-info")}
          </p>
          <div className="artists-btngroup">
            <button className="btn btn-default">
              <Link to={"/site/artists"}>
                {t("artibition-artists-home.btn-text")}
              </Link>
            </button>
            <button className="btn btn-primary">
              <Link
                to={
                  props.auth?.is_logged_in
                    ? "/panel/registration-artists"
                    : "/auth/login"
                }
              >
                {t("artibition-artists-home.action-text")}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (store) => {
  return {
    auth: store.authReducer,
  };
};

export default connect(mapStateToProps)(Artists);
