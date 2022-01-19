import React from "react";
import { t } from 'i18next';


function ExtraDescriptionStep({ prev, next }) {
    return (
        <>
            <div className="container advisory-select mrgt0">
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
                        <div className="adv-content">
                            <h2 className="adv-title">{t("advisory.extra_description_step.title")}</h2>
                            <p className="aligncenter">{t("advisory.extra_description_step.description")}</p>
                        </div>
                    </div>
                    <div className="mrgt64 col-md-6 mx-auto">
                        <div className="form-group">
                            <textarea className="form-control text-align-dir" rows="8" placeholder={t("advisory.extra_description_step.description_placeholder")}></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="adv-btn" style={{ backgroundColor: "white" }}>
                <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 d-flex justify-content-space-between">
                    <button type="button" className="btn-prev dir-rtl" onClick={() => { prev() }}>{t("advisory.extra_description_step.btn_prev")}</button>
                    <button type="button" className="btn-next dir-rtl">{t("advisory.extra_description_step.btn_submit")}</button>
                </div>
            </div>
        </>
    )
}

export default ExtraDescriptionStep