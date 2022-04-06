import { isNil } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { EXHIBITION_INFO } from "../../../utils";
import apiServices from "../../../utils/api.services";
import { ArtistsExhibitions } from "./ArtistsExhibitions";
import { ExhibitionsArtworkList } from "./ExhibitionsArtworkList";
import { HeroExhibitions } from "./HeroExhibitions";

const ExhibitionsMain = () => {
  const artworksRef = useRef();
  const [artworksList, setArtworksList] = useState([]);
  const [artistsList, setArtistsList] = useState([]);
  const [exhibitionInfo, setExhibitionInfo] = useState();
  const getData = async (gallery_id, exhibitionId) => {
    apiServices
      .get(EXHIBITION_INFO(gallery_id, exhibitionId), "")
      .then((res) => {
        setExhibitionInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const location = useLocation();
  useEffect(() => {
    if (isNil(location.state)) return;

    const { id, gallery_id } = location.state;
    if (!isNil(id, gallery_id)) {
      getData(gallery_id, id);
    }
  }, []);
  return (
    <>
      <div className="exhabition-container">
        <HeroExhibitions
          reference={artworksRef}
          exhibitionInfo={exhibitionInfo}
        />
        {/* <ArtistsExhibitions artistsList={artistsList} /> */}
        <ExhibitionsArtworkList
          reference={artworksRef}
          artworksList={artworksList}
          exhibitionId={exhibitionInfo?.id}
        />
      </div>
    </>
  );
};
export default ExhibitionsMain;
