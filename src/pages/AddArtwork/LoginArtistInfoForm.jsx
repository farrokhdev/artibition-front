import React from 'react';
import { Form, Input, Select, Checkbox } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { t } from 'i18next';
import download from '../../assets/img/download.svg'



function LoginArtistInfoForm({ next, prev }) {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
        next()
    };
    return (
        <div class="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">
            <div class="artist-info">
                <h2 class="adv-title">تکمیل اطلاعات هنری</h2>
                <p>
                    جهت تکمیل اطلاعات هنری خود لطفا فرم زیر را تکمیل نمایید.
                    <br />
                    این اطلاعات در پروفایل شما به کاربران سایت نمایش داده می‌شود.
                </p>
                <button type="button" class="btn">
                    <img src={download} width="12" height="14" alt="" class="" />
                    <span>راهنمای تکمیل رزومه</span>
                </button>
            </div>
            <h3 class="info-title mrgt64 require d-flex">حوزه فعالیت هنری شما</h3>
            <Form
                className=""
                form={form}
                onFinish={onFinish}>
                <div class="row">
                    <div class="col-xs-6">
                        <label className="d-flex box-dir-reverse lable-checkbox public-group text-dir">
                            <Form.Item name="remember" valuePropName="checked" noStyle >
                                <Checkbox type="checkbox" class="checkmark"></Checkbox>
                            </Form.Item>
                            <span>نقاشی</span>
                            {/* <span class="checkmark"></span> */}
                        </label>
                    </div>
                    <div class="col-xs-6">
                        <label className="d-flex box-dir-reverse lable-checkbox public-group text-dir">
                            <Form.Item name="remember" valuePropName="checked" noStyle >
                                <Checkbox type="checkbox" class="checkmark"></Checkbox>
                            </Form.Item>
                            <span>خوشنویسی</span>
                            {/* <span class="checkmark"></span> */}
                        </label>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-xs-6">
                        <label className="d-flex box-dir-reverse lable-checkbox public-group text-dir">
                            <Form.Item name="remember" valuePropName="checked" noStyle >
                                <Checkbox type="checkbox" class="checkmark"></Checkbox>
                            </Form.Item>
                            <span>عکاسی</span>
                            {/* <span class="checkmark"></span> */}
                        </label>
                    </div>
                    <div class="col-xs-6">
                        <label className="d-flex box-dir-reverse lable-checkbox text-dir">
                            <Form.Item name="remember" valuePropName="checked" noStyle >
                                <Checkbox type="checkbox" class="checkmark"></Checkbox>
                            </Form.Item>
                            <span>چاپ دستی</span>
                            {/* <span class="checkmark"></span> */}
                        </label>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-xs-6">
                        <label className="d-flex box-dir-reverse lable-checkbox text-dir">
                            <Form.Item name="remember" valuePropName="checked" noStyle >
                                <Checkbox type="checkbox" class="checkmark"></Checkbox>
                            </Form.Item>
                            <span>مجسمه</span>
                            {/* <span class="checkmark"></span> */}
                        </label>
                    </div>
                    <div class="col-xs-6">
                        <label className="d-flex box-dir-reverse lable-checkbox text-dir">
                            <Form.Item name="remember" valuePropName="checked" noStyle >
                                <Checkbox type="checkbox" class="checkmark"></Checkbox>
                            </Form.Item>
                            <span>گرافیک</span>
                            {/* <span class="checkmark"></span> */}
                        </label>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-xs-6">
                        <label className="d-flex box-dir-reverse lable-checkbox text-dir">
                            <Form.Item name="remember" valuePropName="checked" noStyle >
                                <Checkbox type="checkbox" class="checkmark"></Checkbox>
                            </Form.Item>
                            <span>نقاشی خط</span>
                            {/* <span class="checkmark"></span> */}
                        </label>
                    </div>
                    <div class="col-xs-6">
                        <label className="d-flex box-dir-reverse lable-checkbox text-dir">
                            <Form.Item name="remember" valuePropName="checked" noStyle >
                                <Checkbox type="checkbox" class="checkmark"></Checkbox>
                            </Form.Item>
                            <span>طراحی</span>
                            {/* <span class="checkmark"></span> */}
                        </label>
                    </div>
                </div>
                <h3 class="info-title mrgt64 require d-flex">رزومه فارسی</h3>
                <div class="form-group">
                    <Form.Item
                        className="w-100"
                        name="address">
                        <TextArea className="default-input"
                            placeholder="رزومه خود را به فارسی وارد نمایید" rows="8" />
                    </Form.Item>
                </div>
                <h3 class="info-title mrgt64 require d-flex">رزومه انگلیسی</h3>
                <div class="form-group">
                    <Form.Item
                        className="w-100"
                        name="address">
                        <TextArea className="default-input"
                            placeholder="رزومه خود را به انگلیسی وارد نمایید" rows="8" />
                    </Form.Item>
                </div>
                <div className="adv-btn">
                    <button onClick={() => prev()} type="button" className="btn-prev ">
                        {t("content-panel-add-artwork.previous_step")}
                    </button>
                    <button htmlType="submit" className="btn-next pull-left">
                        {t("content-panel-add-artwork.art_info.next_step")}
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default LoginArtistInfoForm; 