import React from "react";
import { Upload, message } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import { PRE_UPLOAD } from "../../utils/index";
import UploadAxios from "../../utils/uploadRequest";
import { t } from "i18next";
import apiServices from "../../utils/api.services";

const { Dragger } = Upload;

function MultipleUpload({ uploadList, setUploadList, defaultName }) {
  const propsUpload = {
    listType: "picture",

    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
      }
      if (status === "done") {
      } else if (status === "error") {
        info.fileList.filter((item) => item.uid !== info.file.uid);
        //if status error, image not added to list upload
        setUploadList(uploadList.filter((item) => item.uid !== info.file.uid));
      }

      return info;
    },

    beforeUpload : (file)=>{
           
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
      
        message.error({
          content: 'شما فقط می توانید فایل JPG / PNG را آپلود کنید! ', style: {
              marginTop: '110px',
          },
      })
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error({
          content: 'تصویر باید کوچکتر از 2 مگابایت باشد! ', style: {
              marginTop: '110px',
          },
      })
      }
      return isJpgOrPng && isLt2M;
  
},

    progress: {
      strokeColor: {
        "0%": "#e6007e",
        "100%": "#e6007e",
      },
      width: "50%",
      strokeWidth: 3,
      format: (percent) => `${parseFloat(percent.toFixed(2))}%`,
    },

    onRemove: (file) => {
      setUploadList(uploadList.filter((item) => item.uid !== file.uid));
    },

    showUploadList: {
      showDownloadIcon: false,
      downloadIcon: "download ",
      showRemoveIcon: true,
    },

    itemRender: (OriginNode, file, fileList, actions) => {
      return [
        OriginNode,
        <div className="default-checkbox-image-upload d-flex justify-content-end">
          <input
            onClick={(e) => defaultImageHandler(e, file.uid)}
            name="is_default"
            className="ml-1  mt-2"
            type="radio"
          />
          <span className="pb-2 mx-2">
            {defaultName ? defaultName : "عکس کاور"}
          </span>
        </div>,
      ];
    },
    defaultFileList: [],
  };

  // function for set default image between images that uploaded
  const defaultImageHandler = (e, uid) => {
    let newList = uploadList?.map((item) =>
      item.uid === uid
        ? { ...item, is_default: true }
        : { ...item, is_default: false }
    );

    setUploadList(newList);
  };

  return (
    <React.Fragment>
      <Dragger
        {...propsUpload}
        className="upload-list-inline"
        customRequest={async (e) => {
          const { file, onSuccess, onError } = e;

          await apiServices
            .post(PRE_UPLOAD, {
              // content_type :  file.type
              content_type: "image",
            })
            .then((res) => {
              console.log(res);
              onSuccess({ status: "success" });

              let uploadImage;
              uploadImage = {
                file_key: res.data.data.file_key,
                media_path: res.data.data.upload_url,
                type: "image",
                bucket_name: "image",
                is_default: uploadList?.length === 0 ? true : false,
                uid: file.uid,
              };

              if (
                res.data.data.upload_url &&
                file?.type.split("/")[0] === "image"
              ) {
                console.log("putttt");
                UploadAxios.put(res.data.data.upload_url, file)
                  .then((res) => {
                    console.log("uploadPUTTTT");
                    setUploadList([...uploadList, uploadImage]);
                    message.success({
                      content: "با موفقیت بارگذاری شد",
                      style: {
                        marginTop: "10vh",
                      },
                    });
                  })
                  .catch((err) => {
                    console.error(err);
                    onError({ status: "error" });
                    message.error({
                      content: "بارگذاری  با خطا مواجه شد.",
                      style: {
                        marginTop: "10vh",
                      },
                    });
                  });
              } else {
              }
            })
            .catch((err) => {
              console.error(err);
              onError({ status: "error" });
            });
        }}
      >
        <div className="upload-img-artwork">
          <div
            className="btn-upload-artwork"
            style={{ background: "none", border: "none" }}
          >
            <p className="ant-upload-drag-icon">
              <CloudUploadOutlined className="img-icon-upload-add-new-artwork" />
            </p>
            <p>
              {t("content-panel-add-artwork.upload.text")}
              <br />
              {t("content-panel-add-artwork.upload.or")}
            </p>
            <label htmlFor="file-upload" className="btn-blue w-25">
              {t("content-panel-add-artwork.upload.btn")}
            </label>
            <p className="upload-size">
              {" "}
              {t("content-panel-add-artwork.upload.tip")}
            </p>
          </div>
        </div>
      </Dragger>
    </React.Fragment>
  );
}

export default MultipleUpload;
