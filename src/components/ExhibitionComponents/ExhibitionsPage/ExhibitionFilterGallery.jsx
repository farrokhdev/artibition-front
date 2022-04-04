import React from "react";
import search from "../../../assets/img/search.svg";
import { useTranslation } from "react-i18next";

const ExhibitionFilterGallery = ({
  galleries,
  getGalleries,
  handleFilterGallery,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="nl-input filter-search ">
      <input
        placeholder={t("exhibitions-page.search-gallery")}
        onChange={(e) => {
          if (e.target.value.length === 0) getGalleries();
          else if (e.target.value.length < 3) return;
          else getGalleries({ search: e.target.value });
        }}
      />
      <button className="noborder" type="button">
        <img src={search} width="24" height="24" alt="" />
      </button>
      <div className="constant-height md-mrgt30">
        {galleries?.map((gallery) => {
          return (
            <label className="lable-checkbox" key={gallery.id}>
              <input
                type="checkbox"
                value=""
                id={gallery.id}
                onChange={(e) =>
                  handleFilterGallery(e.target.checked, Number(e.target.id))
                }
              />
              <span>
                {i18n.language === "fa-IR"
                  ? gallery?.translations?.fa?.title
                  : gallery?.translations?.en?.title}
              </span>
              <span className="checkmark"></span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default ExhibitionFilterGallery;
