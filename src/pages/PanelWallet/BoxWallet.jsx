import React from 'react';
import { t } from 'i18next';

import wallet_purple from '../../assets/img/wallet-purple.svg';
import gift_big from '../../assets/img/gift-big.svg';


function BoxWallet(props) {


    const {showIncreaseModal , showWithdrawalModal} = props;

    return (
        <div className=" box wallet ">
            <div className=" public-header ">
                <img src={wallet_purple} width="32" height="24" alt="wallet-icon" className="pull-dir" />
                <h2 className="default-title text-dir">{t("content-panel-wallet.inventory.title")}</h2>
            </div>
            <div className="d-flex justify-content-center box-dir-reverse cash-state">
                <span className="persian-num pull-dir">۸۶۰,۰۰۰</span>
                <span>{t("toman")}</span>
            </div>
            <div className="d-flex justify-content-center box-dir-reverse gift-info align-items-center">
                <img src={gift_big} width="32" height="31" alt="gift-icon" className="pull-dir mx-2" />
                <span>{t("content-panel-wallet.inventory.text_gift.text1")} <span
                        className="persian-num text-dir mx-2 ">500,000</span>{t("content-panel-wallet.inventory.text_gift.text2")}
                    {t("toman")} </span>
            </div>
            <button type="button" className="btn-pink center-block">{t("content-panel-wallet.inventory.buy_btn")}</button>
            <div className="d-flex box-dir-reverse btns-wallet ">
                <div className="col">
                    <div className="d-flex pull-dir">
                        <button onClick={showWithdrawalModal} type="button" className="" data-toggle="modal"
                            data-target="#cacheout">
                            {t("content-panel-wallet.inventory.withdrawal")}
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="d-flex justify-custom">
                        <button onClick={showIncreaseModal} type="button" className="pull-dir btn-outline-gray"
                            data-toggle="modal" data-target="#cachein">{t("content-panel-wallet.inventory.increase")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxWallet