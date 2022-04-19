import React from "react";
import { Modal } from "antd";
import { useTranslation } from "react-i18next";

const ModalArtistSource = ({
  showArtistSource,
  setShowArtistSource,
  setShowExistArtist,
  setShowNewArtist,
}) => {
  const { t } = useTranslation();
  return (
    <Modal visible={showArtistSource} width={"800px"} footer={[]}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            {t("gallery-panel-create-exhibition.add_new_artist.title")}
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              setShowArtistSource(false);
            }}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="modal-body">
          <div className="adv-btn" style={{ flexDirection: "column" }}>
            <button
              type="button"
              className="btn-black center-block"
              data-target="#exist-artworks"
              data-toggle="modal"
              onClick={() => {
                setShowExistArtist(true);
              }}
            >
              انتخاب از هنرمندان سایت
            </button>
            <button
              type="button"
              className="btn-black center-block mrgt16"
              data-target="#modal-import { useLocation } from 'react-router-dom';edit-price"
              data-toggle="modal"
              onClick={() => {
                setShowNewArtist(true);
              }}
            >
              اضافه کردن هنرمند جدید
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalArtistSource;
