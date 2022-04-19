import React, { useState } from "react";
import i18next, { t } from 'i18next';
import { Form, Input, message } from 'antd';
import { GetLanguage } from "../../utils/utils";
import { useDispatch, useSelector } from 'react-redux';
import apiServices from "../../utils/api.services";
import { ADVISOR } from "../../utils";
import { useNavigate } from "react-router-dom";
import { chooseProduct as EditingchooseProduct } from '../../redux/reducers/advistory/advistory.action';
import { advistoryForm as EditingAdvistoryForm } from '../../redux/reducers/advistory/advistory.action';

function ExtraDescriptionStep({ prev, next }) {

    const [form] = Form.useForm();
    const dispach = useDispatch();
    const navigate = useNavigate();
    const { TextArea } = Input;
    const { chooseProducts, advistoryform } = useSelector((state) => state.advistoryReducer)

    const onFinish = (values) => {
        let payload = {
            ...advistoryform,
            "translations": {
                // "en": {
                //     "describtion": i18next.language === 'fa-IR' ? "" : values?.describtion

                // },
                "fa": {
                    "describtion": values?.describtion
                }
            },
            "products_id": chooseProducts
        }

        if (payload?.category_id) {
            payload["category_id"] = [payload?.category_id]
        }


        // apiServices.post(ADVISOR, payload)
        //     .then(res => {
        //         if (res.data) {
        //             setTimeout(() => {
        //                 navigate("/")
        //                 message.success({
        //                     content: 'اطلاعات شما با موفقیت ثبت شد', style: {
        //                         marginTop: '110px',
        //                     },
        //                 })
        //             }, 500);

        //         } else {
        //             message.error({
        //                 content: 'اطلاعات کامل نیست', style: {
        //                     marginTop: '110px',
        //                 }
        //             })
        //         }
        //     })

        apiServices.post(ADVISOR, payload)
            .then(res => {
                if (res.data) {
                    navigate("/")
                    dispach(EditingchooseProduct([]))
                    dispach(EditingAdvistoryForm({}))
                    message.success({
                        content: 'اطلاعات شما با موفقیت ثبت شد', style: {
                            marginTop: '110px',
                        },
                    })

                } else {
                    message.error({
                        content: 'خطا در ثبت اطلاعات', style: {
                            marginTop: '10vh'
                        }
                    })
                }

            })
            .catch(err => {
                console.log(err);
            })
    }
    console.log("onFinish", onFinish);
    return (
        <>
            <Form
                className=""
                form={form}
                onFinish={onFinish}
            >

                <div className="container advisory-select mrgt0">
                    <div className="row">
                        <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
                            <div className="adv-content">
                                <h2 className="adv-title">{t("advisory.extra_description_step.title")}</h2>
                                <p className="aligncenter">{t("advisory.extra_description_step.description")}</p>
                            </div>
                        </div>
                        <div className="mrgt64 col-md-6 mx-auto">
                            <div className="form-group">
                                <Form.Item name="describtion">
                                    <TextArea required={GetLanguage() === 'fa-IR' ? true : false} rows={"8"} className="form-control text-align-dir" placeholder={t("advisory.extra_description_step.description_placeholder")} />
                                </Form.Item>
                                {/* <textarea className="form-control text-align-dir" rows="8" placeholder={t("advisory.extra_description_step.description_placeholder")}></textarea> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="adv-btn" style={{ backgroundColor: "white" }}>
                    <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 d-flex justify-content-space-between">
                        <button type="button" className="btn-prev dir-rtl" onClick={() => { prev() }}>{t("advisory.extra_description_step.btn_prev")}</button>
                        <button htmlType="submit" className="btn-next dir-rtl">{t("advisory.extra_description_step.btn_submit")}</button>
                    </div>
                </div>
            </Form>
        </>
    )
}

export default ExtraDescriptionStep