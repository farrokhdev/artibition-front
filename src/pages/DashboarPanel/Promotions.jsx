import React from 'react';

import info_pink_icon from '../../assets/img/info-pink.png';
import dates_icon from '../../assets/img/dates.svg';
import tip_icon from '../../assets/img/tip.svg';
import { t } from 'i18next';


function Promotions() {
    return (
        <div className="box artistpanel-4 ">
            <div className="d-flex box-dir-reverse justify-content-between public-header ">
                <div className="pull-dir">
                    <h2 className="d-flex default-title box-dir-reverse "><span className="mx-2">{t("content-panel-dashboard.promotion.title")}</span>
                        <a href="#">
                            <img src={tip_icon} width="18" height="18" alt="" />
                        </a>
                    </h2>
                </div>
                <div className="pull-dir ">
                    <a href="#">
                        <img src={dates_icon} width="20" height="20" alt="dates-icon" />
                    </a>
                </div>
            </div>
            <div className="promotion-blocks">
                <div className="promotion-block">
                    <h3 className="d-flex box-dir-reverse pink-title">
                        <img src={info_pink_icon} width="16" height="16" alt="" className="mx-2" />
                        <span>تخفیف ویژه یلدای ۹۹</span>
                    </h3>
                    <h3 className="d-flex box-dir-reverse gray-title">
                        <i className="glyphicon glyphicon-time mx-2"></i>
                        <span>۲۵ آذر الی ۱ دی ماه</span>
                    </h3>
                    <p className="text-dir">
                        به مناسبت شب یلدا تمامی آثار در آرتیبیش با ۲۵ درصد تخفیف در
                        .سایت قرار خواهند گرفت
                    </p>
                </div>
                <div className="promotion-block">
                    <h3 className="d-flex box-dir-reverse pink-title">
                        <img src={info_pink_icon} width="16" height="16" alt="" className="mx-2" />
                        <span>کمپین آثار نقاشی آرتیبیشن</span>
                    </h3>
                    <h3 className="d-flex box-dir-reverse gray-title">
                        <i className="glyphicon glyphicon-time mx-1"></i>
                        <span>۱۹ الی ۲۶ مرداد ماه</span>
                    </h3>
                    <p className="text-dir">
                        در کمپین نقاشی آرتیبیشن قصد داریم از با تبلیغ آثار نقاشی آن‌ها را
                        در معرض دید مخاطبان بیشتری قرار دهیم. با انتشار اثر جدید و یا
                        گذاشتن تخفیف برای آثار نقاشی خود می‌توانید بیشتر دیده شوید
                        و آثار بیشتری به فروش برسانید.
                    </p>
                </div>
            </div>
            <button type="button" className="btn btn-more">{t("content-panel-dashboard.promotion.veiw_more")}</button>
        </div>
    )
}

export default Promotions
