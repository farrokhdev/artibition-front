import React, { useState } from 'react';
import { t } from 'i18next';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import { Form, Input, Button, Space, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import apiServices from '../../utils/api.services';
import download from '../../assets/img/download.svg'
import Example_word from '../../assets/word/Example_word.docx'
import CoverUpload from '../../components/CoverUpload/CoverUpload';
import { SELLERS_REQUEST } from '../../utils';
function BecomeSeller() {

    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [uploadList, setUploadList] = useState([]);
    const onFinish = (values) => {
        let payload = {
            "agreement_doc": uploadList[0],
            
        }

        apiServices.post(SELLERS_REQUEST, payload)
            .then(res => {
                if (res.data) {
                    setTimeout(() => {
                        navigate("/panel/profile")
                        message.success({
                            content: 'اطلاعات شما با موفقیت ثبت شد', style: {
                                marginTop: '110px',
                            },
                        })
                    }, 500);

                } else {
                    message.error({
                        content: 'اطلاعات کامل نیست', style: {
                            marginTop: '110px',
                        }
                    })
                }
            })
    }

    return (
        <>
            <HeaderPanel t={t} />
            <Form
                className=""
                form={form}
                onFinish={onFinish}
            >
                <div className="panel-style container mx-auto px-0 w-100 bg-white ">
                    <div class="artist-info mt-5">
                        <h2 class="adv-title">تکمیل اطلاعات فروشنده</h2>
                        <p>
                            جهت تکمیل اطلاعات درخواست  خود لطفا فایل قرارداد را دانلود نموده.
                            <br />
                            و پس از تکمیل مجددا آپلود نمایید
                        </p>
                        <a href={Example_word} download={true} className="text-secondary m-0">
                            <button type="button" class="btn">

                                <img src={download} width="12" height="14" alt="" class="" />
                                <span>فایل قرار داد</span>
                            </button>
                        </a>

                    </div>
                    <div className="artist-info mt-5 pt-5">
                        <h5 class="adv-title">آپلود اطلاعات فروشنده</h5>
                        <p>فایل تکمیل شده خود را آپلود کنید</p>
                        <CoverUpload setUploadList={setUploadList} uploadList={uploadList} Example_word={Example_word}/>
                    </div>

                </div>
                <button htmlType="submit" className="btn-black center-block mt-5">{t("gallery-panel-edit-gallery-info.btn_confirm_info")}</button>

            </Form>

        </>
    );
}

export default BecomeSeller;