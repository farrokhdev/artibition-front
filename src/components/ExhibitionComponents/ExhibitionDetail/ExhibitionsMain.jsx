import { isNil } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  EXHIBITION_INFO,
  EXHIBITION_PRODUCT,
  SINGLE_EXHIBITION,
} from "../../../utils";
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
      .get(SINGLE_EXHIBITION(exhibitionId), "")
      .then((res) => {
        setExhibitionInfo(res.data.data);

        setArtistsList(res.data.data.artist);
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
        {artistsList?.length > 0 && (
          <ArtistsExhibitions artistsList={artistsList} />
        )}
        {!isNil(exhibitionInfo?.id) && (
          <ExhibitionsArtworkList
            reference={artworksRef}
            exhibitionId={exhibitionInfo?.id}
          />
        )}
      </div>
    </>
  );
};
export default ExhibitionsMain;
