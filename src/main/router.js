import React from 'react';
import {Routes, Route , BrowserRouter} from 'react-router-dom';
import App from '../App';
import ConfirmMobile from '../pages/ConfirmMobile/ConfirmMobile';
import Home from '../pages/Home.jsx/Home';
import Login from '../pages/Login/Login';
import PanelFavorites from '../pages/PanelFavorites/PanelFavorites';
import PanelMyPurchases from '../pages/PanelMyPurchases/PanelMyPurchases';
import Panelprofile from '../pages/PanelProfile/PanelProfile';
import SetPassword from '../pages/RecoveryPassword/RecoveryPassword';
import Signup from '../pages/Singup/Signup';

const RouterConfig = (props) => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="home" element={<Home />} />
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
                    
                </Route>
            </Routes>

            

                
        </BrowserRouter>


    )
}

export default RouterConfig
 