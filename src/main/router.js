import React from 'react';
import {Routes, Route , BrowserRouter} from 'react-router-dom';
import App from '../App';
import ConfirmMobile from '../pages/ConfirmMobile/ConfirmMobile';
import Home from '../pages/Home.jsx/Home';
import Login from '../pages/Login/Login';
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

            

                
        </BrowserRouter>


    )
}

export default RouterConfig
 