import React, { useState } from 'react';
import i18next, { t } from 'i18next';

import edit_name from '../../assets/img/edit_name.svg';
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux';
import { editingLocation } from '../../redux/reducers/auth/auth.actions';
import moment from 'jalali-moment';
import { showEditProfileVisible } from '../../redux/reducers/auth/auth.actions';

function PersonalInfo(props) {
    const { t, i18n } = useTranslation();
    console.log(props.auth.profile)
    const dispach = useDispatch()
    const { setvisibleEditMobile, setvisibleEditEmail, setVisibleAddAddress, profile } = props;
    const [showModal, setshowModal] = useState(false);

    const handleShowModal = () => {
        props.showEditProfileVisible(true)
    }

    const handleEditMobile = () => {
        setvisibleEditMobile(true)
    }

    const handleEditEmailAprove = () => {
        setvisibleEditEmail(true);
    }

    const handleAddAddress = () => {
        setVisibleAddAddress(true)
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
                            <img onClick={handleShowModal} src={edit_name} width="32" height="32" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group text-dir">
                            <span className="lable-panel">{t('content-panel-profile.personal-info.fullname')}</span>
                            <span className="input-panel">
                                {i18n.language === 'fa-IR' ?
                                    props.auth?.profile?.translations?.fa ?
                                        props.auth?.profile?.translations?.fa?.first_name + " " + props.auth?.profile?.translations?.fa?.last_name
                                        : ""
                                    :
                                    props.auth?.profile?.translations?.en ?
                                        props?.auth?.profile?.translations?.en?.first_name + " " + props?.auth?.profile?.translations?.en?.last_name
                                        : ""
                                }
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group text-dir">
                            <span className="lable-panel">{t('content-panel-profile.personal-info.phone')}</span>
                            {props?.auth?.profile?.mobile ?
                                <span className="input-panel persian-num">
                                    {props?.auth?.profile?.mobile}
                                    <div className="btn-green en-lang text-light m-2 p-2" style={{display:"inline-block"}}>تایید شده</div>
                                </span>
                                : <span className="lable-panel" onClick={handleEditMobile}>
                                    شماره همراه خود را تایید کنید
                                    <img src={edit_name} alt="" />
                                </span>
                            }
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
                            {props?.auth?.profile?.email ?
                                <span className="input-panel en-lang">
                                    {props?.auth?.profile?.email}
                                    <div className="btn-green text-light m-2 p-2" style={{display:"inline-block"}}>تایید شده</div>
                                </span>

                                : <span className="lable-panel" onClick={handleEditEmailAprove}>
                                    <img src={edit_name} alt="" />
                                    ایمیل خود را تایید کنید
                                </span>
                            }
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-sm-6">
                        <div className="form-group text-dir">
                            <span className="lable-panel">{t('content-panel-profile.personal-info.date')}</span>
                            <span className="input-panel persian-num">{props?.auth?.profile?.birth_date ? moment(props?.auth?.profile?.birth_date).locale(i18next?.language === 'fa-IR' ? 'fa' : 'en').format('YYYY/MM/DD') : ""}</span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group text-dir">
                            <span className="lable-panel">{t('content-panel-profile.personal-info.username')}</span>
                            <span className="input-panel persian-num">
                                {i18n.language === 'fa-IR' ?
                                    props.auth?.profile?.translations?.fa?.nick_name
                                    :
                                    profile?.translations?.en?.nick_name
                                }
                            </span>
                            {/* <span className="input-panel persian-num">{props?.auth?.profile?.username}</span> */}

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
                        <button onClick={handleAddAddress} type="button" className="btn btn-more">{t('content-panel-profile.personal-info.address.btn')}</button>
                    </div>
                </div>
                <div className="sec2-addresses">


                    {profile?.locations?.map((item, key) => {
                        return (

                            <label key={key} className="d-flex container-radio  justify-content-between text-dir box-dir-reverse">
                                <>
                                    {i18n.language === 'fa-IR' ?
                                        item?.translations?.fa?.city + "،" + item?.translations?.fa?.address :
                                        item?.translations?.en?.city + "،" + item?.translations?.en?.address
                                    }
                                    {item?.is_default ?
                                        <span className="default">{t('content-panel-profile.personal-info.address.default')}</span>
                                        : ""}
                                    <input type="radio" checked="checked" name="radio" />
                                    <span className="checkmark-radio"></span>
                                    <a href="#" className="edit-address">
                                        <img src={edit_name} onClick={() => { handleAddAddress(); dispach(editingLocation(item)) }} width="32" height="32" className="text-dir" alt="" />
                                    </a>

                                </>


                            </label>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        showEditProfileVisible: (data) => dispatch(showEditProfileVisible(data))
    }
}

const mapStateToProps = (store) => {
    return {
        auth: store.authReducer,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo)