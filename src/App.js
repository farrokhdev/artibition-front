import React, { useEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useLocation,
} from "react-router-dom";
import { isLogin } from "./utils/utils";
import RouterConfig from "./main/router";
import { useTranslation } from "react-i18next";
import Login from "./pages/Login/Login";
import Signup from "./pages/Singup/Signup";
import ArtworksPage from "./pages/ArtworksPage/ArtworksPage";
import DetailsArtwork from "./pages/DetailsArtwork/DetailsArtwork";
import ArtistsPage from "./pages/ArtistsPage/ArtistsPage";
import ProfileArtist from "./pages/ProfileArtist/ProfileArtist";
import AllGallerysList from "./pages/AllGallerysList/AllGallerysList";
import GalleryIntroduction from "./pages/GalleryIntroduction/GalleryIntroduction";
import ConfirmMobile from "./pages/ConfirmMobile/ConfirmMobile";
import SetPassword from "./pages/RecoveryPassword/RecoveryPassword";
import Home from "./pages/Home.jsx/Home";
import Advisory from "./pages/Advisory/Advisory";
import AdvisorySubmited from "./pages/AdvisorySubmited/AdvisorySubmited";
import CollectionsList from "./pages/CollectionsList/CollectionsList";
import GalleryContentPage from "./pages/GalleryIntroduction/GalleryContentPage";
import FAQ from "./pages/FAQ/FAQ";
import DetailsPromotion from "./pages/DetailsPromoton/DetailsPromotion";
import PromotionCompetition from "./pages/PromotionCompetition/PromotionCompetition";
import ReactGA from "react-ga";
import Page404 from "./pages/Page404/Page404";
import ArtistContentPage from "./pages/ArtistContentPage/ArtistContentPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import WorkWithUs from "./pages/WorkWithUs/WorkWithUs";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ContactUs from "./pages/ContactUs/ContactUs";
import Content from "./pages/Content/Content";
import ExhibitionDetail from "./pages/ExhibitionDetail";
import Promotions from "./pages/Promotions/Promotions";
import ExhibitionsPage from "./pages/ExhibitionsPage";

ReactGA.initialize("UA-220199370-1");

function App(props) {
  const { t, i18n } = useTranslation();
  let location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const pageViewTeacking = () => {
    const pathname = location.pathname;
    if (pathname.includes("/site/") || pathname === "/") {
      ReactGA.pageview(location.pathname);
    }
  };
  useEffect(() => {
    pageViewTeacking();
  }, [location]);

  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index path="home" element={<Home />} />
          </Route>
        </Routes>

        <Routes>
          <Route path="site" animate={true}>
            <Route path="artworks" element={<ArtworksPage />} />
            <Route path="exhibitionDetail" element={<ExhibitionDetail />} />
            <Route path="exhibitions" element={<ExhibitionsPage />} />
            <Route path="promotions" element={<Promotions />} />

            <Route path="artworks-detail" element={<DetailsArtwork />} />
            <Route path="artists" element={<ArtistsPage />} />
            <Route path="artist-profile" element={<ProfileArtist />} />
            <Route path="all-galleris-list" element={<AllGallerysList />} />
            <Route
              path="gallery-introduction"
              element={<GalleryIntroduction />}
            />
            <Route
              path="gallery-content/:galleryId/:contentId"
              element={<GalleryContentPage />}
            />
            <Route
              path="artist-content/:artistId/:contentId"
              element={<ArtistContentPage />}
            />
            <Route path="faq" element={<FAQ />} />
            <Route path="advisory" element={<Advisory />} />
            <Route path="advisory-submited" element={<AdvisorySubmited />} />
            <Route path="collections-list" element={<CollectionsList />} />
            <Route path="promotion/:id" element={<DetailsPromotion />} />
            <Route
              path="promotion-competition/:id"
              element={<PromotionCompetition />}
            />
            <Route path="content/:slug" element={<Content />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="work-with-us" element={<WorkWithUs />} />
            <Route path="contact-us" element={<ContactUs />} />

            <Route path="page-404" element={<Page404 />} />

            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
        {isLogin() ? (
          <RouterConfig />
        ) : (
          <Routes>
            <Route path="auth" animate={true}>
              <Route index path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="confirm-mobile" element={<ConfirmMobile />} />
              <Route path="recovery-password" element={<SetPassword />} />
              <Route path="*" element={<Navigate to="/auth/login" replace />} />
            </Route>
          </Routes>
        )}
      </ScrollToTop>
    </>
  );
}

export default App;
