import React, { useEffect, useState } from "react";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import i18next, { t } from "i18next";
import BasketFooterPanelNoBox from "../GalleryPanelSelectArtworkSource/BasketFooterPanelNoBox";
import { useDispatch, useSelector } from "react-redux";
import add from "../../assets/img/add.png";
import add_white from "../../assets/img/add-white@2x.png";
import apiServices from "../../utils/api.services";
import {
  ARTIST_BY_GALLERY,
  EXHIBITION,
  EXHIBITION_INFO,
  EXHIBITION_PRODUCT,
  GALLERY_ARTISTS,
} from "../../utils";
import { Form, message } from "antd";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";
import {
  exhibitionForm,
  reduxSelectedArtworksFunc,
} from "../../redux/reducers/Exhibition/exhibition.action";
import ModalNewArtist from "../../components/GalleryPanelArtist/ModalNewArtist";
import ModalSelectArtworkSource from "../../components/GalleryPanelArtist/ModalSelectArtworkSource";
import ModalExistArtwork from "../../components/GalleryPanelArtist/ModalExistArtwork";
import ModalChangePrice from "../../components/GalleryPanelArtist/ModalChangePrice";

function GalleryPanelUploadExhibitionArtwork() {
  const { lastform } = useSelector((state) => state.exhibitionReducer);
  const [selectedArtistId, setSelectedArtistId] = useState(
    lastform?.artist ? lastform.artist : []
  );
  const [selectedArtists, setSelectedArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState();
  const [showNewArtist, setShowNewArtist] = useState(false);
  const [showSelectArtworkSource, setShowSelectArtworkSource] = useState(false);
  const [showExistArtwork, setShowExistArtwork] = useState(false);
  const [showChangePrice, setShowChangePrice] = useState(false);
  const [uploadList, setUploadList] = useState([]);
  const [selectedArtworks, setSelectedArtworks] = useState([]);
  const [artworkToChange, setArtworkToChange] = useState({});
  const [artistToChange, setArtistToChange] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { gallery_id } = useSelector((state) => state.galleryReducer);
  const { exhibitionId } = useSelector((state) => state.exhibitionReducer);
  const { editExhibitionMode } = useSelector(
    (state) => state.exhibitionReducer
  );
  const { reduxSelectedArtworks } = useSelector(
    (state) => state.exhibitionReducer
  );

  const [changePriceForm] = Form.useForm();

  const [params, setParams] = useState({
    page_size: 9999999,
  });

  const [form] = Form.useForm();

  const sendData = () => {
    let temp = [];
    reduxSelectedArtworks.map((item, index) => {
      temp.push(...item.selected);
    });
    lastform["product"] = temp;

    if (editExhibitionMode && gallery_id) {
      apiServices
        .patch(EXHIBITION_INFO(gallery_id, exhibitionId), lastform)
        .then((res) => {
          if (res.data) {
            message.success({
              content: "نمایشگاه با موفقیت ویرایش شد",
              style: { marginTop: "110px" },
            });
            dispatch(reduxSelectedArtworksFunc([]));
            dispatch(exhibitionForm({}));
            setTimeout(() => {
              navigate("/panel/exhibitions");
            }, 500);
          } else {
            console.log(res);
          }
        });
    } else {
      apiServices
        .post(EXHIBITION(gallery_id), lastform)
        .then((res) => {
          if (res.data) {
            message.success({
              content: "نمایشگاه با موفقیت ساخته شد",
              style: { marginTop: "110px" },
            });
            dispatch(reduxSelectedArtworksFunc([]));
            dispatch(exhibitionForm({}));
            setTimeout(() => {
              navigate("/panel/exhibitions");
            }, 500);
          } else {
            message.error({
              content: res.response.data.message,
              style: { marginTop: "110px" },
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const getExhibitionProduct = () => {
    editExhibitionMode &&
      apiServices
        .get(
          EXHIBITION_PRODUCT(gallery_id, exhibitionId),
          queryString.stringify(params)
        )
        .then((res) => {
          if (res.data) {
            const result = res.data.data.results;
            const temp = [];
            const artistsTemp = [];
            result.map((item) => {
              const data = {};
              data["id"] = item.id;
              data["selected"] = [];
              artistsTemp.push(item.id);
              item.product_item.map((product) => {
                data.selected.push({
                  product_id: product.product.id,
                  product_item_id: product.id,
                  reserved_dollar_price: product.reserved_dollar_price,
                  reserved_toman_price: product.reserved_toman_price,
                });
              });
              temp.push(data);
            });

            dispatch(reduxSelectedArtworksFunc(temp));
            setSelectedArtistId(artistsTemp);
          }
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const getGalleryArtists = () => {
    apiServices
      .get(GALLERY_ARTISTS(gallery_id), queryString.stringify(params))
      .then((res) => {
        if (res.data) {
          let filter = [];
          res.data.data.results.map((item) => {
            if (selectedArtistId.includes(item.id)) {
              filter.push(item);
            }
          });
          setSelectedArtists(filter);
        } else {
          message.error(res.response.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getExhibitionProduct();
    getGalleryArtists();
  }, []);

  const submitSelectedArtwork = () => {};

  const onFinishNewArtist = (value) => {
    if (uploadList.length > 0) {
      const payload = {
        translations: {
          en: {
            biography: value.bio_en,
            first_name: value.name_en,
            last_name: value.family_en,
          },
          fa: {
            biography: value.bio_fa ? value.bio_fa : value.bio_en,
            first_name: value.name_fa ? value.name_fa : value.name_en,
            last_name: value.family_fa ? value.family_fa : value.family_en,
          },
        },
        bg_image: {
          media_path: uploadList[0].media_path,
          file_key: uploadList[0].file_key,
          type: "image",
          bucket_name: "image",
        },
      };

      apiServices.post(ARTIST_BY_GALLERY(gallery_id), payload).then((res) => {
        if (res.data) {
          let temp = lastform;
          if (!temp.artist) {
            temp["artist"] = [];
          }
          temp?.artist?.push(res.data.data.id);
          dispatch(exhibitionForm(temp));
          setSelectedArtists([...selectedArtists, res.data.data]);
          setSelectedArtistId([...selectedArtistId, res.data.data.id]);
          setUploadList([]);
          form.resetFields();
          setShowNewArtist(false);
        } else {
          message.error(res.response.data.message);
        }
      });
    } else {
      message.error({
        content: t("add-new-artist-by-gallery.upload_avatar_error"),
        style: {
          marginTop: "110px",
        },
      });
    }
  };

  const changePriceFinish = (form) => {
    // let temp = selectedArtworks
    let temp = reduxSelectedArtworks;

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === artistToChange.id) {
        for (let j = 0; j < temp[i].selected.length; j++) {
          const element = temp[i].selected[j];
          if (
            element.product_id === artworkToChange.product_id &&
            element.product_item_id === artworkToChange.product_item_id
          ) {
            element.reserved_dollar_price = form.dollarPrice;
            element.reserved_toman_price = form.tomanPrice;
          }
        }
      }
    }
    dispatch(reduxSelectedArtworksFunc(temp));
  };

  return (
    <div>
      <div className="container container-fixed">
        <HeaderPanel t={t} />
        <div className="upload-exhibition-artist mrgt125">
          <h2 className="default-title aligncenter">
            {t("upload-exhibition-artwork.title")}
          </h2>

          {selectedArtists.map((artist) => {
            return (
              <div className=" artist-upload-row" key={artist?.id}>
                <div className="artist-name-row">
                  <div className="artist-avatar pull-dir">
                    <img
                      className="img-responsive"
                      src={artist?.bg_image?.exact_url}
                      height="192"
                      width="192"
                      alt=""
                    />
                  </div>
                  <h4 className="artists-name text-dir">
                    <span>
                      {i18next.language === "fa-IR"
                        ? artist.translations?.fa?.nick_name
                        : artist.translations?.en?.nick_name}
                    </span>
                  </h4>
                </div>
                <div className="clearfix"></div>
                <div className="row dir">
                  {reduxSelectedArtworks
                    ?.filter((artwork) => artwork.id === artist.id)
                    ?.map((artwork) => {
                      return artwork.selected.map(
                        (showArtwork, showArtworkIndex) => {
                          return (
                            <div
                              className="cols"
                              tabIndex="-1"
                              style={{ padding: "0 5px", cursor: "unset" }}
                              key={showArtworkIndex}
                            >
                              <div className="col-img">
                                <div className="tags tags-off persian-num">
                                  30 %
                                </div>
                                <img
                                  src="/static/media/hnrpqkfiup@3x.27cdebb9.jpg"
                                  width="200"
                                  height="200"
                                  alt="آرتیبیشن"
                                  className="img-responsive"
                                />
                              </div>
                              <div className="col-body text-dir dir">
                                <div className="col-price">
                                  <span className="col-price-num">
                                    {i18next.language === "fa-IR"
                                      ? showArtwork?.reserved_toman_price
                                      : showArtwork?.reserved_dollar_price}
                                  </span>
                                  <span className="col-price-unit">
                                    {t("upload-exhibition-artwork.price")}
                                  </span>
                                  <span
                                    className="edit-price"
                                    data-toggle="modal"
                                    data-target="modal-edit-price"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      setArtistToChange(artist);
                                      setArtworkToChange(showArtwork);
                                      changePriceForm.resetFields();
                                      setShowChangePrice(true);
                                    }}
                                  >
                                    <img
                                      src="/static/media/edit_name.952e3f26.svg"
                                      width="32"
                                      height="32"
                                      alt=""
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      );
                    })}

                  <div>
                    <button
                      style={{ width: "200px", height: "200px" }}
                      className="artist-upload addbtn"
                      onClick={() => {
                        setShowSelectArtworkSource(true);
                        setSelectedArtist(artist.id);
                      }}
                    >
                      <img
                        src={add}
                        width="36"
                        height="36"
                        alt=""
                        className="img-responsive"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <button
            type="button"
            className="btn-add-artist"
            onClick={() => {
              setShowNewArtist(true);
            }}
          >
            <img
              src={add_white}
              width="24"
              height="24"
              alt=""
              className="img-responsive"
            />
            <span>{t("upload-exhibition-artwork.new_artist")}</span>
          </button>
          <div className="adv-btn" style={{ backgroundColor: "white" }}>
            <div className="container">
              <button
                type="button"
                className="btn-next pull-dir-rev"
                onClick={() => {
                  sendData();
                }}
              >
                {t("upload-exhibition-artwork.confirm_gallery_info")}
              </button>
            </div>
          </div>
        </div>
        <ModalNewArtist
          showNewArtist={showNewArtist}
          setShowNewArtist={setShowNewArtist}
          uploadList={uploadList}
          setUploadList={setUploadList}
          form={form}
          onFinishNewArtist={onFinishNewArtist}
        />
        <ModalSelectArtworkSource
          showSelectArtworkSource={showSelectArtworkSource}
          setShowSelectArtworkSource={setShowSelectArtworkSource}
          setShowExistArtwork={setShowExistArtwork}
          selectedArtist={selectedArtist}
        />
        <ModalExistArtwork
          showExistArtwork={showExistArtwork}
          selectedArtists={selectedArtists}
          reduxSelectedArtworks={reduxSelectedArtworks}
          setSelectedArtworks={setSelectedArtworks}
          submitSelectedArtwork={submitSelectedArtwork}
          setShowExistArtwork={setShowExistArtwork}
        />
        <ModalChangePrice
          showChangePrice={showChangePrice}
          setShowChangePrice={setShowChangePrice}
          changePriceFinish={changePriceFinish}
          changePriceForm={changePriceForm}
          artworkToChange={artworkToChange}
        />
      </div>
      <BasketFooterPanelNoBox />
    </div>
  );
}

export default GalleryPanelUploadExhibitionArtwork;
