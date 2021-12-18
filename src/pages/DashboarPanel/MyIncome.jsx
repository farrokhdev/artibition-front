import { t } from "i18next";
import React from "react";

import cash_icon from '../../assets/img/cash.png';



function MyIncome() {
  return (
    <div class="box artistpanel-7 ">
      <div class="public-header">
        <h2 class="default-title text-dir">
          {t("content-panel-dashboard.my_income.title")}
        </h2>
      </div>
      <div class="cash-state">
        <img
          src={cash_icon}
          width="64"
          height="64"
          alt=""
          class="center-block"
        />
        <div className="d-flex box-dir-reverse justify-content-center align-items-center">
          <span class="persian-num mx-2">۴,۵۰۰,۰۰۰</span>
          <span>تومان</span>
        </div>
        <button type="button" class="btn-back-blue">
          {t("content-panel-dashboard.my_income.detail")}
          <i class="glyphicon glyphicon-chevron-left"></i>
        </button>
      </div>
    </div>
  );
}

export default MyIncome;
