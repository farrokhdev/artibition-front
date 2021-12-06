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

    if (isLogin()) {
        return (
            <Router>
                <Routes>
                    <Route exact path={`/auth/signup`} component={() => <div>{t('description.part1')}</div>}/>
                    <Route path="*" element={<Navigate to ="/auth/signup" />}/>
                </Routes>
            </Router>
        )
    } else {
        return (

            <RouterConfig/>


            // <Router>
            //     <div>{t('title')}</div>
            //     <button type="button" onClick={() => changeLanguage('fa')}>
            //         fa
            //     </button>
            //     <button type="button" onClick={() => changeLanguage('en')}>
            //         en
            //     </button>
            //     <div>{t('description.part1')}</div>
            //     <RouterConfig props={props}/>
            // </Router>
        )
    }
}

export default App;
