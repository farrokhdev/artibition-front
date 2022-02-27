import { ARTIST_PRODUCTS, PRODUCTS_CATEGORIES } from "../../utils";

import queryString from "query-string";


import React, { useEffect, useState } from 'react';
import hnrpqkfiup from '../../assets/img/mainpage/hnrpqkfiup@3x.jpg';
import mainpage from '../../assets/img/mainpage/2.jpg';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import apiServices from '../../utils/api.services';
import QueryString from 'qs';
import { follow } from '../../utils/utils';
import { Link } from 'react-router-dom';

export default function AllProducts({categories}) {

  let navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [search, setSearch] = useState();
  const [productList, setProductList] = useState();
  const [params, setParams] = useState({
    status: "active",
    search: "",
    page: 1,
    category_id: ""
  })


  const getProductList = () => {
    apiServices
      .get(ARTIST_PRODUCTS, QueryString.stringify(params))
      .then((res) => {
        if (res.data) {
          setProductList(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const [categorieParams, setCategorieParams] = useState({
    page: 1,
  });


  const callBack = () => {
    getProductList()
  }

  const handleApproved = (e) => {
    setParams({
        ...params, category_id: e
    })
}

  useEffect(() => {
    getProductList()
  }, [params]);
  console.log("product", productList)

  return (
 

              <div className="allproducts">
                <div className="row">
                  <div className="public-header">
                    <div className="col-xs-8 visible-sm visible-xs">
                      <h2 className="default-title">آثار</h2>
                    </div>
                    <a href="#" className="btn-readmore pull-left" onClick={() => navigate('/site/artworks')}>{t("see-all")}</a>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-sm-12">
                    <div className="default-tab tab-1 tab-interval">
                      <div className="tab-overflow">
                        <ul className="nav nav-tabs alltab-1" id="alltab-1">
                          <li className={params.category_id === "" ? "active" : ""}>
                            <a data-toggle="tab" href="#home"  onClick={() => handleApproved("")}>
                              {t("nav-submenu.artworks.artField.all")}
                            </a></li>
                          {categories?.map((item, key) =>
                              <li key={key} className={params.category_id === item.id ? "active" : ""}>
                                <a data-toggle="tab" href="#home" onClick={() => handleApproved(item.id)}>
                                  {i18n.language === "fa-IR" ? item.translations.fa.title : item.translations.en.title}
                                </a>
                              </li>
                          )}
                        </ul>
                      </div>

                      <div className="tab-content dir">
                        <div id="home" className="tab-pane fade in active">

                          <div style={{ overflow: 'auto' }} className="owl-carousel d-flex" id="tab1">

                            {productList?.results?.map((product) =>
                              <div className="cols  mx-4">
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
                                    ></button>
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
                        <div id="menu1" className="tab-pane fade">
                          <h3>Menu 1</h3>
                          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo
                            consequat.</p>
                        </div>
                        <div id="menu2" className="tab-pane fade">
                          <h3>Menu 2</h3>
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium,
                            totam rem aperiam.</p>
                        </div>
                        <div id="menu3" className="tab-pane fade">
                          <h3>Menu 3</h3>
                          <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo.</p>
                        </div>

                      </div>
                    </div>
                </div>
              </div>
              <div id="menu1" className="tab-pane fade">
                <h3>Menu 1</h3>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div id="menu2" className="tab-pane fade">
                <h3>Menu 2</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
              <div id="menu3" className="tab-pane fade">
                <h3>Menu 3</h3>
                <p>
                  Eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>


        // </div >
    )

      //     </div>
      //   </div>
      // </div>
      // </div>
  // );

}
