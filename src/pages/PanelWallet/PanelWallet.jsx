import React, {useEffect, useState} from 'react';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import { t } from 'i18next';

import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import ModalWithdrawal from './ModalWithdrawal';
import ModalIncrease from './ModalIncrease';
import BoxArtistPanel from './BoxArtistPanel';
import BoxWallet from './BoxWallet';
import ApiServices from "../../utils/api.services";
import {WALLET} from "../../utils";

function PanelWallet() {

    const [visibleWithdrawalModal, setVisibleWithdrawalModal] = useState(false);
    const [visibleIncreaseModal, setVisibleIncreaseModal] = useState(false);
    const [wallet, setWallet] = useState();

    const showWithdrawalModal = () => {
        setVisibleWithdrawalModal(true)
    }  
    
    const showIncreaseModal = () => {
        setVisibleIncreaseModal(true)
    }

    useEffect( () => {
        ApiServices.get(WALLET, "")
            .then(res=> {
                if (res.data){
                    setWallet(res.data.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },[])


    return (
        <>
    <HeaderPanel t={t} />

    <div className="panel-style margin-top-20">
        <SidebarPanel />

        <div className="custom-container">
        <div className="d-block d-lg-flex box-dir-reverse dir">
            <div className="col col-lg-4 ">
                <BoxWallet
                    showWithdrawalModal={showWithdrawalModal}
                    showIncreaseModal={showIncreaseModal}
                    wallet={wallet}
                />
            </div>
            <div className="col col-lg-8 ">
                <BoxArtistPanel/>
            </div>
        </div>
    </div>

    <ModalWithdrawal
        setVisibleWithdrawalModal={setVisibleWithdrawalModal}
        visibleWithdrawalModal={visibleWithdrawalModal}
        wallet={wallet}
    />

    <ModalIncrease
        setVisibleIncreaseModal={setVisibleIncreaseModal}
        visibleIncreaseModal={visibleIncreaseModal}
        wallet={wallet}
    />

        <BasketFooterPanel />
    </div>
</>
    )
}

export default PanelWallet;
