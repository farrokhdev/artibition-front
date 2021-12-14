import React , {useState} from 'react';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import { t } from 'i18next';

import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import ModalWithdrawal from './ModalWithdrawal';
import ModalIncrease from './ModalIncrease';
import BoxArtistPanel from './BoxArtistPanel';
import BoxWallet from './BoxWallet';

function PanelWallet() {

    const [visibleWithdrawalModal, setVisibleWithdrawalModal] = useState(false);
    const [visibleIncreaseModal, setVisibleIncreaseModal] = useState(false);

    const showWithdrawalModal = () => {
        setVisibleWithdrawalModal(true)
    }  
    
    const showIncreaseModal = () => {
        setVisibleIncreaseModal(true)
    }


    return (
        <>
    <HeaderPanel t={t} />

    <div className="panel-style ">
        <SidebarPanel />

        <div className="custom-container">
        <div className="d-block d-lg-flex box-dir-reverse">
            <div className="col col-lg-5 ">
                <BoxWallet
                    showWithdrawalModal={showWithdrawalModal}
                    showIncreaseModal={showIncreaseModal}
                />
            </div>
            <div className="col col-lg-7 ">
                <BoxArtistPanel/>
            </div>
        </div>
    </div>

    <ModalWithdrawal
        setVisibleWithdrawalModal={setVisibleWithdrawalModal}
        visibleWithdrawalModal={visibleWithdrawalModal}
    />

    <ModalIncrease
        setVisibleIncreaseModal={setVisibleIncreaseModal}
        visibleIncreaseModal={visibleIncreaseModal}
    />

        <BasketFooterPanel />
    </div>
</>
    )
}

export default PanelWallet;
