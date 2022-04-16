import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, message } from "antd";
import { Map, TileLayer, Marker } from "react-leaflet";

const MapModal = ({ showMap, setShowMap, point, setPoint }) => {
  console.log("🚀 ~ file: MapModal.jsx ~ line 7 ~ MapModal ~ showMap", showMap);
  console.log("🚀 ~ file: MapModal.jsx ~ line 7 ~ MapModal ~ point", point);
  const { t } = useTranslation();
  const [zoom, setZoom] = useState(11);
  return (
    <Modal visible={showMap} width={800} footer={[]}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            {t("payment.address_step.modal.title")}
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              setShowMap(false);
            }}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="modal-body">
          <Map
            center={["35.690655", "51.380518"]}
            zoom={zoom}
            onzoomend={(e) => setZoom(e.target._zoom)}
            style={{ width: "100%", height: "500px" }}
            onclick={(e) => {
              setPoint({ latitude: e.latlng.lat, longitude: e.latlng.lng });
            }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              // attribution="<a href=http://biithome.com>biit.home.com</a>"
            />

            <Marker
              position={
                point?.latitude && point?.longitude
                  ? [point?.latitude, point?.longitude]
                  : ["", ""]
              }
            >
              {/* <Popup>موقعیت خانه حراجی</Popup> */}
            </Marker>
          </Map>
        </div>

        <div className="modal-footer justify-content-center">
          <button
            type="button"
            className="btn btn-black"
            onClick={() => {
              setShowMap(false);
            }}
          >
            {t("payment.address_step.modal.confirm_btn")}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MapModal;
