import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Checkbox, Switch, message, Button, Space } from 'antd';
import change_icon from '../../assets/img/change.png';
import classnames from 'classnames';
import { GetLanguage } from '../../utils/utils'
import i18next, { t } from 'i18next';
import { useSelector, useDispatch } from 'react-redux';
import apiServices from '../../utils/api.services';
import { ARTIST_BY_GALLERY, ARTWORK_BY_GALLERY, PRODUCTS } from '../../utils';
import { artworkForm } from '../../redux/reducers/Artwork/artwork.action';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate, useSearchParams, useLocation} from 'react-router-dom';
const { Option } = Select;

function SellInformation({ prev, next }) {

    const [form] = Form.useForm();
    const Location = useLocation();
    const navigate = useNavigate();
    const { lastform } = useSelector((state) => state.artworkReducer)
    const [isValidation, setisValidation] = useState(false);
    const [isValidEdition, setIsValidEdition] = useState(false);
    const [isValidSaleInformation, setIsValidSaleInformation] = useState(false);
    const Language = GetLanguage();
    const { id } = useSelector((state) => state.galleryReducer)

    const listinvestmentType = [
        { label: "درصدی", value: "percentage" },
        { label: "تومانی", value: "toman" },
        { label: "دلاری", value: "dollar" }
    ]


    let [searchParams, setSearchParams] = useSearchParams()


    const { roles } = useSelector((state) => state.authReducer)
    const getUserRole = () => {
        let userRole = "user"
        if (typeof roles === "string") {
            return roles
        } else {
            if (roles && roles.length > 0) {
                if (roles.includes("seller")) {
                    userRole = "seller"
                }
                if (roles.includes("artist")) {
                    userRole = "artist"
                }
            } else {
                userRole = 'user'
            }
        }
        return userRole
    }


    const onFinish = (values) => {
        console.log("values1", values);
        let payload = {
            ...lastform,
            ...values,
            "items": [
                {
                    "edition_number": null,
                    "base_toman_price": values?.base_toman_price,
                    "base_dollar_price": values?.base_dollar_price
                }
            ],
            "discount": {
                "type": values?.discount_price ? values?.discount_price : "toman",
                "value": i18next.language === 'fa-IR' ? values?.percent_discount_rial : values?.percent_discount_dolar,
                "duration": 3600
            },

        }

        // If the information is empty, read the values ​​without the edition number
        if (isValidSaleInformation) {
            payload.items = values.items
        }



        if (searchParams.get("back") || getUserRole() === "gallery") {
            apiServices.post(ARTWORK_BY_GALLERY(id, searchParams.get("artist_id")), payload)
                .then(res => {
                    if (res.data) {

                        message.success({
                            content: 'اثر با موفقیت ثبت شد', style: {
                                marginTop: '110px',
                            },
                        })
                        setTimeout(() => {
                            navigate(searchParams.get("back"))
                        }, 500);
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
        } else {
            apiServices.post(PRODUCTS, payload)
                .then(res => {
                    if (res.data) {

                        message.success({
                            content: 'اثر با موفقیت ثبت شد', style: {
                                marginTop: '10vh',
                            },
                        })
                        setTimeout(() => {
                            navigate(Location?.state?.from ,  { state: {current : 2 } })
                            // next()
                            // navigate(next())
                        }, 500);
                    } else {
                        console.log(res.response)
                        message.error({
                            content: 'خطا در ثبت اطلاعات', style: {
                                marginTop: '10vh'
                            }
                        })
                        // message.error(res.response.data.message)
                    }

                })
                .catch(err => {
                    console.log(err);
                })
            console.log('Success:', values);
        }
    };

    // If there is no user information, it redirects the user to the previous page
    useEffect(() => {
        if (Object.keys(lastform)?.length === 0) {
            prev()
            // console.log("ObjectKey", Object.keys(lastform)?.length);
        }
    }, []);

    return (
        <>
            <div className="enter-price">
                <h3 className="infotitle-default text-dir">{t("content-panel-add-artwork.sale_info")}</h3>

                <Form
                    className=""
                    form={form}
                    onFinish={onFinish}
                >
                    <div className="row">
                        <div className="col-sm-12">

                            <label className="d-flex box-dir-reverse lable-checkbox public-group text-dir">


                                <Form.Item name="view_only" valuePropName="checked" noStyle>
                                    <Checkbox type="checkbox" checked={isValidEdition} onChange={e => setIsValidEdition(e.target.checked)}></Checkbox>
                                </Form.Item>
                                <span className='mx-2'>{t("content-panel-add-artwork.display_only")}</span>

                                <span className="input-help">{t("content-panel-add-artwork.display_only_text")}</span>


                            </label>


                        </div>
                    </div>
                    {
                        isValidEdition ? ""
                            : <>
                                {isValidSaleInformation ? ""
                                    :

                                    <div className="d-block d-sm-flex box-dir-reverse w-100">
                                        <div
                                            className={classnames("", {
                                                "col-sm-6": Language === 'fa-IR',
                                                "d-none": Language === 'en-US'
                                            })}

                                        >
                                            <div className="public-group">

                                                <Form.Item
                                                    className="w-100"
                                                    name="base_toman_price"
                                                    rules={[
                                                        {
                                                            required: false,
                                                            message: 'required',
                                                        }
                                                    ]}>

                                                    <Input
                                                        type="text"
                                                        id="info-215"
                                                        className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                                        placeholder="قیمت اثر به تومان"
                                                    />

                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div
                                            className={classnames("", {
                                                "col-sm-6": Language === 'fa-IR',
                                                "col w-100": Language === 'en-US'
                                            })}

                                        >
                                            <div className="public-group">


                                                <Form.Item
                                                    className="w-100"
                                                    name="base_dollar_price"
                                                    rules={[
                                                        {
                                                            required: false,
                                                            message: 'required',
                                                        }
                                                    ]}>

                                                    <Input
                                                        type="text"
                                                        id="info-216"
                                                        className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                                        placeholder="معادل قیمت به دلار"
                                                    />

                                                </Form.Item>
                                            </div>
                                        </div>
                                    </div>

                                }


                            </>
                    }


                    <div className="col-sm-12">


                        {!isValidEdition || isValidSaleInformation ?
                            <>


                                <label className="d-flex box-dir-reverse lable-checkbox public-group text-dir pr-0">

                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox type="checkbox" checked={isValidSaleInformation} onChange={e => setIsValidSaleInformation(e.target.checked)}></Checkbox>
                                    </Form.Item>
                                    <span className='mx-2'>{t("content-panel-add-artwork.art_info.multi_edition")}</span>
                                </label>

                                <div className="d-flex box-dir-reverse">

                                    {isValidSaleInformation ?

                                        <div className="col-sm-12 pt-4">

                                            <Form.List name="items">
                                                {(fields, { add, remove }) => (
                                                    <>
                                                        {fields.map(({ key, name, ...restField }) => (
                                                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">


                                                                <div className="public-group">
                                                                    <Form.Item
                                                                        className="w-100"
                                                                        {...restField}
                                                                        name={[name, 'edition_number']}
                                                                        rules={[{ required: true, message: 'Missing first name' }]}
                                                                    >
                                                                        <Input
                                                                            type="text"
                                                                            id="info-207"
                                                                            className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                                                            placeholder={t("content-panel-add-artwork.edition")}
                                                                        />
                                                                    </Form.Item>

                                                                </div>

                                                                <div className="public-group">
                                                                    <Form.Item
                                                                        className="w-100"
                                                                        {...restField}
                                                                        name={[name, 'base_toman_price']}
                                                                        rules={[{ required: true, message: 'Missing last name' }]}
                                                                    >
                                                                        <Input
                                                                            type="text"
                                                                            id="info-201"
                                                                            className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                                                            placeholder={t("content-panel-add-artwork.price_ir")}
                                                                        />
                                                                    </Form.Item>

                                                                    {/* <a href="#" className="btn-change">
                                                        <img src={change_icon} width="24" height="24" alt="" className="" />
                                                    </a> */}
                                                                </div>
                                                                <div className="public-group">
                                                                    <Form.Item
                                                                        className="w-100"
                                                                        {...restField}
                                                                        name={[name, 'base_dollar_price']}
                                                                        rules={[{ required: true, message: 'Missing last name' }]}
                                                                    >
                                                                        <Input
                                                                            type="text"
                                                                            id="info-207"
                                                                            className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                                                            placeholder={t("content-panel-add-artwork.edition_usd")}
                                                                        />
                                                                    </Form.Item>
                                                                </div>
                                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                                            </Space>
                                                        ))}
                                                        <Form.Item>

                                                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                                افزودن ادیشن
                                                            </Button>
                                                        </Form.Item>
                                                    </>
                                                )}
                                            </Form.List>
                                        </div>
                                        : ""}

                                </div>
                            </>
                            :
                            ""
                        }
                    </div>

                    {/* {!isValidEdition ? */}

                    <div className="row">
                        {isValidSaleInformation || !isValidEdition ?
                            <>
                                <div className="col-sm-12">
                                    <label className="d-flex box-dir-reverse lable-checkbox public-group text-dir pr-0">
                                        <Form.Item name="is_sold" valuePropName="checked" noStyle>
                                            <Checkbox type="checkbox"></Checkbox>
                                        </Form.Item>
                                        {/* <input type="checkbox" value=""/> */}
                                        <span className='mx-2'>{t("content-panel-add-artwork.artwork_sold")}</span>
                                        {/* <span className="checkmark"></span> */}
                                    </label>
                                </div>

                                <div className="col-sm-12">
                                    <label className="d-flex box-dir-reverse lable-checkbox public-group text-dir pr-0">
                                        {/* <input type="checkbox" checked value=""/> */}
                                        <Form.Item name="can_bid" valuePropName="checked" noStyle>
                                            <Checkbox type="checkbox"></Checkbox>
                                        </Form.Item>
                                        <span className='mx-2'>{t("content-panel-add-artwork.could_offer")}</span>
                                        {/* <span className="checkmark"></span> */}
                                        <span className="input-help">{t("content-panel-add-artwork.could_offer_text")}</span>
                                    </label>
                                </div>
                                <div className="col-sm-12">
                                    <label className=" lable-checkbox public-group text-dir pr-0  mt-5">
                                        {/* <input type="checkbox"/> */}
                                        <Form.Item valuePropName="checked">
                                            <Switch type="checkbox" checked={isValidation} onChange={e => setisValidation(e)}></Switch>
                                        </Form.Item>
                                        {console.log("is_send_invitation", isValidation)}
                                        {/* <span className="switchbtn round"></span> */}
                                        <span className="label-switchbtn">{t("content-panel-add-artwork.discount_price")}</span>
                                    </label>
                                </div>
                            </>
                            : ""}

                        {

                            // isValidSaleInformation || !isValidEdition 
                            isValidation ?

                                <div className="col-sm-12  ">
                                    <div
                                        className={classnames("d-flex  form-group public-group", {
                                            "justify-content-start": Language === 'fa-IR',
                                            "justify-content-end": Language === 'en-US'
                                        })}

                                    >
                                        <Form.Item
                                            name="discount_price"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Select
                                                className='form-control'
                                                id="sel1"
                                                placeholder={t("content-panel-add-artwork.discount_base")}
                                                options={listinvestmentType}
                                                allowClear
                                            >
                                                {/* <Option value="تخفیف براساس درصد">تخفیف براساس درصد</Option>
                                                <Option value="تخفیف براساس درصد">تخفیف براساس درصد</Option>
                                                <Option value="تخفیف براساس درصد">تخفیف براساس درصد</Option> */}
                                            </Select>
                                        </Form.Item>





                                        {/* <select className="form-control" id="sel1">
                                <option>تخفیف براساس درصد</option>
                                <option>تخفیف براساس درصد</option>
                                <option>تخفیف براساس درصد</option>
                            </select> */}
                                    </div>
                                </div>
                                : ""}
                    </div>

                    {
                        // isValidSaleInformation || !isValidEdition
                        isValidation ?
                            <>
                                <div className="d-flex box-dir-reverse">
                                    <div className="col-sm-6">
                                        <div className="public-group">
                                            <Form.Item
                                                className="w-100"
                                                name="percent_discount_rial"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'required',
                                                    }
                                                ]}>

                                                <Input
                                                    type="text"
                                                    id="info-207"
                                                    className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                                    placeholder={t("content-panel-add-artwork.discount_percent_ir")}
                                                />

                                            </Form.Item>
                                            {/* <input className="form-control input-public " required placeholder=""
                                   value=""/> */}
                                            {/* <label className="lable-public">درصد تخفیف قیمت ریالی</label> */}
                                        </div>
                                        <a href="#" className="btn-change">
                                            <img src={change_icon} width="24" height="24" alt="" className="" />
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="public-group">
                                            <Form.Item
                                                className="w-100"
                                                name="percent_discount_dolar"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'required',
                                                    }
                                                ]}>

                                                <Input
                                                    type="text"
                                                    id="info-207"
                                                    className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                                    placeholder={t("content-panel-add-artwork.discount_percent_usd")}
                                                />

                                            </Form.Item>
                                            {/* <input className="form-control input-public " required placeholder=""
                                   value=""/> */}
                                            {/* <label className="lable-public">درصد تخفیف قمیت دلاری</label> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex box-dir-reverse">
                                    <div className="col-sm-4">
                                        <h4 className="bolder-title mrgt10">{t("content-panel-add-artwork.discount_period")}</h4>
                                        <div className="public-group">
                                            <Form.Item
                                                className="w-100"
                                                name="date"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'required',
                                                    }
                                                ]}>

                                                <Input
                                                    type="text"
                                                    id="info-207"
                                                    className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                                    placeholder={t("content-panel-add-artwork.date")}
                                                />

                                            </Form.Item>
                                            {/* <input className="form-control input-public persian-num " required placeholder="" value="1368/06/21"/> */}
                                            {/* <label className="lable-public">تاریخ</label> */}
                                        </div>
                                    </div>
                                </div>
                            </>
                            : ""}
                    <div className="clearfix"></div>
                    <div className="adv-btn">
                        <button onClick={() => prev()} type="button" className="btn-prev ">{t("content-panel-add-artwork.previous_step")}</button>
                        <button htmlType="submit" className="btn-next pull-left">
                            {t("content-panel-add-artwork.art_info.final-step")}
                        </button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default SellInformation;
