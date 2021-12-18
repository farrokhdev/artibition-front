import React from "react";
import { t } from "i18next";

import statistic_icon from '../../assets/img/statistic.png';


function VeiwArtworks() {
  return (
    <div class="box artistpanel-6 ">
      <div class="public-header">
        <h2 class="default-title text-dir">
          {t("content-panel-dashboard.tables.veiw_artworks")}
        </h2>
      </div>
      <div class="sec2-emptybody empty-statistic">
        <img src={statistic_icon} width="67" height="83" />
        <p>{t("content-panel-dashboard.tables.empty_offers_artworks.title")}</p>
        <button type="button" class="btn-blue ">
          <img src="img/add-white.png" width="12" height="12" alt="" class="" />
          <span>{t("content-panel-dashboard.box_status.btn")}</span>
        </button>
      </div>
    </div>
  );
}

export default VeiwArtworks;
