import React, { useEffect, useState } from "react";
import i18next, { t } from 'i18next';
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import BasketFooterPanel from "../../components/BasketFooterPanel/BasketFooterPanel";
import SidebarPanel from "../../components/SidebarPanel/SidebarPanel";
import MultipleUpload from "../../components/MultiUpload/MultiUpload";
import { Form } from "antd";
import apiServices from "../../utils/api.services";
import { ARTWORK_BY_GALLERY } from "../../utils";
import { useSearchParams } from "react-router-dom";



function GalleryPanelAddArtwork() {

    const [uploadList, setUploadList] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()


    const onFinish = () => {
        // apiServices.post(ARTWORK_BY_GALLERY(id, searchParams.get("artist_id")), payload)

    }

    return (
        <>
            <HeaderPanel t={t} />
            <div class="upload-artist-artwork">
                <h2 class="default-title aligncenter">آپلود اثر هنرمند</h2>
                <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 create-exhibition">
                    <div class="artist-name-row">
                        <div class="artist-avatar pull-right">
                            <img class="img-responsive" src="img/Aydin_Aghdashloo_04@3x.jpg" height="192" width="192" alt="آیدین آغداشلو" />
                        </div>
                        <h4 class="artists-name">
                            <span>آیدین</span>
                            <span>آغداشلو</span>
                        </h4>
                    </div>
                    <h3 class="info-title mrgt64 require">آپلود تصویر اثر</h3>
                    {/* <div class="upload-img-artwork">
                        <div class="btn-upload-artwork">
                            <img src="img/cloud-upload.svg" width="64" height="57" alt="" class=""/>
                                <p>یک یا چند عکس را بگیرید و در اینجا بیاندازید
                                    <br/>
                                        یا</p>
                                <label for="file-upload" class="btn-blue">انتخاب فایل از سیستم</label>
                                <p class="upload-size"> باشند PNG و یا JPG ابعاد عکس‌ها می‌بایست حداقل ۹۶۰ در ۹۶۰ و
                                    با فرمت</p>
                        </div>
                        <input id="file-upload" type="file"/>
                    </div> */}
                    <MultipleUpload uploadList={uploadList} setUploadList={setUploadList} />
                    <div class="info-sec">
                        <h3 class="infotitle-default">اطلاعات هنری</h3>
                        <div class="row">
                            <Form onFinish={onFinish}>
                                <Form.Item>

                                </Form.Item>

                            </Form>
                            <div class="col-sm-6">
                                <div class="public-group">
                                    <input class="form-control input-public " required="" placeholder="" value="" />
                                    <label class="lable-public">عنوان اثر</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="public-group en">
                                    <input id="info-202" class="form-control input-public en-lang " required="" placeholder="" value="" />
                                    <label for="info-202" class="lable-public en-lang">Artwork Name</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="public-group">
                                    <select class="input-public">
                                        <option>نقاشی</option>
                                        <option>خطاطی</option>
                                    </select>
                                    <label class="lable-public">رشته هنری</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="public-group">
                                    <select class="input-public">
                                        <option>اول</option>
                                        <option>دوم</option>
                                    </select>
                                    <label class="lable-public">موضوع</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="public-group">
                                    <select class="input-public">
                                        <option>تکنیک اول</option>
                                        <option>تکنیک دوم</option>
                                    </select>
                                    <label class="lable-public">تکنیک</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="public-group">
                                    <select class="input-public">
                                        <option>نقاشی</option>
                                        <option>خطاطی</option>
                                    </select>
                                    <label class="lable-public">متریال</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="public-group">
                                    <input class="form-control input-public persian-num " required="" placeholder="" value="1399/02/01" />
                                    <label class="lable-public">تاریخ خلق اثر (شمسی)</label>
                                </div>
                            </div>
                            <div class="col-sm-2 col-xs-6">
                                <div class="public-group">
                                    <input class="form-control input-public persian-num " required="" placeholder="" value="60" />
                                    <label class="lable-public">عرض</label>
                                </div>
                            </div>
                            <div class="col-sm-2 col-xs-6">
                                <div class="public-group">
                                    <input class="form-control input-public persian-num " required="" placeholder="" value="60" />
                                    <label class="lable-public">طول</label>
                                </div>
                            </div>
                            <div class="col-sm-2 col-xs-6">
                                <div class="public-group">
                                    <input class="form-control input-public persian-num " required="" placeholder="" value="10" />
                                    <label class="lable-public">ارتفاع</label>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xs-6">
                                <div class="public-group">
                                    <input class="form-control input-public persian-num " required="" placeholder="" value="10" />
                                    <label class="lable-public">وزن اثر</label>
                                </div>
                            </div>
                            <div class="clearfix visible-xs"></div>
                            <div class="col-sm-6">
                                <label class="lable-checkbox mrgt45">
                                    <input type="checkbox" value="" />
                                    <span>این اثر دارای چند ادیشن است</span>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <h3 class="infotitle-default">اطلاعات فروش</h3>
                        <div class="row">
                            <div class="col-sm-12">
                                <label class="lable-checkbox public-group">
                                    <input type="checkbox" value="" />
                                    <span>برای نمایش</span>
                                    <span class="checkmark"></span>
                                    <span class="input-help">با انتخاب این گزینه اثر تنها برای نمایش در سایت قرار می‌گیرد</span>
                                </label>
                            </div>
                            <div class="col-sm-6">
                                <div class="public-group">
                                    <input class="form-control input-public persian-num " required="" placeholder="" value="50.000.000" />
                                    <label class="lable-public">قیمت اثر به تومان</label>
                                </div>
                                <a href="#" class="btn-change">
                                    <img src="img/change.png" width="24" height="24" alt="" class="" />
                                </a>
                            </div>
                            <div class="col-sm-6">
                                <div class="public-group">
                                    <input class="form-control input-public persian-num " required="" placeholder="" value="2000" />
                                    <label class="lable-public">معادل قیمت به دلار</label>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <label class="lable-checkbox public-group">
                                    <input type="checkbox" value="" />
                                    <span>این اثر فروخته شده</span>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div class="col-sm-12">
                                <label class="lable-checkbox public-group">
                                    <input type="checkbox" checked="" value="" />
                                    <span>امکان ارسال پیشنهاد قیمت</span>
                                    <span class="checkmark"></span>
                                    <span class="input-help">از طریق این قابلیت مشتریان شما می‌توانند پیشنهاد قیمتی خود را به شما ارسال نمایند</span>
                                </label>
                            </div>
                        </div>
                        <button type="button" class="btn-add-artist">
                            <img src="img/add-white@2x.png" width="24" height="24" alt="" class="img-responsive" />
                            <span>آپلود اثر دیگر</span>
                        </button>
                    </div>
                    <div class="adv-btn">
                        <button type="button" class="btn-black pull-left ">پایان آپلود آثار هنرمند</button>
                    </div>

                </div>
            </div>

            {/* <BasketFooterPanel/> */}

        </>
    )
}

export default GalleryPanelAddArtwork