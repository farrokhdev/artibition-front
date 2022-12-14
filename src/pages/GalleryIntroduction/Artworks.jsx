import React, { useEffect, useState } from "react";
import artist2 from "../../assets/img/artists/artist-2.jpg";
import Filter from "../../assets/img/Filter.svg";
import Clear from "../../assets/img/clear.svg";
import FilterSidBarInArtworks from "./FilterSidBarInArtworks";
import { t } from "i18next";
import apiServices from "../../utils/api.services";
import { ARTIST_PRODUCTS, GALLERY_ALL_PRODUCT_LIST } from "../../utils";
import QueryString from "qs";
import { useTranslation } from "react-i18next";
import { follow } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
function Artworks({ id }) {
  const { t, i18n } = useTranslation();
  let navigate = useNavigate();
  const [galleryProducts, setGalleryProducts] = useState();
  // const [params, setParams] = useState({
  //   page: 1,
  //   // status: "active",
  //   // search: "",
  //   // gallery_id:id
  // });
  function callback(key) {
    console.log(key);
  }

  const getGalleryProducts = () => {
    apiServices
      .get(GALLERY_ALL_PRODUCT_LIST(id), "")
      .then((res) => {
        if (res.data) {
          setGalleryProducts(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getGalleryProducts();
  }, []);

  console.log("product", galleryProducts);

  return (
    <div id="gallery3" class="tab-pane fade in active">
      <div class="content-header">
        <div class="row">
          <div class="col-sm-3 col-xs-6">
            <div type="button" class="filter-btn">
              <img src={Filter} width="16" height="15" alt="" />
              <span>{t("artworkList.filter.title")}</span>
              <button class="btn clear-tag">
                <img src={Clear} width="10" height="10" alt="" />
                <span>{t("artworkList.filter.remove_all")}</span>
              </button>
            </div>
          </div>
          <div class="col">
            <div class="form-group pull-dir-rev">
              <select class="form-control" id="sel1">
                <option>{t("artworkList.filter.last_update")}</option>
                <option>{t("artworkList.filter.sell")}</option>
                <option>{t("artworkList.filter.visite")}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="content-body">
        <div class="row">
          <FilterSidBarInArtworks />
          <div class="col-md-9">
            {galleryProducts?.results?.map((artworks) => {
              return (
                <>
                  <div class="col-sm-4 col-xs-6">
                    <div class="cols">
                      <div class="col-img">
                        <img
                          src={artworks.medias[0]?.exact_url}
                          width="942"
                          height="1232"
                          alt="????????????????"
                          class="img-responsive"
                          style={{ height: 250 }}
                        />
                        <div class="tab-overly">
                          <a
                            onClick={() =>
                              navigate(
                                `/site/artworks-detail/?id=${artworks.id}&artist_id=${artworks.artist_id}`
                              )
                            }
                            class="btn-see"
                          >
                            <span class="view-icon pull-right"></span>
                            <span>{t("artwork.view-artwork")}</span>
                          </a>
                          <a href="#" class="btn-sale">
                            {t("artwork.btn-action-to-shop")}
                          </a>
                          <a
                            href="#"
                            class="like-icon"
                            onClick={() =>
                              follow({
                                content: "product",
                                activity: "like",
                                object_id: artworks?.id,
                              })
                            }
                          ></a>
                        </div>
                      </div>
                      <div class="col-body">
                        {i18n.language === "fa-IR" ? (
                          <>
                            <h6 className="col-title">
                              <span className="col-name">
                                {artworks.translations?.fa?.artist_name}
                              </span>
                              {/* <span className="col-name">??????????</span> */}
                            </h6>
                            <div className="col-dimension">
                              <span className="col-dimension-title">
                                ??????????:
                              </span>
                              <span className="col-dimension-body">
                                <span className="dimension-width">
                                  {artworks.width}
                                </span>
                                <span> ???? </span>
                                <span className="dimension-height">
                                  {artworks.height}
                                </span>
                              </span>
                            </div>
                            <div className="col-price">
                              <span className="col-price-num">
                                {artworks.items?.base_toman_price}
                              </span>
                              <span className="col-price-unit text-right">
                                ??????????
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <h6 className="col-title">
                              <span className="col-name">
                                {artworks.translations?.en?.artist_name}
                              </span>
                              {/* <span className="col-name">??????????</span> */}
                            </h6>
                            <div className="col-dimension">
                              <span className="col-dimension-title">
                                ??????????:
                              </span>
                              <span className="col-dimension-body">
                                <span className="dimension-width">
                                  {artworks.width}
                                </span>
                                <span> ???? </span>
                                <span className="dimension-height">
                                  {artworks.height}
                                </span>
                              </span>
                            </div>
                            <div className="col-price">
                              <span className="col-price-num">
                                {artworks.items?.base_dollar_price}
                              </span>
                              <span className="col-price-unit">$</span>
                            </div>
                          </>
                        )}
                        {/* <h6 class="col-title d-flex">
                                                    <span class="col-name">??????????</span>
                                                    <span class="col-name">??????????????</span>
                                                </h6>
                                                <div class="col-dimension d-flex">

                                                    <span class="col-dimension-title">??????????:</span>
                                                    <span class="col-dimension-body">
                                                        <span class="dimension-width">60</span>
                                                        <span> ???? </span>
                                                        <span class="dimension-height">60</span>
                                                    </span>
                                                </div>
                                                <div class="col-price d-flex">
                                                    <span class="col-price-num">22.000.000</span>
                                                    <span class="col-price-unit">??????????</span>
                                                </div> */}
                      </div>
                    </div>
                  </div>
                  <div class="clearfix visible-xs"></div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artworks;
