import React, { useState, useEffect } from "react";
import BasketFooterPanel from "../../components/BasketFooterPanel/BasketFooterPanel";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import SidebarPanel from "../../components/SidebarPanel/SidebarPanel";
import { t } from "i18next";
import { GetLanguage } from "../../utils/utils";
import classnames from "classnames";

import flesh_left from "../../assets/img/felsh-left.png";
import edit_icon from "../../assets/img/edit_name.svg";
import rdbewaopdm840 from "../../assets/img/mainpage/rdbewaopdm840.jpg";
import ModalAddGallery from "./ModalAddGallery";
import RecentlyVeiws from "../Home.jsx/RecentlyVeiws";
import Suggestions from "../Home.jsx/Suggestions";
import apiServices from "../../utils/api.services";
import {
  ARTIST_ALBUMS,
  ARTIST_ME,
  SOCIAL_NETWORK_COLLECTIONS,
} from "../../utils";
import queryString from "query-string";
import { useSelector } from "react-redux";
import moment from "jalali-moment";
import CreateGallery from "../GalleryPanelMyGallery/CreateGallery";
import ModalEditBiography from "./ModalEditBiography";
import { editMyAulbumModeFunc } from "../../redux/reducers/auth/auth.actions";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import ModalEditAulbum from "./ModalEditAulbum";

