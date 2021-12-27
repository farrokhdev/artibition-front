import React , {useState} from 'react';
import {useTranslation} from 'react-i18next';

import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.svg';

import profile_pic from '../../assets/img/profile_pic.svg';
import edit from '../../assets/img/edit.svg';
import invite from '../../assets/img/invite.svg';
import felsh_left from '../../assets/img/felsh-left.png';
import edit_name from '../../assets/img/edit_name.svg';
import hnrpqkfiup from '../../assets/img/mainpage/hnrpqkfiup@3x.jpg';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import PersonalInfo from './PersonalInfo';
import Suggestions from '../Home.jsx/Suggestions';
import RecentlyVeiws from './RecentlyVeiws';
import BoxesInfo from './BoxesInfo';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import ModalEditProfile from './ModalEditProfile';

const Panelprofile = () => {

const {t, i18n} = useTranslation();

const [visibleModalEditProfile, setVisibleModalEditProfile] = useState(false);

return (
<>
    <HeaderPanel t={t} />

    <div className="panel-style margin-top-20">
        <SidebarPanel />
        <div className="custom-container " id="main">
            <BoxesInfo />
            <PersonalInfo 
                setVisibleModalEditProfile={setVisibleModalEditProfile} 
            />
            <Suggestions />
            <RecentlyVeiws />
        </div>

        <BasketFooterPanel />
    </div>

        <ModalEditProfile 
            setVisibleModalEditProfile={setVisibleModalEditProfile}
            visibleModalEditProfile={visibleModalEditProfile} 
        />
</>
);
}

export default Panelprofile;