import React from 'react';

import cloud_upload from '../../assets/img/cloud-upload.svg'

function ArtworkInformation({next , prev}) {
    return (
        <>
            <h3 class="info-title mrgt64 require text-dir">آپلود تصویر اثر</h3>
            <div class="upload-img-artwork">
                <div class="btn-upload-artwork">
                    <img src={cloud_upload} width="64" height="57" alt="" class=""/>
                    <p>یک یا چند عکس را بگیرید و در اینجا بیاندازید
                        <br/>
                        یا</p>
                    <label for="file-upload" class="btn-blue">انتخاب فایل از سیستم</label>
                    <p class="upload-size"> باشند PNG و یا JPG ابعاد عکس‌ها می‌بایست حداقل ۹۶۰ در ۹۶۰ و
                        با فرمت</p>
                </div>
                <input id="file-upload" type="file"/>
            </div>
            <div class="info-sec">
                <h3 class="infotitle-default text-dir">اطلاعات هنری</h3>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="public-group">
                            <input id="info-201" class="form-control input-public " required
                                   placeholder="" value=""/>
                            <label for="info-201" class="lable-public">عنوان اثر</label>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="public-group en">
                            <input id="info-202" class="form-control input-public en-lang " required
                                   placeholder=""
                                   value=""/>
                            <label for="info-202" class="lable-public en-lang">Artwork Name</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="public-group">
                            <select class="input-public" id="info-203">
                                <option>رشته اول</option>
                                <option>رشته دوم</option>
                                <option>رشته سوم</option>
                            </select>
                            <label for="info-203" class="lable-public">رشته هنری</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="public-group">
                            <select class="input-public" id="info-204">
                                <option>موضوع اول</option>
                                <option>موضوع دوم</option>
                                <option>موضوع سوم</option>
                            </select>
                            <label for="info-204" class="lable-public">موضوع</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="public-group">
                            <select class="input-public" id="info-205">
                                <option>تکنیک اول</option>
                                <option>تکنیک دوم</option>
                                <option>تکنیک سوم</option>
                            </select>
                            <label for="info-205" class="lable-public">تکنیک</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="public-group">
                            <select class="input-public" id="info-206">
                                <option>متریال اول</option>
                                <option>متریال دوم</option>
                                <option>متریال سوم</option>
                            </select>
                            <label for="info-206" class="lable-public">متریال</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="public-group">
                            <input id="info-207" class="form-control input-public " required
                                   placeholder="" value=""/>
                            <label for="info-207" class="lable-public">تاریخ خلق اثر (شمسی)</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="row">
                            <div class="col-sm-4 col-xs-6">
                                <div class="public-group">
                                    <input id="info-208" class="form-control input-public " required
                                           placeholder=""
                                           value=""/>
                                    <label for="info-208" class="lable-public">عرض</label>
                                </div>
                            </div>
                            <div class="col-sm-4 col-xs-6">
                                <div class="public-group">
                                    <input id="info-209" class="form-control input-public " required
                                           placeholder=""
                                           value=""/>
                                    <label for="info-209" class="lable-public">طول</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="public-group">
                            <select class="input-public" id="info-210">
                                <option>مجموعه اول</option>
                                <option>مجموعه دوم</option>
                                <option>مجموعه سوم</option>
                            </select>
                            <label for="info-210" class="lable-public">انتخاب مجموعه</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="public-group">
                            <input id="info-211" class="form-control input-public " required
                                   placeholder="" value=""/>
                            <label for="info-211" class="lable-public">وزن اثر</label>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="d-flex box-dir-reverse">
                            <label class="lable-checkbox public-group text-dir">
                                <input type="checkbox" value=""/>
                                <span>این اثر دارای چند ادیشن است</span>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <textarea id="info-213" class="form-control " placeholder="توضیحات اثر به فارسی"
                                      rows="8"></textarea>
                            <label for="info-213" class="lable-public"></label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group ">
                            <textarea id="info-214" class="form-control" placeholder="توضیحات اثر به انگلیسی"
                                      rows="8"></textarea>
                            <label for="info-214" class="lable-public"></label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="public-group">
                            <input id="info-215" class="form-control input-public " required
                                   placeholder="" value=""/>
                            <label for="info-215" class="lable-public">افزودن تگ (فارسی)</label>
                            <span class="input-help">با افزودن یک یا چند تگ، اثر شما آسان‌تر توسط علاقه‌مندان و مخاطبان شما یافت می‌شود</span>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="public-group">
                            <input id="info-216" class="form-control input-public " required
                                   placeholder="" value=""/>
                            <label for="info-216" class="lable-public">افزودن تگ (انگلیسی)</label>
                            <span class="input-help">تگ‌های انگلیسی به جستجوی آسان‌تر آثار شما توسط علاقه‌مندان خارجی زبان کمک می‌نماید</span>
                        </div>
                    </div>
                </div>
            </div>
                <div class="adv-btn">
                    <button type="button" class="btn-prev ">
                        <span>انصراف</span>
                    </button>
                    <button onClick={() => next()} type="button" class="btn-next pull-left">
                        مرحله  بعد
                    </button>
                </div>
            </>
    )
}

export default ArtworkInformation;
