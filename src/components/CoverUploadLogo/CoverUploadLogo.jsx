import React from 'react';
import { Upload, message } from 'antd';
import { PRE_UPLOAD } from '../../utils/index';
import UploadAxios from '../../utils/uploadRequest';
import { t } from 'i18next';
import apiServices from '../../utils/api.services';

import logo_icon from '../../assets/img/logo-icon.png';
import edit_name from '../../assets/img/edit_name.svg';
const { Dragger } = Upload;

function OneUpload({ uploadList, setUploadList }) {

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

                            if (res.data.data.upload_url && (file?.type.split("/")[0] === "image")) {
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
                <div class="add-logo">
                    <img src={logo_icon} width="1079" height="1079" alt="" class="img-responsive" />
                    <label for="file-upload1" class="btn-add-logo pull-dir">
                        <img src={edit_name} width="32" height="32" alt="" class="" />
                    </label>
                </div>
              
            </Dragger>
        </React.Fragment>
    );
}

export default OneUpload;
