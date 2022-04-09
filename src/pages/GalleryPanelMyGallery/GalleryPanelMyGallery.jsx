import React, { useEffect, useState } from "react";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import SidebarPanel from "../../components/SidebarPanel/SidebarPanel";
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

  // useEffect(() => {
  //     setTimeout(() => {
  //         setTest(!test)
  //     }, 500)
  //     apiServices.get("/account/profile/", "")
  // })

  return (
    <>
      <HeaderPanel t={t} />
      <div className="panel-style margin-top-20">
        <SidebarPanel />
        <div className="custom-container" style={{ minHeight: "820px" }}>
          <div className="row box-dir-reverse dir">
            <div className="col-md-8">
              <GalleryPanelMyGalleryList />
            </div>
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
