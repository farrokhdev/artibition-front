import React, { useEffect, useState } from "react";

import artist1 from "../../assets/img/artists/artist-1.jpg";
import artist2 from "../../assets/img/artists/artist-2.jpg";
import artist3 from "../../assets/img/artists/artist-3.jpg";
import artist4 from "../../assets/img/artists/artist-4.jpg";
import artist5 from "../../assets/img/artists/artist-5.jpg";
import artist6 from "../../assets/img/artists/artist-6.jpg";
import artist7 from "../../assets/img/artists/artist-7.jpg";
import artist8 from "../../assets/img/artists/artist-8.jpg";
import artist9 from "../../assets/img/artists/artist-9.jpg";
import artist10 from "../../assets/img/artists/artist-10.jpg";
import apiServices from "../../utils/api.services";
import { ARTIST_PRODUCTS } from "../../utils";
import queryString from "query-string";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ArtworksTab({ artistId, translations }) {
  const { t, i18n } = useTranslation();

  const [search, setSearch] = useState();
  const [artistArts, setArtistArts] = useState();

  console.log("artistId", artistId);
  const [params, setParams] = useState({
    // search: "",
    page: 1,
    artist_id: artistId,
    status: "active",
  });
  const getArtistArts = () => {
    console.log("params" , params);
    apiServices
      .get(ARTIST_PRODUCTS, queryString.stringify(params))
      .then((res) => {
        if (res.data) {
          setArtistArts(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    if (artistId) {
      getArtistArts();
    }
  }, [params]);

  useEffect(() => {
    if (artistId) {
      setParams((state) => ({ ...state, artist_id: artistId }));
    }
  }, [artistId]);
  console.log("iddddd", artistArts?.results);

  return (
    <div id="artist1" className="tab-pane fade in active">
      <div className="content-header">
        <div className="d-flex">
          <div className="col ">
            <div className="d-flex justify-custom box-dir-reverse">
              <div className="form-group pull-dir">
                <select className="form-control text-dir" id="sel1">
                  <option>{t("artworkList.filter.last_update")}</option>
                  <option>{t("artworkList.filter.sell")}</option>
                  <option>{t("artworkList.filter.visite")}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-body">
        <div className="d-flex">
          {artistArts?.results?.map((item, index) => (
            <>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="cols">
                  <Link
                    to={`/site/artworks-detail/?id=${item?.id}&artist_id=${item?.artist_id}`}
                  >

                    <div className="col-img">
                      <img
                        src={item.medias[0]?.exact_url}
                        width="280"
                        height="280"
                        alt="آرتیبیشن"
                        className="img-responsive"
                      />

                      <div className="tab-overly">
                        <a href="#" className="btn-see">
                          <span className="view-icon pull-right"></span>
                          <span>{t("card_artwork.veiw")}</span>
                        </a>
                        <a href="#" className="btn-sale">
                          {t("card_artwork.request_buy")}
                        </a>
                        <a href="#" className="like-icon"></a>
                      </div>
                    </div>
                  </Link>
                  <div className="col-body ">
                    <h6 className="col-title text-dir">
                      {i18n.language === "fa-IR" ? (
                        <>
                          <span className="col-name">
                            {item.translations?.fa?.artist_name}
                          </span>
                          {/* <span className="col-name">{translations?.fa?.last_name}</span> */}
                        </>
                      ) : (
                        <>
                          <span className="col-name">
                            {item.translations?.en?.artist_name}
                          </span>
                          {/* <span className="col-name">{translations?.en?.last_name}</span> */}
                        </>
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
                              {item?.width}
                            </span>
                            <span className="mx-2">
                              {t("card_artwork.size.in")}
                            </span>
                            <span className="dimension-height ">
                              {item?.height}
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="col-price text-dir">
                      <div className="d-flex box-dir-reverse">
                        <span className="col-price-num">22.000.000</span>
                        <span className="col-price-unit">{t("toman")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="clearfix "></div> */}
            </>
          ))}

        </div>
      </div>
    </div >
  );
}

export default ArtworksTab;
