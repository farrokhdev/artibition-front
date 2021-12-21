import React from 'react';
import { Form, Input, Select , Checkbox} from 'antd';
import cloud_upload from '../../assets/img/cloud-upload.svg'
import { t } from 'i18next';
import classnames from 'classnames';
import {GetLanguage} from '../../utils/utils'

const { Option } = Select;

function ArtworkInformation({next , prev}) {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
        next()
    };



    return (
        <>
            <h3 className="info-title mrgt64 require text-dir">آپلود تصویر اثر</h3>
            <div className="upload-img-artwork">
                <div className="btn-upload-artwork">
                    <img src={cloud_upload} width="64" height="57" alt="" className=""/>
                    <p>یک یا چند عکس را بگیرید و در اینجا بیاندازید
                        <br/>
                        یا</p>
                    <label htmlFor="file-upload" className="btn-blue">انتخاب فایل از سیستم</label>
                    <p className="upload-size"> باشند PNG و یا JPG ابعاد عکس‌ها می‌بایست حداقل ۹۶۰ در ۹۶۰ و
                        با فرمت</p>
                </div>
                <input id="file-upload" type="file"/>
            </div>
                 <Form 
                    className="" 
                    form={form}
                    onFinish={onFinish}
                >
            <div className="info-sec">
                <h3 className="infotitle-default text-dir">اطلاعات هنری</h3>
                <div className="row">
                    <div className="d-block d-sm-flex box-dir-reverse w-100">
                        <div className="col-sm-6">
                            <div className="public-group">

                                <Form.Item
                                    className="w-100"
                                    name="artwork-title"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'required',
                                        }
                                    ]}>
                                    
                                        <Input
                                            type="text"
                                            id="info-201"
                                            className="form-control input-public border-0 px-2  d-flex"
                                            placeholder='عنوان اثر' 
                                        />

                                    
                                </Form.Item>

                                {/* <label  className="lable-public">عنوان اثر</label> */}
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="public-group en">

                                <Form.Item
                                    className="w-100"
                                    name="artwork-title-en"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'required',
                                        }
                                    ]}>
                                    
                                        <Input
                                            type="text"
                                            id="info-202"
                                            className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                            // placeholder='عنوان اثر' 
                                        />

                                </Form.Item>


                                <label htmlFor="info-202" className="lable-public en-lang">Artwork Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="d-block d-sm-flex box-dir-reverse w-100">
                        <div className="col-sm-6">
                            <div className="public-group">

                            <Form.Item
                                    className="border-0 w-100"
                                    name="art-field"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'required',
                                        }
                                    ]}>
                                    
                                    <Select
                                        className='form-control input-public border-0 px-2  d-flex'
                                        allowClear
                                        id="info-203"
                                        >
                                        <Option value="رشته اول">رشته اول</Option>
                                        <Option value="رشته دوم">رشته دوم</Option>
                                        <Option value="رشته سوم">رشته سوم</Option>
                                    </Select>

                                </Form.Item>




                                {/* <select className="input-public" id="info-203">
                                    <option>رشته اول</option>
                                    <option>رشته دوم</option>
                                    <option>رشته سوم</option>
                                </select> */}
                                <label htmlFor="info-203" className="lable-public">رشته هنری</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="public-group">

                            <Form.Item
                                    className="border-0 w-100"
                                    name="subject"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'required',
                                        }
                                    ]}>
                                    
                                    <Select
                                        className='form-control input-public border-0 px-2  d-flex'
                                        allowClear
                                        id="info-204"
                                        >
                                        <Option value="موضوع اول">موضوع اول</Option>
                                        <Option value="موضوع دوم">موضوع دوم</Option>
                                        <Option value="موضوع سوم">موضوع سوم</Option>
                                    </Select>

                                </Form.Item>





                                {/* <select className="input-public" id="info-204">
                                    <option>موضوع اول</option>
                                    <option>موضوع دوم</option>
                                    <option>موضوع سوم</option>
                                </select> */}
                                <label htmlFor="info-204" className="lable-public">موضوع</label>
                            </div>
                        </div>
                    </div>
                    <div className="d-block d-sm-flex box-dir-reverse w-100">
                        <div className="col-sm-6">
                            <div className="public-group">

                            <Form.Item
                                    className="border-0 w-100"
                                    name="teckniqe"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'required',
                                        }
                                    ]}>
                                    
                                    <Select
                                        className='form-control input-public border-0 px-2  d-flex'
                                        allowClear
                                        id="info-205"
                                        >
                                        <Option value="تکنیک اول">تکنیک اول</Option>
                                        <Option value="تکنیک دوم">تکنیک دوم</Option>
                                        <Option value="تکنیک سوم">تکنیک سوم</Option>
                                    </Select>

                                </Form.Item>




                                {/* <select className="input-public" id="info-205">
                                    <option>تکنیک اول</option>
                                    <option>تکنیک دوم</option>
                                    <option>تکنیک سوم</option>
                                </select> */}
                                <label htmlFor="info-205" className="lable-public">تکنیک</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="public-group">

                                <Form.Item
                                    className="border-0 w-100"
                                    name="material"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'required',
                                        }
                                    ]}>
                                    
                                    <Select
                                        className='form-control input-public border-0 px-2  d-flex'
                                        allowClear
                                        id="info-206"
                                        >
                                        <Option value="متریال اول">متریال اول</Option>
                                        <Option value="متریال دوم">متریال دوم</Option>
                                        <Option value="متریال سوم">متریال سوم</Option>
                                    </Select>

                                </Form.Item>




                                {/* <select className="input-public" id="info-206">
                                    <option>متریال اول</option>
                                    <option>متریال دوم</option>
                                    <option>متریال سوم</option>
                                </select> */}
                                <label htmlFor="info-206" className="lable-public">متریال</label>
                            </div>
                        </div>
                        </div>
                    <div className="d-block d-sm-flex box-dir-reverse w-100">
                    <div className="col-sm-6">
                        <div className="public-group">


                            <Form.Item
                                className="w-100"
                                name="create-date"
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

                            {/* <input id="info-207" className="form-control input-public " required
                                   placeholder="" value=""/> */}
                            <label htmlFor="info-207" className="lable-public">تاریخ خلق اثر (شمسی)</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="d-flex box-dir-reverse ">
                            <div className="col-sm-4 col-xs-6 ">
                                <div className="public-group">

                                <Form.Item
                                className="w-100"
                                name="width"
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
                                    {/* <input id="info-208" className="form-control input-public " required
                                           placeholder=""
                                           value=""/> */}
                                    <label htmlFor="info-208" className="lable-public">عرض</label>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-6">
                                <div className="public-group">

                                <Form.Item
                                    className="w-100"
                                    name="length"
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
                                    {/* <input id="info-209" className="form-control input-public " required
                                           placeholder=""
                                           value=""/> */}
                                    <label htmlFor="info-209" className="lable-public">طول</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="d-block d-sm-flex box-dir-reverse w-100">
                        <div className="col-sm-6">
                            <div className="public-group">

                                <Form.Item
                                    className="border-0 w-100"
                                    name="collection"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'required',
                                        }
                                    ]}>
                                    
                                    <Select
                                        className='form-control input-public border-0 px-2  d-flex'
                                        allowClear
                                        id="info-206"
                                        >
                                        <Option value="مجموعه اول">مجموعه اول</Option>
                                        <Option value="مجموعه دوم">مجموعه دوم</Option>
                                        <Option value="مجموعه سوم">مجموعه سوم</Option>
                                    </Select>

                                </Form.Item>



                                {/* <select className="input-public" id="info-210">
                                    <option>مجموعه اول</option>
                                    <option>مجموعه دوم</option>
                                    <option>مجموعه سوم</option>
                                </select> */}
                                <label htmlFor="info-210" className="lable-public">انتخاب مجموعه</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
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
                                            // placeholder='عنوان اثر' 
                                        />

                                    </Form.Item>


                                {/* <input id="info-211" className="form-control input-public " required
                                    placeholder="" value=""/> */}
                                <label htmlFor="info-211" className="lable-public">وزن اثر</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="d-flex box-dir-reverse mb-4">
                            <label className="lable-checkbox public-group text-dir">
                            {/* <label className=" public-group text-dir"/> */}
                                {/* <input type="checkbox" value=""/> */}
                                
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox type="checkbox"></Checkbox>
                                    </Form.Item>
                                <span className='mx-2'>این اثر دارای چند ادیشن است</span>
                                {/* <span className="checkmark"></span> */}
                            </label>
                        </div>
                    </div>
              <div className="d-block d-sm-flex box-dir-reverse w-100">
                <div  
              
                    className={classnames("", {
                        "col-sm-6": GetLanguage() === 'fa-IR',
                        "d-none": GetLanguage() === 'en-US'
                    })}

                >
                        <div className="form-group">


                        <Form.Item
                            name="description_fa"
                            // label="Intro"
                            
                            rules={[
                            {
                                required: false,
                                message: 'required',
                            },
                            ]}
                        >
                            <Input.TextArea id="info-213" rows={6} showCount maxLength={200} placeholder="توضیحات اثر به فارسی"/>
                        </Form.Item>

                            {/* <textarea id="info-213" className="form-control " placeholder="توضیحات اثر به فارسی"
                                      rows="8"></textarea> */}
                            <label htmlFor="info-213" className="lable-public"></label>
                        </div>
                    </div>
                    <div
                    className={classnames("", {
                        "col-sm-6": GetLanguage() === 'fa-IR',
                        "col w-100": GetLanguage() === 'en-US'
                    })}
                    
                    >
                        <div className="form-group">

                        <Form.Item
                            name="description_en"
                            // label="Intro"
                            className=''
                            rules={[
                            {
                                required: true,
                                message: 'required',
                            },
                            ]}
                        >
                            <Input.TextArea className='' id="info-214" rows={6} showCount maxLength={200} placeholder="توضیحات اثر به انگلیسی"/>
                        </Form.Item>

                            {/* <textarea id="info-214" className="form-control" placeholder="توضیحات اثر به انگلیسی"
                                      rows="8"></textarea> */}
                            <label htmlFor="info-214" className="lable-public"></label>
                        </div>
                    </div>
              </div>
                    <div className="d-block d-sm-flex box-dir-reverse w-100">
                    <div 
                        className={classnames("", {
                            "col-sm-6": GetLanguage() === 'fa-IR',
                            "d-none": GetLanguage() === 'en-US'
                        })}
                    
                   >
                        <div className="public-group">

                                <Form.Item
                                    className="w-100"
                                    name="tag-fa"
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
                                        // placeholder='عنوان اثر' 
                                    />

                                </Form.Item>
                            {/* <input id="info-215" className="form-control input-public " required
                                   placeholder="" value=""/> */}
                            <label htmlFor="info-215" className="lable-public">افزودن تگ (فارسی)</label>
                            <span className="input-help text-dir">با افزودن یک یا چند تگ، اثر شما آسان‌تر توسط علاقه‌مندان و مخاطبان شما یافت می‌شود</span>
                        </div>
                    </div>
                    <div 
                        className={classnames("", {
                            "col-sm-6": GetLanguage() === 'fa-IR',
                            "col w-100": GetLanguage() === 'en-US'
                        })}
                    
                        >
                        <div className="public-group">


                                <Form.Item
                                    className="w-100"
                                    name="tag-en"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'required',
                                        }
                                    ]}>
                                
                                    <Input
                                        type="text"
                                        id="info-216"
                                        className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                        // placeholder='عنوان اثر' 
                                    />

                                </Form.Item>
                            {/* <input id="info-216" className="form-control input-public " required
                                   placeholder="" value=""/> */}
                            <label htmlFor="info-216" className="lable-public">افزودن تگ (انگلیسی)</label>
                            <span className="input-help text-dir w-100">تگ‌های انگلیسی به جستجوی آسان‌تر آثار شما توسط علاقه‌مندان خارجی زبان کمک می‌نماید</span>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
                <div className="adv-btn">
                    <button type="button" className="btn-prev ">
                        <span>انصراف</span>
                    </button>
                    <button htmlType="submit"   className="btn-next pull-left">
                        مرحله  بعد
                    </button>
                </div>
                </Form>
            </>
    )
}

export default ArtworkInformation;
