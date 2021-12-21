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
            <div class="enter-price">
                <h3 class="infotitle-default text-dir">اطلاعات فروش</h3>

                <Form 
                    className="" 
                    form={form}
                    onFinish={onFinish}
                >
                <div class="row">
                    <div class="col-sm-12">
                        <label class="lable-checkbox public-group text-dir pr-0">
                            {/* <input type="checkbox" value=""/> */}
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox type="checkbox"></Checkbox>
                                    </Form.Item>
                            <span className='mx-2'>برای نمایش</span>
                            {/* <span class="checkmark"></span> */}
                            <span class="input-help">با انتخاب این گزینه اثر تنها برای نمایش در سایت قرار می‌گیرد</span>
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="public-group">
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
                                            // placeholder='عنوان اثر' 
                                        />

                                    </Form.Item>

                            {/* <input class="form-control input-public " required placeholder="" value=""/> */}
                            <label class="lable-public">شماره ادیشن</label>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="public-group">
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
                                            // placeholder='عنوان اثر' 
                                        />

                                    </Form.Item>

                            {/* <input class="form-control input-public " required placeholder=""
                                   value=""/> */}
                            <label class="lable-public">قیمت اثر به تومان</label>
                        </div>
                        <a href="#" class="btn-change">
                            <img src={change_icon} width="24" height="24" alt="" class=""/>
                        </a>
                    </div>
                    <div class="col-sm-4">
                        <div class="public-group">
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
                                            // placeholder='عنوان اثر' 
                                        />

                                    </Form.Item>
                            {/* <input class="form-control input-public " required placeholder=""
                                   value=""/> */}
                            <label class="lable-public">معادل قیمت به دلار</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="public-group">
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
                                            // placeholder='عنوان اثر' 
                                        />

                                    </Form.Item>
                            {/* <input class="form-control input-public " required placeholder="" value=""/> */}
                            <label class="lable-public">شماره ادیشن</label>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="public-group">
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
                                            // placeholder='عنوان اثر' 
                                        />

                                    </Form.Item>
                            {/* <input class="form-control input-public " required placeholder=""
                                   value=""/> */}
                            <label class="lable-public">قیمت اثر به تومان</label>
                        </div>
                        <a href="#" class="btn-change">
                            <img src={change_icon} width="24" height="24" alt="" class=""/>
                        </a>
                    </div>
                    <div class="col-sm-4">
                        <div class="public-group">

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
                                            // placeholder='عنوان اثر' 
                                        />

                                    </Form.Item>
                            {/* <input class="form-control input-public " required placeholder=""
                                   value=""/> */}
                            <label class="lable-public">معادل قیمت به دلار</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="public-group">

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
                                            // placeholder='عنوان اثر' 
                                        />

                                    </Form.Item>
                            {/* <input class="form-control input-public " required placeholder="" value=""/> */}
                            <label class="lable-public">شماره ادیشن</label>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="public-group">

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
                                            // placeholder='عنوان اثر' 
                                        />

                                    </Form.Item>
                            {/* <input class="form-control input-public " required placeholder=""
                                   value=""/> */}
                            <label class="lable-public">قیمت اثر به تومان</label>
                        </div>
                        <a href="#" class="btn-change">
                            <img src={change_icon} width="24" height="24" alt="" class=""/>
                        </a>
                    </div>
                    <div class="col-sm-4">
                        <div class="public-group">

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
                                            // placeholder='عنوان اثر' 
                                        />

                                    </Form.Item>
                            {/* <input class="form-control input-public " required placeholder=""
                                   value=""/> */}
                            <label class="lable-public">معادل قیمت به دلار</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <label class="lable-checkbox public-group text-dir pr-0">
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox type="checkbox"></Checkbox>
                                    </Form.Item>
                            {/* <input type="checkbox" value=""/> */}
                            <span className='mx-2'>این اثر فروخته شده</span>
                            {/* <span class="checkmark"></span> */}
                        </label>
                    </div>
                    <div class="col-sm-12">
                        <label class="lable-checkbox public-group text-dir pr-0">
                            {/* <input type="checkbox" checked value=""/> */}
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox type="checkbox"></Checkbox>
                                    </Form.Item>
                            <span className='mx-2'>امکان ارسال پیشنهاد قیمت</span>
                            {/* <span class="checkmark"></span> */}
                            <span class="input-help">از طریق این قابلیت مشتریان شما می‌توانند پیشنهاد قیمتی خود را به شما ارسال نمایند</span>
                        </label>
                    </div>
                    <div class="col-sm-12">
                        <label class="lable-checkbox public-group text-dir pr-0 pull-dir mt-5">
                            {/* <input type="checkbox"/> */}
                            <Form.Item  valuePropName="checked">
                                <Switch type="checkbox"></Switch>
                            </Form.Item>
                            {/* <span class="switchbtn round"></span> */}
                            <span class="label-switchbtn">تخفیف قیمت</span>
                        </label>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group public-group">
                            <select class="form-control" id="sel1">
                                <option>تخفیف براساس درصد</option>
                                <option>تخفیف براساس درصد</option>
                                <option>تخفیف براساس درصد</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="d-flex box-dir-reverse">
                    <div class="col-sm-6">
                        <div class="public-group">
                            <input class="form-control input-public " required placeholder=""
                                   value=""/>
                            <label class="lable-public">درصد تخفیف قیمت ریالی</label>
                        </div>
                        <a href="#" class="btn-change">
                            <img src={change_icon} width="24" height="24" alt="" class=""/>
                        </a>
                    </div>
                    <div class="col-sm-6">
                        <div class="public-group">
                            <input class="form-control input-public " required placeholder=""
                                   value=""/>
                            <label class="lable-public">درصد تخفیف قمیت دلاری</label>
                        </div>
                    </div>
                </div>
                <div class="d-flex box-dir-reverse">
                    <div class="col-sm-4">
                        <h4 class="bolder-title mrgt10">مدت زمان تخفیف</h4>
                        <div class="public-group">
                            <input class="form-control input-public persian-num " required placeholder="" value="1368/06/21"/>
                            <label class="lable-public">تاریخ</label>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="adv-btn">
                    <button onClick={() => prev()} type="button" class="btn-prev ">مرحله قبل</button>
                    <button htmlType="submit" type="button" class="btn-next pull-left">ثبت اثر</button>
                </div>
                </Form>
            </div>
        </>
    )
}

export default SellInformation;
