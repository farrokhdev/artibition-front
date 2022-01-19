import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { isLogin } from './utils/utils'
import RouterConfig from './main/router'
import { useTranslation } from 'react-i18next';
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
import Advisory from './pages/Advisory/Advisory';
import GalleryContentPage from './pages/GalleryIntroduction/GalleryContentPage';
import FAQ from './pages/FAQ/FAQ';


function App(props) {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };


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
                    <Route path="advisory" element={<Advisory />} />
                    <Route path="*" element={<Navigate to="/site/artworks" replace />} />
                </Route>
            </Routes>
            {isLogin() ?
                <RouterConfig />
                :
                <Routes>
                    <Route path="auth" animate={true}>
                        <Route index path="signup" element={<Signup />} />
                        <Route path="login" element={<Login />} />
                        <Route path="confirm-mobile" element={<ConfirmMobile />} />
                        <Route path="recovery-password" element={<SetPassword />} />
                        <Route path="*" element={<Navigate to="/auth/login" replace />} />
                    </Route>
                </Routes>
            }
        </BrowserRouter>
    )
}

export default App;
