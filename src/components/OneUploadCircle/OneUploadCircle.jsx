import React from 'react';
import { Upload, message } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import { PRE_UPLOAD } from '../../utils/index';
import UploadAxios from '../../utils/uploadRequest';
import { t } from 'i18next';
import apiServices from '../../utils/api.services';
import avatar from "../../assets/img/avatar.png"
import { useState } from 'react';

const { Dragger } = Upload;

function OneUploadCircle({ uploadList, setUploadList }) {
    const [defaultList, setDefaultList] = useState([])

    const propsUpload = {
        maxCount: 1,
        listType: "picture-card",
        onChange({ file, fileList, event }) {
            setDefaultList(fileList);
        },

        // progress: {
        //     strokeColor: {
        //         "0%": "#e6007e",
        //         "100%": "#e6007e",
        //     },
        //     width: "50%",
        //     strokeWidth: 3,
        //     format: (percent) => `${parseFloat(percent.toFixed(2))}%`,
        // },

        onRemove: (file) => {
            setUploadList(uploadList.filter((item) => item.uid !== file.uid));
        },

        showUploadList: {
            showDownloadIcon: false,
            downloadIcon: "download ",
            showRemoveIcon: true,
            showPreviewIcon: false
        },

    };




    return (
        <React.Fragment>
            <Upload

                {...propsUpload}
                accept="image/*"
                className="ant-upload-circle d-block"
                defaultFileList={defaultList}
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

                {defaultList.length >= 1 ? null : <img src={avatar} style={{ width: "100%" }} />}



            </Upload>
        </React.Fragment>
    );
}

export default OneUploadCircle;
