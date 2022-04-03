import { isNil } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { EXHIBITION_INFO } from "../../utils";
import apiServices from "../../utils/api.services";
import { ArtistsExhabitions } from "./ArtistsExhabitions";
import { ExhabitionsArtworkList } from "./ExhabitionsArtworkList";
import { HeroExhabitions } from "./HeroExhabitions";

export const ExhabitionsMain = () => {
  const artworksRef = useRef();
  const [artworksList, setArtworksList] = useState([]);
  const [artistsList, setArtistsList] = useState([]);
  const [exhibitionInfo, setExhibitionInfo] = useState();
  const getData = async (gallery_id, exhibitionId) => {
    apiServices
      .get(EXHIBITION_INFO(gallery_id, exhibitionId), "")
      .then((res) => {
        console.log(
          "🚀 ~ file: ExhabitionsMain.jsx ~ line 19 ~ getData ~ res",
          res.data.data
        );
        setExhibitionInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const location = useLocation();
  useEffect(() => {
    console.log("hi");
    if (isNil(location.state)) return;

    const { id, gallery_id } = location.state;
    if (!isNil(id, gallery_id)) {
      getData(gallery_id, id);
    }
  }, []);
  return (
    <>
      <div className="exhabition-container">
        <HeroExhabitions
          reference={artworksRef}
          exhibitionInfo={exhibitionInfo}
        />
        <ArtistsExhabitions artistsList={artistsList} />
        <ExhabitionsArtworkList
          reference={artworksRef}
          artworksList={artworksList}
        />
      </div>
    </>
  );
};
