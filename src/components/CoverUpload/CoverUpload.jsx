import React from 'react';
import { Upload, message } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import { PRE_UPLOAD } from '../../utils/index';
import UploadAxios from '../../utils/uploadRequest';
import { t } from 'i18next';
import apiServices from '../../utils/api.services';
import add_icon from '../../assets/img/add_pic.svg';
import download from '../../assets/img/download.svg'

const { Dragger } = Upload;

function OneUpload({ uploadList, setUploadList, Example_word }) {

    const propsUpload = {
        maxCount: 1,
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

        // itemRender: (OriginNode, file, fileList, actions) => {
        //   return [
        //     OriginNode,
        //     <div className="default-checkbox-image-upload d-flex justify-content-end">
        //       <input
        //         onClick={(e) => defaultImageHandler(e, file.uid)}
        //         name="is_default"
        //         className="ml-1  mt-2"
        //         type="radio"
        //       />
        //       <span className="pb-2 mx-2">عکس کاور</span>
        //     </div>,
        //   ];
        // },
        defaultFileList: []
    };

    // function for set default image between images that uploaded
    // const defaultImageHandler = (e, uid) => {
    //     let newList = uploadList?.map((item) =>
    //         item.uid === uid
    //             ? { ...item, is_default: true }
    //             : { ...item, is_default: false }
    //     );

    //     setUploadList(newList);
    // };



    return (
        <React.Fragment>
            <Dragger

                {...propsUpload}
                className="upload-list-inline"
                customRequest={async (e) => {
                    const { file, onSuccess, onError } = e;

                    await apiServices
                        .post(PRE_UPLOAD, {
                            content_type: "image",
                        })
                        .then((res) => {
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
                            if (res.data.data.upload_url && (file?.type.split("/")[0] === "image" || "application")) {
                                // console.log("putttt");
                                UploadAxios.put(res.data.data.upload_url, file)
                                    .then((res) => {
                                        // console.log("uploadPUTTTT");
                                        // setUploadList([...uploadList, uploadImage]);
                                        setUploadList([uploadImage]);
                                        message.success({
                                            content: 'با موفقیت بارگذاری شد', style: {
                                                marginTop: '110px',
                                            },
                                        })
                                    })
                                    .catch((err) => {
                                        console.error(err);
                                        onError({ status: "error" });
                                        message.error({
                                            content: 'بارگذاری  با خطا مواجه شد.', style: {
                                                marginTop: '10vh',
                                            },
                                        })
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
                {Example_word ?
                    <button type="button" class="btn">

                        <img src={download} width="12" height="14" alt="" class="" />
                        <span>فایل قرار داد</span>
                    </button>
                    :
                    <div class="btn-upload-artwork no-cursor" style={{ background: 'none', border: 'none' }}>
                        <label for="file-upload" class="btn-outline-blue addcover dir">
                            <img src={add_icon} width="20" height="18" alt="" class="" />
                            {t("gallery-panel-edit-gallery-info.add_cover_photo")}
                        </label>
                    </div>
                }
            </Dragger>
        </React.Fragment>
    );
}

export default OneUpload;
