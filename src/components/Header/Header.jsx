import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/img/search.svg";
import filterIcon from "../../assets/img/Filter.svg";
import logo from "../../assets/img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ModalSetDimention from "./ModalSetDimention";
import { isLogin } from "../../utils/utils";
import { connect, useSelector } from "react-redux";
import { setFilters } from "../../redux/reducers/Filters/filters.action";
import { Row } from "antd";
import { PRODUCTS_CATEGORIES, PRODUCTS_SIZES } from "../../utils";
import queryString from "query-string";
import apiServices from "../../utils/api.services";

function Header(props) {
  console.log(
    "🚀 ~ file: Header.jsx ~ line 17 ~ Header ~ props",
    props.filters.filters_reducer
  );
  const { t, i18n } = useTranslation();
  let navigate = useNavigate();

  const [toman_price_range_min, setToman_price_range_min] = useState();
  const [toman_price_range_max, setToman_price_range_max] = useState();
  const [dollar_price_range_min, setDollar_price_range_min] = useState();
  const [dollar_price_range_max, setDollar_price_range_max] = useState();
  const [visibleSetDimentionModal, setVisibleSetDimentionModal] =
    useState(false);
  const [categorieParams, setCategorieParams] = useState({
    page: 1,
  });
  const [params, setParams] = useState({
    status: "active",
    page: 1,
  });
  //   console.log("🚀 ~ file: Header.jsx ~ line 30 ~ Header ~ params", params);

  //filters state
  const [categories, setCategories] = useState();
  const [categoriesId, setCategoriesId] = useState([]);

  const [sizes, setSizes] = useState();
  const [sizesId, setSizesId] = useState([]);

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

  const getFilterParams = () => {
    let sizesIdTotal = [];
    let categoriesIdTotal = [];
    for (var key in sizesId) {
      if (sizesId[key] === true) {
        sizesIdTotal.push(parseInt(key));
      }
    }
    for (var key in categoriesId) {
      if (categoriesId[key] === true) {
        categoriesIdTotal.push(parseInt(key));
      }
    }
    props.setFilters({
      ...props.state,
      page: 1,
      status: "active",
      size_id: sizesIdTotal,
      category_id: categoriesIdTotal,
      toman_price_range_min:
        i18n.language === "fa-IR"
          ? toman_price_range_min
            ? toman_price_range_min
            : 0
          : dollar_price_range_min
          ? dollar_price_range_min
          : 0,
      toman_price_range_max:
        i18n.language === "fa-IR"
          ? toman_price_range_max
            ? toman_price_range_max
            : 0
          : dollar_price_range_max
          ? dollar_price_range_max
          : 0,
    });
  };

  const getProductCategories = () => {
    apiServices
      .get(PRODUCTS_CATEGORIES, queryString.stringify(categorieParams))
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
  //   useEffect(() => {
  //     props.setFilters({
  //       ...props.state,
  //       params,
  //     });
  //   }, [params?.length]);
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
            />
            <button className="btn-searchicon" type="submit">
              <img src={searchIcon} width="24" height="24" alt="جستجو" />
            </button>
            <button
              className="btn-searchfilter hidden-sm"
              type="button"
              data-toggle="collapse"
              data-target="#top-filter"
              onClick={() => navigate("/site/artworks")}
            >
              <img src={filterIcon} height="15" width="16" alt="فیلتر" />
              <span>{t("filter-header.title")}</span>
            </button>
          </div>
          <div className="autocomplete">
            <ul className="predict">
              <li>
                <a href="#">پرویز تناولی</a>
              </li>
              <li>
                <a href="#">پرویز اعتصامی</a>
              </li>
              <li>
                <a href="#">پرتو فرومنش</a>
              </li>
              <li>
                <a href="#">پروین اعتصامی</a>
              </li>
              <li>
                <a href="#">پرتره</a>
              </li>
              <li>
                <a href="#">گالری هان - نمایشگاه عکاسی پرندگان</a>
              </li>
              <li>
                <a href="#">گالری آرتیبیشن - نمایشگاه نقاشی آبرنگ پرتره</a>
              </li>
            </ul>
            <div className="predict-cat">
              <span className="graycolor">فیلتر نتایج بر اساس:</span>
              <ul>
                <li>
                  <a href="#">هنرمند</a>
                </li>
                <li>
                  <a href="#">نام اثر</a>
                </li>
                <li>
                  <a href="#">نمایشگاه</a>
                </li>
                <li>
                  <a href="#">گالری</a>
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
                        defaultValue="0"
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
                        defaultValue="0"
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
                    <input type="checkbox" checked />
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
                  {t("filter-header.color.title")}
                </h3>
                <div className="filter-menu-body ">
                  <table className="table  color ">
                    <tbody>
                      <tr>
                        <td id="color201">#9a2aba</td>
                        <td id="color202">#4a24b7</td>
                        <td id="color203">#0460ff</td>
                        <td id="color204">#00a2d8</td>
                      </tr>
                      <tr>
                        <td id="color205">#ffaa00</td>
                        <td id="color206">#fd6b00</td>
                        <td id="color207">#fe4310</td>
                        <td id="color208">#bb2a61</td>
                      </tr>
                      <tr>
                        <td id="color209">#68a53c</td>
                        <td id="color210">#dae229</td>
                        <td id="color211">#e8e337</td>
                        <td id="color212">#e9b61d</td>
                      </tr>
                    </tbody>
                  </table>
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
                      <span className="persian-num">60</span>
                      <span>{t("filter-header.size.dimention.to")}</span>
                      <span className="persian-num">90</span>
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
                      <span className="persian-num">60</span>
                      <span>{t("filter-header.size.dimention.to")}</span>
                      <span className="persian-num">90</span>
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
                      <span className="persian-num">60</span>
                      <span>{t("filter-header.size.dimention.to")}</span>
                      <span className="persian-num">90</span>
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
                onClick={getFilterParams}
              >
                اعمال فیلتر
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
