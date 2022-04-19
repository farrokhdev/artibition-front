import React, { useState, useEffect } from "react";
import i18next, { t } from 'i18next';
import classnames from 'classnames';
import { GetLanguage } from "../../utils/utils";
import { Form, Input, Select } from 'antd';
import { CORE_CATEGORIS, PRODUCTS_CATEGORIES } from "../../utils";
import apiServices from "../../utils/api.services";
import { useDispatch, useSelector } from 'react-redux';
import { advistoryForm as EditingAdvistoryForm } from '../../redux/reducers/advistory/advistory.action';
function WelcomeToAdvistoryStep({ prev, next }) {

    const [form] = Form.useForm();
    const dispach = useDispatch();
    const { advistoryform } = useSelector((state) => state.advistoryReducer)
    const Language = GetLanguage();
    const [categorys, setCategorys] = useState([]);
    const [artistname, setArtistName] = useState(false);

    const listInvestment = [
        { label: t("advisory.welcome_step.adv_question.yes"), value: true },
        { label: t("advisory.welcome_step.adv_question.no"), value: false }
    ]

    const listinvestmentType = [
        { label: t("advisory.welcome_step.adv_question.investing_teenagers"), value: "teenager" },
        { label: t("advisory.welcome_step.adv_question.investing_young_people"), value: "young adult" }
    ]

    const listInvestmentRange = [
        { label: t("advisory.welcome_step.adv_question.less_price"), value: "less than ten" },
        { label: t("advisory.welcome_step.adv_question.more_price"), value: "above ten" }
    ]

    const onFinish = (values) => {

        console.log("value" , values)


        let payload = {
            "is_investment": values?.is_investment,
            "investment_type": values?.investment_type,
            "artist_name": values?.artist_name,
            "investment_range": values?.investment_range
        }
        if (values?.category_id) {
            payload["category_id"] = values?.category_id
        }
        dispach(EditingAdvistoryForm(payload))

    }


    // const getListCategory = () => {
    //     apiServices.get(PRODUCTS_CATEGORIES, "")
    //         .then(res => {

    //             setCategorys(res.data.data.results.map(item => {
    //                 if (Language === 'fa-IR') {
    //                     return { label: item?.translations?.fa?.title, value: item?.id }
    //                 } else {
    //                     return { label: item?.translations?.en?.title, value: item?.id }
    //                 }
    //             }))
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }
    

    const getListCategory = () => {
        apiServices.get(CORE_CATEGORIS, "")
            .then(res => {

                setCategorys(res.data.data.results.map(item => {
                    if (Language === 'fa-IR') {
                        return { label: item?.translations?.fa?.title, value: item?.id }
                    } else {
                        return { label: item?.translations?.en?.title, value: item?.id }
                    }
                }))
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getListCategory();
    }, []);


    useEffect(() => {
        if (advistoryform) {
            form.setFieldsValue({
                is_investment: advistoryform?.is_investment,
                investment_type: advistoryform?.investment_type,
                artist_name: advistoryform?.artist_name,
                investment_range: advistoryform?.investment_range,
                category_id: advistoryform?.category_id
            }
            )
        }
    }, [advistoryform]);

    return (
        <div className="col-lg-7 col-md-10 float-none mx-auto">
            <Form
                className=""
                form={form}
                onFinish={onFinish}
            >

                <div className="adv-content">
                    <h2 className="adv-title">{t("advisory.welcome_step.title")}</h2>
                    <p className="text-justify">{t("advisory.welcome_step.description")}</p>
                    <ul className="adv-list">
                        <li className="row">
                            <div className={classnames("text-dir", {
                                "col-sm-6": GetLanguage() === 'fa-IR',
                                "col-sm-8": GetLanguage() === 'en-US'
                            })}>
                                <span className="persian-num">1)</span>
                                <label for="adv1">{t("advisory.welcome_step.adv_question.pecific_category_question")}</label>
                            </div>
                            <div className={classnames("", {
                                "col-sm-6": GetLanguage() === 'fa-IR',
                                "col-sm-4": GetLanguage() === 'en-US'
                            })}>
                                <div className="form-group">
                                    <Form.Item
                                        className="border-0 w-100"
                                        name="category_id"
                                        rules={[
                                            {
                                                required: false,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Select
                                            className={classnames("", {
                                                "ant-select-rtl": i18next.language === 'fa-IR',
                                            })}
                                            style={{ border: "1px solid #ccc" }}
                                             id="adv1"
                                            placeholder={t("content-panel-add-artwork.art_info.artwork_field")}
                                            options={categorys}
                                            allowClear
                                            
                                        >

                                        </Select>

                                    </Form.Item>
                                </div>
                            </div>
                        </li>
                        <li className="row">
                            <div className={classnames("text-dir", {
                                "col-sm-6": GetLanguage() === 'fa-IR',
                                "col-sm-8": GetLanguage() === 'en-US'
                            })}>
                                <span className="persian-num">2)</span>
                                <label for="adv2">{t("advisory.welcome_step.adv_question.investment_question")}</label>
                            </div>
                            <div className={classnames("", {
                                "col-sm-6": GetLanguage() === 'fa-IR',
                                "col-sm-4": GetLanguage() === 'en-US'
                            })}>
                                <div className="form-group">
                                    <Form.Item
                                        className="border-0 w-100"
                                        name="is_investment"
                                        rules={[
                                            {
                                                required: false,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Select
                                            className={classnames("", {
                                                "ant-select-rtl": i18next.language === 'fa-IR',
                                            })}
                                            style={{ border: "1px solid #ccc" }}
                                            options={listInvestment}
                                            allowClear
                                            id="info-203"
                                        >
                                        </Select>

                                    </Form.Item>
                                </div>
                            </div>
                        </li>
                        <li className="row">
                            <div className={classnames("text-dir", {
                                "col-sm-6": GetLanguage() === 'fa-IR',
                                "col-sm-8": GetLanguage() === 'en-US'
                            })}>
                                <span className="persian-num">3)</span>
                                <label for="adv3">{t("advisory.welcome_step.adv_question.type_investment_question")}</label>
                            </div>
                            <div className={classnames("", {
                                "col-sm-6": GetLanguage() === 'fa-IR',
                                "col-sm-4": GetLanguage() === 'en-US'
                            })}>
                                <div className="form-group">

                                    <Form.Item
                                        className="border-0 w-100"
                                        name="investment_type"
                                        rules={[
                                            {
                                                required: false,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Select
                                            className={classnames("", {
                                                "ant-select-rtl": i18next.language === 'fa-IR',
                                            })}
                                            style={{ border: "1px solid #ccc" }}
                                            options={listinvestmentType}
                                            allowClear
                                            id="info-203"
                                        >
                                        </Select>

                                    </Form.Item>

                                </div>
                            </div>
                        </li>
                        <li className="row">
                            <div className={classnames("text-dir", {
                                "col-sm-6": GetLanguage() === 'fa-IR',
                                "col-sm-8": GetLanguage() === 'en-US'
                            })}>
                                <span className="persian-num">4)</span>
                                <label for="adv4">{t("advisory.welcome_step.adv_question.specific_artist_question")}</label>
                            </div>
                            <div className={classnames("", {
                                "col-sm-6": GetLanguage() === 'fa-IR',
                                "col-sm-4": GetLanguage() === 'en-US'
                            })}>
                                <div className="form-group">

                                    <Form.Item
                                        className="border-0 w-100"
                                        name="is_artistname"
                                        rules={[
                                            {
                                                required: false,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Select
                                            className={classnames("", {
                                                "ant-select-rtl": i18next.language === 'fa-IR',
                                            })}
                                            style={{ border: "1px solid #ccc" }}
                                            value={artistname}
                                            options={listInvestment}
                                            onChange={(value) => { setArtistName(value) }}
                                            allowClear
                                            id="info-203"
                                        >
                                        </Select>

                                    </Form.Item>

                                </div>
                                <div className="form-group">
                                    {/* {console.log(artistname, "test form")} */}
                                    {artistname &&
                                        <Form.Item
                                            className="border-0 w-100"
                                            name="artist_name"
                                            rules={[
                                                {
                                                    required: false,
                                                    message: 'required',
                                                }
                                            ]}>
                                            <Input className="form-control" placeholder={t("advisory.welcome_step.adv_question.Enter_artist_name")} />
                                        </Form.Item>
                                    }
                                    {/* {form.getFieldValue("is_artistname") &&
                                        <Form.Item
                                            className="border-0 w-100"
                                            name="artist_name"
                                            rules={[
                                                {
                                                    required: false,
                                                    message: 'required',
                                                }
                                            ]}>
                                            <Input className="form-control" placeholder={t("advisory.welcome_step.adv_question.Enter_artist_name")} />
                                        </Form.Item>
                                    } */}
                                </div>
                            </div>
                        </li>
                        <li className="row">
                            <div className={classnames("text-dir", {
                                "col-sm-6": GetLanguage() === 'fa-IR',
                                "col-sm-8": GetLanguage() === 'en-US'
                            })}>
                                <span className="persian-num">5)</span>
                                <label for="adv5">{t("advisory.welcome_step.adv_question.budget_question")}</label>
                            </div>
                            <div className={classnames("", {
                                "col-sm-6": GetLanguage() === 'fa-IR',
                                "col-sm-4": GetLanguage() === 'en-US'
                            })}>
                                <div className="form-group">
                                    <Form.Item
                                        className="border-0 w-100"
                                        name="investment_range"
                                        rules={[
                                            {
                                                required: false,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Select
                                            className={classnames("", {
                                                "ant-select-rtl": i18next.language === 'fa-IR',
                                            })}
                                            style={{ border: "1px solid #ccc" }}
                                            options={listInvestmentRange}
                                            allowClear
                                            id="info-203"
                                        >
                                        </Select>

                                    </Form.Item>

                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="adv-btn" style={{ backgroundColor: "white" }}>
                    <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 padding-0 m-dir-rev-auto">
                        <button className="btn-next pull-dir-rev dir-rtl"
                            onClick={() => {
                                form.submit()
                                next()
                            }}
                        >{t("advisory.welcome_step.next_btn")}</button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default WelcomeToAdvistoryStep