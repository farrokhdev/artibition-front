import React from "react";
import { ArtistsExhabitions } from "./ArtistsExhabitions";
import { ExhabitionsList } from "./ExhabitionsList";
import { HeroExhabitions } from "./HeroExhabitions";

export const ExhabitionsMain = () => {
  return (
    <>
      <div className="exhabition-container">
        <HeroExhabitions />
        <ArtistsExhabitions />
        <ExhabitionsList />
      </div>
    </>
  );
};
