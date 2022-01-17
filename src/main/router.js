import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from '../App';
import AddArtwork from '../pages/AddArtwork/AddArtwork';
import AllGallerysList from '../pages/AllGallerysList/AllGallerysList';
import ArtistsPage from '../pages/ArtistsPage/ArtistsPage';
import ArtworksPage from '../pages/ArtworksPage/ArtworksPage';
import ConfirmMobile from '../pages/ConfirmMobile/ConfirmMobile';
import DashboardPanel from '../pages/DashboarPanel/DashboardPanel';
import DetailsArtwork from '../pages/DetailsArtwork/DetailsArtwork';

import GalleryPanelArtisit from '../pages/GalleryPanelArtist/GalleryPanelArtist';
import GalleryPanelCreateExhibition from '../pages/GalleryPanelCreateExhibition/GalleryPanelCreateExhibition';
import GalleryPanelDashboard from '../pages/GalleryPanelDashboard/GalleryPanelDashboard';
import GalleryPanelEditGalleryInfo from '../pages/GalleryPanelEditGalleryInfo/GalleryPanelEditGalleryInfo';
import GalleryPanelExhibition from '../pages/GalleryPanelExhibition/GalleryPanelExhibition';
import GalleryPanelMyGallery from '../pages/GalleryPanelMyGallery/GalleryPanelMyGallery';
import GalleryPanelSelectArtworkSource from '../pages/GalleryPanelSelectArtworkSource/GalleryPanelSelectArtworkSource';
import GalleryIntroduction from '../pages/GalleryIntroduction/GalleryIntroduction';

import Home from '../pages/Home.jsx/Home';
import Login from '../pages/Login/Login';
import PanelArtManagement from '../pages/PanelArtManagement/PanelArtManagement';
import PanelContentList from '../pages/PanelContentList/PanelContentList';
import PanelCreateContent from '../pages/PanelCreateContent/PanelCreateContent';
import PanelFavorites from '../pages/PanelFavorites/PanelFavorites';
import PanelMessages from '../pages/PanelMessages/PanelMessages';
import PanleMyAlbums from '../pages/PanelMyAlbums/PanleMyAlbums';
import PanelMyPurchases from '../pages/PanelMyPurchases/PanelMyPurchases';
import PanelOrders from '../pages/PanelOrders/PanelOrders';
import Panelprofile from '../pages/PanelProfile/PanelProfile';
import PanelWallet from '../pages/PanelWallet/PanelWallet';
import ProfileArtist from '../pages/ProfileArtist/ProfileArtist';
import SetPassword from '../pages/RecoveryPassword/RecoveryPassword';
import Signup from '../pages/Singup/Signup';
import GalleryPanelCreateArtistArtwork from '../pages/GalleryPanelCreateArtistArtwork/GalleryPanelCreateArtistArtwork';
import GalleryPanelUploadExhibitionArtwork from '../pages/GalleryPanelUploadExhibitionArtwork/GalleryPanelUploadExhibitionArtwork';
import GalleryPanelSelectArtisitSource from '../pages/GalleryPanelSelectArtistSource/GalleryPanelSelectArtistSource';
import GalleryContentPage from '../pages/GalleryIntroduction/GalleryContentPage';
import FAQ from '../pages/FAQ/FAQ';

const RouterConfig = (props) => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index path="home" element={<Home />} />
                </Route>
            </Routes>

            <Routes>
                <Route path="site" animate={true}>
                    <Route path="artworks" element={<ArtworksPage />} />
                    <Route path="artworks/:id" element={<DetailsArtwork />} />
                    <Route path="artists" element={<ArtistsPage />} />
                    <Route path="artist-profile" element={<ProfileArtist />} />
                    <Route path="all-galleris-list" element={<AllGallerysList />} />
                    <Route path="gallery-introduction" element={<GalleryIntroduction />} />
                    <Route path="gallery-content-page" element={<GalleryContentPage />}  />
                    <Route path="faq" element={<FAQ />}  />
                </Route>
            </Routes>

            <Routes>
                <Route path="auth" animate={true}>
                    <Route index path="signup" element={<Signup />} />
                    <Route path="login" element={<Login />} />
                    <Route path="confirm-mobile" element={<ConfirmMobile />} />
                    <Route path="recovery-password" element={<SetPassword />} />
                </Route>
            </Routes>


            <Routes>
                <Route path="panel" animate={true}>

                    <Route index path="profile" element={<Panelprofile />} />
                    <Route index path="purchases" element={<PanelMyPurchases />} />
                    <Route index path="favorites" element={<PanelFavorites />} />
                    <Route index path="messages" element={<PanelMessages />} />
                    <Route index path="wallet" element={<PanelWallet />} />
                    <Route index path="dashboard" element={<DashboardPanel />} />
                    <Route index path="orders" element={<PanelOrders />} />
                    <Route path="add-artwork" element={<AddArtwork />} />
                    <Route path="art-management" element={<PanelArtManagement />} />
                    <Route path="my-albums" element={<PanleMyAlbums />} />
                    <Route path="contents" element={<PanelContentList />} />
                    <Route path="create-content" element={<PanelCreateContent />} />

                    <Route path="dashboard-gallery" element={<GalleryPanelDashboard />} />
                    <Route path="exhibition-list-gallery" element={<GalleryPanelExhibition/>} />
                    <Route path="artist-list-gallery" element={<GalleryPanelArtisit/>} />
                    <Route path="my-gallery-list-gallery" element={<GalleryPanelMyGallery/>} />
                    <Route path="create-exhibition" element={<GalleryPanelCreateExhibition/>} />
                    <Route path="edit-gallery-info" element={<GalleryPanelEditGalleryInfo/>} />
                    <Route path="select-artwork-source" element={<GalleryPanelSelectArtworkSource/>} />
                    <Route path="select-artist-source" element={<GalleryPanelSelectArtisitSource/>} />
                    <Route path="create-artist-artwotk" element={<GalleryPanelCreateArtistArtwork/>} />
                    <Route path="upload-exhibition-artwotk" element={<GalleryPanelUploadExhibitionArtwork/>} />
                </Route>
            </Routes>




        </BrowserRouter>


    )
}

export default RouterConfig
