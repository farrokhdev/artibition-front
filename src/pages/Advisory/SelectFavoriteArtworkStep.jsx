import React, { useEffect, useState } from 'react';
import { t } from 'i18next';
import gift from '../../assets/img/gift.svg'
import apiServices from '../../utils/api.services';
import { PRODUCTS } from '../../utils';
import queryString from 'query-string';
import { GetLanguage } from '../../utils/utils'
import { Form, Input, message, Select } from 'antd';
import { chooseProduct as EditingchooseProduct } from '../../redux/reducers/advistory/advistory.action';
import { useDispatch, useSelector } from 'react-redux';

function SelectFavoriteArtworkStep({ prev, next }) {
    const [form] = Form.useForm();
    const dispach = useDispatch();
    const { chooseProducts } = useSelector((state) => state.advistoryReducer)
    const [produts, setProduts] = useState([]);
    const [chooseProduct, setchooseProduct] = useState(chooseProducts);
    const Language = GetLanguage();
    const [params, setParams] = useState({
        is_suggested: true
    });
    const getProducts = () => {
        apiServices.get(PRODUCTS, queryString.stringify(params))
            .then(res => {
                setProduts(res.data.data.results)

            })
            .catch(err => {
                console.log(err);
            })
    }


    const onFinish = (values) => {
        dispach(EditingchooseProduct(chooseProduct))
    }

    useEffect(() => {
        getProducts();
    }, []);
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
                                <h2 className="adv-title">{t("advisory.select_favorite_artwork_step.title")}</h2>
                                <p className="aligncenter">{t("advisory.select_favorite_artwork_step.description")}</p>
                            </div>
                        </div>
                        <div className="row-gridimg mrgt64">
                            <div className="row align-item-flex-start">
                                {produts?.length && produts?.map((item) => {
                                    return (

                                        <div className="cols col-sm-3 col-xs-6 text-dir">
                                            <label className="lable-checkbox">
                                                {/* <input type="checkbox" value="" /> */}
                                                <input type="checkbox"
                                                    defaultChecked={chooseProducts?.includes(item?.id)}
                                                    value={item?.id}
                                                    // checked={chooseProduct.includes(item?.id)}
                                                    onChange={e => {
                                                        if (e.target.checked) {
                                                            setchooseProduct([...chooseProduct, item?.id])
                                                        } else {
                                                            setchooseProduct(chooseProduct.filter((i => i !== item?.id)))
                                                        }
                                                    }} />
                                                <span className="checkmark"></span>
                                                <div className="col-img">
                                                    <div className="tags tags-spacial">{item?.is_special ? t("advisory.select_favorite_artwork_step.spacial") : ""}</div>
                                                    {item?.discount ?
                                                        <div className="tags tags-off persian-num">{item?.discount?.value}{item?.discount?.type === "percentage" ? "%" : ""}</div>
                                                        : ""
                                                    }
                                                    <img src={item?.medias[0]?.exact_url} width="840" height="924" alt="آرتیبیشن" className="img-responsive" />

                                                </div>
                                            </label>
                                            <div className="col-body">
                                                {/* <div className="finished-tag">{item?.is_sold ? t("advisory.select_favorite_artwork_step.sold_out") : t("advisory.select_favorite_artwork_step.not_sold")}</div> */}
                                                {item?.is_sold ?
                                                    <div className="finished-tag">
                                                        {t("advisory.select_favorite_artwork_step.sold_out")}
                                                    </div>
                                                    : ""
                                                }

                                                <h6 className="col-title">
                                                    <span className="col-name">{Language === 'fa-IR' ? item?.translations?.fa?.artist_name : item?.translations?.en?.artist_name}</span>
                                                </h6>
                                                <div className="col-dimension">

                                                    <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                                    <span className="col-dimension-body">
                                                        <span className="dimension-width">{item?.width}</span>
                                                        <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                                        <span className="dimension-height">{item?.height}</span>
                                                    </span>
                                                </div>
                                                <div className="col-price">
                                                    <span className="col-price-num">{Language === 'fa-IR' ? item?.toman_price : item?.dollar_price}</span>
                                                    <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className="clearfix visible-xs"></div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="adv-btn" style={{ backgroundColor: "white" }}>
                    <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 d-flex justify-content-space-between">
                        <button type="button" className="btn-prev dir-rtl" onClick={() => { prev() }}>{t("advisory.select_favorite_artwork_step.btn_prev")}</button>
                        <button className="btn-next dir-rtl"
                            onClick={() => {
                                form.submit()
                                if (chooseProduct.length <= 0) {
                                    message.error({
                                        content: 'شما اثری انتخاب نکردید.', style: {
                                            marginTop: '10vh',
                                        },
                                    })
                                    return
                                } else {
                                    next()

                                }
                            }}
                        >{t("advisory.select_favorite_artwork_step.btn_next")}</button>
                    </div>
                </div>
            </Form>
        </>
    )
}

export default SelectFavoriteArtworkStep