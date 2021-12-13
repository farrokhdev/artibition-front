import React from 'react';

import gift from '../../assets/img/gift.svg';
import unread from '../../assets/img/unnamed.jpg';
import artist4 from '../../assets/img/artist-4.jpg';
import profile from '../../assets/img/arthibition_profile.svg';
import add_white_icon from '../../assets/img/add-white.png';
import { t } from 'i18next';

function NotificationTab() {
return (
<>

    <div className="row mx-5">


        <div className="message-block unread w-100">
            <h3 className="d-flex box-dir-reverse msg-header">
                <img src={gift} className='mx-2' width="22" height="22" alt="" />
                <span className="msg-title">تخفیف ۲۵ درصدی سایت به مناسبت شب یلدا</span>
                <span className="msg-new">{t("content-panel-messages.new")}</span>
            </h3>
            <p className="text-justify pull-dir">
                ‏99 تمامی آثار سایت را با ۲۵ درصد تخفیف خریداری نمایید و هدیه‌ای ارزنده راYALDA ضمن
                عرض تبریک به مناسبت فرا رسیدن شب یلدا، هم اکنون می‌توانید با استفاده از کد تخفیف
                به خانواده و دوستان خود اهدا نمایید.
            </p>
        </div>
        <div className="message-block  w-100">
            <h3 className="d-flex box-dir-reverse msg-header">
                <img src={gift} className='mx-2' width="22" height="22" alt="" />
                <span className="msg-title">حمایت از سیل‌زدگان خوزستان</span>
                <span className="msg-new">{t("content-panel-messages.new")}</span>
            </h3>
            <p className="text-justify pull-dir">
            گالری آرتیبیشن با همکاری موسسه محک اقدام به راه‌اندازی طرح حمایت از سیل‌زدگان
                خوزستان کرده است. با اهدال وجه نقد و یا هر وسیله ضروری در این طرح انسان دوستانه شرکت
                .نمایید و در ازای کمک خود یک اثر هنری از آرتیبیشن هدیه دریافت نمایید. جهت دریافت
                اطلاعات بیشتر به <a href="#" className="inner-link">این لینک</a>
                مراجعه نمایید
            </p>
        </div>

        <div className="message-block  w-100">
            <h3 className="d-flex box-dir-reverse msg-header">
                <span className="msg-title">قابلیت جدید سایت آرتیبیشن</span>
                <span className="msg-new">{t("content-panel-messages.new")}</span>
            </h3>
            <p className="text-justify pull-dir">
            .در نسخه جدید سایت آرتیبیشن می‌توانید آثار مورد علاقه خود را در
                یک کالکشن ذخیره نمایید و به اسم خود در سایت منتشر نمایید
                <a href="#" className="inner-link">یک کالکشن بسازید</a>
            </p>
        </div>
    </div>
    
</>
)
}

export default NotificationTab