import React from 'react';
import { t } from 'i18next';

import felsh_left from '../../assets/img/felsh-left.png';

function BoxesInfo() {
    return (
        <div className="row ">
        <div className="col-md-4 ">
            <div className="box box-1">
                <div className="pull-dir">
                    <h2 className="pinkcolor text-dir">{t('content-panel-profile.info-box.register.title')}</h2>
                    <p className="text-dir">{t('content-panel-profile.info-box.register.text')}</p>
                </div>
                <a href="#" className="btn-box-1 btn-pink pull-left">
                    <img src={felsh_left} width="16" height="16" className="center-block"/>
                </a>
                <div className="clearfix"></div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box box-1">
                <div className="pull-dir">
                    <h2 className="purplecolor text-dir">{t('content-panel-profile.info-box.artists.title')}</h2>
                    <p className="text-dir">{t('content-panel-profile.info-box.artists.text')}</p>
                </div>
                <a href="#" className=" btn-box-1 btn-purple pull-left">
                    <img src={felsh_left} width="16" height="16" className="center-block"/>
                </a>
                <div className="clearfix"></div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box box-1">
                <div className="pull-dir">
                    <h2 className="greencolor text-dir">{t('content-panel-profile.info-box.seller.title')}</h2>
                    <p className="text-dir">{t('content-panel-profile.info-box.seller.text')}</p>
                </div>
                <a href="#" className="btn-box-1 btn-green pull-left">
                    <img src={felsh_left} width="16" height="16" className="center-block"/>
                </a>
                <div className="clearfix"></div>
            </div>
        </div>
    </div>
    )
}

export default BoxesInfo
