import React from "react";
import clear_icon from "../../../assets/img/clear.svg";
import filter_icon from "../../../assets/img/Filter.svg";

import { useTranslation } from "react-i18next";

const ExhibitionRemoveFilters = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      type="button"
      className="filter-btn filter-exhibitions"
      onClick={() => window.location.reload()}
    >
      <img src={filter_icon} width="16" height="15" alt="" />
      <span>{t("exhibitions-page.filter")}</span>
      <button className="btn clear-tag">
        <img src={clear_icon} width="10" height="10" alt="" />
        <span>{t("exhibitions-page.remove-all")}</span>
      </button>
    </div>
  );
};

export default ExhibitionRemoveFilters;
