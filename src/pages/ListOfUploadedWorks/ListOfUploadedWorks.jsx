import React from 'react';
import { t } from 'i18next';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import artworks from '../../assets/img/artworks/artwork-1.jpg';
import editname from '../../assets/img/edit_name.svg';
import artwork from '../../assets/img/artwork.svg'

function ListOfUploadedWorks() {
    return (
        <>
            <HeaderPanel t={t} />
            <div className="panel-style container mx-auto px-0 w-100 bg-white">
                <div class="container container-fixed">
                    <div class="clearfix"></div>
                    <div class="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">
                        <div class="artist-info">
                            <img src={artwork} width="136" height="136" alt="" class="center-block img-responsive" />
                            <h2 class="adv-title">آپلود ۳ اثر</h2>
                            <p>
                                جهت نهایی سازی پروفایل خود، حداقل ۳ اثر
                                <br />
                                از آثار خود را آپلود نمایید
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-12 upload-art-body">
                        <table class="table table-responsive upload-art table-order d-table dir">
                            <thead>
                                <tr>
                                    <td></td>
                                    <td>ردیف</td>
                                    <td>تصویر</td>
                                    <td>عنوان اثر</td>
                                    <td>رشته هنری</td>
                                    <td>موضوع</td>
                                    <td>تکنیک</td>
                                    <td>متریال</td>
                                    <td>ابعاد</td>
                                    <td>قیمت</td>
                                    <td>عملیات</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="complete-row">
                                    <td data-label="ردیف" class="persian-num">1</td>
                                    <td>
                                        <img src={artworks} width="1776" height="1776"
                                            class="img-responsive center-block" alt="" />
                                    </td>
                                    <td data-label="عنوان اثر">خطاطی</td>
                                    <td data-label="رشته هنری">نقاشی خط</td>
                                    <td data-label="موضوع">نقاشی خط</td>
                                    <td data-label="تکنیک">پاستل</td>
                                    <td data-label="متریال">کلاژ</td>
                                    <td data-label="ابعاد">
                                        <span class="dimension-width persian-num">60</span>
                                        <span> در </span>
                                        <span class="dimension-height persian-num">60</span>
                                    </td>
                                    <td data-label="قیمت">
                                        <span class="col-price-num">2.100.000</span>
                                        <span class="col-price-unit">تومان</span>
                                    </td>
                                    <td data-label="عملیات">
                                        <a href="#"><img src={editname} width="32" height="32" alt="" /> </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListOfUploadedWorks; 