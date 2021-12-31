import React from 'react';
import { Form, Input, Select , Checkbox , Switch} from 'antd';
import change_icon from '../../assets/img/change.png';
import classnames from 'classnames';
import {GetLanguage} from '../../utils/utils'
import { t } from 'i18next';
const { Option } = Select;

function SellInformation({prev , next}) {
    
    const [form] = Form.useForm();
    
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
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
                        <label className="d-flex box-dir-reverse lable-checkbox public-group text-dir pr-0">
                            {/* <input type="checkbox" value=""/> */}
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox type="checkbox"></Checkbox>
                                    </Form.Item>
                            <span className='mx-2'>{t("content-panel-add-artwork.display_only")}</span>
                            {/* <span className="checkmark"></span> */}
                            <span className="input-help">{t("content-panel-add-artwork.display_only_text")}</span>
                        </label>
                    </div>
                </div>
                <div className="d-flex box-dir-reverse">
                    <div className="col-sm-4">
                        <div className="public-group">
                                    <Form.Item
                                        className="w-100"
                                        name="weight"
                                        // label="شماره ادیشن"
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
                                            placeholder={t("content-panel-add-artwork.edition")} 
                                        />

                                    </Form.Item>

                            {/* <input className="form-control input-public " required placeholder="" value=""/> */}
                            {/* <label className="lable-public">شماره ادیشن</label> */}
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="public-group">
                                    <Form.Item
                                        className="w-100"
                                        name="weight"
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
                                            placeholder={t("content-panel-add-artwork.price_ir")} 
                                        />

                                    </Form.Item>

                            {/* <input className="form-control input-public " required placeholder=""
                                   value=""/> */}
                            {/* <label className="lable-public">قیمت اثر به تومان</label> */}
                        </div>
                        <a href="#" className="btn-change">
                            <img src={change_icon} width="24" height="24" alt="" className=""/>
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <div className="public-group">
                                    <Form.Item
                                        className="w-100"
                                        name="weight"
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
                                            placeholder={t("content-panel-add-artwork.edition_usd")}  
                                        />

                                    </Form.Item>
                            {/* <input className="form-control input-public " required placeholder=""
                                   value=""/> */}
                            {/* <label className="lable-public">معادل قیمت به دلار</label> */}
                        </div>
                    </div>
                </div>
                <div className="d-flex box-dir-reverse">
                    <div className="col-sm-4">
                        <div className="public-group">
                                    <Form.Item
                                        className="w-100"
                                        name="weight"
                                        // label="شماره ادیشن"
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
                                            placeholder={t("content-panel-add-artwork.edition")} 
                                        />

                                    </Form.Item>

                            {/* <input className="form-control input-public " required placeholder="" value=""/> */}
                            {/* <label className="lable-public">شماره ادیشن</label> */}
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="public-group">
                                    <Form.Item
                                        className="w-100"
                                        name="weight"
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
                                            placeholder={t("content-panel-add-artwork.price_ir")} 
                                        />

                                    </Form.Item>

                            {/* <input className="form-control input-public " required placeholder=""
                                   value=""/> */}
                            {/* <label className="lable-public">قیمت اثر به تومان</label> */}
                        </div>
                        <a href="#" className="btn-change">
                            <img src={change_icon} width="24" height="24" alt="" className=""/>
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <div className="public-group">
                                    <Form.Item
                                        className="w-100"
                                        name="weight"
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
                                            placeholder={t("content-panel-add-artwork.edition_usd")}  
                                        />

                                    </Form.Item>
                            {/* <input className="form-control input-public " required placeholder=""
                                   value=""/> */}
                            {/* <label className="lable-public">معادل قیمت به دلار</label> */}
                        </div>
                    </div>
                </div>
                <div className="d-flex box-dir-reverse">
                    <div className="col-sm-4">
                        <div className="public-group">
                                    <Form.Item
                                        className="w-100"
                                        name="weight"
                                        // label="شماره ادیشن"
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
                                            placeholder={t("content-panel-add-artwork.edition")} 
                                        />

                                    </Form.Item>

                            {/* <input className="form-control input-public " required placeholder="" value=""/> */}
                            {/* <label className="lable-public">شماره ادیشن</label> */}
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="public-group">
                                    <Form.Item
                                        className="w-100"
                                        name="weight"
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
                                            placeholder={t("content-panel-add-artwork.price_ir")} 
                                        />

                                    </Form.Item>

                            {/* <input className="form-control input-public " required placeholder=""
                                   value=""/> */}
                            {/* <label className="lable-public">قیمت اثر به تومان</label> */}
                        </div>
                        <a href="#" className="btn-change">
                            <img src={change_icon} width="24" height="24" alt="" className=""/>
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <div className="public-group">
                                    <Form.Item
                                        className="w-100"
                                        name="weight"
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
                                            placeholder={t("content-panel-add-artwork.edition_usd")}  
                                        />

                                    </Form.Item>
                            {/* <input className="form-control input-public " required placeholder=""
                                   value=""/> */}
                            {/* <label className="lable-public">معادل قیمت به دلار</label> */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <label className="d-flex box-dir-reverse lable-checkbox public-group text-dir pr-0">
                                    <Form.Item name="sold_out" valuePropName="checked" noStyle>
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
                                    <Form.Item name="send_bid" valuePropName="checked" noStyle>
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
                            <Form.Item  valuePropName="checked">
                                <Switch type="checkbox"></Switch>
                            </Form.Item>
                            {/* <span className="switchbtn round"></span> */}
                            <span className="label-switchbtn">{t("content-panel-add-artwork.discount_price")}</span>
                        </label>
                    </div>
                    <div className="col-sm-12  ">
                        <div 
                            className={classnames("d-flex  form-group public-group", {
                                "justify-content-start": GetLanguage() === 'fa-IR',
                                "justify-content-end": GetLanguage() === 'en-US'
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
                                    allowClear
                                >
                                <Option value="تخفیف براساس درصد">تخفیف براساس درصد</Option>
                                <Option value="تخفیف براساس درصد">تخفیف براساس درصد</Option>
                                <Option value="تخفیف براساس درصد">تخفیف براساس درصد</Option>
                                </Select>
                            </Form.Item>





                            {/* <select className="form-control" id="sel1">
                                <option>تخفیف براساس درصد</option>
                                <option>تخفیف براساس درصد</option>
                                <option>تخفیف براساس درصد</option>
                            </select> */}
                        </div>
                    </div>
                </div>
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
                            <img src={change_icon} width="24" height="24" alt="" className=""/>
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
                <div className="clearfix"></div>
                <div className="adv-btn">
                    <button onClick={() => prev()} type="button" className="btn-prev ">{t("content-panel-add-artwork.previous_step")}</button>
                    <button htmlType="submit" type="button" className="btn-next pull-left">{t("content-panel-add-artwork.submit_artwork")}</button>
                </div>
                </Form>
            </div>
        </>
    )
}

export default SellInformation;
