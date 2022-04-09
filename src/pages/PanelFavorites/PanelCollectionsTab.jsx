import React, { useState, useEffect } from "react";
import { DELETE_FOLLOW, FOLLOW_COLLECTIONS } from "../../utils";
import apiServices from "../../utils/api.services";
import queryString from "query-string";
import { useSelector } from "react-redux";
import { message, Pagination } from "antd";
import { t } from "i18next";
import Slider from "react-slick";
import { follow } from "../../utils/utils";

function PanelCollectionsTab() {
  const { roles } = useSelector((state) => state.authReducer);
  const [followCollections, setFollowCollections] = useState([]);
  const [params, setParams] = useState({
    activity_type: "following",
    content_type: "collection",
  });

  const SliderSetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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

  const getFollowers = () => {
    apiServices
      .get(FOLLOW_COLLECTIONS, queryString.stringify(params))
      .then((res) => {
        if (res.data) {
          setFollowCollections(res.data.data.results);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const callBack = () => {
    getFollowers();
  };

  useEffect(() => {
    getFollowers();
  }, []);

  return (
    <>
      <div className="collection-block">
        {followCollections?.length ? (
          followCollections?.map((collections) => {
            return (
              <>
                {console.log("followCollectionsssss", followCollections)}
                {console.log("followCollectionsssss1", collections)}

                <div className="collection-block-header">
                  <div className="d-flex box-dir-reverse">
                    <div className="d-block col-xs-9 px-0">
                      <div className="d-flex pull-dir">
                        <div className="col">
                          <h3 className="artist-title text-dir">
                            {collections?.translations?.fa?.title}
                          </h3>
                          <span className="collection-artistname text-dir">
                            {collections?.translations?.fa?.description}
                          </span>
                          <button
                            type="button"
                            className="btn-follow followed px-5"
                            onClick={() =>
                              follow({
                                content: "collection",
                                activity: "following",
                                object_id: collections?.id,
                                action: collections?.follow,
                                callBack,
                              })
                            }
                          >
                            {t("artwork.following")}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-3">
                      <div className="d-flex btn-readmore box-dir-reverse ">
                        {t("see-all")}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>

                <Slider {...SliderSetting} className="mrgt20">
                  {collections?.products?.length &&
                    collections?.products?.map((item, index) => (
                      <div className="cols" key={index}>
                        <div className="col-img" style={{ marginLeft: "20px" }}>
                          <img
                            src={item.medias[0]?.exact_url}
                            width="840"
                            height="840"
                            alt="آرتیبیشن"
                            className="img-responsive"
                          />
                        </div>
                      </div>
                    ))}
                </Slider>
                {/* </div> */}
              </>
            );
          })
        ) : (
          <tr>
            <td>{t("no-data")}</td>
          </tr>
        )}
      </div>
      {followCollections?.length ? (
        <div className=" row-pagination">
          <Pagination total={50} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default PanelCollectionsTab;
