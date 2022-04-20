import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import { Breadcrumb } from "antd";
import i18next from "i18next";
import PromotionArtwork from "./PromotionArtwork";
import { PRODUCTS, PRODUCTS_CATEGORIES } from "../../utils";
import apiServices from "../../utils/api.services";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import queryString from "query-string";
import { isNil } from "lodash";

function DetailsPromotion() {
  const { t, i18n } = useTranslation();
  const [promotions, setPromotions] = useState();
  const [params, setParams] = useState({
  // for_gifting:true
    // order: selectedOption,
    // page: 1,
    // size_id: size_id,
    // category_id: category_id,
    // toman_price_range_min: toman_price_range_min,
    // toman_price_range_max: toman_price_range_max,
    // dollar_price_range_min: dollar_price_range_min,
    // dollar_price_range_max: dollar_price_range_max,
    // discount: discountو
  });




  const [categories, setCats] = useState([]);


  useEffect(() => {
    apiServices
      .get(PRODUCTS_CATEGORIES, "")
      .then((res) => {
        if (res.data) {
          setCats(res.data.data.results);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const getPromotions = () => {
    apiServices
      .get(PRODUCTS, queryString.stringify(params))
      .then((res) => {
        if (res.data) {
          setPromotions(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    getPromotions();
  }, [params]);

  const callBack = () => {
    getPromotions();
  };

  const handleApproved = (e) => {
    setParams({
      ...params,
      category_id: e,
    });
  };


  // SET PRICE RANGE 

  const [toman_price_range_max,setToman_price_range_max]=useState(2000);
  const [dollar_price_range_max,setDollar_price_range_max]=useState(2000);
  const [activeC,setActiveC]=useState(2000)

  const filterPriceToman= (max)=>{
    setToman_price_range_max(max)
    setParams({...params,toman_price_range_min:0,toman_price_range_max:max})
  }
  const filterPriceDollar= (max)=>{
    setDollar_price_range_max(max)
    setParams({...params,dollar_price_range_min:0,dollar_price_range_max:max})
  }

  useEffect(()=>{
    setActiveC( toman_price_range_max )
  },[toman_price_range_max,dollar_price_range_max])
  const activeClass=(actNum)=>{
if(actNum==activeC){
  return"active"
}
  }



  // SET PRICE RANGE END

  return (
    <>
      <div className="container mx-auto px-0 w-100">
        <Header />
        <Menu />
        <div className="container">
          <Breadcrumb
            className="d-flex box-dir-reverse breadcrumb"
            separator=""
          >
            <Breadcrumb.Item>
              <Link to={"/"}>{t("artwork.artibition")}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator>
              {i18next.language === "fa-IR" ? ">" : "<"}
            </Breadcrumb.Separator>
            <Breadcrumb.Item>{t("promotion.banner.title")}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="banner">
            <div className="content-banner">
              <h2 className="content-title">{t("promotion.banner.title")}</h2>
              <p className="txt-title">{t("promotion.banner.descriprion")}</p>
            </div>
            <div className="select-price">
              <ul className="nav nav-justified d-block dir">
                
                <li className={activeClass(1000)}  onClick={()=>filterPriceToman(1000) } >
                  <a href="#" >
                    {t("promotion.banner.price_2_btn")}
                    {t("promotion.price_unit")}
                  </a>
                </li>
                <li className={activeClass(2000)} onClick={()=>filterPriceToman(2000)}>
                  <a href="#">
                    {t("promotion.banner.price_3_btn")}
                    {t("promotion.price_unit")}
                  </a>
                </li>
                <li className={activeClass(3000)}  onClick={()=>filterPriceToman(3000)}>
                  <a href="#">
                    {t("promotion.banner.price_4_btn")}
                    {t("promotion.price_unit")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="default-tab tab-2 tab-interval">
            <div className="tab-overflow">
              <ul className="nav nav-tabs" id="alltab-2">
                <li className={params.category_id === "" ? "active" : ""}>
                  <a
                    data-toggle="tab"
                    href="#home"
                    onClick={() => handleApproved("")}
                  >
                    {t("nav-submenu.artworks.artField.all")}
                  </a>
                </li>
                {categories?.map((item, key) => (
                  <li
                    key={key}
                    className={params.category_id === item.id ? "active" : ""}
                  >
                    <a
                      data-toggle="tab"
                      href="#home"
                      onClick={() => handleApproved(item.id)}
                    >
                      {i18n.language === "fa-IR"
                        ? item.translations.fa.title
                        : item.translations.en.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tab-content">
              <div id="artforgift1" className="tab-pane fade active in">
                <div className="row dir">
                  {promotions?.results?.map((item, index) => (
                    <div className="col-md-6 ">
                      <PromotionArtwork
                        callBack={callBack}
                        key={index}
                        item={item}
                        
                      />
                    </div>
                  ))}
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

export default DetailsPromotion;
