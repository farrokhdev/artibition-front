import React from "react";
import ExhibitionFilterGallery from "./ExhibitionFilterGallery";
import ExhibitionsFilterExhibition from "./ExhibitionsFilterExhibition";
import ExhibitionsFilterType from "./ExhibitionsFilterType";

const ExhibitionSidebar = (props) => {
  return (
    <section className="panel-group" id="accordion">
      <ExhibitionFilterGallery {...props} />

      <ExhibitionsFilterExhibition {...props} />
      <ExhibitionsFilterType {...props} />
    </section>
  );
};

export default ExhibitionSidebar;
