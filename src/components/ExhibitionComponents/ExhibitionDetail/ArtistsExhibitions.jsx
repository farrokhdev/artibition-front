import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

export const ArtistsExhibitions = ({ artistsList }) => {
  console.log(
    "🚀 ~ file: ArtistsExhibitions.jsx ~ line 8 ~ ArtistsExhibitions ~ artistsList",
    artistsList
  );
  return (
    <div className="gallery-artists mrgt72">
      <div className="public-header">
        <div className="row">
          <div className="col-xs-8">
            <h2 className="default-title">هنرمندان نمایشگاه</h2>
          </div>
          <div className="col-xs-4">
            <a href="#" className="btn-readmore pull-left">
              همه هنرمندان
            </a>
          </div>
        </div>
      </div>
      <OwlCarousel className="owl-carousel" id="gallery-artists">
        {artistsList?.map((artist) => (
          <div className="gallery-artist-img" key={artist.id}>
            <img
              src={artist?.bg_image?.exact_url}
              width="192"
              height="192"
              alt=""
              className="img-responsive"
            />
            <h6 className="gallery-artist-name">
              <span>{artist?.owner_info?.translations?.fa?.first_name}</span>
              <span>{artist?.owner_info?.translations?.fa?.last_name}</span>
            </h6>
            {!artist?.approved_by_gallery && (
              <Link
                className="btn btn-default"
                to={`/site/artist-profile/?id=${artist.id}`}
              >
                مشاهده پروفایل
              </Link>
            )}
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};
