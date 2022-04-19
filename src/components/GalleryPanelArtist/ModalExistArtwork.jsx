import { Modal } from "antd";
import React from "react";
import i18next from "i18next";
import ExistArtworkCollection from "../../pages/GalleryPanelUploadExhibitionArtwork/ExistArtworkCollection";

const ModalExistArtwork = ({
  showExistArtwork,
  selectedArtists,
  reduxSelectedArtworks,
  setSelectedArtworks,
  submitSelectedArtwork,
  setShowExistArtwork,
}) => {
  return (
    <Modal visible={showExistArtwork} width={"100vw"} footer={[]}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            {"انتخاب آثار"}
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              setShowExistArtwork(false);
            }}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="modal-body">
          <div className="container">
            {selectedArtists.map((artist, index) => {
              return (
                <div className="exist-artwork-row">
                  <div className="artist-name-row">
                    <div className="artist-avatar pull-right">
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
                          ? `${artist?.owner?.translations?.fa?.first_name} ${artist?.owner?.translations?.fa?.last_name}`
                          : `${artist?.owner?.translations?.en?.first_name} ${artist?.owner?.translations?.en?.last_name}`}
                      </span>
                    </h4>
                  </div>
                  <div className="artist-artworks-row advisory-select">
                    <ExistArtworkCollection
                      artistID={artist.id}
                      selectedArtwork={reduxSelectedArtworks}
                      setSelectedArtwork={setSelectedArtworks}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="adv-btn" style={{ backgroundColor: "white" }}>
            <div className="container">
              <button
                type="button"
                className="btn-next pull-left"
                onClick={submitSelectedArtwork}
              >
                تایید و ادامه
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalExistArtwork;
