import React from 'react';
import { t } from 'i18next';

import edit_name from '../../assets/img/edit_name.svg';

function PersonalInfo(props) {

    const {setVisibleModalEditProfile} = props;

    const handleShowModal = () => {
        setVisibleModalEditProfile(true)
    }

    return (
        <div className="box box-2 dir">
        <div className="sec1">
            <div className="d-flex public-header justify-content-between box-dir-reverse">
                <div className="pull-dir">
                    <h2 className="default-title">{t('content-panel-profile.personal-info.title')}</h2>
                </div>
                <div className="pull-dir">
                    <a href="#" data-toggle="modal" data-target="#edit-profile">
                        <img onClick={handleShowModal} src={edit_name} width="32" height="32"/>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group text-dir">
                        <span className="lable-panel">{t('content-panel-profile.personal-info.fullname')}</span>
                        <span className="input-panel">آیدین آغداشلو</span>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group text-dir">
                        <span className="lable-panel">{t('content-panel-profile.personal-info.phone')}</span>
                        <span className="input-panel persian-num">۴۸۴۰۴۷۵ ۰۹۱۲</span>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-sm-6">
                    <div className="form-group text-dir">
                        <span className="lable-panel">{t('content-panel-profile.personal-info.national')}</span>
                        <span className="input-panel persian-num">۰۰۷۹۸۳۱۶۷</span>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group text-dir">
                        <span className="lable-panel">{t('content-panel-profile.personal-info.email')}</span>
                        <span className="input-panel en-lang">Karimi.hirad@gmail.com</span>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-sm-6">
                    <div className="form-group text-dir">
                        <span className="lable-panel">{t('content-panel-profile.personal-info.date')}</span>
                        <span className="input-panel persian-num">-</span>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group text-dir">
                        <span className="lable-panel">{t('content-panel-profile.personal-info.username')}</span>
                        <span className="input-panel persian-num">-</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="sec2">
            <div className="d-flex  public-header justify-content-between box-dir-reverse">
                <div className="pull-dir">
                    <h2 className="default-title">{t('content-panel-profile.personal-info.address.title')}</h2>
                </div>
                <div className="pull-dir">
                    <button type="button" className="btn btn-more">{t('content-panel-profile.personal-info.address.btn')}</button>
                </div>
            </div>
            <div className="sec2-addresses">
                <label className="d-flex container-radio  justify-content-between text-dir box-dir-reverse">تهران، خیابان ولیعصر، بالاتر از پارک ساعی، پلاک ۱۰، زنگ ۱۰
                    <span className="default">{t('content-panel-profile.personal-info.address.default')}</span>
                    <input type="radio" checked="checked" name="radio"/>
                    <span className="checkmark-radio"></span>
                    <a href="#" className="edit-address">
                        <img src={edit_name} width="32" height="32" className="text-dir" alt=""/>
                    </a>
                </label>
                <label className="d-flex container-radio  justify-content-between text-dir box-dir-reverse">تهران، خیابان ولیعصر، پایین‌تر از پارک وی، کوچه مهناز،
                    ساختمان شماره
                    ۸
                    <input type="radio" name="radio"/>
                    <span className="checkmark-radio"></span>
                    <a href="#" className="edit-address">
                        <img src={edit_name} width="32" height="32" className="text-dir" alt=""/>
                    </a>
                </label>
            </div>
        </div>
    </div>
    )
}

export default PersonalInfo
