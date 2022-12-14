import React, { useEffect } from "react";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import { t } from "i18next";
import SidebarPanel from "../../components/SidebarPanel/SidebarPanel";
import CounterStatus from "./CounterStatus";
import ContractStatus from "./ContractStatus";
import OrderStatus from "./OrderStatus";
import VisitStatus from "./VisitStatus";
import CreateExhibition from "./CreateExhibition";
import MyRevenue from "./MyRevenue";
import Promotion from "./Promotion";
import StatusSection from "../DashboarPanel/StatusSection";
import Promotions from "../DashboarPanel/Promotions";
import MyIncome from "../DashboarPanel/MyIncome";
import BasketFooterPanel from "../../components/BasketFooterPanel/BasketFooterPanel";
import SidebarGalleryPanel from "../../components/SidebarGalleryPanel/SidebarGalleryPanel";
import apiServices from "../../utils/api.services";

function GalleryPanelDashboard() {
  return (
    <>
      <HeaderPanel t={t} />
      <div className="panel-style margin-top-20">
        <SidebarGalleryPanel />
        <div className="custom-container">
          <div className="row box-dir-reverse dir">
            <div className="col-md-8">
              <CounterStatus />
            </div>
            <div className="col-md-4">
              <StatusSection />
            </div>
            <div className="col-md-8">
              <OrderStatus />
              <VisitStatus />
            </div>
            <div className="col-md-4">
              <CreateExhibition />
              {/* <MyIncome/> */}
              <Promotions />
            </div>
          </div>
        </div>
        <BasketFooterPanel />
      </div>
    </>
  );
}

export default GalleryPanelDashboard;
