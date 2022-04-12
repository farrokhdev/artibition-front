import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/img/search.svg";
import filterIcon from "../../assets/img/Filter.svg";
import logo from "../../assets/img/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ModalSetDimention from "./ModalSetDimention";
import { isLogin } from "../../utils/utils";
import { connect } from "react-redux";
import { setFilters } from "../../redux/reducers/Filters/filters.action";
import { Row } from "antd";
import { PRODUCTS_CATEGORIES, PRODUCTS_SIZES, SEARCH } from "../../utils";
import queryString from "query-string";
import apiServices from "../../utils/api.services";

function Header() {
  const { t, i18n } = useTranslation();
  let navigate = useNavigate();
  let location = useLocation();

  const [toman_price_range_min, setToman_price_range_min] = useState();
  const [toman_price_range_max, setToman_price_range_max] = useState();
  const [dollar_price_range_min, setDollar_price_range_min] = useState();
  const [dollar_price_range_max, setDollar_price_range_max] = useState();
  const [discount, setDiscount] = useState(false);
  const [filters, setFilters] = useState();
  const [visibleResults, setVisibleResults] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  // FILTER SIZES
  const [width_min, setWidth_min] = useState();
  const [width_max, setWidth_max] = useState();
  const [height_min, setHeight_min] = useState();
  const [height_max, setHeight_max] = useState();
  const [length_min, setLength_min] = useState();
  const [length_max, setLength_max] = useState();

  // FILTER SIZES END

  const [visibleSetDimentionModal, setVisibleSetDimentionModal] =
    useState(false);
  const [categoriesParams, setCategoriesParams] = useState({
    page: 1,
  });
  const [params, setParams] = useState({
    brief: true,
    object: "",
    search: "",
  });

  const [toggleRoute, setToggleRoute] = useState(false);
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
    setFilters((state) => ({ ...state, category_id: categoriesIdTotal }));
    return null;
  };
  const [sizes, setSizes] = useState();

  const [sizesId, setSizesId] = useState([]);
  const filterSizes = () => {
    let sizesIdTotal = [];
    for (var key in sizesId) {
      if (sizesId[key] === true) {
        sizesIdTotal.push(parseInt(key));
      }
    }
    return setFilters((state) => ({ ...state, size_id: sizesIdTotal }));
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const handleShowModalsetDimention = () => {
    setTimeout(() => {
      setVisibleSetDimentionModal(true);
    }, 300);
  };

  const getFilterParams = (e) => {
    e.preventDefault();
    filterCategories();
    filterSizes();
    setFilters((state) => ({
      ...state,
      page: 1,
      status: "active",
      discount: discount,
      toman_price_range_min:
        i18n.language === "fa-IR"
          ? toman_price_range_min
            ? toman_price_range_min
            : ""
          : dollar_price_range_min
          ? dollar_price_range_min
          : "",
      toman_price_range_max:
        i18n.language === "fa-IR"
          ? toman_price_range_max
            ? toman_price_range_max
            : ""
          : dollar_price_range_max
          ? dollar_price_range_max
          : "",
    }));

    setToggleRoute(true);
  };
  const getProductCategories = () => {
    apiServices
      .get(PRODUCTS_CATEGORIES, queryString.stringify(categoriesParams))
      .then((res) => {
        if (res.data) {
          setCategories(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const getProductSizes = () => {
    apiServices
      .get(PRODUCTS_SIZES)
      .then((res) => {
        if (res.data) {
          setSizes(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getProductCategories();
    getProductSizes();
  }, []);

  console.log(sizes?.results);

  useEffect(() => {
    if (params.search.length >= 3) {
      setVisibleResults(true);
      apiServices
        .get(SEARCH, queryString.stringify(params))
        .then((res) => {
          if (res.data) {
            setSearchResult(res.data.data);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, [params]);

  useEffect(() => {
    if (toggleRoute && location.pathname !== "/site/artworks/") {
      navigate(
        `/site/artworks/?${queryString.stringify(filters, {
          arrayFormat: "comma",
          skipNull: true,
          skipEmptyString: true,
        })}`
      );
    } else {
      if (toggleRoute) {
        navigate(
          `/site/artworks/?${queryString.stringify(filters, {
            arrayFormat: "comma",
            skipNull: true,
            skipEmptyString: true,
          })}`,
          { replace: true }
        );
        window.location.reload();
      }
    }
  }, [toggleRoute]);

  const strToLink = (data, id) => {
    switch (data) {
      case "product":
        return `/site/artworks-detail/?id=${id}`;
      case "collection":
        return "";
      case "gallery":
        return `/site/gallery-introduction/?id=${id}`;
      case "album":
        return "";

      case "artist":
        return `/site/artist-profile/?id=${id}`;
      default:
        return "";
    }
  };

  // FILTER SIZE PROPS
  const sizeFilterProps = {
    width_min,
    width_max,
    height_min,
    height_max,
    length_min,
    length_max,
    setWidth_min,
    setWidth_max,
    setHeight_min,
    setHeight_max,
    setLength_min,
    setLength_max,
  };
  // FILTER SIZE PROPS

  return (
    <div className="default-header ">
      <div className="row content-header-site">
        <div className="col-md-4 col-sm-3 col-xs-6">
          <div className="d-flex artibition-logo">
            <Link to="/">
              <img src={logo} alt="Artibition-logo" />
            </Link>
          </div>
        </div>
        <div className="col-md-4 col-sm-5 col-lg-5 hidden-xs">
          <div className="search-container dropdown">
            <input
              type="text"
              placeholder={t("filter-header.placeholder-input-search")}
              name="search"
              autocomplete="off"
              className="mainsearch"
              onChange={(t) =>
                setParams((state) => ({ ...state, search: t.target.value }))
              }
            />
            <button className="btn-searchicon" type="submit">
              <img src={searchIcon} width="24" height="24" alt="جستجو" />
            </button>
            <button
              className="btn-searchfilter hidden-sm"
              type="button"
              data-toggle="collapse"
              data-target="#top-filter"
            >
              <img src={filterIcon} height="15" width="16" alt="فیلتر" />
              <span>{t("filter-header.title")}</span>
            </button>
          </div>
          <div
            className="autocomplete"
            style={visibleResults ? { display: "unset" } : { display: "none" }}
          >
            <ul className="predict">
              {searchResult.map((item, key) => (
                <li key={key}>
                  <a href={strToLink(item.type_result, item.id)}>
                    {i18n.language === "fa-IR"
                      ? item.title[0].language_code === "fa"
                        ? item.title[0].title
                        : item.title[1].title
                      : item.title[0].language_code === "en"
                      ? item.title[0].title
                      : item.title[1].title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="predict-cat">
              <span className="graycolor">فیلتر نتایج بر اساس:</span>
              <ul>
                <li>
                  <a
                    onClick={() =>
                      setParams((state) => ({ ...state, object: "artist" }))
                    }
                  >
                    هنرمند
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      setParams((state) => ({ ...state, object: "product" }))
                    }
                  >
                    نام اثر
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      setParams((state) => ({ ...state, object: "exhibition" }))
                    }
                  >
                    نمایشگاه
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      setParams((state) => ({ ...state, object: "gallery" }))
                    }
                  >
                    گالری
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      setParams((state) => ({ ...state, object: "" }))
                    }
                  >
                    حذف فیلتر
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="collapse filter-dropdown hidden-sm bg-filter-header"
          id="top-filter"
        >
          <div className="box-dir-reverse container">
            <Row>
              <div className="col-md-2 ">
                <h3 className="filter-menu-title text-dir">
                  {t("filter-header.category.title")}
                </h3>
                <div className="filter-menu-body">
                  <label className="lable-checkbox text-dir">
                    <input type="checkbox" checked value="" />
                    <span>{t("filter-header.category.all")}</span>
                    <span className="checkmark"></span>
                  </label>
                  {categories?.results?.map((item, index) => (
                    <label className="lable-checkbox text-dir">
                      <input
                        id="category_id"
                        name={item.id}
                        type="checkbox"
                        value={item.id}
                        onChange={(e) => {
                          setCategoriesId({
                            ...categoriesId,
                            [e.target.name]: e.target.checked,
                          });
                          // filterCategories();
                        }}
                        // onClick={filterCategories}
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
              </div>
              <div className="col-md-2 ">
                <h3 className="filter-menu-title text-dir">
                  {t("filter-header.price.title")}
                </h3>
                <div className="filter-menu-body">
                  <div className="rangeslider">
                    <div id="slider" dir="rtl"></div>
                  </div>
                  <div className="row row-inputs">
                    <div className="col-xs-12 text-dir">
                      <label>{t("filter-header.price.min")}</label>
                      <input
                        type="text"
                        className="value persian-num"
                        data-index="0"
                        onChange={(e) =>
                          i18n.language === "fa-IR"
                            ? setToman_price_range_min(e.target.value)
                            : setDollar_price_range_min(e.target.value)
                        }
                      />
                    </div>
                    <div className="col-xs-12 mrgt16 text-dir">
                      <label>{t("filter-header.price.max")}</label>
                      <input
                        type="text"
                        className="value  persian-num"
                        data-index="1"
                        onChange={(e) =>
                          i18n.language === "fa-IR"
                            ? setToman_price_range_max(e.target.value)
                            : setDollar_price_range_max(e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mx-5">
                <h3 className="filter-menu-title text-dir">
                  {t("filter-header.discount.title")}
                </h3>
                <div className="filter-menu-body">
                  <label className="switch pull-dir">
                    <input
                      type="checkbox"
                      defaultValue={discount}
                      onChange={() => setDiscount(!discount)}
                    />
                    <span className="switchbtn round"></span>
                    <span className="label-switchbtn">
                      {t("filter-header.discount.text-switch")}
                    </span>
                  </label>
                  <div className="clearfix"></div>
                  <div className="md-mrgt30">
                    <label className="lable-checkbox text-dir">
                      <input type="checkbox" value="" />
                      <span>{t("filter-header.discount.more-than-20")}</span>
                      <span className="checkmark"></span>
                    </label>
                    <label className="lable-checkbox text-dir">
                      <input type="checkbox" value="" />
                      <span>{t("filter-header.discount.more-than-30")}</span>
                      <span className="checkmark"></span>
                    </label>
                    <label className="lable-checkbox text-dir">
                      <input type="checkbox" value="" />
                      <span>{t("filter-header.discount.more-than-50")}</span>
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-2 ">
                <h3 className="filter-menu-title text-dir">
                  {t("filter-header.size.title")}
                </h3>
                <div className="filter-menu-body">
                  {sizes?.results?.map((item, index) => (
                    <label className="lable-checkbox text-dir">
                      <input
                        type="checkbox"
                        name={item.id}
                        value={item.id}
                        onChange={(e) =>
                          setSizesId({
                            ...sizesId,
                            [e.target.name]: e.target.checked,
                          })
                        }
                      />
                      <span>
                        {i18n.language === "fa-IR"
                          ? item.translations?.fa?.title
                          : item.translations?.en?.title}
                      </span>
                      <span className="checkmark"></span>
                    </label>
                  ))}
                  <div className="add-dimention text-dir">
                    <div className="add-dimention-row">
                      <div className="graycolor">
                        {t("filter-header.size.dimention.width")}
                        <span
                          onClick={handleShowModalsetDimention}
                          data-toggle="modal"
                          data-target="#select-dimention"
                          className="edit-dimention"
                        ></span>
                      </div>
                      <span className="persian-num">
                        {width_min ? width_min : 60}
                      </span>
                      <span>{t("filter-header.size.dimention.to")}</span>
                      <span className="persian-num">
                        {width_max ? width_max : 90}
                      </span>
                      <span>{t("filter-header.size.dimention.unit")}</span>
                    </div>
                    <div className="add-dimention-row">
                      <div className="graycolor">
                        {t("filter-header.size.dimention.length")}
                        <span
                          onClick={handleShowModalsetDimention}
                          data-toggle="modal"
                          data-target="#select-dimention"
                          className="edit-dimention"
                        ></span>
                      </div>
                      <span className="persian-num">
                        {length_min ? length_min : 60}
                      </span>
                      <span>{t("filter-header.size.dimention.to")}</span>
                      <span className="persian-num">
                        {length_max ? length_max : 90}
                      </span>
                      <span>{t("filter-header.size.dimention.unit")}</span>
                    </div>
                    <div className="add-dimention-row">
                      <div className="graycolor">
                        {t("filter-header.size.dimention.height")}
                        <span
                          onClick={handleShowModalsetDimention}
                          data-toggle="modal"
                          data-target="#select-dimention"
                          className="edit-dimention"
                        ></span>
                      </div>
                      <span className="persian-num">
                        {height_min ? height_min : 60}
                      </span>
                      <span>{t("filter-header.size.dimention.to")}</span>
                      <span className="persian-num">
                        {height_max ? height_max : 90}
                      </span>
                      <span>{t("filter-header.size.dimention.unit")}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="clearfix"></div>
              <div className="col-md-4 col-md-offset-4"></div>
            </Row>
            <Row>
              <button
                type="button"
                className="btn-black btn-doFilter col-3 mx-auto"
                onClick={(e) => getFilterParams(e)}
                data-toggle="collapse"
                data-target="#top-filter"
              >
                {t("filter-header.filter-btn")}
              </button>
            </Row>
          </div>
        </div>
        <div className="col ">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#menu"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div className="head-leftbtn d-flex content-box-action-header hidden-xs">
            {isLogin() ? (
              <Link to={"/panel/profile"}>
                <button type="button" className="btn-login pull-left mx-2">
                  {t("panel")}
                </button>
              </Link>
            ) : (
              <Link to={"/auth/login"}>
                <button type="button" className="btn-login pull-left mx-2">
                  {t("redirect-login-header")}
                </button>
              </Link>
            )}
            <button
              onClick={() =>
                changeLanguage(i18n.language !== "fa-IR" ? "fa-IR" : "en-US")
              }
              type="button"
              className="btn-changelang pull-left"
            >
              {t("title_lang-header")}
            </button>
          </div>
        </div>
      </div>

      <ModalSetDimention
        visibleSetDimentionModal={visibleSetDimentionModal}
        setVisibleSetDimentionModal={setVisibleSetDimentionModal}
        {...sizeFilterProps}
        setFilters={setFilters}
        filterSizes={filterSizes}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilters: (data) => dispatch(setFilters(data)),
  };
};

const mapStateToProps = (store) => {
  return {
    filters: store.filtersReducer,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
