import React from "react";
import { Button, Checkbox, Modal } from "antd";
import { useTranslation } from "react-i18next";

const ModalExistArtist = ({
  showExistArtist,
  setShowExistArtist,
  siteArtists,
  galleryArtists,
  handleChange,
  confirmAddArtist,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <Modal visible={showExistArtist} width={"800px"} footer={[]}>
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
              setShowExistArtist(false);
            }}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="modal-body text-dir">
          {siteArtists.map((artist, index) => {
            console.log(artist);
            return (
              <div
                className="d-flex"
                style={{ padding: "20px", margin: "20px 0" }}
              >
                <div
                  className="d-flex"
                  style={{
                    width: "40px",
                    height: "50px",
                    padding: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Checkbox
                    value={artist.id}
                    defaultChecked={galleryArtists.some(
                      (e) => e.id === artist.id
                    )}
                    disabled={galleryArtists.some((e) => e.id === artist.id)}
                    onChange={handleChange}
                  />
                </div>
                <div
                  className="d-flex"
                  style={{
                    width: "100px",
                    height: "50px",
                    padding: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={artist?.bg_image?.exact_url}
                    style={{ width: "70px" }}
                    alt="artist"
                  />
                </div>
                <div
                  className="d-flex"
                  style={{
                    flex: "1",
                    height: "50px",
                    padding: "10px",
                    alignItems: "center",
                    fontSize: "18px",
                  }}
                >
                  <p>
                    {" "}
                    {i18n.language === "fa-IR"
                      ? `${artist?.owner?.translations?.fa?.first_name} ${artist?.owner?.translations?.fa?.last_name}`
                      : `${artist?.owner?.translations?.en?.first_name} ${artist?.owner?.translations?.en?.last_name}`}{" "}
                  </p>
                </div>
              </div>
            );
          })}

          <div
            style={{
              position: "sticky",
              bottom: "0px",
              backgroundColor: "white",
              padding: "20px 0",
            }}
          >
            <Button
              className="btn btn-black"
              style={{ padding: "0 40px", height: "40px" }}
              onClick={confirmAddArtist}
            >
              تایید
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalExistArtist;
