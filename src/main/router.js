import React from 'react';
import {Routes, Route , BrowserRouter} from 'react-router-dom';
import App from '../App';
import AddArtwork from '../pages/AddArtwork/AddArtwork';
import ArtworksPage from '../pages/ArtworksPage/ArtworksPage';
import ConfirmMobile from '../pages/ConfirmMobile/ConfirmMobile';
import DashboardPanel from '../pages/DashboarPanel/DashboardPanel';
import DetailsArtwork from '../pages/DetailsArtwork/DetailsArtwork';
import Home from '../pages/Home.jsx/Home';
import Login from '../pages/Login/Login';
import PanelArtManagement from '../pages/PanelArtManagement/PanelArtManagement';
import PanelFavorites from '../pages/PanelFavorites/PanelFavorites';
import PanelMessages from '../pages/PanelMessages/PanelMessages';
import PanleMyAlbums from '../pages/PanelMyAlbums/PanleMyAlbums';
import PanelMyPurchases from '../pages/PanelMyPurchases/PanelMyPurchases';
import PanelOrders from '../pages/PanelOrders/PanelOrders';
import Panelprofile from '../pages/PanelProfile/PanelProfile';
import PanelWallet from '../pages/PanelWallet/PanelWallet';
import SetPassword from '../pages/RecoveryPassword/RecoveryPassword';
import Signup from '../pages/Singup/Signup';

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
                    <Route  path="artworks" element={<ArtworksPage />}/>
                    <Route  path="artworks/:id" element={<DetailsArtwork />} />
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
                    
                </Route>
            </Routes>

            

                
        </BrowserRouter>


    )
}

export default RouterConfig
 