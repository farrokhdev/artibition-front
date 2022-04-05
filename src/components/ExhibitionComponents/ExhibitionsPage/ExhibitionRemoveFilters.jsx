import React from "react";
import clear_icon from "../../../assets/img/clear.svg";
import { useTranslation } from "react-i18next";

const ExhibitionRemoveFilters = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      type="button"
      className="filter-btn"
      onClick={() => window.location.reload()}
    >
      <img src="img/Filter.svg" width="16" height="15" alt="" />
      <span>{t("exhibitions-page.filter")}</span>
      <button className="btn clear-tag">
        <img src={clear_icon} width="10" height="10" alt="" />
        <span>{t("exhibitions-page.remove-all")}</span>
      </button>
    </div>
  );
};

export default ExhibitionRemoveFilters;
