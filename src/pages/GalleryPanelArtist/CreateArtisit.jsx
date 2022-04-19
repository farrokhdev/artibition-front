import React, { useEffect, useState } from "react";
import { t } from "i18next";

import whitePlus from "../../assets/img/plus-white.png";
import { Form, message } from "antd";
import apiServices from "../../utils/api.services";
import {
  ADD_ARTIST_TO_GALLERY,
  ARTIST,
  ARTIST_BY_GALLERY,
  GALLERY_ARTISTS,
} from "../../utils";
import queryString from "query-string";
import { useSelector } from "react-redux";
import ModalArtistSource from "../../components/GalleryPanelArtist/ModalArtistSource";
import ModalExistArtist from "../../components/GalleryPanelArtist/ModalExistArtist";
import ModalNewArtist from "../../components/GalleryPanelArtist/ModalNewArtist";

function CreateArtist() {
  const [showArtistSource, setShowArtistSource] = useState(false);
  const [showExistArtist, setShowExistArtist] = useState(false);
  const [showNewArtist, setShowNewArtist] = useState(false);
  const [siteArtists, setSiteArtists] = useState([]);
  const [galleryArtists, setGalleryArtists] = useState([]);
  const [uploadList, setUploadList] = useState([]);
  const [params, setParams] = useState({
    page_size: 9999999,
  });
  const [form] = Form.useForm();
  const { gallery_id } = useSelector((state) => state.galleryReducer);

  let selectedArtist = {
    artists_id_list: [],
  };

  galleryArtists.map((item) => {
    selectedArtist.artists_id_list.push(item.id);
  });

  const handleChange = (e) => {
    if (e.target.checked) {
      selectedArtist.artists_id_list.push(e.target.value);
    } else {
      const index = selectedArtist.artists_id_list.indexOf(e.target.value);
      selectedArtist.artists_id_list.splice(index, 1);
    }
  };
  const confirmAddArtist = () => {
    console.log(selectedArtist);
    apiServices
      .post(ADD_ARTIST_TO_GALLERY(gallery_id), selectedArtist)
      .then((res) => {
        if (res.data) {
          message.success({
            content: "با موفقیت انجام شد",
            style: { marginTop: "110px" },
          });
          setShowExistArtist(false);
          setShowArtistSource(false);
        } else {
          message.error({
            content: "عملیات موفقیت آمیز نبود",
            style: { marginTop: "110px" },
          });
        }
      })
      .catch((err) => {
        message.error({
          content: "عملیات موفقیت آمیز نبود",
          style: { marginTop: "110px" },
        });
        console.log(err);
      });
  };

  useEffect(() => {
    if (showExistArtist) {
      apiServices
        .get(GALLERY_ARTISTS(gallery_id), queryString.stringify(params))
        .then((res) => {
          if (res.data) {
            setGalleryArtists(res.data.data.results);
            console.log("galleryArtist", res.data.data.results);
          }
        })
        .catch((err) => {
          console.log(err);
        });

      apiServices
        .get(ARTIST, queryString.stringify(params))
        .then((res) => {
          if (res.data) {
            setSiteArtists(res.data.data.results);
          } else {
            message.error(res.response.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [showExistArtist]);

  useEffect(() => {
    console.log(siteArtists);
  }, [siteArtists]);

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
            // "biography": value.bio_fa ? value.bio_fa : null,
            // "first_name": value.name_fa ? value.name_fa : null,
            // "last_name": value.family_fa ? value.family_fa : null,
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

  return (
    <>
      <div className="box box-1 create-ex">
        <div className="pull-dir">
          <span className="bolder-title">
            {t("gallery-panel-artist.create_artist")}
          </span>
        </div>
        <button
          className="btn-box-1 btn-pink pull-left"
          onClick={() => {
            setShowArtistSource(true);
          }}
        >
          <img
            src={whitePlus}
            width="16"
            height="16"
            style={{ top: "2px" }}
            className="center-block"
            alt="plus"
          />
        </button>
        <div className="clearfix"></div>
      </div>
      <ModalArtistSource
        showArtistSource={showArtistSource}
        setShowArtistSource={setShowArtistSource}
        setShowExistArtist={setShowExistArtist}
        setShowNewArtist={setShowNewArtist}
      />
      <ModalExistArtist
        showExistArtist={showExistArtist}
        setShowExistArtist={setShowExistArtist}
        siteArtists={siteArtists}
        galleryArtists={galleryArtists}
        handleChange={handleChange}
        confirmAddArtist={confirmAddArtist}
      />
      <ModalNewArtist
        showNewArtist={showNewArtist}
        setShowNewArtist={setShowNewArtist}
        uploadList={uploadList}
        setUploadList={setUploadList}
        form={form}
        onFinishNewArtist={onFinishNewArtist}
      />
    </>
  );
}

export default CreateArtist;
