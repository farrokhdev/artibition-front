import React from "react";
import { useTranslation } from "react-i18next";

const Banner = ({
  handleBannerSearchInputChanged,
  handleBannerSearchClick,
}) => {
  const { t } = useTranslation();
  return (
    <div className="banner">
      <div className="content-banner">
        <h2 className="content-title">{t("artworkList.box-banner.title")}</h2>
        <p className="txt-title">{t("artworkList.box-banner.text")}</p>
        <div className="nl-input">
          <input
            placeholder={t("artworkList.box-banner.placeholder")}
            onChange={(e) => handleBannerSearchInputChanged(e.target.value)}
          />
          <button
            type="button"
            className="btn-black"
            onClick={handleBannerSearchClick}
          >
            {t("artworkList.box-banner.btn")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
