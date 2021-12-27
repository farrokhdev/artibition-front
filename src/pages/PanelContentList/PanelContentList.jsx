import React from 'react';
import { t } from 'i18next';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';

import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import plus_white_icon from '../../assets/img/plus-white.png';


function PanelContentList() {
    return (
        <>
        <HeaderPanel t={t} />
        <div className="panel-style margin-top-20">
          <SidebarPanel />
          <div className="custom-container">



          <div class="d-block d-md-flex box-dir-reverse">
            <div class="col-md-8">
                <div class="box artistpanel-5">
                    <div class="public-header">
                        <h2 class="default-title text-dir">لیست محتوا</h2>
                    </div>
                    <table class="table wallet-table dir">
                        <thead>
                        <tr>
                            <td>ردیف</td>
                            <td>تصویر</td>
                            <td>عنوان</td>
                            <td>نوع محتوا</td>
                            <td>تاریخ انتشار</td>
                            <td>وضعیت</td>
                            <td>جزئیات</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td data-label="ردیف" class="persian-num">1</td>
                            <td data-label="تصویر"><img src={artwork1} width="1776" height="1776"
                                                        alt=""
                                                        class="img-responsive center-block"/></td>
                            <td data-label="عنوان">...نگاهی به هنر مائوریتزیو کاتلان</td>
                            <td data-label="نوع محتوا">ویدیوئی</td>
                            <td data-label="تاریخ انتشار" class="persian-num">۹۹/۰۶/۱۰</td>
                            <td data-label="وضعیت">فعال</td>
                            <td data-label="جزئیات" class="status">
                                <button type="button" class="btn-outline-blue">ویرایش</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-label="ردیف" class="persian-num">1</td>
                            <td data-label="تصویر"><img src={artwork1} width="1776" height="1776"
                                                        alt=""
                                                        class="img-responsive center-block"/></td>
                            <td data-label="عنوان">...نگاهی به هنر مائوریتزیو کاتلان</td>
                            <td data-label="نوع محتوا">ویدیوئی</td>
                            <td data-label="تاریخ انتشار" class="persian-num">۹۹/۰۶/۱۰</td>
                            <td data-label="وضعیت">فعال</td>
                            <td data-label="جزئیات" class="status">
                                <button type="button" class="btn-outline-blue">ویرایش</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-label="ردیف" class="persian-num">1</td>
                            <td data-label="تصویر"><img src={artwork1} width="1776" height="1776"
                                                        alt=""
                                                        class="img-responsive center-block"/></td>
                            <td data-label="عنوان">...نگاهی به هنر مائوریتزیو کاتلان</td>
                            <td data-label="نوع محتوا">ویدیوئی</td>
                            <td data-label="تاریخ انتشار" class="persian-num">۹۹/۰۶/۱۰</td>
                            <td data-label="وضعیت">فعال</td>
                            <td data-label="جزئیات" class="status">
                                <button type="button" class="btn-outline-blue">ویرایش</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-label="ردیف" class="persian-num">1</td>
                            <td data-label="تصویر"><img src={artwork1} width="1776" height="1776"
                                                        alt=""
                                                        class="img-responsive center-block"/></td>
                            <td data-label="عنوان">...نگاهی به هنر مائوریتزیو کاتلان</td>
                            <td data-label="نوع محتوا">ویدیوئی</td>
                            <td data-label="تاریخ انتشار" class="persian-num">۹۹/۰۶/۱۰</td>
                            <td data-label="وضعیت">فعال</td>
                            <td data-label="جزئیات" class="status">
                                <button type="button" class="btn-outline-blue">ویرایش</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-label="ردیف" class="persian-num">1</td>
                            <td data-label="تصویر"><img src={artwork1} width="1776" height="1776"
                                                        alt=""
                                                        class="img-responsive center-block"/></td>
                            <td data-label="عنوان">...نگاهی به هنر مائوریتزیو کاتلان</td>
                            <td data-label="نوع محتوا">ویدیوئی</td>
                            <td data-label="تاریخ انتشار" class="persian-num">۹۹/۰۶/۱۰</td>
                            <td data-label="وضعیت">فعال</td>
                            <td data-label="جزئیات" class="status">
                                <button type="button" class="btn-outline-blue">ویرایش</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-md-4">
                <div class="box box-1 create-ex">
                    <div class="pull-dir">
                        <span class="bolder-title">ایجاد محتوا</span>
                    </div>
                    <a href="#" class="btn-box-1 btn-pink pull-left">
                        <img src={plus_white_icon} width="16" height="16" class="center-block"/>
                    </a>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
  
      
          </div>
          <BasketFooterPanel />
        </div>
      </>
    )
}

export default PanelContentList;
