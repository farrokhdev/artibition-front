import { t } from 'i18next';
import React, {useEffect, useState} from 'react';
import hnrpqkfiup from '../../assets/img/mainpage/hnrpqkfiup@3x.jpg';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {follow} from "../../utils/utils";
import apiServices from "../../utils/api.services";
import {PRODUCTS_LAST} from "../../utils";
import queryString from "query-string";


export default function Suggestions({categories}) {
    const { t, i18n } = useTranslation();
    const [category, setCategory] = useState("");
    const [sugProducts, setSug] = useState([]);

    const getProductList = () => {
        apiServices
            .get(PRODUCTS_LAST, queryString.stringify({category: category}))
            .then((res) => {
                if (res.data) {
                    setSug(res.data.data.results);
                }
            })
            .catch((err) => {
                console.log("err", err);
            });
    };
    useEffect(() => {
        getProductList()
    }, [category])


    const callBack = () => {
        getProductList()
    }

    return (
        <div className="suggestions">
        <div className="row dir">
            <div className="col-sm-12">
                <h2 className="default-title text-dir">{t("suggestion-home.title")}</h2>
            </div>
            <div className="col-xs-12">
                <div className="default-tab tab-2 tab-interval">
                    <div className="tab-overflow">
                        <ul className="nav nav-tabs" id="alltab-2">
                            <li className={category === "" ? "active" : ""}>
                                <a data-toggle="tab" href="#home"  onClick={() => setCategory("")}>
                                    {t("nav-submenu.artworks.artField.all")}
                                </a></li>
                            {categories?.map((item, key) =>
                                <li key={key} className={category === item.id ? "active" : ""}>
                                    <a data-toggle="tab" href="#home" onClick={() => setCategory(item.id)}>
                                        {i18n.language === "fa-IR" ? item.translations.fa.title : item.translations.en.title}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div id="all" className="tab-pane fade in active">
                            <div style={{overflow : 'auto'}} className="owl-carousel d-flex" id="tab12">

                                {sugProducts?.map((product, key) =>
                                    <div key={key} className="cols  mx-4">
                                        <div className="col-img">
                                            <img

                                                src={product.medias && product.medias[0]?.exact_url}
                                                alt="artibition"
                                                className="img-responsive" />
                                            <div className="tab-overly">
                                                <Link to={`/site/artworks-detail/?id=${product.id}&artist_id=${product.artist_id}`} className="btn-see hidden-xs hidden-sm">
                                                    <span className="view-icon pull-right"></span>
                                                    <span>{t("artwork.view-artwork")}</span>
                                                </Link>
                                                <button type="button" className="btn-sale">
                                                    <span className="hidden-xs hidden-sm">{t("artwork.btn-action-to-shop")}</span>
                                                    <span className="shopping-cart-xs visible-xs visible-sm"></span>
                                                </button>
                                                <button type="button" className={`like-icon ${product?.likes ? "isLike" : ""}`}
                                                    // onClick={() => follow({activity:'like',content:'artist',object_id:product.artist_id})}
                                                        onClick={() =>
                                                            follow({
                                                                activity: "like",
                                                                content: "product",
                                                                object_id: product.id,
                                                                action: product?.likes,
                                                                callBack
                                                            })
                                                        }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-body">
                                            <h6 className="col-title">
                                                {i18n.language === 'fa-IR' ?
                                                    <span className="col-name">{product?.translations?.fa?.artist_name}</span>
                                                    :
                                                    <span className="col-name">{product?.translations?.en?.artist_name}</span>
                                                }
                                            </h6>
                                            <div className="col-dimension">
                                                <span className="col-dimension-title">ابعاد:</span>
                                                <span className="col-dimension-body">
                                      <span className="dimension-width">{product.width}</span>
                                      <span className="mx-2"> {t("card_artwork.size.in")} </span>
                                      <span className="dimension-height">{product.height}</span>
                                    </span>
                                            </div>
                                            <div className="col-price">
                                                <span className="col-price-num">{product.toman_price}</span>
                                                <span className="col-price-unit">{t("toman")}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}
