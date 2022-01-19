import React from 'react';
import { t } from 'i18next';

import edit_name from '../../assets/img/edit_name.svg';
import {connect} from "react-redux";
import {useTranslation} from "react-i18next";

function PersonalInfo(props) {
    const {t, i18n} = useTranslation();
    console.log(props.auth.profile)

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
                        <span className="input-panel">
                            {i18n.language === 'fa-IR' ?
                                props.auth?.profile?.translations?.fa?.first_name + " " +
                                props.auth?.profile?.translations?.fa?.last_name :
                                props.auth?.profile?.translations?.en?.first_name + " " +
                                props.auth?.profile?.translations?.en?.last_name
                            }
                        </span>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group text-dir">
                        <span className="lable-panel">{t('content-panel-profile.personal-info.phone')}</span>
                        <span className="input-panel persian-num">{props?.auth?.profile?.mobile}</span>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-sm-6">
                    <div className="form-group text-dir">
                        <span className="lable-panel">{t('content-panel-profile.personal-info.national')}</span>
                        <span className="input-panel persian-num">{props?.auth?.profile?.national_code}</span>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group text-dir">
                        <span className="lable-panel">{t('content-panel-profile.personal-info.email')}</span>
                        <span className="input-panel en-lang">{props?.auth?.profile?.email}</span>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-sm-6">
                    <div className="form-group text-dir">
                        <span className="lable-panel">{t('content-panel-profile.personal-info.date')}</span>
                        <span className="input-panel persian-num">{props?.auth?.profile?.birth_date}</span>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group text-dir">
                        <span className="lable-panel">{t('content-panel-profile.personal-info.username')}</span>
                        <span className="input-panel persian-num">{props?.auth?.profile?.username}</span>
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
                {props?.auth?.profile?.locations?.map((item, key) =>

                    <label key={key} className="d-flex container-radio  justify-content-between text-dir box-dir-reverse">
                        {i18n.language === 'fa-IR' ?
                            item?.translations?.fa?.city + "،" + item?.translations?.fa?.address :
                            item?.translations?.en?.city + "،" + item?.translations?.en?.address
                        }

                        <span className="default">{t('content-panel-profile.personal-info.address.default')}</span>
                        <input type="radio" checked="checked" name="radio"/>
                        <span className="checkmark-radio"></span>
                        <a href="#" className="edit-address">
                            <img src={edit_name} width="32" height="32" className="text-dir" alt=""/>
                        </a>
                    </label>

                )}
            </div>
        </div>
    </div>
    )
}


const mapStateToProps = (store) => {
    return {
        auth: store.authReducer,
    }
}


export default connect(mapStateToProps)(PersonalInfo)