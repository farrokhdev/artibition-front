import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

import filter_icon from "../../assets/img/Filter.svg";
import clear_icon from "../../assets/img/clear.svg";
import search_icon from "../../assets/img/search.svg";
import jpaytrkase3 from "../../assets/img/artworks/jpaytrkase@3x.jpg";
import hnrpqkfiup3 from "../../assets/img/artworks/hnrpqkfiup@3x.jpg";
import nqliiocbif from "../../assets/img/artworks/nqliiocbif@3x.jpg";
import ucuurcufbm from "../../assets/img/artworks/ucuurcufbm@3x.jpg";
import gift_icon from "../../assets/img/gift.svg";
import artwork3 from "../../assets/img/artworks/3.jpg";
import rdbewaopdm3 from "../../assets/img/artworks/rdbewaopdm@3x.jpg";
import hezvtaokhv3 from "../../assets/img/artworks/hezvtaokhv@3x.jpg";
import ffhxzfmfyx3 from "../../assets/img/artworks/ffhxzfmfyx@3x.jpg";
import lhggrzlgoc3 from "../../assets/img/artworks/lhggrzlgoc@3x.jpg";
import hyxvpfinmx3 from "../../assets/img/artworks/hyxvpfinmx@3x.jpg";
import ayvglbkdfo3 from "../../assets/img/artworks/ayvglbkdfo@3x.jpg";
import gbazvsspbk3 from "../../assets/img/artworks/gbazvsspbk@3x.jpg";
import { message, Pagination } from "antd";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import queryString from "query-string";
import {
  ARTIST_PRODUCTS,
  DELETE_FOLLOW,
  GALLERY_FOLLOW,
  PRODUCTS_CATEGORIES,
  PRODUCTS_MATERIALS,
  PRODUCTS_SIZES,
  PRODUCTS_TECHNIQUES,
} from "../../utils";
import apiServices from "../../utils/api.services";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { follow } from "../../utils/utils";
import { connect } from "react-redux";
import {
  clearFilterStorage,
  setFilters,
} from "../../redux/reducers/Filters/filters.action";
import { numDiscriminant } from "../../utils/discriminant";


