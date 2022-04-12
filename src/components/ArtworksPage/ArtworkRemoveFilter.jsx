import React from "react";
import filter_icon from "../../assets/img/Filter.svg";
import clear_icon from "../../assets/img/clear.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
/**
 * @param setParams
 * @param params @param setSelectedOption @param selectedOption
 *
 */
const ArtworkRemoveFilter = (props) => {
  const { setParams, params, setSelectedOption, selectedOption } = props;
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  return (
    <div className="d-flex box-dir-reverse dir">
      <div className="col-sm-3 col-xs-6">
        <div type="button" className="filter-btn">
          <div className="d-flex box-dir-reverse align-items-center">
            <img src={filter_icon} width="16" height="15" alt="" />
            <span className="mx-2">{t("artworkList.filter.title")}</span>
            <button
              className="btn clear-tag mx-3"
              style={
                Object.keys(params).length > 0
                  ? { display: "unset" }
                  : { display: "none" }
              }
              onClick={() => {
                setParams({});
                // navigate(`/site/artworks`);
                window.location.reload();
              }}
            >
              <div className="d-flex box-dir-reverse align-items-center">
                <img
                  className="mx-2"
                  src={clear_icon}
                  width="10"
                  height="10"
                  alt=""
                />
                <span>{t("artworkList.filter.remove_all")}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="d-flex pull-dir-rev">
          <div className="form-group pull-left">
            <select
              className="form-control"
              id="sel1"
              onChange={(e) => {
                setParams((state) => ({
                  ...state,
                  order: e.target.value,
                }));
                setSelectedOption(e.target.value);
              }}
              value={selectedOption}
            >
              <option className="text-dir" value="popularity">
                {t("artworkList.filter.last_update")}
              </option>
              <option className="text-dir" value="price">
                {t("artworkList.filter.sell")}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkRemoveFilter;
