import React from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import AddArtwork from '../pages/AddArtwork/AddArtwork';
import AllGallerysList from '../pages/AllGallerysList/AllGallerysList';
import ArtistsPage from '../pages/ArtistsPage/ArtistsPage';
import ArtworksPage from '../pages/ArtworksPage/ArtworksPage';
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
import GalleryPanelCreateArtistArtwork from '../pages/GalleryPanelCreateArtistArtwork/GalleryPanelCreateArtistArtwork';
import GalleryPanelUploadExhibitionArtwork from '../pages/GalleryPanelUploadExhibitionArtwork/GalleryPanelUploadExhibitionArtwork';
import GalleryPanelSelectArtisitSource from '../pages/GalleryPanelSelectArtistSource/GalleryPanelSelectArtistSource';

const RouterConfig = (props) => {
    return (



        
            <Routes>
                <Route path="panel" animate={true}>

                    <Route index path="profile" element={<Panelprofile />} />
                    <Route index path="artist-profile" element={<ProfileArtist />} />
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
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>

    )
}

export default RouterConfig
