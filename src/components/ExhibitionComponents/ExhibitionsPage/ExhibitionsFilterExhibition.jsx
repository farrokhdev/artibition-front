import React from "react";
import search from "../../../assets/img/search.svg";
import { useTranslation } from "react-i18next";
const ExhibitionsFilterExhibition = ({
  exhibitions,
  getExhibitions,
  handleFilterExhibition,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggl e="collapse" aria-expanded="true" href="#collapse9">
            {t("exhibitions-page.exhibitions")}
          </a>
        </h4>
      </div>
      <div id="collapse9" className="panel-collapse collapse in">
        <div className="panel-body ">
          <div className="nl-input filter-search ">
            <input
              placeholder={t("exhibitions-page.search-exhibition")}
              onChange={(e) => {
                if (e.target.value.length === 0) getExhibitions();
                else if (e.target.value.length < 3) return;
                else getExhibitions({ search: e.target.value });
              }}
            />
            <button className="noborder" type="button">
              <img src={search} width="24" height="24" alt="" />
            </button>
            <div className="constant-height md-mrgt30">
              {exhibitions?.map((exhibition) => {
                return (
                  <label className="lable-checkbox" key={exhibition.id}>
                    <input
                      type="checkbox"
                      value=""
                      id={exhibition.id}
                      onChange={(e) =>
                        handleFilterExhibition(
                          e.target.checked,
                          exhibition.id,
                          exhibition.gallery.id
                        )
                      }
                    />
                    <span>
                      {i18n.language === "fa-IR"
                        ? exhibition?.translations?.fa?.name
                        : exhibition?.translations?.en?.name}
                    </span>
                    <span className="checkmark"></span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionsFilterExhibition;
