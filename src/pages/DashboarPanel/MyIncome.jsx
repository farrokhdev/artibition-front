import { t } from "i18next";
import React from "react";

import cash_icon from '../../assets/img/cash.png';



function MyIncome() {
  return (
    <div className="box artistpanel-7 ">
      <div className="public-header">
        <h2 className="default-title text-dir">
          {t("content-panel-dashboard.my_income.title")}
        </h2>
      </div>
      <div className="cash-state">
        <img
          src={cash_icon}
          width="64"
          height="64"
          alt=""
          className="center-block"
        />
        <div className="d-flex box-dir-reverse justify-content-center align-items-center">
          <span className="persian-num mx-2">۴,۵۰۰,۰۰۰</span>
          <span>تومان</span>
        </div>
        <button type="button" className="btn-back-blue">
          {t("content-panel-dashboard.my_income.detail")}
          <i className="glyphicon glyphicon-chevron-left"></i>
        </button>
      </div>
    </div>
  );
}

export default MyIncome;
