import React from "react";
import copy_icon from "../../assets/img/copy-share.png";
import { Modal, message } from "antd";
import {
  TelegramShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";
const ModalShare = ({ showShare, setShowShare }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    message.success({
      content: "با موفقیت کپی شد",
      style: { marginTop: "110px" },
    });
  };
  return (
    <Modal visible={showShare} width={600} footer={[]}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            اشتراک گذاری
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              setShowShare(false);
            }}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="modal-body">
          <div className="d-flex">
            <p
              style={{
                fontSize: "18px",
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              شما می توانید با استفاده از روش های زیر صفحه مورد نطر خود را با
              دوستان خود به اشتراک بگذارید
            </p>
          </div>
          <div
            className="row"
            style={{ marginBottom: "50px", justifyContent: "center" }}
          >
            <div className="col-6 col-sm-3 mt-3 mt-sm-0">
              <div className="d-flex justify-content-end justify-content-sm-center">
                <TelegramShareButton url={window.location.href}>
                  <TelegramIcon />
                </TelegramShareButton>
              </div>
            </div>
            <div className="col-6 col-sm-3 mt-3 mt-sm-0">
              <div className="d-flex justify-content-start justify-content-sm-center">
                <WhatsappShareButton url={window.location.href}>
                  <WhatsappIcon />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p
              style={{
                fontSize: "18px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              یا از طریق دکمه زیر لینک صفحه مورد نظر را کپی کنید
            </p>
          </div>
          <div className="row justify-content-center">
            <div
              id="box_copyLink"
              className="col-3 px-0"
              style={{ textAlign: "center" }}
            >
              <button
                onClick={() => {
                  copyToClipboard();
                }}
                style={{
                  padding: "15px 15px !important",
                  border: "1px solid black",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <p
                  className="mb-0"
                  style={{ fontSize: "18px", display: "inline-block" }}
                >
                  کپی لینک
                </p>
                <img
                  src={copy_icon}
                  alt="icon_CopyLink_share"
                  style={{
                    width: "20px",
                    display: "inline-block",
                    margin: "0 7px",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalShare;
