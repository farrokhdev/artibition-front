import React from "react";
import { t } from 'i18next';
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import BasketFooterPanel from "../../components/BasketFooterPanel/BasketFooterPanel";
import BasketFooterPanelNoBox from "../GalleryPanelSelectArtworkSource/BasketFooterPanelNoBox";



function AdvisorySubmited() {
    return (
        <>
            <HeaderPanel t={t} />
            <div class="row mrgt125">
                <div class="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 dir">
                    <div class="adv-content">
                        <div class="adv-submit">
                            <h2>{t("advistory-submited.title")}</h2>
                            <p class="text-justify">
                                {t("advistory-submited.description")}
                            </p>
                            <h3 class="adv-submit-title">{t("advistory-submited.arthibition_address_title")}</h3>
                            <br />
                            {t("advistory-submited.arthibition_address_1")}
                            <br />
                            {t("advistory-submited.arthibition_address_2")}
                            <p></p>
                            <h3 class="adv-submit-title">{t("advistory-submited.contact")}</h3>
                            <a class="persian-num" href="tel:+989122121030">{t("advistory-submited.phone")}</a>
                        </div>
                        <button type="button" class="btn btn-default">{t("advistory-submited.back_home")}</button>
                    </div>
                </div>
                <BasketFooterPanelNoBox />
            </div>
        </>
    )
}

export default AdvisorySubmited