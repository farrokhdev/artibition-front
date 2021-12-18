import React from 'react';
import {Routes, Route , BrowserRouter} from 'react-router-dom';
import App from '../App';
import AddArtwork from '../pages/AddArtwork/AddArtwork';
import ConfirmMobile from '../pages/ConfirmMobile/ConfirmMobile';
import DashboardPanel from '../pages/DashboarPanel/DashboardPanel';
import Home from '../pages/Home.jsx/Home';
import Login from '../pages/Login/Login';
import PanelFavorites from '../pages/PanelFavorites/PanelFavorites';
import PanelMessages from '../pages/PanelMessages/PanelMessages';
import PanelMyPurchases from '../pages/PanelMyPurchases/PanelMyPurchases';
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
                <Route path="auth" animate={true}>
                    <Route index path="signup" element={<Signup />} />
                    <Route path="login" element={<Login />} />
                    <Route path="confirm-mobile" element={<ConfirmMobile />} />
                    <Route path="recovery-password" element={<SetPassword />} />
                </Route>
            </Routes>
            

            <Routes>
                <Route path="panel" animate={true}>
                    <Route path="profile" element={<Panelprofile />} />
                    <Route path="purchases" element={<PanelMyPurchases />} />
                    <Route path="favorites" element={<PanelFavorites />} />
                    <Route path="messages" element={<PanelMessages />} />
                    <Route path="wallet" element={<PanelWallet />} />
                    <Route path="dashboard" element={<DashboardPanel />} />
                    <Route path="add-artwork" element={<AddArtwork />} />
                </Route>
            </Routes>

            

                
        </BrowserRouter>


    )
}

export default RouterConfig
 