import React, { useState } from "react";
import FilterSidBarInArtworks from "../../../pages/GalleryIntroduction/FilterSidBarInArtworks";
// import { ExhabitionFilters } from "../Filters/ExhabitionFilters";
import { ArtworksList } from "../../ArtworksPage";
export const ExhibitionsArtworkList = ({ reference, exhibitionId }) => {
  const [params, setParams] = useState({ status: "active" });
  const [search, setSearch] = useState();
  return (
    <>
      <div className="default-content" ref={reference}>
        <ArtworksList
          exhibitionId={exhibitionId}
          params={params}
          setParams={setParams}
          search={search}
          setSearch={setSearch}
          clearFilterStorage={console.log("clearFilterStorage")}
        />
      </div>
    </>
  );
};
