import React from "react";

const ExhibitionsFilterType = ({ t, handleChangeType }) => {
  const typeOptions = [
    { name: t("exhibitions-page.all"), value: "" },
    { name: t("exhibitions-page.local-exhibition"), value: "real" },
    { name: t("exhibitions-page.online-exhibition"), value: "virtual" },
    { name: t("exhibitions-page.promotions"), value: "promotion" },
  ];
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" aria-expanded="true" href="#collapse10">
            {t("exhibitions-page.exhibition-type")}
          </a>
        </h4>
      </div>
      <div id="collapse10" className="panel-collapse collapse in">
        <div className="panel-body">
          {typeOptions.map((option, index) => (
            <label className="lable-checkbox" key={index}>
              <input
                type="checkbox"
                onClick={() => handleChangeType(option.value)}
              />
              <span>{option.name}</span>
              <span className="checkmark"></span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExhibitionsFilterType;
