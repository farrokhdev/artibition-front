import React from 'react';
import newsletter from '../../assets/img/newsletter.svg';
export default function Newslatter() {
    return (
        <div className="newsletter">
        <div className="d-block d-md-flex">
            <div className="col ">
                <div className="row-left-15">
                    <div className="newsletter-right">
                        <img src={newsletter} className="pull-right" width="96" height="80" alt="خبرنامه-آرتیبیشن"/>
                        <h3 className="default-title">عضویت در خبرنامه آرتیبیشن</h3>
                        <p className="newsletter-text">با عضویت از جدیدترین اخبار و آثار منتشر شده با خبر شوید</p>
                        <div className="nl-input">
                            <input placeholder="ایمیل خود را وارد نمایید"/>
                            <button type="button">ثبت ایمیل</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix visible-xs"></div>
            <div className="col ">
                <div className="row-right-15">
                    <div className="newsletter-left">
                        <button type="button" className="btn-nlupload">آپلود اثر</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
