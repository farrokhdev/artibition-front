import React from "react";
import { t } from "i18next";
import { Modal } from "antd";
import { Link } from "react-router-dom";

const ModalSelectArtworkSource = ({
  showSelectArtworkSource,
  setShowSelectArtworkSource,
  setShowExistArtwork,
  selectedArtist,
}) => {
  return (
    <Modal visible={showSelectArtworkSource} width={800} footer={[]}>
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
              setShowSelectArtworkSource(false);
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
                setShowExistArtwork(true);
              }}
            >
              انتخاب از آثار موجود
            </button>
            <Link
              to={`/panel/add-artwork?artist_id=${selectedArtist}`}
              className="btn-black center-block mrgt16"
              state={{ from: "/panel/upload-exhibition-artwotk" }}
            >
              افزودن اثر جدید
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSelectArtworkSource;