function ArtworksPage(props) {
  let location = useLocation();

  let [searchParams, setSearchParams] = useSearchParams();

  let navigate = useNavigate();
  const { t, i18n } = useTranslation();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  let category_id = [];
  let size_id = [];

  category_id = query
    .get("category_id")
    ?.split(",")
    ?.map(function (item) {
      return parseInt(item);
    });

  size_id = query
    .get("size_id")
    ?.split(",")
    ?.map(function (item) {
      return parseInt(item);
    });

  const [search, setSearch] = useState();
  const [materialSearch, setMaterialSearch] = useState();
  const [techniqueSearch, setTechniqueSearch] = useState();
  const [toman_price_range_min, setToman_price_range_min] = useState(
    query.get("toman_price_range_min")
  );
  const [toman_price_range_max, setToman_price_range_max] = useState(
    query.get("toman_price_range_max")
  );
  const [dollar_price_range_min, setDollar_price_range_min] = useState();
  const [dollar_price_range_max, setDollar_price_range_max] = useState();
  const [width_min, setWidth_min] = useState();
  const [width_max, setWidth_max] = useState();
  const [height_min, setHeight_min] = useState();
  const [height_max, setHeight_max] = useState();
  const [length_min, setLength_min] = useState();
  const [length_max, setLength_max] = useState();
  const [productList, setProductList] = useState();
  const [selectedOption, setSelectedOption] = useState("popularity");

  const [params, setParams] = useState({
    status: "active",
    order: selectedOption,
    page: 1,
    size_id: size_id,
    category_id: category_id,
    toman_price_range_min: toman_price_range_min,
    toman_price_range_max: toman_price_range_max,
    dollar_price_range_min: dollar_price_range_min,
    dollar_price_range_max: dollar_price_range_max,
  });

  const [categorieParams, setCategorieParams] = useState({
    page: 1,
  });
  const [materialParams, setMaterialParams] = useState({
    search: "",
  });
  const [techniqueParams, setTechniquesetParams] = useState({
    search: "",
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

  const [techniques, setTechniques] = useState();
  const [techniquesId, setTechniquesId] = useState([]);
  const filterTechniques = () => {
    let techniquesIdTotal = [];
    for (var key in techniquesId) {
      if (techniquesId[key] === true) {
        techniquesIdTotal.push(parseInt(key));
      }
    }
    return setParams((state) => ({
      ...state,
      technique_id: techniquesIdTotal,
    }));
  };

  const [materials, setMaterials] = useState();
  const [materialsId, setMaterialsId] = useState([]);
  const filterMaterials = () => {
    let materialsIdTotal = [];
    for (var key in materialsId) {
      if (materialsId[key] === true) {
        materialsIdTotal.push(parseInt(key));
      }
    }
    return setParams((state) => ({ ...state, material_id: materialsIdTotal }));
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
    return setParams((state) => ({ ...state, size_id: sizesIdTotal }));
  };

  const getProductList = () => {
    apiServices
      .get(
        ARTIST_PRODUCTS,
        queryString.stringify(params, {
          arrayFormat: "comma",
          skipNull: true,
          skipEmptyString: true,
        })
      )
      .then((res) => {
        if (res.data) {
          setProductList(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };


  useEffect(() => {
    // console.log("searchParams" , searchParams.get('category_id'));
    if (searchParams.get('category_id')) {
      // getProductList()
      setParams({
        ...params, category_id: searchParams.get('category_id')
      })
    } else {
      setParams({
        ...params, category_id: ""
      })
    }
  }, [searchParams]);


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

  const getProductTechniques = () => {
    apiServices
      .get(
        PRODUCTS_TECHNIQUES,
        queryString.stringify(techniqueParams, {
          arrayFormat: "comma",
          skipNull: true,
          skipEmptyString: true,
        })
      )
      .then((res) => {
        if (res.data) {
          setTechniques(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const callBack = () => {
    getProductList()
  }

  const discountPrice = (price, discount, type) => {
    if (type === "percentage") {
      return numDiscriminant((100 - discount) * price / 100)
    } else {
      return numDiscriminant(price - discount)
    }
  }
  const getProductMaterials = () => {
    apiServices
      .get(
        PRODUCTS_MATERIALS,
        queryString.stringify(materialParams, {
          arrayFormat: "comma",
          skipNull: true,
          skipEmptyString: true,
        })
      )
      .then((res) => {
        if (res.data) {
          setMaterials(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getProductSizes = () => {
    apiServices
      .get(PRODUCTS_SIZES, "")
      .then((res) => {
        if (res.data) {
          setSizes(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  // console.log("size",sizesIdTotal)
  //filter submit
  // const filter = () => {
  //   setParams(state => ({ ...state, category_id: categoriesIdTotal, technique_id: techniquesIdTotal, material_id: materialsIdTotal,size_id: sizesIdTotal }))
  // }
  // useEffect(() => {

  // }, []);
  useEffect(() => {
    getProductList();
    getProductCategories();
    getProductTechniques();
    getProductMaterials();
    getProductSizes();
  }, [params]);
  // useEffect(() => {
  //   getProductList();
  // }, [
  //   materialParams,
  //   techniqueParams,
  //   selectedOption,
  //   size_id,
  //   category_id,
  //   toman_price_range_min,
  //   toman_price_range_max,
  // ]);

  useEffect(() => {
    return () => {
      props.clearFilterStorage();
    };
  }, [location]);

  return (
    <>
      <div className="container mx-auto px-0 w-100 bg-white">
        <Header />
        <Menu />

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
            <div className="d-flex box-dir-reverse">
              <div className="col-sm-3 col-xs-6">
                <div type="button" className="filter-btn">
                  <div className="d-flex box-dir-reverse align-items-center">
                    <img src={filter_icon} width="16" height="15" alt="" />
                    <span className="mx-2">
                      {t("artworkList.filter.title")}
                    </span>
                    <button
                      className="btn clear-tag mx-3"
                    // onClick={() => props.clearFilterStorage()}
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
                <div className="d-flex justify-custom">
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
            <div className="d-flex box-dir-reverse">
              <div className="col-md-3 filter-side ">
                <div className="panel-group" id="accordion">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title text-dir">
                        <a
                          data-toggle="collapse"
                          aria-expanded="true"
                          href="#collapse1"
                        >
                          {t("artworkList.filter.artist_name")}
                        </a>
                      </h4>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse in">
                      <div className="panel-body">
                        <div className="nl-input filter-search">
                          <input
                            placeholder={t(
                              "artworkList.filter.placeholder_artist"
                            )}
                            onChange={(e) => setSearch(e.target.value)}
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setParams((state) => ({
                                ...state,
                                search: search,
                              }))
                            }
                          >
                            <img
                              src={search_icon}
                              width="24"
                              height="24"
                              alt=""
                            />
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
                          href="#collapse2"
                        >
                          {t("artworkList.filter.artField.title")}
                        </a>
                      </h4>
                    </div>
                    <div id="collapse2" className="panel-collapse collapse in">
                      <div className="panel-body">
                        <div className="checkbox-row">
                          <label className="lable-checkbox text-dir">
                            <input type="checkbox" defaultChecked value="" />
                            <span>{t("artworkList.filter.artField.all")}</span>
                            <span className="checkmark"></span>
                          </label>
                          {categories?.results?.map((item, index) => (
                            <label className="lable-checkbox text-dir">
                              <input
                                id="category_id"
                                name={item.id}
                                type="checkbox"
                                value={item.id}
                                // defaultChecked={
                                //   category_id && category_id[index]
                                // }
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
                          {t("artworkList.filter.price.title")}
                        </a>
                      </h4>
                    </div>
                    <div id="collapse3" className="panel-collapse collapse in">
                      <div className="panel-body">
                        <div className="rangeslider">
                          <div id="slider" dir="rtl"></div>
                        </div>
                        <div className="row row-inputs box-dir-reverse">
                          <div className="col-xs-6">
                            <label>{t("artworkList.filter.price.min")}</label>
                            <input
                              type="text"
                              className="value persian-num"
                              data-index="0"
                              defaultValue={
                                props?.filters?.filters_reducer
                                  ?.toman_price_range_min
                                  ? props?.filters?.filters_reducer
                                    ?.toman_price_range_min
                                  : "0"
                              }
                              onChange={(e) =>
                                i18n.language === "fa-IR"
                                  ? setToman_price_range_min(e.target.value)
                                  : setDollar_price_range_min(e.target.value)
                              }
                            />
                            <span>{t("artworkList.filter.price.to")}</span>
                          </div>
                          <div className="col-xs-6">
                            <label>{t("artworkList.filter.price.max")}</label>
                            <input
                              type="text"
                              className="value  persian-num"
                              data-index="1"
                              defaultValue={
                                props?.filters?.filters_reducer
                                  ?.toman_price_range_max
                                  ? props?.filters?.filters_reducer
                                    ?.toman_price_range_max
                                  : "0"
                              }
                              onChange={(e) =>
                                i18n.language === "fa-IR"
                                  ? setToman_price_range_max(e.target.value)
                                  : setDollar_price_range_max(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-custom">
                          <button
                            type="button"
                            className="btn btn-ok pull-dir"
                            onClick={() =>
                              i18n.language === "fa-IR"
                                ? setParams((state) => ({
                                  ...state,
                                  toman_price_range_min: toman_price_range_min
                                    ? toman_price_range_min
                                    : 0,
                                  toman_price_range_max: toman_price_range_max
                                    ? toman_price_range_max
                                    : 0,
                                }))
                                : setParams((state) => ({
                                  ...state,
                                  dollar_price_range_min:
                                    dollar_price_range_min
                                      ? dollar_price_range_min
                                      : 0,
                                  dollar_price_range_max:
                                    dollar_price_range_max
                                      ? dollar_price_range_max
                                      : 0,
                                }))
                            }
                          >
                            {t("artworkList.filter.price.action")}
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
                          href="#collapse4"
                        >
                          {t("artworkList.filter.discount.title")}
                        </a>
                      </h4>
                    </div>
                    <div id="collapse4" className="panel-collapse collapse in">
                      <div className="panel-body">
                        <label className="switch pull-dir">
                          <input type="checkbox" checked />
                          <span className="switchbtn round"></span>
                          <span className="label-switchbtn">
                            {t("artworkList.filter.discount.show")}
                          </span>
                        </label>
                        <div className="clearfix"></div>
                        <div className="md-mrgt30">
                          <label className="lable-checkbox text-dir">
                            <input type="checkbox" value="" />
                            <span>{t("artworkList.filter.discount.up20")}</span>
                            <span className="checkmark"></span>
                          </label>
                          <label className="lable-checkbox text-dir">
                            <input type="checkbox" value="" />
                            <span>{t("artworkList.filter.discount.up30")}</span>
                            <span className="checkmark"></span>
                          </label>
                          <label className="lable-checkbox text-dir">
                            <input type="checkbox" value="" />
                            <span>{t("artworkList.filter.discount.up50")}</span>
                            <span className="checkmark"></span>
                          </label>
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
                          href="#collapse5"
                        >
                          {t("artworkList.filter.art_for_gift.title")}
                        </a>
                      </h4>
                    </div>
                    <div id="collapse5" className="panel-collapse collapse in">
                      <div className="panel-body">
                        <label className="switch pull-dir">
                          <input type="checkbox" />
                          <span className="switchbtn round"></span>
                          <span className="label-switchbtn">
                            {t("artworkList.filter.art_for_gift.show")}
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title text-dir">
                        <a
                          data-toggle="collapse"
                          aria-expanded="true"
                          href="#collapse7"
                        >
                          {t("artworkList.filter.technique.title")}
                        </a>
                      </h4>
                    </div>
                    <div id="collapse7" className="panel-collapse collapse in">
                      <div className="panel-body">
                        <div className="nl-input filter-search ">
                          <input
                            placeholder={t(
                              "artworkList.filter.technique.placeholder"
                            )}
                            onChange={(e) => setTechniqueSearch(e.target.value)}
                          />
                          <button
                            className="noborder"
                            type="button"
                            onClick={() =>
                              setTechniquesetParams((state) => ({
                                ...state,
                                search: techniqueSearch,
                              }))
                            }
                          >
                            <img
                              src={search_icon}
                              width="24"
                              height="24"
                              alt=""
                            />
                          </button>
                          <div className="md-mrgt30">
                            {techniques?.results?.map((item, index) => (
                              <label className="lable-checkbox text-dir">
                                <input
                                  type="checkbox"
                                  name={item.id}
                                  value={item.id}
                                  onChange={(e) =>
                                    setTechniquesId({
                                      ...techniquesId,
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
                          </div>
                        </div>
                        <div className="d-flex justify-custom">
                          <button
                            type="button"
                            className="btn btn-ok pull-dir"
                            onClick={filterTechniques}
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
                          aria-expanded="false"
                          href="#collapse8"
                        >
                          {t("artworkList.filter.subject.title")}
                        </a>
                      </h4>
                    </div>
                    <div id="collapse8" className="panel-collapse collapse">
                      <div className="panel-body"></div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title text-dir">
                        <a
                          data-toggle="collapse"
                          aria-expanded="true"
                          href="#collapse9"
                        >
                          {t("artworkList.filter.material.title")}
                        </a>
                      </h4>
                    </div>
                    <div id="collapse9" className="panel-collapse collapse in">
                      <div className="panel-body ">
                        <div className="nl-input filter-search ">
                          <input
                            placeholder={t(
                              "artworkList.filter.material.placeholder"
                            )}
                            onChange={(e) => setMaterialSearch(e.target.value)}
                          />
                          <button
                            className="noborder"
                            type="button"
                            onClick={() =>
                              setMaterialParams((state) => ({
                                ...state,
                                search: materialSearch,
                              }))
                            }
                          >
                            <img
                              src={search_icon}
                              width="24"
                              height="24"
                              alt=""
                            />
                          </button>
                          <div className="constant-height md-mrgt30 px-2">
                            {materials?.results?.map((item, index) => (
                              <label className="lable-checkbox text-dir">
                                <input
                                  type="checkbox"
                                  value={item.id}
                                  name={item.id}
                                  onChange={(e) =>
                                    setMaterialsId({
                                      ...materialsId,
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
                          </div>
                        </div>
                        <div className="d-flex justify-custom">
                          <button
                            type="button"
                            className="btn btn-ok pull-dir"
                            onClick={filterMaterials}
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
                          href="#collapse10"
                        >
                          {t("artworkList.filter.size.title")}
                        </a>
                      </h4>
                    </div>
                    <div id="collapse10" className="panel-collapse collapse in">
                      <div className="panel-body">
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

                        <label className="lable-checkbox text-dir">
                          <input
                            type="checkbox"
                            checked
                            id="Custom-dimensions"
                            value=""
                          />
                          <span>{t("artworkList.filter.size.custom")}</span>
                          <span className="checkmark"></span>
                        </label>
                        <div className=" row-inputs togglevisibility">
                          <div className="row mrgt16 box-dir-reverse">
                            <div className="col-xs-6 text-dir">
                              <label>
                                {t("artworkList.filter.size.min_width")}
                              </label>
                              <input
                                type="number"
                                className="value persian-num"
                                onChange={(e) => setWidth_min(e.target.value)}
                              />
                              <span>{t("artworkList.filter.size.in")}</span>
                            </div>
                            <div className="col-xs-6 text-dir">
                              <label>
                                {t("artworkList.filter.size.max_width")}
                              </label>
                              <input
                                type="number"
                                className="value  persian-num"
                                onChange={(e) => setWidth_max(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="row mrgt16 box-dir-reverse">
                            <div className="col-xs-6 text-dir">
                              <label>
                                {t("artworkList.filter.size.min_length")}
                              </label>
                              <input
                                type="number"
                                className="value persian-num"
                                onChange={(e) => setLength_min(e.target.value)}
                              />
                              <span>{t("artworkList.filter.size.in")}</span>
                            </div>
                            <div className="col-xs-6 text-dir">
                              <label>
                                {t("artworkList.filter.size.max_length")}
                              </label>
                              <input
                                type="number"
                                className="value  persian-num"
                                onChange={(e) => setLength_max(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="row mrgt16 box-dir-reverse">
                            <div className="col-xs-6 text-dir">
                              <label>
                                {t("artworkList.filter.size.min_height")}
                              </label>
                              <input
                                type="number"
                                className="value persian-num"
                                onChange={(e) => setHeight_min(e.target.value)}
                              />
                              <span>{t("artworkList.filter.size.in")}</span>
                            </div>
                            <div className="col-xs-6 text-dir">
                              <label>
                                {t("artworkList.filter.size.max_height")}
                              </label>
                              <input
                                type="number"
                                className="value  persian-num"
                                onChange={(e) => setHeight_max(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-custom">
                          <button
                            type="button"
                            className="btn btn-ok pull-dir"
                            onClick={() =>
                              width_min ||
                                width_max ||
                                height_min ||
                                height_max ||
                                length_max ||
                                length_min
                                ? setParams((state) => ({
                                  ...state,
                                  width_min: width_min,
                                  width_max: width_max,
                                  height_min: height_min,
                                  height_max: height_max,
                                  length_min: length_min,
                                  length_max: length_max,
                                }))
                                : filterSizes()
                            }
                          >
                            {t("artworkList.filter.size.submit")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9 ">
                <div className="row-gridimg">
                  <div className="row">
                    {productList?.results?.map((product) => {
                      return (
                        <>
                          <div className="col-sm-4 ">
                            <div className="cols ">
                              <div className="col-img">
                                {/* <div class="tags tags-spacial">ویژه</div> */}
                                {product?.discount ?
                                  <div class="tags tags-off persian-num"> {numDiscriminant(product?.discount?.value)}{product?.discount?.type === "percentage" ? "%" : t("toman")} </div>
                                  : ""}
                                <img
                                  src={
                                    product.medias &&
                                    product.medias[0]?.exact_url
                                  }
                                  width="280"
                                  alt="آرتیبیشن"
                                  className="img-responsive"
                                  style={{ height: 280 }}
                                />
                                <div className="tab-overly">
                                  <a
                                    onClick={() =>
                                      navigate(
                                        `/site/artworks-detail/?id=${product.id}&artist_id=${product.artist_id}`
                                      )
                                    }
                                    className="btn-see"
                                  >
                                    <span className="view-icon pull-right"></span>
                                    <span>{t("card_artwork.veiw")}</span>
                                  </a>
                                  <a
                                    href="#"
                                    onClick={() =>
                                      navigate(
                                        `/site/artworks-detail/?id=${product.id}&artist_id=${product.artist_id}`
                                      )
                                    }
                                    className="btn-sale"
                                  >
                                    {t("card_artwork.request_buy")}
                                  </a>
                                  <button
                                    className={"like-icon " + (product?.likes ? "isLike" : "")}
                                    onClick={() =>
                                      follow({
                                        content: "product",
                                        activity: "like",
                                        object_id: product?.id,
                                        action: product?.likes,
                                        callBack
                                      })
                                    }
                                  ></button>
                                </div>
                              </div>
                              <div className="col-body ">



                                {product?.is_sold ?
                                  <div class="finished-tag">فروخته شد</div>
                                  : ""
                                }
                                <h6 className="col-title text-dir">
                                  {i18n.language === "fa-IR" ? (
                                    <span className="col-name">
                                      {product?.translations?.fa?.artist_name}
                                    </span>
                                  ) : (
                                    <span className="col-name">
                                      {product?.translations?.en?.artist_name}
                                    </span>
                                  )}
                                </h6>
                                <div className="col-dimension text-dir">
                                  <div className="d-flex box-dir-reverse">
                                    <span className="col-dimension-title">
                                      {t("card_artwork.size.title")}
                                    </span>
                                    <span className="col-dimension-body mx-2">
                                      <div className="d-flex">
                                        <span className="dimension-width">
                                          {product.width}
                                        </span>
                                        <span className="mx-2">
                                          {t("card_artwork.size.in")}
                                        </span>
                                        <span className="dimension-height ">
                                          {product.height}
                                        </span>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                                <div className="col-price text-dir">
                                  <div className="d-flex box-dir-reverse">
                                    <span className="col-price-num">
                                      {product?.discount ? discountPrice(product.toman_price, product?.discount?.value, product?.discount?.type) : ""} {product?.discount ? t("toman") : ""}
                                    </span>
                                    {/* <span className="col-price-unit">
                                      {t("toman")}
                                    </span> */}
                                    <span className={`persian-num ${product?.discount ? "col-price-off" : ""}`}>
                                      {numDiscriminant(product.toman_price)} {product?.toman_price ? t("toman") : ""}
                                    </span>


                                    {/* <span className="tag-gift  w-100">
                                      <div className="d-flex text-dir position-gift-card-artwork">
                                        <img
                                          className=""
                                          src={gift_icon}
                                          width="22"
                                          height="22"
                                          alt=""
                                        />
                                      </div>
                                    </span> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>

                <div className=" row-pagination">
                  <Pagination total={50} />
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
    setFilters: (data) => dispatch(setFilters(data)),
    clearFilterStorage: (data) => dispatch(clearFilterStorage(data)),
  };
};

const mapStateToProps = (store) => {
  return {
    filters: store.filtersReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksPage);
