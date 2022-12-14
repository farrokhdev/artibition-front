import React, { useEffect, useState } from "react";
import Search from "../../assets/img/search.svg";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import apiServices from "../../utils/api.services";
import {
  ARTIST_PRODUCTS,
  PRODUCTS_CATEGORIES,
  PRODUCTS_MATERIALS,
  PRODUCTS_SIZES,
  PRODUCTS_TECHNIQUES,
} from "../../utils";
import QueryString from "qs";
import queryString from "query-string";
import FilterArtworks from "../../components/FilterArtworks";

function FilterSidBarInArtworks() {
  let navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [search, setSearch] = useState();
  const [materialSearch, setMaterialSearch] = useState();
  const [techniqueSearch, setTechniqueSearch] = useState();
  const [toman_price_range_min, setToman_price_range_min] = useState();
  const [toman_price_range_max, setToman_price_range_max] = useState();
  const [dollar_price_range_min, setDollar_price_range_min] = useState();
  const [dollar_price_range_max, setDollar_price_range_max] = useState();
  const [width_min, setWidth_min] = useState();
  const [width_max, setWidth_max] = useState();
  const [height_min, setHeight_min] = useState();
  const [height_max, setHeight_max] = useState();
  const [length_min, setLength_min] = useState();
  const [length_max, setLength_max] = useState();
  const [productList, setProductList] = useState();
  const [params, setParams] = useState({
    status: "active",
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
    return setParams((state) => ({
      ...state,
      material_id: materialsIdTotal,
    }));
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
        QueryString.stringify(params, {
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
  const getProductCategories = () => {
    apiServices
      .get(PRODUCTS_CATEGORIES)
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
  // console.log("size",sizesIdTotal)
  //filter submit
  // const filter = () => {
  //   setParams(state => ({ ...state, category_id: categoriesIdTotal, technique_id: techniquesIdTotal, material_id: materialsIdTotal,size_id: sizesIdTotal }))
  // }
  useEffect(() => {
    getProductList();
    getProductCategories();
    getProductTechniques();
    getProductMaterials();
    getProductSizes();
  }, [params, materialParams, techniqueParams]);

  return (
    <FilterArtworks />
    //  <div className="col-md-3 filter-side ">
    //   <div className="panel-group" id="accordion">
    //     <div className="panel panel-default">
    //       <div className="panel-heading">
    //         <h4 className="panel-title text-dir">
    //           <a
    //             data-toggle="collapse"
    //             aria-expanded="true"
    //             href="#collapse1"
    //           >
    //             {t("artworkList.filter.artist_name")}
    //           </a>
    //         </h4>
    //       </div>
    //       <div id="collapse1" className="panel-collapse collapse in">
    //         <div className="panel-body">
    //           <div className="nl-input filter-search">
    //             <input
    //               placeholder={t("artworkList.filter.placeholder_artist")}
    //               onChange={(e) => setSearch(e.target.value)}
    //             />
    //             <button
    //               type="button"
    //               onClick={() =>
    //                 setParams((state) => ({ ...state, search: search }))
    //               }
    //             >
    //               <img src={Search} width="24" height="24" alt="" />
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="panel panel-default">
    //       <div className="panel-heading">
    //         <h4 className="panel-title text-dir">
    //           <a
    //             data-toggle="collapse"
    //             aria-expanded="true"
    //             href="#collapse2"
    //           >
    //             {t("artworkList.filter.artField.title")}
    //           </a>
    //         </h4>
    //       </div>
    //       <div id="collapse2" className="panel-collapse collapse in">
    //         <div className="panel-body">
    //           <div className="checkbox-row">
    //             <label className="lable-checkbox text-dir">
    //               <input type="checkbox" checked value="" />
    //               <span>{t("artworkList.filter.artField.all")}</span>
    //               <span className="checkmark"></span>
    //             </label>
    //             {categories?.results?.map((item, index) => (
    //               <label className="lable-checkbox text-dir">
    //                 <input
    //                   id="category_id"
    //                   name={item.id}
    //                   type="checkbox"
    //                   value={item.id}
    //                   onClick={(e) => {
    //                     setCategoriesId({
    //                       ...categoriesId,
    //                       [e.target.name]: e.target.checked,
    //                     });
    //                   }}
    //                 />
    //                 <span>
    //                   {i18n.language === "fa-IR"
    //                     ? item.translations?.fa?.title
    //                     : item.translations?.en?.title}{" "}
    //                 </span>
    //                 <span className="checkmark"></span>
    //               </label>
    //             ))}
    //           </div>
    //           <div className="d-flex pull-dir-rev">
    //             <button
    //               type="button"
    //               className="btn btn-ok pull-dir"
    //               onClick={filterCategories}
    //             >
    //               {t("artworkList.filter.size.submit")}
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="panel panel-default">
    //       <div className="panel-heading">
    //         <h4 className="panel-title text-dir">
    //           <a
    //             data-toggle="collapse"
    //             aria-expanded="true"
    //             href="#collapse3"
    //           >
    //             {t("artworkList.filter.price.title")}
    //           </a>
    //         </h4>
    //       </div>
    //       <div id="collapse3" className="panel-collapse collapse in">
    //         <div className="panel-body">
    //           <div className="rangeslider">
    //             <div id="slider" dir="rtl"></div>
    //           </div>
    //           <div className="row row-inputs box-dir-reverse">
    //             <div className="col-xs-6">
    //               <label>{t("artworkList.filter.price.min")}</label>
    //               <input
    //                 type="text"
    //                 className="value persian-num"
    //                 data-index="0"
    //                 defaultValue="0"
    //                 onChange={(e) =>
    //                   i18n.language === "fa-IR"
    //                     ? setToman_price_range_min(e.target.value)
    //                     : setDollar_price_range_min(e.target.value)
    //                 }
    //               />
    //               <span>{t("artworkList.filter.price.to")}</span>
    //             </div>
    //             <div className="col-xs-6">
    //               <label>{t("artworkList.filter.price.max")}</label>
    //               <input
    //                 type="text"
    //                 className="value  persian-num"
    //                 data-index="1"
    //                 defaultValue="0"
    //                 onChange={(e) =>
    //                   i18n.language === "fa-IR"
    //                     ? setToman_price_range_max(e.target.value)
    //                     : setDollar_price_range_max(e.target.value)
    //                 }
    //               />
    //             </div>
    //           </div>
    //           <div className="d-flex pull-dir-rev">
    //             <button
    //               type="button"
    //               className="btn btn-ok pull-dir"
    //               onClick={() =>
    //                 i18n.language === "fa-IR"
    //                   ? setParams((state) => ({
    //                       ...state,
    //                       toman_price_range_min: toman_price_range_min
    //                         ? toman_price_range_min
    //                         : 0,
    //                       toman_price_range_max: toman_price_range_max
    //                         ? toman_price_range_max
    //                         : 0,
    //                     }))
    //                   : setParams((state) => ({
    //                       ...state,
    //                       dollar_price_range_min: dollar_price_range_min
    //                         ? dollar_price_range_min
    //                         : 0,
    //                       dollar_price_range_max: dollar_price_range_max
    //                         ? dollar_price_range_max
    //                         : 0,
    //                     }))
    //               }
    //             >
    //               {t("artworkList.filter.price.action")}
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="panel panel-default">
    //       <div className="panel-heading">
    //         <h4 className="panel-title text-dir">
    //           <a
    //             data-toggle="collapse"
    //             aria-expanded="true"
    //             href="#collapse4"
    //           >
    //             {t("artworkList.filter.discount.title")}
    //           </a>
    //         </h4>
    //       </div>
    //       <div id="collapse4" className="panel-collapse collapse in">
    //         <div className="panel-body">
    //           <label className="switch pull-dir">
    //             <input type="checkbox" checked />
    //             <span className="switchbtn round"></span>
    //             <span className="label-switchbtn">
    //               {t("artworkList.filter.discount.show")}
    //             </span>
    //           </label>
    //           <div className="clearfix"></div>
    //           <div className="md-mrgt30">
    //             <label className="lable-checkbox text-dir">
    //               <input type="checkbox" value="" />
    //               <span>{t("artworkList.filter.discount.up20")}</span>
    //               <span className="checkmark"></span>
    //             </label>
    //             <label className="lable-checkbox text-dir">
    //               <input type="checkbox" value="" />
    //               <span>{t("artworkList.filter.discount.up30")}</span>
    //               <span className="checkmark"></span>
    //             </label>
    //             <label className="lable-checkbox text-dir">
    //               <input type="checkbox" value="" />
    //               <span>{t("artworkList.filter.discount.up50")}</span>
    //               <span className="checkmark"></span>
    //             </label>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="panel panel-default">
    //       <div className="panel-heading">
    //         <h4 className="panel-title text-dir">
    //           <a
    //             data-toggle="collapse"
    //             aria-expanded="true"
    //             href="#collapse5"
    //           >
    //             {t("artworkList.filter.art_for_gift.title")}
    //           </a>
    //         </h4>
    //       </div>
    //       <div id="collapse5" className="panel-collapse collapse in">
    //         <div className="panel-body">
    //           <label className="switch pull-dir">
    //             <input type="checkbox" />
    //             <span className="switchbtn round"></span>
    //             <span className="label-switchbtn">
    //               {t("artworkList.filter.art_for_gift.show")}
    //             </span>
    //           </label>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="panel panel-default">
    //       <div className="panel-heading">
    //         <h4 className="panel-title text-dir">
    //           <a
    //             data-toggle="collapse"
    //             aria-expanded="true"
    //             href="#collapse7"
    //           >
    //             {t("artworkList.filter.technique.title")}
    //           </a>
    //         </h4>
    //       </div>
    //       <div id="collapse7" className="panel-collapse collapse in">
    //         <div className="panel-body">
    //           <div className="nl-input filter-search ">
    //             <input
    //               placeholder={t("artworkList.filter.technique.placeholder")}
    //               onChange={(e) => setTechniqueSearch(e.target.value)}
    //             />
    //             <button
    //               className="noborder"
    //               type="button"
    //               onClick={() =>
    //                 setTechniquesetParams((state) => ({
    //                   ...state,
    //                   search: techniqueSearch,
    //                 }))
    //               }
    //             >
    //               <img src={Search} width="24" height="24" alt="" />
    //             </button>
    //             <div className="md-mrgt30">
    //               {techniques?.results?.map((item, index) => (
    //                 <label className="lable-checkbox text-dir">
    //                   <input
    //                     type="checkbox"
    //                     name={item.id}
    //                     value={item.id}
    //                     onChange={(e) =>
    //                       setTechniquesId({
    //                         ...techniquesId,
    //                         [e.target.name]: e.target.checked,
    //                       })
    //                     }
    //                   />
    //                   <span>
    //                     {i18n.language === "fa-IR"
    //                       ? item.translations?.fa?.title
    //                       : item.translations?.en?.title}{" "}
    //                   </span>
    //                   <span className="checkmark"></span>
    //                 </label>
    //               ))}
    //             </div>
    //             <div className="d-flex pull-dir-rev">
    //               <button
    //                 type="button"
    //                 className="btn btn-ok pull-dir"
    //                 onClick={filterTechniques}
    //                 style={{ position: "unset" }}
    //               >
    //                 {t("artworkList.filter.size.submit")}
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="panel panel-default">
    //       <div className="panel-heading">
    //         <h4 className="panel-title text-dir">
    //           <a
    //             data-toggle="collapse"
    //             aria-expanded="false"
    //             href="#collapse8"
    //           >
    //             {t("artworkList.filter.subject.title")}
    //           </a>
    //         </h4>
    //       </div>
    //       <div id="collapse8" className="panel-collapse collapse">
    //         <div className="panel-body"></div>
    //       </div>
    //     </div>
    //     <div className="panel panel-default">
    //       <div className="panel-heading">
    //         <h4 className="panel-title text-dir">
    //           <a
    //             data-toggle="collapse"
    //             aria-expanded="true"
    //             href="#collapse9"
    //           >
    //             {t("artworkList.filter.material.title")}
    //           </a>
    //         </h4>
    //       </div>
    //       <div id="collapse9" className="panel-collapse collapse in">
    //         <div className="panel-body ">
    //           <div className="nl-input filter-search ">
    //             <input
    //               placeholder={t("artworkList.filter.material.placeholder")}
    //               onChange={(e) => setMaterialSearch(e.target.value)}
    //             />
    //             <button
    //               className="noborder"
    //               type="button"
    //               onClick={() =>
    //                 setMaterialParams((state) => ({
    //                   ...state,
    //                   search: materialSearch,
    //                 }))
    //               }
    //             >
    //               <img src={Search} width="24" height="24" alt="" />
    //             </button>
    //             <div className="constant-height md-mrgt30 px-2">
    //               {materials?.results?.map((item, index) => (
    //                 <label className="lable-checkbox text-dir">
    //                   <input
    //                     type="checkbox"
    //                     value={item.id}
    //                     name={item.id}
    //                     onChange={(e) =>
    //                       setMaterialsId({
    //                         ...materialsId,
    //                         [e.target.name]: e.target.checked,
    //                       })
    //                     }
    //                   />
    //                   <span>
    //                     {i18n.language === "fa-IR"
    //                       ? item.translations?.fa?.title
    //                       : item.translations?.en?.title}
    //                   </span>
    //                   <span className="checkmark"></span>
    //                 </label>
    //               ))}
    //             </div>
    //             <div className="d-flex pull-dir-rev">
    //               <button
    //                 type="button"
    //                 className="btn btn-ok pull-dir"
    //                 onClick={filterMaterials}
    //                 style={{ position: "unset" }}
    //               >
    //                 {t("artworkList.filter.size.submit")}
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="panel panel-default">
    //       <div className="panel-heading">
    //         <h4 className="panel-title text-dir">
    //           <a
    //             data-toggle="collapse"
    //             aria-expanded="true"
    //             href="#collapse10"
    //           >
    //             {t("artworkList.filter.size.title")}
    //           </a>
    //         </h4>
    //       </div>
    //       <div id="collapse10" className="panel-collapse collapse in">
    //         <div className="panel-body">
    //           {sizes?.results?.map((item, index) => (
    //             <label className="lable-checkbox text-dir">
    //               <input
    //                 type="checkbox"
    //                 name={item.id}
    //                 value={item.id}
    //                 onChange={(e) =>
    //                   setSizesId({
    //                     ...sizesId,
    //                     [e.target.name]: e.target.checked,
    //                   })
    //                 }
    //               />
    //               <span>
    //                 {i18n.language === "fa-IR"
    //                   ? item.translations?.fa?.title
    //                   : item.translations?.en?.title}
    //               </span>
    //               <span className="checkmark"></span>
    //             </label>
    //           ))}
    //           <label className="lable-checkbox text-dir">
    //             <input
    //               type="checkbox"
    //               checked
    //               id="Custom-dimensions"
    //               value=""
    //             />
    //             <span>{t("artworkList.filter.size.custom")}</span>
    //             <span className="checkmark"></span>
    //           </label>
    //           <div className=" row-inputs togglevisibility">
    //             <div className="row mrgt16 box-dir-reverse">
    //               <div className="col-xs-6 text-dir">
    //                 <label>{t("artworkList.filter.size.min_width")}</label>
    //                 <input
    //                   type="number"
    //                   className="value persian-num"
    //                   onChange={(e) => setWidth_min(e.target.value)}
    //                 />
    //                 <span>{t("artworkList.filter.size.in")}</span>
    //               </div>
    //               <div className="col-xs-6 text-dir">
    //                 <label>{t("artworkList.filter.size.max_width")}</label>
    //                 <input
    //                   type="number"
    //                   className="value  persian-num"
    //                   onChange={(e) => setWidth_max(e.target.value)}
    //                 />
    //               </div>
    //             </div>
    //             <div className="row mrgt16 box-dir-reverse">
    //               <div className="col-xs-6 text-dir">
    //                 <label>{t("artworkList.filter.size.min_length")}</label>
    //                 <input
    //                   type="number"
    //                   className="value persian-num"
    //                   onChange={(e) => setLength_min(e.target.value)}
    //                 />
    //                 <span>{t("artworkList.filter.size.in")}</span>
    //               </div>
    //               <div className="col-xs-6 text-dir">
    //                 <label>{t("artworkList.filter.size.max_length")}</label>
    //                 <input
    //                   type="number"
    //                   className="value  persian-num"
    //                   onChange={(e) => setLength_max(e.target.value)}
    //                 />
    //               </div>
    //             </div>
    //             <div className="row mrgt16 box-dir-reverse">
    //               <div className="col-xs-6 text-dir">
    //                 <label>{t("artworkList.filter.size.min_height")}</label>
    //                 <input
    //                   type="number"
    //                   className="value persian-num"
    //                   onChange={(e) => setHeight_min(e.target.value)}
    //                 />
    //                 <span>{t("artworkList.filter.size.in")}</span>
    //               </div>
    //               <div className="col-xs-6 text-dir">
    //                 <label>{t("artworkList.filter.size.max_height")}</label>
    //                 <input
    //                   type="number"
    //                   className="value  persian-num"
    //                   onChange={(e) => setHeight_max(e.target.value)}
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="d-flex pull-dir-rev">
    //             <button
    //               type="button"
    //               className="btn btn-ok pull-dir"
    //               onClick={() =>
    //                 width_min ||
    //                 width_max ||
    //                 height_min ||
    //                 height_max ||
    //                 length_max ||
    //                 length_min
    //                   ? setParams((state) => ({
    //                       ...state,
    //                       width_min: width_min,
    //                       width_max: width_max,
    //                       height_min: height_min,
    //                       height_max: height_max,
    //                       length_min: length_min,
    //                       length_max: length_max,
    //                     }))
    //                   : filterSizes()
    //               }
    //             >
    //               {t("artworkList.filter.size.submit")}
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default FilterSidBarInArtworks;
