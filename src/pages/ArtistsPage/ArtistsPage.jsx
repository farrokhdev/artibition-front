import React, { useEffect, useState } from "react";
import { t } from "i18next";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";

import filter_icon from "../../assets/img/Filter.svg";
import clear_icon from "../../assets/img/clear.svg";
import search_icon from "../../assets/img/search.svg";
import mainpage1_1 from "../../assets/img/mainpage/1-1.jpg";
import mainpage1_2 from "../../assets/img/mainpage/1-2.jpg";
import mainpage1_3 from "../../assets/img/mainpage/1-3.jpg";
import artist3 from "../../assets/img/artist-3.jpg";
import blue_badge_icon from "../../assets/img/blue_badge.svg";
import gold_badge_icon from "../../assets/img/gold_badge.svg";
import { Pagination } from "antd";
import {
  ARTIST_BY_PRODUCT,
  ARTIST_PRODUCTS,
  PRODUCTS_CATEGORIES,
} from "../../utils";
import apiServices from "../../utils/api.services";
import queryString from "query-string";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { setProfile } from "../../redux/reducers/auth/auth.actions";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { follow } from "../../utils/utils";

function ArtistsPage(props) {
  const { t, i18n } = useTranslation();
  let [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();

  const [search, setSearch] = useState();
  const [artistList, setArtistList] = useState();
  const [selectedOption, setSelectedOption] = useState("popularity");

  const [artistIsOfficial, setArtistIsOfficial] = useState({
    is_official: false,
  });

  const [params, setParams] = useState({
    status: "active",
    page: 1,
    category_id: "",
  });

  //filters state
  const [categories, setCategories] = useState();
  const [categoriesId, setCategoriesId] = useState([]);
  let categoriesIdTotal = [];
  const filterCategories = () => {
    for (var key in categoriesId) {
      if (categoriesId[key] === true) {
        categoriesIdTotal.push(parseInt(key));
      }
    }
    setParams((state) => ({ ...state, category_id: categoriesIdTotal }));
    return null;
  };

  const onChange = (pageNumber) => {
    setParams((state) => ({ ...state, page: pageNumber }));
  };

  const getArtistList = () => {
    apiServices
      .get(
        ARTIST_BY_PRODUCT,
        queryString.stringify(params, {
          arrayFormat: "comma",
          skipNull: true,
          skipEmptyString: true,
        })
      )
      .then((res) => {
        if (res.data) {
          setArtistList(res.data.data.results);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getProductCategories = () => {
    apiServices
      .get(PRODUCTS_CATEGORIES, "")
      .then((res) => {
        if (res.data) {
          setCategories(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const callBack = () => {
    getArtistList();
  };

  useEffect(() => {
    if (searchParams.get("artist_type_id")) {
      setParams({
        ...params,
        artist_type_id: searchParams.get("artist_type_id"),
      });
    } else {
      setParams({
        ...params,
        artist_type_id: "",
      });
    }
  }, [searchParams]);

  useEffect(() => {
    getArtistList();
    getProductCategories();
  }, [params]);

  // useEffect(() => {
  //   setParams((state) => ({
  //     ...state,
  //     is_official: artistIsOfficial?.is_official,
  //   }));
  // }, [artistIsOfficial]);

  console.log("props", props);
  return (
    <>
      <div className="container mx-auto px-0 w-100 bg-white">
        <Header />
        <Menu />
        {console.log("artists", artistList)}

        <div className="banner">
          <div className="content-banner">
            <h2 className="content-title">
              {t("artworkList.box-banner.title")}
            </h2>
            <p className="txt-title">{t("artworkList.box-banner.text")}</p>
            <div className="nl-input">
              <input
                placeholder={t("artworkList.box-banner.placeholder")}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="button"
                className="btn-black"
                onClick={() =>
                  setParams((state) => ({ ...state, search: search }))
                }
              >
                {t("artworkList.box-banner.btn")}
              </button>
            </div>
          </div>
        </div>

        <div className="default-content">
          <div className="content-header">
            <div className="d-flex box-dir-reverse dir">
              <div className="col-sm-3 col-xs-6">
                <div type="button" className="filter-btn">
                  <div className="d-flex box-dir-reverse align-items-center">
                    <img src={filter_icon} width="16" height="15" alt="" />
                    <span className="mx-2">
                      {t("artworkList.filter.title")}
                    </span>
                    <button
                      className="btn clear-tag mx-3"
                      style={
                        Object.keys(params.category_id).length > 0
                          ? { display: "unset" }
                          : { display: "none" }
                      }
                      onClick={() => {
                        setParams({});
                        navigate(`/site/artists`);
                        window.location.reload();
                      }}
                    >
                      <div className="d-flex box-dir-reverse align-items-center">
                        <img
                          className="mx-2"
                          src={clear_icon}
                          width="10"
                          height="10"
                          alt=""
                        />
                        <span>{t("artworkList.filter.remove_all")}</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex pull-dir-rev">
                  <div className="form-group pull-left">
                    <select
                      className="form-control"
                      id="sel1"
                      onChange={(e) => {
                        setParams((state) => ({
                          ...state,
                          order: e.target.value,
                        }));
                        setSelectedOption(e.target.value);
                      }}
                      value={selectedOption}
                    >
                      <option className="text-dir" value="popularity">
                        {t("artworkList.filter.last_update")}
                      </option>
                      <option className="text-dir" value="price">
                        {t("artworkList.filter.sell")}
                      </option>
                      {/* <option className="text-dir">
                        {t("artworkList.filter.visite")}
                      </option> */}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <div className="d-flex box-dir-reverse dir">
              <div className="col-md-3  filter-side">
                <div className="panel-group" id="accordion">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title text-dir">
                        <a
                          data-toggle="collapse"
                          aria-expanded="true"
                          href="#collapse2"
                        >
                          {t("artists.filter.expert.title")}
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse2"
                      className="panel-collapse collapse show"
                    >
                      <div className="panel-body">
                        <div className="checkbox-row">
                          <label className="lable-checkbox text-dir">
                            <input type="checkbox" value="" />
                            <span>{t("artists.filter.expert.all")}</span>
                            <span className="checkmark"></span>
                          </label>
                          {categories?.results?.map((item, index) => (
                            <label className="lable-checkbox text-dir">
                              <input
                                id="category_id"
                                name={item.id}
                                type="checkbox"
                                value={item.id}
                                onClick={(e) => {
                                  setCategoriesId({
                                    ...categoriesId,
                                    [e.target.name]: e.target.checked,
                                  });
                                }}
                              />
                              <span>
                                {i18n.language === "fa-IR"
                                  ? item.translations?.fa?.title
                                  : item.translations?.en?.title}
                              </span>
                              <span className="checkmark"></span>
                            </label>
                          ))}
                        </div>
                        <div className="d-flex justify-custom">
                          <button
                            type="button"
                            className="btn btn-ok pull-dir"
                            onClick={filterCategories}
                          >
                            {t("artworkList.filter.size.submit")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title text-dir">
                        <a
                          data-toggle="collapse"
                          aria-expanded="true"
                          href="#collapse3"
                        >
                          {t("artists.filter.artist.title")}
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse3"
                      className="panel-collapse collapse show"
                    >
                      <div className="panel-body">
                        <div className="checkbox-row">
                          <label className="lable-checkbox text-dir">
                            <input type="checkbox" value="" />
                            <span>{t("artists.filter.artist.all")}</span>
                            <span className="checkmark"></span>
                          </label>
                          <label className="lable-checkbox text-dir">
                            <input
                              type="checkbox"
                              // value={false}
                              name="is_official"
                              // onClick={(e) => {
                              //   setArtistIsOfficial({
                              //     ...categoriesId,
                              //     [e.target.name]: e.target.checked,
                              //   });
                              // }}
                            />
                            <span>{t("artists.filter.artist.special")}</span>
                            <span className="checkmark"></span>
                            <img
                              src={gold_badge_icon}
                              width="22"
                              height="22"
                              alt=""
                              className="filter-badge"
                            />
                          </label>
                          <label className="lable-checkbox text-dir">
                            <input type="checkbox" value="" />
                            <span>{t("artists.filter.artist.verified")}</span>
                            <span className="checkmark"></span>
                            <img
                              src={blue_badge_icon}
                              width="22"
                              height="22"
                              alt=""
                              className="filter-badge"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-9 col-sm-12">
                <div className="artist-list">
                  <div className="row box-dir-reverse gap-3">
                    {artistList?.map((item, index) => (
                      <div className="col-sm-4 mb-4">
                        <Link
                          to={`/site/artist-profile/?id=${item?.id}`}
                          className="cols"
                        >
                          <div className="col-img">
                            <div className="collection-firstrow">
                              {/* <img src={mainpage1_1} className="img-responsive"/> */}
                              <img
                                src={
                                  item?.product &&
                                  item.product[0]?.product_base_info?.medias[0]
                                    ?.exact_url
                                }
                                style={{
                                  width: "280px",
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                                className="img-responsive clolection-image1"
                              />
                            </div>
                            <div className="d-flex collection-secondrow">
                              <div className="col-6  pad-l2 px-0">
                                <img
                                  src={
                                    // item?.product && item.product[1]?.exact_url
                                    item?.product &&
                                    item?.product[1]?.product_base_info
                                      ?.medias[0]?.exact_url
                                  }
                                  className="img-responsive"
                                  style={{
                                    height: "120px",
                                    width: "180px",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                  }}
                                />
                              </div>
                              <div className="col-6  pad-r2 px-0">
                                <img
                                  src={
                                    // item?.product && item.product[2]?.exact_url
                                    item?.product &&
                                    item?.product[2]?.product_base_info
                                      ?.medias[0]?.exact_url
                                  }
                                  width="280"
                                  height="280"
                                  className="img-responsive"
                                  style={{
                                    height: "120px",
                                    width: "180px",
                                    objectPosition: "center",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-body">
                            <div className="col-image pull-right">
                              {/* <Link to={`/site/artist-profile/?id=${item?.id}`}> */}
                              <img
                                src={item.bg_image?.exact_url}
                                width="280"
                                height="280"
                                alt=""
                                className="img-responsive"
                              />
                              <img
                                src={blue_badge_icon}
                                width="22"
                                height="22"
                                alt=""
                                className="img-badge"
                              />
                              {/* </Link> */}
                              {/* <img src={artist3} width="408" height="408" alt=""
                                                 className="img-responsive"/> */}
                            </div>
                            <h6 className="col-title">
                              <Link to={`/site/artist-profile/?id=${item?.id}`}>
                                <span className="col-name pull-dir">
                                  {i18n.language === "fa-IR"
                                    ? item?.owner?.translations?.fa
                                      ? item?.owner?.translations?.fa
                                          ?.first_name +
                                        " " +
                                        item?.owner?.translations?.fa?.last_name
                                      : ""
                                    : item?.owner?.translations?.en
                                    ? item?.owner?.translations?.en
                                        ?.first_name +
                                      " " +
                                      item?.owner?.translations?.en?.last_name
                                    : ""}
                                </span>
                              </Link>
                            </h6>
                            <br />
                            <button
                              type="button"
                              className={
                                "pull-dir btn-follow followed" +
                                (item?.likes ? "" : "followed")
                              }
                              onClick={() =>
                                follow({
                                  activity: "following",
                                  content: "artist",
                                  object_id: item?.id,
                                  action: item?.likes,
                                  callBack,
                                })
                              }
                            >
                              {item?.likes
                                ? t("artwork.following")
                                : t("artwork.follow")}
                            </button>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" row-pagination">
                  <Pagination
                    defaultPageSize={3}
                    defaultCurrent={artistList?.current_page_no}
                    onChange={onChange}
                    total={artistList?.count}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    setProfile: (data) => dispatch(setProfile(data)),
  };
};
const mapStateToProps = (store) => {
  return {
    auth: store.authReducer,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ArtistsPage);
