import React from 'react';
import {Route, BrowserRouter as Router, Navigate, Routes} from 'react-router-dom'
import {isLogin, GetLanguage} from './utils/utils'
import RouterConfig from './main/router'
import APIService from "./utils/api.services";
import {useTranslation} from 'react-i18next';



function App(props) {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    console.log(GetLanguage());

    

    if (!isLogin()) {
        return (
            <Router>
                <Routes>
                    <Route exact path={`/auth/login`} component={() => <div>{t('description.part1')}</div>}/>
                    <Route path="*" element={<Navigate to ="/auth/login" />}/>
                </Routes>
            </Router>
        )
    } else {
        return (

            <RouterConfig/>

        )
    }
}

export default App;
