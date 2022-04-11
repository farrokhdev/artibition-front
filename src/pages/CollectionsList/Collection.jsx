import React from "react";
import i18next, { t } from "i18next";
import Slider from "react-slick";

import Artwork1 from "../../assets/img/mainpage/hnrpqkfiup@3x.jpg";
import { useTranslation } from "react-i18next";
import { follow } from "../../utils/utils";
import { Link, useNavigate } from "react-router-dom";

const SliderSetting = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  // rtl: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Collection({ collectionItem, getArtistCategory }) {
  const { t, i18n } = useTranslation();
  let navigate = useNavigate();

  const callBack = () => {
    getArtistCategory();
  };

  return (
    <div className="collection-list-row">
      <div className="row text-dir dir">
        <div className="col-sm-9">
          <h4 className="fontbold19 justify-content-unset">
            {i18n.language === "fa-IR"
              ? collectionItem?.translations?.fa?.title
              : collectionItem?.translations?.en?.title}
          </h4>
          <span className="collection-artistname">
            {i18n.language === "fa-IR"
              ? collectionItem?.owner?.translations?.fa?.first_name +
                " " +
                collectionItem?.owner?.translations?.fa?.last_name
              : collectionItem?.owner?.translations?.en?.first_name +
                " " +
                collectionItem?.owner?.translations?.en?.last_name}
          </span>

          {/* <button type="button" className={`like-icon ${product?.likes ? "isLike" : ""}`}
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
                                    ></button> */}

          <button
            type="button"
            className={`pull-dir btn-follow followed ${
              collectionItem?.follow ? "" : "followed"
            }`}
            onClick={() =>
              follow({
                activity: "following",
                content: "collection",
                action: collectionItem?.follow,
                object_id: collectionItem.id,
                callBack,
              })
            }
          >
            {t("collections-list.follow")}
          </button>
        </div>
        <div className="col-sm-3">
          <a
            href="#"
            className="btn-readmore pull-dir-rev"
            data-toggle="modal"
            data-target="#modal-listalbum2"
          >
            {t("collections-list.view_all")}
          </a>
        </div>
      </div>

      <Slider {...SliderSetting} className="mrgt20 dir">
        {collectionItem?.products?.map((item, index) => {
            
         
            return(
          <div className="cols" key={index}>
            <div
              className="col-img"
              style={
                i18next.language === "fa-IR"
                  ? { marginLeft: "20px" }
                  : { marginRight: "20px" }
              }
            >
              <img
                src={item.medias[0]?.exact_url}
                width="840"
                height="840"
                alt="آرتیبیشن"
                className="img-responsive"
              />

              <div className="tab-overly dir">
                <a
                  onClick={() =>
                    navigate(`/site/artworks-detail/?id=${item?.id}`)
                  }
                  className="btn-see"
                >
                  <span className="view-icon pull-dir"></span>
                  <span>{t("collections-list.view")}</span>
                </a>
                <Link to="#" className="btn-sale">
                  {t("collections-list.shop_now")}
                </Link>
                {/* <button
                  className={"like-icon " + (item?.likes ? "isLike" : "")}
                  onClick={() =>
                    follow({
                      content: "product",
                      activity: "like",
                      object_id: item?.id,
                      action: item?.likes,
                      callBack,
                    })
                  }
                ></button> */}
              </div>
            </div>
          </div>
        )})}
        {/* <div className="cols">
                    <div className="col-img" style={{ marginLeft: "20px" }}>
                        <img src={Artwork1} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
                        <div className="tab-overly dir">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-dir"></span>
                                <span>{t("collections-list.view")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("collections-list.shop_now")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                </div>
                <div className="cols">
                    <div className="col-img" style={{ marginLeft: "20px" }}>
                    <div class="tags tags-spacial">{t("collections-list.special")}</div>
                        <img src={Artwork1} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
                        <div className="tab-overly dir">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-dir"></span>
                                <span>{t("collections-list.view")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("collections-list.shop_now")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                </div>
                <div className="cols">
                    <div className="col-img" style={{ marginLeft: "20px" }}>
                        <img src={Artwork1} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
                        <div className="tab-overly dir">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-dir"></span>
                                <span>{t("collections-list.view")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("collections-list.shop_now")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                </div>
                <div className="cols">
                    <div className="col-img" style={{ marginLeft: "20px" }}>
                        <img src={Artwork1} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
                        <div className="tab-overly dir">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-dir"></span>
                                <span>{t("collections-list.view")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("collections-list.shop_now")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                </div>
                <div className="cols">
                    <div className="col-img" style={{ marginLeft: "20px" }}>
                        <img src={Artwork1} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
                        <div className="tab-overly dir">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-dir"></span>
                                <span>{t("collections-list.view")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("collections-list.shop_now")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                </div> */}
      </Slider>
    </div>
  );
}

export default Collection;
