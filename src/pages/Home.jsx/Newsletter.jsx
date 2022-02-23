import { t } from 'i18next';
import React from 'react';
import newsletter from '../../assets/img/newsletter.svg';
export default function Newslatter() {
    return (
        <div className="newsletter">
        <div className="d-block d-lg-flex dir">
            <div className="col ">
                <div className="row w-100">
                    <div className="newsletter-right w-100">
                        <img src={newsletter} className="pull-right" width="96" height="80" alt="خبرنامه-آرتیبیشن"/>
                        <h3 className="default-title">{t("subscribe-newsletter-home.title")}</h3>
                        <p className="newsletter-text">{t("subscribe-newsletter-home.text-info")}</p>
                        <div className="d-block d-md-flex nl-input">
                            <input placeholder={t("subscribe-newsletter-home.placeholder-email")}/>
                            <button type="button">{t("subscribe-newsletter-home.submit-email-btn")}</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="clearfix visible-xs"></div>
            <div className="col ">
                {/* <div className="row w-100"> */}
                    <div className="row-right-15 w-100">
                        <div className="newsletter-left w-100">
                            <button type="button" className="btn-nlupload">{t("upload")}</button>
                        </div>
                    </div>
                    
                {/* </div> */}
            </div>
        </div>
    </div>
    //     <div className="newsletter">
    //     <div className="d-block d-lg-flex">
    //         <div className="col ">
    //             <div className="d-flex row">
    //                 <div className="newsletter-right">
    //                     <img src={newsletter} className="pull-right" width="96" height="80" alt="خبرنامه-آرتیبیشن"/>
    //                     <h3 className="default-title">{t("subscribe-newsletter-home.title")}</h3>
    //                     <p className="newsletter-text">{t("subscribe-newsletter-home.text-info")}</p>
    //                     <div className="nl-input">
    //                         <input placeholder={t("subscribe-newsletter-home.placeholder-email")}/>
    //                         <button type="button">{t("subscribe-newsletter-home.submit-email-btn")}</button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="clearfix visible-xs"></div>
    //         <div className="col ">
    //             <div className=" row-right-15 w-100">
    //                 <div className="newsletter-left w-100">
    //                     <button type="button" className="btn-nlupload">{t("upload")}</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    )
}
