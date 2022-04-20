import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import ArtworkCard from "./ArtworkCard";
import { ArtworksFilter } from "./ArtworksFilter";
import ArtworkRemoveFilter from "./ArtworkRemoveFilter";
import { useTranslation } from "react-i18next";
import queryString from "query-string";
import {
  ARTIST_PRODUCTS,
  PRODUCTS_CATEGORIES,
  PRODUCTS_DISCOUNT,
  PRODUCTS_MATERIALS,
  PRODUCTS_SIZES,
  PRODUCTS_TECHNIQUES,
  SEARCH_PRODUCTS,
} from "../../utils";
import apiServices from "../../utils/api.services";
import { useLocation, useSearchParams } from "react-router-dom";
import { numDiscriminant } from "../../utils/discriminant";
import { isNil } from "lodash";
import FilterArtworks from "../FilterArtworks";
import { discountPrice } from "../../utils/discriminant";

const ArtworksList = (props) => {
  const {
    setParams,
    setSearch,
    params,
    search,
    clearFilterStorage,
    filtersReducer,
  } = props;
  let location = useLocation();
  const { exhibitionId } = props;
  let [searchParams, setSearchParams] = useSearchParams();

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

  const [materialSearch, setMaterialSearch] = useState();
  const [discount, setDiscount] = useState(query.get("discount"));
  const [discountRange, setDiscountRange] = useState();
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

  const [categorieParams, setCategorieParams] = useState({
    page: 1,
  });

  const [materialParams, setMaterialParams] = useState({
    search: "",
  });
  const [techniqueParams, setTechniquesetParams] = useState({
    search: "",
  });
  const [suggestionsCount, setSuggestionsCount] = useState("");

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

  // const [discounts, setDiscounts] = useState();
  const [discountsId, setDiscountsId] = useState();
  const filterDiscounts = (disId) => {
    setParams((state) => ({ ...state, discount: disId }));
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

  const fetchProducts = () => {
    const defaultQuery = queryString.stringify(params, {
      arrayFormat: "comma",
      skipNull: true,
      skipEmptyString: true,
  
    });

    const query = isNil(props?.exhibitionId)
      ? defaultQuery
      : queryString
          .stringify({ exhibition_id: props?.exhibitionId })
          .concat("&")
          .concat(defaultQuery);

    apiServices
      .get(SEARCH_PRODUCTS, query)
      .then((res) => {
        if (res.data) {
          setProductList(res.data.data);
          setSuggestionsCount(res.data.data.count);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const getProductList = () => {
    fetchProducts();
  };

  useEffect(() => {
    if (searchParams.get("category_id")) {
      // getProductList()
      setParams({
        ...params,
        category_id: searchParams.get("category_id"),
      });
    }
  }, [searchParams]);

  const handeSelectPage = (e) => {
    setParams({
      ...params,
      page: e,
    });
  };

  // FILTER WITHOUT BUTTON
  useEffect(() => {
    filterCategories();
    filterTechniques();
    filterMaterials();
    // filterDiscounts();
  }, [categoriesId, techniquesId, materialsId]);

  useEffect(()=>{
    filterDiscounts(discountsId);
  },[discountsId])

  // console.log(discountsId)
  // FILTER WITHOUT BUTTON END

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

  const getDiscount = () => {
    fetchProducts();
    // apiServices
    //   .get(
    //     SEARCH_PRODUCTS,
    //     queryString.stringify(params, {
    //       arrayFormat: "comma",
    //       skipNull: true,
    //       skipEmptyString: true,
    //     })
    //   )
    //   .then((res) => {
    //     if (res.data) {
    //       setProductList(res.data.data);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
  };

  useEffect(() => {
    getProductList();
    getProductCategories();
    getProductTechniques();
    getProductMaterials();
    getProductSizes();
    getDiscount();
  }, [params]);

  useEffect(() => {
    return () => {
      clearFilterStorage();
    };
  }, [location]);
  const filterProps = {
    setSearch,
    search,
    categories,
    category_id,
    i18n,
    setCategoriesId,
    categoriesId,
    setToman_price_range_min,
    setDollar_price_range_min,
    filterCategories,
    setToman_price_range_max,
    setDollar_price_range_max,
    toman_price_range_min,
    toman_price_range_max,
    dollar_price_range_min,
    dollar_price_range_max,
    // setDiscount,
    // discount,
    // setDiscountRange,
    // discountRange,
    // discounts,
    // setDiscounts,
    discountsId,
    setDiscountsId,
    setTechniqueSearch,
    setTechniquesetParams,
    techniqueSearch,
    techniques,
    setTechniquesId,
    techniquesId,
    filterTechniques,
    setMaterialSearch,
    setMaterialParams,
    materialSearch,
    materials,
    setMaterialsId,
    materialsId,
    filterMaterials,
    sizes,
    setSizesId,
    sizesId,
    setWidth_min,
    setWidth_max,
    setLength_min,
    setLength_max,
    setHeight_min,
    setHeight_max,
    width_min,
    width_max,
    height_min,
    height_max,
    length_max,
    length_min,
    filterSizes,
    filtersReducer,
    t,
  };
  const removeFilterProps = {
    setParams,
    t,
    params,
    setSelectedOption,
    selectedOption,
  };
  return (
    <div className="default-content">
      <div className="content-header">
        <ArtworkRemoveFilter {...removeFilterProps} />
      </div>
      <div className="content-body">
        <div className="d-flex box-dir-reverse dir">
          {/* <ArtworksFilter {...filterProps} />  */}
          <FilterArtworks {...filterProps} />

          <div className="col-md-9 ">
            <div className="row-gridimg">
              <div className="row">
                {productList?.results?.map((product) => {
                  return (
                    <ArtworkCard
                      product={product}
                      // discountPrice={discountPrice}
                      callBack={getProductList}
                    />
                  );
                })}
              </div>
            </div>

            <div className=" row-pagination">
              <Pagination
                defaultCurrent={1}
                total={suggestionsCount}
                defaultPageSize={10}
                onChange={(e) => handeSelectPage(e)}
                // total={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworksList;
