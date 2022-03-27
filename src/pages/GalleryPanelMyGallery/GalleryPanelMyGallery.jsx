import React from "react";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import SidebarPanel from "../../components/SidebarPanel/SidebarPanel";
import { t } from "i18next";
import GalleryPanelMyGalleryList from "./GalleryPanelMyGalleryList";
import CreateGallery from "./CreateGallery";
import BasketFooterPanel from "../../components/BasketFooterPanel/BasketFooterPanel";
import { useEffect } from "react";
import apiServices from "../../utils/api.services";
import { useState } from "react";

function GalleryPanelMyGallery() {
  const [test, setTest] = useState(false);
  const [galleries, setGalleries] = useState([]);

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
            {galleries.length > 0 ? (
              <div className="col-md-8">
                <GalleryPanelMyGalleryList
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
