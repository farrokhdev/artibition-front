import React from 'react';
import { Form, Input, Select , Checkbox , Switch} from 'antd';
import change_icon from '../../assets/img/change.png';
import classnames from 'classnames';
import {GetLanguage} from '../../utils/utils'
const { Option } = Select;

function SellInformation({prev , next}) {
    
    const [form] = Form.useForm();
    
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    return (
        <>
            <div className="enter-price">
                <h3 className="infotitle-default text-dir">اطلاعات فروش</h3>

                <Form 
                    className="" 
                    form={form}
                    onFinish={onFinish}
                >
                <div className="row">
                    <div className="col-sm-12">
                        <label className="lable-checkbox public-group text-dir pr-0">
                            {/* <input type="checkbox" value=""/> */}
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox type="checkbox"></Checkbox>
                                    </Form.Item>
                            <span className='mx-2'>برای نمایش</span>
                            {/* <span className="checkmark"></span> */}
                            <span className="input-help">با انتخاب این گزینه اثر تنها برای نمایش در سایت قرار می‌گیرد</span>
                        </label>
                    </div>
                </div>
                <div className="row">
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
                                            placeholder='شماره ادیشن' 
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
                                            placeholder='قیمت اثر به تومان' 
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
                                            placeholder='معادل قیمت به دلار' 
                                        />

                                    </Form.Item>
                            {/* <input className="form-control input-public " required placeholder=""
                                   value=""/> */}
                            {/* <label className="lable-public">معادل قیمت به دلار</label> */}
                        </div>
                    </div>
                </div>
                <div className="row">
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
                                            placeholder='شماره ادیشن' 
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
                                            placeholder='قیمت اثر به تومان' 
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
                                            placeholder='معادل قیمت به دلار' 
                                        />

                                    </Form.Item>
                            {/* <input className="form-control input-public " required placeholder=""
                                   value=""/> */}
                            {/* <label className="lable-public">معادل قیمت به دلار</label> */}
                        </div>
                    </div>
                </div>
                <div className="row">
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
                                            placeholder='شماره ادیشن' 
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
                                            placeholder='قیمت اثر به تومان' 
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
                                            placeholder='معادل قیمت به دلار' 
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
                        <label className="lable-checkbox public-group text-dir pr-0">
                                    <Form.Item name="sold_out" valuePropName="checked" noStyle>
                                        <Checkbox type="checkbox"></Checkbox>
                                    </Form.Item>
                            {/* <input type="checkbox" value=""/> */}
                            <span className='mx-2'>این اثر فروخته شده</span>
                            {/* <span className="checkmark"></span> */}
                        </label>
                    </div>
                    <div className="col-sm-12">
                        <label className="lable-checkbox public-group text-dir pr-0">
                            {/* <input type="checkbox" checked value=""/> */}
                                    <Form.Item name="send_bid" valuePropName="checked" noStyle>
                                        <Checkbox type="checkbox"></Checkbox>
                                    </Form.Item>
                            <span className='mx-2'>امکان ارسال پیشنهاد قیمت</span>
                            {/* <span className="checkmark"></span> */}
                            <span className="input-help">از طریق این قابلیت مشتریان شما می‌توانند پیشنهاد قیمتی خود را به شما ارسال نمایند</span>
                        </label>
                    </div>
                    <div className="col-sm-12">
                        <label className="lable-checkbox public-group text-dir pr-0 pull-dir mt-5">
                            {/* <input type="checkbox"/> */}
                            <Form.Item  valuePropName="checked">
                                <Switch type="checkbox"></Switch>
                            </Form.Item>
                            {/* <span className="switchbtn round"></span> */}
                            <span className="label-switchbtn">تخفیف قیمت</span>
                        </label>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group public-group">
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
                                    placeholder="تخفیف براساس درصد"
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
                                            placeholder='درصد تخفیف قیمت ریالی' 
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
                                            placeholder='درصد تخفیف قمیت دلاری' 
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
                        <h4 className="bolder-title mrgt10">مدت زمان تخفیف</h4>
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
                                            placeholder='تاریخ' 
                                        />

                                    </Form.Item>
                            {/* <input className="form-control input-public persian-num " required placeholder="" value="1368/06/21"/> */}
                            {/* <label className="lable-public">تاریخ</label> */}
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="adv-btn">
                    <button onClick={() => prev()} type="button" className="btn-prev ">مرحله قبل</button>
                    <button htmlType="submit" type="button" className="btn-next pull-left">ثبت اثر</button>
                </div>
                </Form>
            </div>
        </>
    )
}

export default SellInformation;
