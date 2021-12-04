import React from 'react';
import {Routes, Route , BrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home.jsx/Home';
import Login from '../pages/Login/Login';

const RouterConfig = (props) => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>

                <Routes>
                    <Route path="auth" element={<Login />} animate={true}>
                        <Route path="login" element={<Login />} />
                    </Route>
                </Routes>

            

                
        </BrowserRouter>


    )
}

export default RouterConfig
 