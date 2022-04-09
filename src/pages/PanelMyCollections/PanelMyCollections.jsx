import React, { useState, useEffect } from "react";
import BasketFooterPanel from "../../components/BasketFooterPanel/BasketFooterPanel";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import SidebarPanel from "../../components/SidebarPanel/SidebarPanel";
import { t } from "i18next";
import { GetLanguage } from "../../utils/utils";
// import { useTranslation } from "react-i18next";

import ModalAddCollections from "./ModalAddCollections";
import RecentlyVeiws from "../Home.jsx/RecentlyVeiws";
import Suggestions from "../Home.jsx/Suggestions";
import apiServices from "../../utils/api.services";
import { ARTIST_ME, SOCIAL_NETWORK_COLLECTIONS } from "../../utils";
import queryString from "query-string";
import { useSelector } from "react-redux";
import moment from "jalali-moment";
import CreateGallery from "../GalleryPanelMyGallery/CreateGallery";
import ModalEditCollections from "./ModalEditCollections";
function PanelMyCollections() {
  // const { t, i18n } = useTranslation();

  const [visibleAddCollections, setVisibleAddCollections] = useState(false);
  const [visibleEditCollections, setVisibleEditCollections] = useState(false);
  const [collectionsDetails, setCollectionsDetails] = useState();
  const { id } = useSelector((state) => state.authReducer);
  const [aulbum, setAulbum] = useState([]);
  const [artistDetails, setartistDetails] = useState({});
  const [params, setParams] = useState({
    owner_id: id,
  });

  const { roles } = useSelector((state) => state.authReducer);
  const getUserRole = () => {
    let userRole = "user";
    if (typeof roles === "string") {
      return roles;
    } else {
      if (roles && roles.length > 0) {
        if (roles.includes("seller")) {
          userRole = "seller";
        }
        if (roles.includes("artist")) {
          userRole = "artist";
        }
      } else {
        userRole = "user";
      }
    }
    return userRole;
  };

  const Language = GetLanguage();
  const getMyAulbumCollection = () => {
    apiServices
      .get(SOCIAL_NETWORK_COLLECTIONS, queryString.stringify(params))
      .then((res) => {
        setAulbum(res.data.data.results);
        console.log("resAulbum", res.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getArtistDetails = () => {
    apiServices
      .get(ARTIST_ME, "")
      .then((res) => {
        // console.log("res.data.data", res.data.data);
        setartistDetails(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (getUserRole() === "artist") {
      getArtistDetails();
    }
  }, []);

  useEffect(() => {
    if (visibleAddCollections === false) {
      getMyAulbumCollection();
    }
  }, [visibleAddCollections]);

  const handleShowAddGallery = () => {
    setVisibleAddCollections(true);
  };

  const handleShowEditcollections = (mycollection) => {
    setVisibleEditCollections(true);
    setCollectionsDetails(mycollection);
  };

  return (
    <>
      <HeaderPanel t={t} />
      <div className="panel-style margin-top-20">
        <SidebarPanel />
        <div className="custom-container">
          {/* <div className="d-flex box-dir-reverse box box-1">
                        <div className="text-dir">
                            <h2 className="greencolor text-dir">ثبت گالری</h2>
                            <p className="text-dir">اگر صاحب گالری هستید آن را ثبت نمایید</p>
                        </div>
                        <Link to="/panel/gallery-info" className="btn-box-1 btn-green pull-left">
                            <img src={flesh_left} width="16" height="16" className="center-block" />
                        </Link>
                        <div className="clearfix"></div>
                    </div> */}
          <CreateGallery />

          <div className="row dir">
            <div className="col-lg-12">
              <div className="box box-2">
                <div className="sec4">
                  <div className="public-header">
                    <div className="d-flex box-dir-reverse">
                      <div className="col p-0">
                        <div className="d-flex pull-dir">
                          <h2 className="default-title ">
                            {t("content-panel-my-albums.collections.title")}
                          </h2>
                        </div>
                      </div>
                      <div className="col p-0">
                        <div className="d-flex pull-dir-rev">
                          <button
                            onClick={handleShowAddGallery}
                            type="button"
                            className="btn btn-more"
                            data-target="#addnewcollection"
                            data-toggle="modal"
                          >
                            {t(
                              "content-panel-my-albums.collections.table.add-btn"
                            )}
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
                          {t("content-panel-my-albums.collections.table.row")}
                        </th>
                        <th scope="col">
                          {t("content-panel-my-albums.collections.table.title")}
                        </th>
                        <th scope="col">
                          {t(
                            "content-panel-my-albums.collections.table.artworks-count"
                          )}
                        </th>
                        <th scope="col">
                          {t(
                            "content-panel-my-albums.collections.table.latest-updates"
                          )}
                        </th>
                        <th scope="col">
                          {t(
                            "content-panel-my-albums.collections.table.details"
                          )}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {aulbum?.length ? (
                        aulbum?.map((myAulbum, key) => {
                          return (
                            <tr>
                              <td data-label="ردیف">{key + 1}</td>
                              <td data-label="عنوان">
                                <span>
                                  {Language === "fa-IR"
                                    ? myAulbum?.translations?.fa?.title
                                    : myAulbum?.translations?.en?.title}
                                </span>
                              </td>
                              <td data-label="تعداد آثار">
                                <span>{myAulbum?.likes_count}</span>
                              </td>
                              <td data-label="آخرین ویرایش">
                                <span>
                                  {moment(myAulbum?.modified_date, "YYYY/MM/DD")
                                    .locale("fa")
                                    .format("YYYY/MM/DD")}
                                </span>
                              </td>
                              <td data-label="جزئیات">
                                <button
                                  onClick={() =>
                                    handleShowEditcollections(myAulbum)
                                  }
                                  type="button"
                                  className="btn-outline-blue"
                                  data-target="#addnewcollection"
                                  data-toggle="modal"
                                >
                                  ویرایش
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td>{t("no-data")}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Suggestions />
          <RecentlyVeiws />

          <ModalAddCollections
            setVisibleAddCollections={setVisibleAddCollections}
            visibleAddCollections={visibleAddCollections}
          />
          <ModalEditCollections
            collectionsDetails={collectionsDetails}
            visibleEditCollections={visibleEditCollections}
            setVisibleEditCollections={setVisibleEditCollections}
          />
        </div>
        <BasketFooterPanel />
      </div>
    </>
  );
}

export default PanelMyCollections;
