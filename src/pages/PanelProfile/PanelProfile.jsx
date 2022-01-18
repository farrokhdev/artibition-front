import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import PersonalInfo from './PersonalInfo';
import Suggestions from '../Home.jsx/Suggestions';
import RecentlyVeiws from './RecentlyVeiws';
import BoxesInfo from './BoxesInfo';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import ModalEditProfile from './ModalEditProfile';
import {PROFILE} from "../../utils";
import APIService from '../../utils/api.services'
import queryString from "query-string";

const Panelprofile = () => {

    const {t, i18n} = useTranslation();
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])
    const [params, setParams] = useState({})
    const [visibleModalEditProfile, setVisibleModalEditProfile] = useState(false);

    const getItems = () => {
        setLoading(true)
        APIService.get(PROFILE, queryString.stringify(params))
            .then(resp => {
                setLoading(false)
                setItems(resp.data.data)
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }

    useEffect(() => {
        getItems()
    }, [params])


    return (
        <>
            <HeaderPanel t={t}/>

            <div className="panel-style margin-top-20">
                <SidebarPanel items={items}/>
                <div className="custom-container " id="main">
                    <BoxesInfo/>
                    <PersonalInfo
                        setVisibleModalEditProfile={setVisibleModalEditProfile}
                    />
                    <Suggestions/>
                    <RecentlyVeiws/>
                </div>

                <BasketFooterPanel/>
            </div>

            <ModalEditProfile
                setVisibleModalEditProfile={setVisibleModalEditProfile}
                visibleModalEditProfile={visibleModalEditProfile}
            />
        </>
    );
}

export default Panelprofile;