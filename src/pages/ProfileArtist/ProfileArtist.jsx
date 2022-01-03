import React , {useState} from 'react';

import { t } from 'i18next';
import Header from "../../components/Header/Header";
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import { Breadcrumb , Tabs } from 'antd';
import ArtworksTab from './ArtworksTab';
import AlbumsTab from './AlbumsTab';
import BiographyTab from './BiographyTab';
import ExhibitionsTab from './ExhibitionsTab';
import ContentTab from './ContentTab';

import Aydin_Aghdashloo_04 from '../../assets/img/Aydin_Aghdashloo_04@3x.jpg';
import message_icon from '../../assets/img/message.svg';
import arrow_left_icon from '../../assets/img/arrow-left.svg';
import ModalVeiwAlbums from './ModalVeiwAlbums';
import ModalSendMessage from './ModalSendMessage';

function ProfileArtist() {

  const { TabPane } = Tabs;

  function callback(key) {
      console.log(key);
    }

    const [visibleShowAlbums, setVisibleShowAlbums] = useState(false);
    const [visibleShowSendMessage, setVisibleShowSendMessage] = useState(false);

    const handleShowVeiwAlbumModal = () => {
        setVisibleShowAlbums(true)
    }
    
    const handleShowModalSendMessage = () => {
        setVisibleShowSendMessage(true)
    }

    return (
        <>
  <div className="container mx-auto px-0 w-100 bg-white">
    <Header />
    <Menu />
  </div>

  <div className="container">

      <Breadcrumb className="d-flex box-dir-reverse breadcrumb" separator="">
        <Breadcrumb.Item>{t("artwork.artibition")}</Breadcrumb.Item>
        <Breadcrumb.Separator>{'>'}</Breadcrumb.Separator>
        <Breadcrumb.Item href="">{t("artist_profile.artists")}</Breadcrumb.Item>
        <Breadcrumb.Separator>{'>'}</Breadcrumb.Separator>
        <Breadcrumb.Item href="">آیدین آغداشلو</Breadcrumb.Item>
        <Breadcrumb.Separator>{'>'}</Breadcrumb.Separator>
        <Breadcrumb.Item className="active persian-num">{t("artist_profile.tabs.artworks")}</Breadcrumb.Item>
      </Breadcrumb>

    <div className="artist-intro">
        <div className="artist-cover">
            <div className="col-12  col-xl-7 mx-auto">
                <div className="artist-info">
                    <div className="d-block d-md-flex box-dir-reverse ">
                        <div className="col-12 col-md-4">
                            <div className="artist-avatar">
                                <img src={Aydin_Aghdashloo_04} width="192" height="192"
                                     className="img-responsive" alt="آیدین آغداشلو"/>
                            </div>
                            <button type="button" className="btn-follow center-block">{t("artwork.follow")}</button>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="artist-bio">
                                <div className="d-flex box-dir-reverse">
                                  <div className="col px-0">
                                    <div className="artist-name text-dir">
                                        <span>آیدین</span>
                                        <span>آغداشلو</span>
                                    </div>
                                  </div>
                                  <div className="col px-0">
                                    <div className="d-flex justify-custom">
                                      <div className="artist-msg ">
                                        <img onClick={handleShowModalSendMessage} src={message_icon} width="24" height="24"/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="clearfix"></div>
                                <p className="artist-shortbio text-dir">
                                    {t("artist_profile.text_banner")}
                                    <span>
                                        <a href="#">
                                            <div className='d-flex align-items-center'>{t("artwork.about_artwork.more")}
                                            
                                            <img src={arrow_left_icon} width="16" height="16" alt=""/>
                                            </div>
                                        </a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="artist-art">


                  <Tabs className='' defaultActiveKey="1" onChange={callback}>
                            <TabPane className="mx-4" tab={t("artist_profile.tabs.artworks")} key="1">
                                <ArtworksTab/>
                            </TabPane>
                            <TabPane tab={t("artist_profile.tabs.albums")} key="2">
                                <AlbumsTab 
                                    handleShowVeiwAlbumModal={handleShowVeiwAlbumModal}
                                />
                            </TabPane>  
                            <TabPane tab={t("artist_profile.tabs.biography")} key="3">
                                <BiographyTab/>
                            </TabPane>  
                            <TabPane tab={t("artist_profile.tabs.exhibitions")} key="4">
                                <ExhibitionsTab/>
                            </TabPane>   
                            <TabPane tab={t("artist_profile.tabs.content")} key="5">
                                <ContentTab/>
                            </TabPane>   
                            
                    </Tabs>


        </div>
    </div>
</div>

        <ModalSendMessage
            setVisibleShowSendMessage={setVisibleShowSendMessage}
            visibleShowSendMessage={visibleShowSendMessage}
        />

        <ModalVeiwAlbums
            setVisibleShowAlbums={setVisibleShowAlbums}
            visibleShowAlbums={visibleShowAlbums}
        />

  <Footer />
</>
    )
}

export default ProfileArtist;
