import React, { useEffect, useState } from "react";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import SidebarPanel from "../../components/SidebarPanel/SidebarPanel";
import { useDispatch, useSelector } from "react-redux";
import { t } from "i18next";
import GalleryPanelMyGalleryList from "./GalleryPanelMyGalleryList";
import CreateGallery from "./CreateGallery";
import BasketFooterPanel from "../../components/BasketFooterPanel/BasketFooterPanel";
import apiServices from "../../utils/api.services";

import {
  editGalleryModeFunc,
  galleryId,
  galleryProfile,
} from "../../redux/reducers/Gallery/gallery.actions";
import { useNavigate } from "react-router-dom";
import { setProfile } from "../../redux/reducers/auth/auth.actions";
import artwork1 from "../../assets/img/artworks/artwork-1.jpg";
import { Link } from "react-router-dom";

import authReducer from "../../redux/reducers/auth/auth.reducer";

import { GALLERY_LIST } from "../../utils";
import { message } from "antd";
import queryString from "query-string";

function GalleryPanelMyGallery() {
  const [test, setTest] = useState(false);
  const [galleries, setGalleries] = useState([]);

  // useEffect(() => {
  //     setTimeout(() => {
  //         setTest(!test)
  //     }, 500)
  //     apiServices.get("/account/profile/", "")
  // })

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToGalleryProfile = (gallery) => {
    dispatch(galleryId(gallery.id));
    dispatch(galleryProfile(gallery));
    dispatch(setProfile({ roles: "gallery" }));
    navigate("/panel/dashboard");
  };

  const goToEditGallery = (gallery) => {
    dispatch(galleryId(gallery.id));
    dispatch(galleryProfile(gallery));
    dispatch(editGalleryModeFunc(true));
    dispatch(setProfile({ roles: "gallery" }));
    navigate("/panel/gallery-info");
  };

  const { id } = useSelector((state) => state.authReducer);

  console.log(id);
  const [params, setParams] = useState({
    owner_id: id,
  });

  useEffect(() => {
    console.log(params);
    apiServices
      .get(GALLERY_LIST, queryString.stringify(params))
      .then((res) => {
        if (res.data) {
          console.log(res.data.data.results);
          setGalleries(res.data.data.results);
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
  }, []);

  return (
    <>
      <HeaderPanel t={t} />
      <div className="panel-style margin-top-20">
        <SidebarPanel />
        <div className="custom-container" style={{ minHeight: "820px" }}>
          <div className="row box-dir-reverse dir">
            {galleries.length > 0 ? (
              <div className="col-md-8">
                <GalleryPanelMyGalleryList
                  goToEditGallery={goToEditGallery}
                  goToGalleryProfile={goToGalleryProfile}
                  galleries={galleries}
                  setGalleries={setGalleries}
                />
              </div>
            ) : (
              ""
            )}
            <div className="col-md-4">
              <CreateGallery />
            </div>
          </div>
        </div>
        <BasketFooterPanel />
      </div>
    </>
  );
}

export default GalleryPanelMyGallery;
