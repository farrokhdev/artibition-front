import React, { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { Breadcrumb, Tabs } from "antd";
import ArtworksTab from "./ArtworksTab";
import AlbumsTab from "./AlbumsTab";
import BiographyTab from "./BiographyTab";
import ExhibitionsTab from "./ExhibitionsTab";
import ContentTab from "./ContentTab";

import Aydin_Aghdashloo_04 from "../../assets/img/Aydin_Aghdashloo_04@3x.jpg";
import message_icon from "../../assets/img/message.svg";
import arrow_left_icon from "../../assets/img/arrow-left.svg";
import ModalVeiwAlbums from "./ModalVeiwAlbums";
import ModalSendMessage from "./ModalSendMessage";
import { ARTIST_PROFILE } from "../../utils";
import apiServices from "../../utils/api.services";
import queryString from "query-string";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import i18next from "i18next";
import { follow } from "../../utils/utils";

function ProfileArtist() {
  const { TabPane } = Tabs;
  const [activeKey, setActiveKey] = useState("1");

  function callback(key) {
    console.log(key);
    setActiveKey(key);
  }

  const TabName = () => {
    switch (activeKey) {
      case "1":
        return t("artist_profile.tabs.artworks");

      case "2":
        return t("artist_profile.tabs.albums");

      case "3":
        return t("artist_profile.tabs.biography");

      case "4":
        return t("artist_profile.tabs.exhibitions");

      case "5":
        return t("artist_profile.tabs.content");

      default:
        break;
    }
  };

  const { t, i18n } = useTranslation();

  const [visibleShowAlbums, setVisibleShowAlbums] = useState(false);
  const [visibleShowSendMessage, setVisibleShowSendMessage] = useState(false);
  const [search, setSearch] = useState();
  const [artistProfile, setArtistProfile] = useState();
  const [messageReceiverId, setMessageReceiverId] = useState(null);
  const [params, setParams] = useState({
    search: "",
    page: 1,
  });
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  var id;

  var query = useQuery();

  id = query.get("id");
  // const handleShowVeiwAlbumModal = () => {
  //     setVisibleShowAlbums(true)
  // }

  const handleShowModalSendMessage = () => {
    setVisibleShowSendMessage(true);
  };

  const getArtistProfile = () => {
    apiServices
      .get(ARTIST_PROFILE(id), queryString.stringify(params))
      .then((res) => {
        if (res.data) {
          console.log(res.data.data);
          setArtistProfile(res.data.data);
          setMessageReceiverId(res?.data?.data?.owner?.id);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const callBack = () => {
    getArtistProfile();
  };

  useEffect(() => {
    getArtistProfile();
  }, [params]);

  //   TOGGLE DESCRIPTION IN THE BANNER
  const [more, setMore] = useState(false);

  const moreHandler = (e) => {
    e.preventDefault();
    setMore(!more);
  };
  //   TOGGLE DESCRIPTION IN THE BANNER END

  return (
    <>
      <div className="container mx-auto px-0 w-100 bg-white">
        <Header />
        <Menu />
      </div>

      <div className="container">
        <Breadcrumb className="d-flex box-dir-reverse breadcrumb" separator="">
          <Breadcrumb.Item>{t("artwork.artibition")}</Breadcrumb.Item>
          <Breadcrumb.Separator>{">"}</Breadcrumb.Separator>
          <Breadcrumb.Item href="">
            {t("artist_profile.artists")}
          </Breadcrumb.Item>
          <Breadcrumb.Separator>{">"}</Breadcrumb.Separator>
          <Breadcrumb.Item href="">
            {i18n.language === "fa-IR"
              ? artistProfile?.owner?.translations?.fa?.first_name +
                " " +
                artistProfile?.owner?.translations?.fa?.last_name
              : artistProfile?.owner?.translations?.en?.first_name +
                " " +
                artistProfile?.owner?.translations?.en?.last_name}
          </Breadcrumb.Item>
          <Breadcrumb.Separator>{">"}</Breadcrumb.Separator>
          <Breadcrumb.Item className="active persian-num">
            {TabName()}
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="artist-intro">
          <div className="artist-cover dir">
            <div className="col-12  col-xl-7 mx-auto">
              <div className="artist-info">
                <div className="d-block d-md-flex box-dir-reverse ">
                  <div className="col-12 col-md-4">
                    <div className="artist-avatar">
                      {/* <img src={Aydin_Aghdashloo_04} width="192" height="192" */}
                      <img
                        src={artistProfile?.bg_image?.exact_url}
                        width="192"
                        height="192"
                        className="img-responsive"
                        alt={
                          i18n.language === "fa-IR"
                            ? artistProfile?.owner?.translations?.fa
                                ?.first_name +
                              " " +
                              artistProfile?.owner?.translations?.fa?.last_name
                            : artistProfile?.owner?.translations?.en
                                ?.first_name +
                              " " +
                              artistProfile?.owner?.translations?.en?.last_name
                        }
                      />
                    </div>
                    <button
                      className={
                        "btn-follow center-block " +
                        (artistProfile?.likes ? "followed" : "")
                      }
                      onClick={() =>
                        follow({
                          content: "artist",
                          activity: "following",
                          object_id: artistProfile?.id,
                          action: artistProfile?.likes,
                          callBack,
                        })
                      }
                    >
                      {" "}
                      {artistProfile?.likes
                        ? t("artwork.following")
                        : t("artwork.follow")}
                    </button>
                  </div>
                  <div className="col-12 col-md-8">
                    <div className="artist-bio">
                      <div className="d-flex box-dir-reverse">
                        <div className="col px-0">
                          <div className="artist-name text-dir">
                            {i18n.language === "fa-IR" ? (
                              <>
                                <span>
                                  {
                                    artistProfile?.owner?.translations?.fa
                                      ?.first_name
                                  }{" "}
                                </span>
                                <span>
                                  {
                                    artistProfile?.owner?.translations?.fa
                                      ?.last_name
                                  }
                                </span>
                              </>
                            ) : (
                              <>
                                <span>
                                  {
                                    artistProfile?.owner?.translations?.en
                                      ?.first_name
                                  }{" "}
                                </span>
                                <span>
                                  {
                                    artistProfile?.owner?.translations?.en
                                      ?.last_name
                                  }
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="col px-0">
                          <div className="d-flex pull-dir-rev">
                            <div
                              className="artist-msg "
                              style={{ cursor: "pointer" }}
                            >
                              <img
                                onClick={handleShowModalSendMessage}
                                src={message_icon}
                                width="24"
                                height="24"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <p className="artist-shortbio text-dir">
                        {/* {t("artist_profile.text_banner")} */}
                        {i18n.language === "fa-IR"
                          ? !more
                            ? artistProfile?.translations?.fa?.biography.slice(
                                0,
                                20
                              ) + "..."
                            : artistProfile?.translations?.fa?.biography
                          : !more
                          ? artistProfile?.translations?.en?.biography.slice(
                              0,
                              20
                            ) + "..."
                          : artistProfile?.translations?.en?.biography}
                        <span>
                          <a href="#" onClick={(e) => moreHandler(e)}>
                            <span className="">
                              {!more ? (
                                <>
                                  {t("artwork.about_artwork.more")}
                                  <img
                                    src={arrow_left_icon}
                                    width="16"
                                    height="16"
                                    alt=""
                                    style={
                                      i18next.language === "fa-IR"
                                        ? {}
                                        : { transform: "rotate(180deg)" }
                                    }
                                  />
                                </>
                              ) : (
                                <>
                                  <img
                                    src={arrow_left_icon}
                                    width="16"
                                    height="16"
                                    alt=""
                                    style={{ transform: "rotate(180deg)" }}
                                  />
                                  {t("artwork.about_artwork.less")}
                                </>
                              )}
                            </span>
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="artist-art dir">
            <Tabs className="tab-m-0" activeKey={activeKey} onChange={callback}>
              <TabPane
                className=""
                tab={t("artist_profile.tabs.artworks")}
                key="1"
              >
                <ArtworksTab
                  artistId={artistProfile?.id}
                  translations={artistProfile?.owner?.translations}
                />
              </TabPane>
              <TabPane tab={t("artist_profile.tabs.albums")} key="2">
                <AlbumsTab
                  // handleShowVeiwAlbumModals={handleShowVeiwAlbumModal}
                  setVisibleShowAlbums={setVisibleShowAlbums}
                  // ownerId={artistProfile?.owner?.id}
                  ownerId={artistProfile?.id}
                />
              </TabPane>
              <TabPane tab={t("artist_profile.tabs.biography")} key="3">
                <BiographyTab
                  artistId={id}
                  artistBio={artistProfile?.translations}
                />
              </TabPane>
              <TabPane tab={t("artist_profile.tabs.exhibitions")} key="4">
                <ExhibitionsTab artistId={id} />
              </TabPane>
              <TabPane tab={t("artist_profile.tabs.content")} key="5">
                <ContentTab artistId={artistProfile?.id} />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>

      <ModalSendMessage
        setVisibleShowSendMessage={setVisibleShowSendMessage}
        visibleShowSendMessage={visibleShowSendMessage}
        receiverId={messageReceiverId}
      />

      <ModalVeiwAlbums
        setVisibleShowAlbums={setVisibleShowAlbums}
        visibleShowAlbums={visibleShowAlbums}
      />

      <Footer />
    </>
  );
}

export default ProfileArtist;
