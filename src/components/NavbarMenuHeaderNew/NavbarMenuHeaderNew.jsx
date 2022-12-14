import React, { useEffect, useState } from "react";
import hyxvpfinm840 from "../../assets/img/mainpage/hyxvpfinm840.jpg";
import vitrin from "../../assets/img/mainpage/menu-vitrin.jpg";
import bohmer from "../../assets/img/mainpage/rene-bohmer-YeUVDKZWSZ4-unsplash@3x.jpg";
import gift from "../../assets/img/gift.svg";
import { t } from "i18next";
import { Tabs, Radio, Space, message, Drawer, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import { isLogin } from "../../utils/utils";
import {
  PRODUCTS_CATEGORIES,
  CORE_CATEGORIS,
  EXHIBITION_LIST,
} from "../../utils";
import queryString from "query-string";
import apiServices from "../../utils/api.services";
import { useTranslation } from "react-i18next";
import { GetLanguage } from "../../utils/utils";
import { isNil } from "lodash";
import moment from "moment-jalaali";
import { useGlobalContext } from "../../context/GlobalContext";
import Menu from "../Menu/Menu";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ExhibitionCarousel from "../ExhibitionComponents/ExhibitionsPage/ExhibitionCarousel";
import ExhibitionMenuCarousel from "./ExhibitionMenuCarousel";
const { TabPane } = Tabs;
export default function NavbarMenuHeader(props) {
  const { visible, onClose } = useGlobalContext();
  let navigate = useNavigate();
  const Language = GetLanguage();
  const { t, i18n } = useTranslation();
  const [exhibitionList, setExhibitionList] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [categorieParams, setCategorieParams] = useState({
    page: 1,
  });

  //filters state
  const [categories, setCategories] = useState();
  const getVirtualExhibitions = () => {
    apiServices
      .get(EXHIBITION_LIST, queryString.stringify({ type: "virtual" }))
      .then((res) => {
        if (res.data) {
          setExhibitionList(res.data.data.results);
        }
      })
      .catch((err) => {
        console.log("err", err);
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

  const getListCategory = () => {
    apiServices
      .get(CORE_CATEGORIS, "")
      .then((res) => {
        setCategorys(
          res.data.data.results.map((item) => {
            if (Language === "fa-IR") {
              return { label: item?.translations?.fa?.title, value: item?.id };
            } else {
              return { label: item?.translations?.en?.title, value: item?.id };
            }
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getListCategory();
    getVirtualExhibitions();
  }, []);

  useEffect(() => {
    getProductCategories();
  }, [categorieParams]);

  // FOR DROP DOWN MENU
  const [showMenu, setShowMenu] = useState({
    active: null,
    status: false,
  });
  const showNavbar = (id) => {
    setShowMenu({ ...showMenu, status: true, active: id });
  };
  const hideNavbar = () => {
    setShowMenu({ ...showMenu, status: false, active: null });
  };

  const activeClass = (active) => {
    if (active == showMenu.active) {
      return "show";
    }
  };
  const activeNavItemClass = (active) => {
    if (active == showMenu.active) {
      return "active_item";
    }
  };
  const megaMenuContents = [
    {
      title: `${t("nav-menu-artworks")}`,
      menu: (
        <div
          className={`dropdown-menu mega-dropdown-menu vertical-tabs bg-dropdown-menu ${
            showMenu.status ? activeClass(0) : ""
          }`}
        >
          <div className="row ">
            <div className="col-sm-3">
              <ul className="nav nav-tabs">
                <li className="active">
                  <a data-toggle="tab" href="#nav1">
                    {t("nav-submenu.artworks.artField.title")}
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#nav2">
                    {t("nav-submenu.artworks.subject.title")}
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#nav3">
                    {t("nav-submenu.artworks.budget.title")}
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#nav4">
                    {t("nav-submenu.artworks.discounts.title")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-9">
              <div className="tab-content">
                <div id="nav1" className="tab-pane fade in active">
                  <div className="row">
                    <div className="col-md-7 col-sm-6">
                      <ul className="vertical-nav">
                        <li onClick={() => navigate("/site/artworks")}>
                          <a>{t("nav-submenu.artworks.artField.all")}</a>
                        </li>
                        {categories?.results?.map((item, index) => (
                          <li
                            onClick={() =>
                              navigate(`/site/artworks/?category_id=${item.id}`)
                            }
                          >
                            <a>
                              {i18n.language === "fa-IR"
                                ? item.translations?.fa?.title
                                : item.translations?.en?.title}{" "}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-5 col-sm-6">
                      <img
                        src={hyxvpfinm840}
                        width="840"
                        height="840"
                        alt=""
                        className="img-responsive w-100"
                      />
                      <button
                        type="button"
                        className="btn-gift"
                        onClick={() => navigate("/site/promotion/:id")}
                      >
                        <img
                          src={gift}
                          width="22"
                          height="22"
                          alt=""
                          className=""
                        />
                        <span>
                          {t("nav-submenu.artworks.artField.art-for-gift")}
                        </span>
                        <i className="glyphicon glyphicon-chevron-left"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div id="nav2" className="tab-pane fade">
                  <h3>Menu 1</h3>
                  <p>Some content in menu 1.</p>
                </div>
                <div id="nav3" className="tab-pane fade">
                  <h3>Menu 2</h3>
                  <p>Some content in menu 2.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: `${t("nav-menu-showroom")}`,
      menu: (
        <div
          className={`dropdown-menu mega-dropdown-menu vertical-tabs bg-dropdown-menu ${
            showMenu.status ? activeClass(1) : ""
          }`}
        >
          <div className="row ">
            <div className="col-sm-3">
              <ul className="nav nav-tabs">
                <li className="active">
                  <a data-toggle="tab" href="#nav11">
                    {t("category")}
                  </a>
                </li>
                <li onClick={() => navigate("/site/all-galleris-list")}>
                  <a data-toggle="tab">{t("galleries")}</a>
                </li>
                <li>
                  <Link to="/site/exhibitions" data-toggle="tab">
                    {t("events")}
                  </Link>
                </li>
                <li>
                  <Link to="/site/all-promotions" data-toggle="tab">
                    {t("promotions")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-9">
              <div className="tab-content">
                <div id="nav11" className="tab-pane fade in active">
                  <div className="row">
                    <div className="col-md-7 col-sm-6">
                      <ul className="vertical-nav">
                        <li>
                          <Link to="/site/artists">
                            {t("nav-submenu.showroom.category.all")}
                          </Link>
                        </li>

                        {categorys?.length &&
                          categorys?.map((item) => {
                            return (
                              <li>
                                <Link
                                  to={`/site/artists/?artist_type_id=${item?.value}`}
                                >
                                  {item?.label}
                                </Link>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                    <div className="col-md-5 col-sm-6">
                      <img
                        src={vitrin}
                        width="831"
                        height="963"
                        alt=""
                        className="img-responsive"
                      />
                    </div>
                  </div>
                </div>
                <div id="nav12" className="tab-pane fade">
                  <h3>Menu 1</h3>
                  <p>Some content in menu 1.</p>
                </div>
                <div id="nav13" className="tab-pane fade">
                  <h3>Menu 2</h3>
                  <p>Some content in menu 2.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: `${t("nav-menu-online-exhibition")}`,
      menu: (
        <div
          className={`dropdown-menu mega-dropdown-menu bg-dropdown-menu ${
            showMenu.status ? activeClass(2) : ""
          }`}
        >
          <div id="menu-exhibition">
            <ExhibitionMenuCarousel exhibitionsList={exhibitionList} />
          </div>
        </div>
      ),
    },
    {
      title: `${t("nav-menu-blog")}`,
      menu: ``,
    },
    {
      title: isLogin() ? (
        <Link to="/site/advisory" className="sales">
          {t("nav-menu-sales-advisor")}
        </Link>
      ) : (
        <Link
          to="/"
          className="sales"
          onClick={() => {
            message.error("???????? ?????????? ???????? ???????? ???????????? ????????");
          }}
        >
          {t("nav-menu-sales-advisor")}
        </Link>
      ),
      menu: ``,
    },
  ];

  const [drop, setDrop] = useState(false);

  return (
    <>
      <nav className="navbar w-100">
        <div className=" collapse navbar-collapse  px-0 w-100" id="menu">
          <button className="nav-close" type="button"></button>
          <ul className="nav_new nav-header-menu box-dir-reverse justify-content-center dir">
            {megaMenuContents.map((item, k) => {
              return (
                <li
                  onMouseEnter={() => showNavbar(k)}
                  onMouseLeave={hideNavbar}
                >
                  <a
                    className={`mega-dropdown ${activeNavItemClass(k)}`}
                    href="#"
                    // className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    {item.title}
                  </a>
                  {item.menu}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <Drawer
        className="drawer-menu"
        placement="right"
        onClose={onClose}
        visible={visible}
        closable={false}
      >
        <ul className="main-ul">
          <li onClick={onClose}>
            <Link to={"/site/artworks"}>{t("nav-menu-artworks")}</Link>
          </li>
          <li>
            <Link onClick={() => setDrop(!drop)} to={"/"}>
              <DownOutlined /> {t("nav-menu-showroom")}
            </Link>

            <ul className={"child-ul" + " " + (drop ? "show-sub" : "hide-sub")}>
              {categorys?.length &&
                categorys?.map((item) => {
                  return (
                    <li>
                      <Link to={`/site/artists/?artist_type_id=${item?.value}`}>
                        {item?.label}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </li>

          <li onClick={onClose}>
            <Link to={"/"}>{t("nav-menu-online-exhibition")}</Link>
          </li>
          <li onClick={onClose}>
            <Link to={"/"}>{t("nav-menu-blog")}</Link>
          </li>
          <li onClick={onClose}>
            {isLogin() ? (
              <Link to="/site/advisory" className="sales">
                {t("nav-menu-sales-advisor")}
              </Link>
            ) : (
              <Link
                to="/"
                className="sales"
                onClick={() => {
                  message.error("???????? ?????????? ???????? ???????? ???????????? ????????");
                }}
              >
                {t("nav-menu-sales-advisor")}
              </Link>
            )}
          </li>
        </ul>
      </Drawer>
    </>
  );
}
