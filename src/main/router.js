import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import AddArtwork from "../pages/AddArtwork/AddArtwork";
import AllGallerysList from "../pages/AllGallerysList/AllGallerysList";
import ArtistsPage from "../pages/ArtistsPage/ArtistsPage";
import ArtworksPage from "../pages/ArtworksPage";
import DashboardPanel from "../pages/DashboarPanel/DashboardPanel";
import DetailsArtwork from "../pages/DetailsArtwork/DetailsArtwork";

import GalleryPanelArtisit from "../pages/GalleryPanelArtist/GalleryPanelArtist";
import GalleryPanelCreateExhibition from "../pages/GalleryPanelCreateExhibition/GalleryPanelCreateExhibition";
import GalleryPanelDashboard from "../pages/GalleryPanelDashboard/GalleryPanelDashboard";
import GalleryPanelEditGalleryInfo from "../pages/GalleryPanelEditGalleryInfo/GalleryPanelEditGalleryInfo";
import GalleryPanelExhibition from "../pages/GalleryPanelExhibition/GalleryPanelExhibition";
import GalleryPanelMyGallery from "../pages/GalleryPanelMyGallery/GalleryPanelMyGallery";
import GalleryPanelSelectArtworkSource from "../pages/GalleryPanelSelectArtworkSource/GalleryPanelSelectArtworkSource";
import GalleryIntroduction from "../pages/GalleryIntroduction/GalleryIntroduction";

import Home from "../pages/Home.jsx/Home";
import PanelArtManagement from "../pages/PanelArtManagement/PanelArtManagement";
import PanelContentList from "../pages/PanelContentList/PanelContentList";
import PanelCreateContent from "../pages/PanelCreateContent/PanelCreateContent";
import PanelFavorites from "../pages/PanelFavorites/PanelFavorites";
import PanelMessages from "../pages/PanelMessages/PanelMessages";
import PanleMyAlbums from "../pages/PanelMyAlbums/PanleMyAlbums";
import PanelMyPurchases from "../pages/PanelMyPurchases/PanelMyPurchases";
import PanelOrders from "../pages/PanelOrders/PanelOrders";
import Panelprofile from "../pages/PanelProfile/PanelProfile";
import PanelWallet from "../pages/PanelWallet/PanelWallet";
import ProfileArtist from "../pages/ProfileArtist/ProfileArtist";
import GalleryPanelCreateArtistArtwork from "../pages/GalleryPanelCreateArtistArtwork/GalleryPanelCreateArtistArtwork";
import GalleryPanelUploadExhibitionArtwork from "../pages/GalleryPanelUploadExhibitionArtwork/GalleryPanelUploadExhibitionArtwork";
import GalleryPanelSelectArtisitSource from "../pages/GalleryPanelSelectArtistSource/GalleryPanelSelectArtistSource";
import Advisory from "../pages/Advisory/Advisory";
import Cart from "../pages/Cart/Cart";
import Invoice from "../pages/Invoice/Invoice";
import Payment from "../pages/Payment/Payment";
import SuccessPayment from "../pages/SuccessPayment/SuccessPayment";
import UnsuccessPayment from "../pages/UnsuccessPayment/UnsuccessPayment";
import ListOfUploadedWorks from "../pages/ListOfUploadedWorks/ListOfUploadedWorks";
import RegistrationArtist from "../pages/RegistrationArtists/RegistrationArtist";
import PanelMyCollections from "../pages/PanelMyCollections/PanelMyCollections";
import BecomeSeller from "../pages/BecomeSeller/BecomeSeller";
import PanelBiddingPrice from "../pages/PanelBiddingPrice/PanelBiddingPrice";
import { useSelector } from "react-redux";
import GalleryPanelAddArtwork from "../pages/GalleryPanelAddArtwork/GalleryPanelAddArtwork";
import ViewArtwork from "../pages/ViewArtwork/ViewArtwork";

