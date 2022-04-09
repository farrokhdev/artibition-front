import React from "react";
import { t } from "i18next";

import logo from "../../assets/img/logo.svg";
import logo_icon from "../../assets/img/logo-icon.svg";

function HeaderPayment() {
  return (
    <div className="default-header basket-header">
      <div className="row dir">
        <div className="col-sm-8 col-sm-offset-2">
          <a href="/" className="artibition-logo">
            <img
              src={logo}
              width="240"
              height="62"
              alt="Artibition-logo"
              className="center-block hidden-xs"
            />
            <img
              src={logo_icon}
              width="1079"
              height="1079"
              alt="Artibition-logo"
              className="img-responsive visible-xs"
            />
          </a>
          <div className="clearfix hidden-xs"></div>
          <ul className="basket-nav">
            <li className="active">
              <a href="#">
                {t("header-panel.shopping_guid")}
                <span className="hidden-xs">{t("header-panel.from_site")}</span>
              </a>
            </li>
            <li>
              <a href="#">{t("header-panel.faq")}</a>
            </li>
            <li className="hidden-xs">
              {t("header-panel.contact_us")}
              <span className="persian-num">
                {t("header-panel.phone_number")}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderPayment;