function PanleMyAlbums() {
  let [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [visibleAddGallery, setVisibleAddGallery] = useState(false);
  const [visibleEditGallery, setVisibleEditGallery] = useState(false);
  const [visibleEditBiography, setVisibleEditBiography] = useState(false);
  const { id } = useSelector((state) => state.authReducer);
  const [aulbum, setAulbum] = useState([]);
  const [artistDetails, setartistDetails] = useState({});
  // const artistId = artistDetails?.id;
  const [params, setParams] = useState({});

  const [aulbumDetails, setAulbumDetails] = useState();

  const Language = GetLanguage();
  const getMyAulbumCollection = () => {
    console.log("params===>>", params);
    apiServices
      .get(ARTIST_ALBUMS, queryString.stringify(params))
      .then((res) => {
        setAulbum(res.data.data.results);
        // console.log("resAulbum", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getArtistDetails = () => {
    apiServices
      .get(ARTIST_ME, "")
      .then((res) => {
        setartistDetails(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // If there is an artist id, a new artist id should be in our parameters
  useEffect(() => {
    if (artistDetails?.id) {
      setParams({ artist_id: artistDetails?.id });
    }
  }, [artistDetails]);

  // If there are params, this service should be called once
  useEffect(() => {
    if (Object?.keys(params).length) {
      getMyAulbumCollection();
    }
  }, [params]);

  useEffect(() => {
    if (artistDetails?.id) {
      if (visibleAddGallery === false || visibleEditGallery === false) {
        getMyAulbumCollection();
      }
    }
  }, [visibleAddGallery, visibleEditGallery]);

  useEffect(() => {
    getArtistDetails();
  }, []);

  const handleShowAddGallery = () => {
    setVisibleAddGallery(true);
  };

  const handleShowEditGallery = (myAulbum) => {
    setVisibleEditGallery(true);
    setAulbumDetails(myAulbum);
  };

  return (
    <>
      <HeaderPanel t={t} />
      <div className="panel-style margin-top-20">
        <SidebarPanel />
        <div className="custom-container">
          <CreateGallery />

          <div className="row dir">
            <div className="col-lg-8">
              <div className="box box-2">
                <div className="sec4">
                  <div className="public-header">
                    <div className="d-flex box-dir-reverse">
                      <div className="col p-0">
                        <div className="d-flex pull-dir">
                          <h2 className="default-title "></h2>
                        </div>
                      </div>
                      <div className="col p-0">
                        <div className="d-flex pull-dir-rev">
                          <button
                            // onClick={() => { handleGoToAddAulbum() }}
                            onClick={handleShowAddGallery}
                            type="button"
                            className="btn btn-more"
                            data-target="#addnewcollection"
                            data-toggle="modal"
                          >
                            {t("content-panel-my-albums.albums.table.add-btn")}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="pull-dir"></div>
                  </div>
                  <table className="table upload-art dir">
                    <thead>
                      <tr>
                        <th scope="col">
                          {t("content-panel-my-albums.albums.table.row")}
                        </th>
                        <th scope="col">
                          {t("content-panel-my-albums.albums.table.title")}
                        </th>
                        <th scope="col">
                          {t(
                            "content-panel-my-albums.albums.table.artworks-count"
                          )}
                        </th>
                        <th scope="col">
                          {t(
                            "content-panel-my-albums.albums.table.latest-updates"
                          )}
                        </th>
                        <th scope="col">
                          {" "}
                          {t("content-panel-my-albums.albums.table.details")}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {aulbum?.map((myAulbum, key) => {
                        return (
                          <tr>
                            <td data-label="????????">{key + 1}</td>
                            <td data-label="??????????">
                              <span>
                                {Language === "fa-IR"
                                  ? myAulbum?.translations?.fa?.title
                                  : myAulbum?.translations?.en?.title}
                              </span>
                            </td>
                            <td data-label="?????????? ????????">
                              <span>{myAulbum?.likes_count}</span>
                            </td>
                            <td data-label="?????????? ????????????">
                              <span>
                                {moment(
                                  myAulbum?.artist?.modified_date,
                                  "YYYY/MM/DD"
                                )
                                  .locale("fa")
                                  .format("YYYY/MM/DD")}
                              </span>
                            </td>
                            <td data-label="????????????">
                              <button
                                // onClick={(e) => { handleEditExhibition(e, myAulbum) }}
                                onClick={() => handleShowEditGallery(myAulbum)}
                                type="button"
                                className="btn-outline-blue"
                                data-target="#addnewcollection"
                                data-toggle="modal"
                              >
                                ????????????
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className=" box box-3">
                <div className="d-flex box-dir-reverse public-header">
                  <div className="col p-0">
                    <div className="d-flex pull-dir">
                      <h2 className="default-title text-dir">
                        {t("content-panel-my-albums.art_info.title")}
                      </h2>
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="d-flex pull-dir-rev">
                      <div
                        onClick={() => {
                          setVisibleEditBiography(true);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={edit_icon} width="32" height="32" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box3-body">
                  <div
                    className={classnames("", {
                      "fa-resume": GetLanguage() === "fa-IR",
                      "d-none": GetLanguage() === "en-US",
                    })}
                    // className="fa-resume"
                  >
                    <div className="bolder-title text-dir">
                      {t("content-panel-my-albums.art_info.resume")}
                    </div>
                    <p className="text-justify">
                      {artistDetails?.translations?.fa?.biography}
                    </p>
                  </div>
                  <div className="en-resume en">
                    <span className="bolder-title">
                      {t("content-panel-my-albums.art_info.resume")}
                    </span>
                    <p className="text-justify">
                      {artistDetails?.translations?.en?.biography}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-default"
                    data-toggle="modal"
                    data-target="#exhibition-list"
                  >
                    {t("content-panel-my-albums.art_info.btn")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Suggestions />
          <RecentlyVeiws />

          <ModalAddGallery
            setVisibleAddGallery={setVisibleAddGallery}
            visibleAddGallery={visibleAddGallery}
          />

          <ModalEditAulbum
            aulbumDetails={aulbumDetails}
            setVisibleEditGallery={setVisibleEditGallery}
            visibleEditGallery={visibleEditGallery}
          />

          <ModalEditBiography
            setVisibleEditBiography={setVisibleEditBiography}
            visibleEditBiography={visibleEditBiography}
            callback={getArtistDetails}
            data={artistDetails}
          />
        </div>
        <BasketFooterPanel />
      </div>
    </>
  );
}

export default PanleMyAlbums;
