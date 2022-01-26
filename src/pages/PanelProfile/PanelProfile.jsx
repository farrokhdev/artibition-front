import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import PersonalInfo from './PersonalInfo';
import Suggestions from '../Home.jsx/Suggestions';
import RecentlyVeiws from './RecentlyVeiws';
import BoxesInfo from './BoxesInfo';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import ModalEditProfile from './ModalEditProfile';
import { PROFILE } from "../../utils";
import APIService from '../../utils/api.services'
import queryString from "query-string";
import ModalEditMobile from './ModalEditMobile';
import { connect } from 'react-redux';
import { setProfile } from '../../redux/reducers/auth/auth.actions';
import ModalEditEmail from './ModalEditEmail';

const Panelprofile = (props) => {

    const { t, i18n } = useTranslation();
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])
    const [params, setParams] = useState({})
    const [visibleModalEditProfile, setVisibleModalEditProfile] = useState(false);
    const [visibleEditMobile, setvisibleEditMobile] = useState(false);
    const [visibleEditEmail, setvisibleEditEmail] = useState(false);




    const getItems = () => {
        setLoading(true)
        APIService.get(PROFILE, queryString.stringify(params))
            .then(resp => {
                setLoading(false)
                props.setProfile({ ...props.state, profile: resp.data.data, id: resp.data.data.id })
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
            <HeaderPanel t={t} />

            <div className="panel-style margin-top-20">
                <SidebarPanel items={items} />
                <div className="custom-container " id="main">
                    <BoxesInfo items={items}/>
                    <PersonalInfo
                        setVisibleModalEditProfile={setVisibleModalEditProfile}
                        setvisibleEditMobile={setvisibleEditMobile}
                        setvisibleEditEmail={setvisibleEditEmail}
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
            <ModalEditMobile
                items={items}
                getItems={getItems}
                setvisibleEditMobile={setvisibleEditMobile}
                visibleEditMobile={visibleEditMobile}
            />

              <ModalEditEmail
                items={items}
                getItems={getItems}
                setvisibleEditEmail={setvisibleEditEmail}
                visibleEditEmail={visibleEditEmail}
            />
        </>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (data) => dispatch(setProfile(data)),
    }
}

const mapStateToProps = (store) => {
    return {
        auth: store.authReducer,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Panelprofile)