const RouterConfig = (props) => {
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

  return (
    <Routes>
      <Route path="panel" animate={true}>
        <Route path="artist-profile" element={<ProfileArtist />} />
        <Route path="purchases" element={<PanelMyPurchases />} />
        <Route path="dashboard-gallery" element={<GalleryPanelDashboard />} />
        <Route path="bidding-price" element={<PanelBiddingPrice />} />
        <Route path="gallery-info" element={<GalleryPanelEditGalleryInfo />} />
        <Route path="galleries" element={<GalleryPanelMyGallery />} />

        {getUserRole() === "gallery" && (
          <>
            <Route path="dashboard" element={<DashboardPanel />} />
            <Route
              path="create-exhibition"
              element={<GalleryPanelCreateExhibition />}
            />
            <Route
              path="upload-exhibition-artwotk"
              element={<GalleryPanelUploadExhibitionArtwork />}
            />
            <Route path="artists" element={<GalleryPanelArtisit />} />
            <Route path="exhibitions" element={<GalleryPanelExhibition />} />
            <Route path="orders" element={<PanelOrders />} />
            <Route path="art-management" element={<PanelArtManagement />} />
            <Route path="contents" element={<PanelContentList />} />
            <Route path="create-content" element={<PanelCreateContent />} />
            <Route path="add-artwork" element={<AddArtwork />} />
            <Route path="view-artwork" element={<ViewArtwork />} />
            <Route
              path="*"
              element={<Navigate to="/panel/dashboard" replace />}
            />
          </>
        )}
        {getUserRole() === "artist" && (
          <>
            <Route path="dashboard" element={<DashboardPanel />} />
            <Route path="edit-albums/:id" element={<PanleMyAlbums />} />
            <Route path="my-albums" element={<PanleMyAlbums />} />
            <Route path="orders" element={<PanelOrders />} />
            <Route path="art-management" element={<PanelArtManagement />} />
            <Route path="profile" element={<Panelprofile />} />
            <Route path="favorites" element={<PanelFavorites />} />
            <Route path="wallet" element={<PanelWallet />} />
            <Route path="contents" element={<PanelContentList />} />
            <Route path="create-content" element={<PanelCreateContent />} />
            <Route path="add-artwork" element={<AddArtwork />} />
            <Route path="messages" element={<PanelMessages />} />
            <Route path="my-collections" element={<PanelMyCollections />} />
            <Route path="cart" element={<Cart />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="payment" element={<Payment />} />
            <Route path="success-payment" element={<SuccessPayment />} />
            <Route path="unsuccess-payment" element={<UnsuccessPayment />} />
            <Route
              path="*"
              element={<Navigate to="/panel/dashboard" replace />}
            />
            <Route path="view-artwork" element={<ViewArtwork />} />
          </>
        )}
        {getUserRole() === "seller" && (
          <>
            <Route path="dashboard" element={<DashboardPanel />} />
            <Route path="orders" element={<PanelOrders />} />
            <Route path="profile" element={<Panelprofile />} />
            <Route path="favorites" element={<PanelFavorites />} />
            <Route path="wallet" element={<PanelWallet />} />
            <Route path="add-artwork" element={<AddArtwork />} />
            <Route path="messages" element={<PanelMessages />} />
            <Route path="my-collections" element={<PanelMyCollections />} />
            <Route
              path="registration-artists"
              element={<RegistrationArtist />}
            />
            <Route path="cart" element={<Cart />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="payment" element={<Payment />} />
            <Route path="success-payment" element={<SuccessPayment />} />
            <Route path="unsuccess-payment" element={<UnsuccessPayment />} />
            <Route
              path="*"
              element={<Navigate to="/panel/dashboard" replace />}
            />
            <Route path="view-artwork" element={<ViewArtwork />} />
          </>
        )}
        {getUserRole() === "user" && (
          <>
            <Route path="profile" element={<Panelprofile />} />
            <Route path="favorites" element={<PanelFavorites />} />
            <Route path="wallet" element={<PanelWallet />} />
            <Route path="messages" element={<PanelMessages />} />
            <Route path="my-collections" element={<PanelMyCollections />} />
            <Route
              path="registration-artists"
              element={<RegistrationArtist />}
            />
            <Route path="become-seller" element={<BecomeSeller />} />
            <Route path="cart" element={<Cart />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="payment" element={<Payment />} />
            <Route path="success-payment" element={<SuccessPayment />} />
            <Route path="unsuccess-payment" element={<UnsuccessPayment />} />
            <Route
              path="*"
              element={<Navigate to="/panel/profile" replace />}
            />
            <Route
              path="register-artist-add-artwork"
              element={<AddArtwork />}
            />
          </>
        )}
      </Route>

      {/* <Route path="gallery-panel" animate={true}>
                <Route path="create-artist-artwotk" element={<GalleryPanelCreateArtistArtwork />} />
            </Route> */}
    </Routes>
  );
};

export default RouterConfig;
