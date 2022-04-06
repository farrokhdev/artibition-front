import React, { useEffect, useState } from "react";
import i18next, { t } from "i18next";

import viewBlue from "../../assets/img/view-blue.svg";

import moment from "jalali-moment";

function GalleryPanelMyGalleryList({
  galleries,
  setGalleries,
  goToEditGallery,
  goToGalleryProfile,
}) {
  return (
    <div className="box artistpanel-5">
      <div className="public-header">
        <h2 className="default-title text-dir">
          {t("gallery-panel-my-gallery.title")}
        </h2>
      </div>
      <table className="table dir">
        <thead>
          <tr>
            <td>{t("gallery-panel-my-gallery.table.row")}</td>
            <td>{t("gallery-panel-my-gallery.table.logo")}</td>
            <td>{t("gallery-panel-my-gallery.table.gallery_name")}</td>
            <td>{t("gallery-panel-my-gallery.table.number_exhibition")}</td>
            <td>{t("gallery-panel-my-gallery.table.last_edition")}</td>
            <td>{t("gallery-panel-my-gallery.table.profile")}</td>
            <td>{t("gallery-panel-my-gallery.table.details")}</td>
          </tr>
        </thead>
        <tbody>
          {galleries?.map((gallery, galleryIndex) => {
            return (
              <tr>
                <td
                  data-label={t("gallery-panel-my-gallery.table.row")}
                  className="persian-num"
                >
                  {galleryIndex + 1}
                </td>
                <td data-label={t("gallery-panel-my-gallery.table.logo")}>
                  <img
                    src={gallery?.logo?.exact_url}
                    width="1776"
                    height="1776"
                    alt=""
                    className="img-responsive center-block"
                  />
                </td>
                <td
                  data-label={t("gallery-panel-my-gallery.table.gallery_name")}
                >
                  {i18next?.language === "fa-IR"
                    ? gallery?.translations?.fa?.title
                    : gallery?.translations?.en?.title}
                </td>
                <td
                  data-label={t(
                    "gallery-panel-my-gallery.table.number_exhibition"
                  )}
                >
                  {gallery?.exhibition_num}
                </td>
                <td
                  data-label={t("gallery-panel-my-gallery.table.last_edition")}
                >
                  {moment(gallery?.modified_date)
                    .locale(i18next?.language === "fa-IR" ? "fa" : "en")
                    .format("YYYY/MM/DD")}
                </td>
                <td
                  data-label={t("gallery-panel-my-gallery.table.profile")}
                  className="status"
                >
                  <button
                    onClick={() => {
                      goToGalleryProfile(gallery);
                    }}
                  >
                    <img
                      src={viewBlue}
                      width="18"
                      height="18"
                      alt=""
                      className=""
                    />
                  </button>
                </td>
                <td
                  data-label={t("gallery-panel-my-gallery.table.details")}
                  className="status"
                >
                  <button
                    className="btn-outline-blue"
                    onClick={() => {
                      goToEditGallery(gallery);
                    }}
                  >
                    {t("gallery-panel-my-gallery.table.edit")}
                  </button>
                  {/* <button type="button" className="btn-outline-blue">{t("gallery-panel-my-gallery.table.edit")}</button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GalleryPanelMyGalleryList;
