import React from "react";
import BasketFooterPanel from "../../components/BasketFooterPanel/BasketFooterPanel";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import SidebarPanel from "../../components/SidebarPanel/SidebarPanel";
import { t } from "i18next";
import { alertNotice, alertSuccess } from "../../utils/alerts";

import financial_reports_orange from '../../assets/img/financial_reports-orange.svg';
import new_artwork from '../../assets/img/new-artwork.png';
import done_icon from '../../assets/img/done.svg';
import TableOrders from "./TableOrders";
import TableActiveOrders from "./TableActiveOrders";
import TableSuggestionToYourArtworks from "./TableSuggestionToYourArtworks";
import MyIncome from "./MyIncome";
import Promotions from "./Promotions";
import VeiwArtworks from "./VeiwArtworks";
import StatusSection from "./StatusSection";
import BoxStatusArtwork from "./BoxStatusArtwork";
import BoxGallery from "./BoxGallery";


function DashboardPanel() {
  return (
    <>
      <HeaderPanel t={t} />

      <div className="panel-style margin-top-fa">
        <SidebarPanel />

        <div className="custom-container">

            {alertNotice(
                //className
                "d-flex box-dir-reverse  alert alert-notice text-dir" , 
                //icon
                <img src={financial_reports_orange} width="24" height="24" alt="report-icon" class=""/> ,
                //content-description
                <>
                    <span class="d-block d-xl-flex box-dir-reverse text-dir"> 
                        <p>{t("content-panel-dashboard.alerts.info_notice.text1")} <a href="#">{t("content-panel-dashboard.alerts.this_contract")}</a>{t("content-panel-dashboard.alerts.info_notice.text2")}<a href="#">{t("content-panel-dashboard.alerts.here")}</a> {t("content-panel-dashboard.alerts.info_notice.text3")}</p>
                        <button type="button" class="btn-blue mx-2 mt-3 mt-xl-0">
                            <img src={new_artwork} width="20" height="20" alt="new-artwork" class="mx-2" />
                            <span >{t("content-panel-dashboard.alerts.btn_upload")}</span>
                        </button>
                    </span>
                </>,
                //closable
                false
            )}


            {alertSuccess(  
                //className
                "d-flex box-dir-reverse  alert alert-success" ,
                //icon
                <img src={done_icon} width="24" height="24" alt="" class=""/> ,
                 //content-description
                <p className=" text-dir">{t("content-panel-dashboard.alerts.info_success")}
                <a href="#">{t("content-panel-dashboard.alerts.text_upload")}</a></p> , 
                //closable
                true
            )}

        
                <BoxGallery/>
                
            <div class="row box-dir-reverse ">
                <div class="col-lg-8 ">
                    <BoxStatusArtwork/>
                </div>
                <div class="col-lg-4">
                    <StatusSection/>
                </div>
                <div class="col-lg-8 ">
                    <TableOrders/>
                    <TableActiveOrders/>
                    <TableSuggestionToYourArtworks/>
                    <VeiwArtworks/>
                </div>
                <div class="col-lg-4">
                    <MyIncome/>
                    <Promotions/>
                </div>
            </div>
        </div>

        <BasketFooterPanel />
      </div>
    </>
  );
}

export default DashboardPanel;
