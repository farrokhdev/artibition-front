import React from 'react';
import { Modal } from 'antd';
import close_icon from '../../assets/img/clear.svg';
import profile from '../../assets/img/profile_pic.svg';
import profile_artibition from '../../assets/img/arthibition_profile.svg';
import blue_badge from '../../assets/img/blue_badge.svg';
import send_icon from '../../assets/img/send.svg';
import { t } from 'i18next';

function ModalMessageMember(props) {

    const {visibleDetailMessageMember , setVisibleDetailMessageMember} = props;


    const handleClose = () => {
        setVisibleDetailMessageMember(false)
    }


    return (

        <React.Fragment>

            <Modal centered className="modal-otp" 
                visible={visibleDetailMessageMember} 
                onOk={handleClose} 
                onCancel={handleClose}
                width={700} footer={[]}
            >
                <div className="modal-content px-5">
                    <button>
                        <span onClick={handleClose} aria-hidden="true" aria-label="Close">
                            <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                        </span>
                    </button>
                    <div className="modal-header">
                        <div className="col">
                            <h5 className="modal-title " id="exampleModalLabel">{t("content-panel-messages.tabs.members.title_modal")}</h5>
                    
                            <div className="d-flex  ticket-subject  justify-custom">
                               <div className="col w-100">
                                    <span className="font17 graycolor text-dir">{t("content-panel-messages.tabs.members.subject")}</span>
                                    <span className="bolder-title text-dir">Referral request</span>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-body">


                        <div className="ticket-modal-block">
                            <div className="d-flex box-dir-reverse">
                                <div className="col-sm-1 col-xs-2 nopadrl">
                                    <img src={profile} width="56" height="56" className="img-responsive pull-left" alt='prifile-pic' />
                                </div>
                                <div className="col">
                                    <div className="d-block d-md-flex box-dir-reverse">
                                        <div className="col  px-0">
                                            <div className="d-flex ">
                                                <div className="d-block w-100">
                                                    <div className="col  w-100">
                                                        <div className="d-flex w-100" >
                                                            <h4 className="gallery-artist-name text-dir  w-100">Your account</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col ">
                                                        <div className="d-flex">
                                                            <span className=" graycolor text-dir w-100">0912071837</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col ">
                                            <div className="d-flex justify-custom">
                                            <span className="pull-dir graycolor">19:04 - 2020/05/02</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ticket-modal-block-body">
                                        <p className="text-dir">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                            diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                            volutpat</p>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="ticket-modal-block">
                            <div className="d-flex box-dir-reverse">
                                <div className="col-sm-1 col-xs-2 nopadrl">
                                    <img src={profile_artibition} width="56" height="56" className="img-responsive pull-left" alt='prifile-pic' />
                                </div>

                                <div className="col">
                                    <div className="d-block d-md-flex box-dir-reverse">
                                        <div className="col  px-0">
                                            <div className="d-flex ">
                                                <div className="d-block w-100">
                                                    <div className="col  w-100">
                                                        <div className="d-flex w-100" >
                                                            <h4 className="gallery-artist-name text-dir  w-100">Arthibition support</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col ">
                                                        <div className="d-flex box-dir-reverse">
                                                            <span className=" graycolor text-dir ">
                                                                Masoud Molaei
                                                            </span>
                                                                <img src={blue_badge} height="20" width="20" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col ">
                                            <div className="d-flex justify-custom">
                                            <span className="pull-dir graycolor">19:04 - 2020/05/02</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="ticket-modal-block-body">
                                        <p className="text-dir">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                            diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                            volutpat</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="ticket-modal-block">
                            <div className="d-flex box-dir-reverse">
                                <div className="col-sm-1 col-xs-2 nopadrl">
                                    <img src={profile} width="56" height="56" className="img-responsive pull-left" alt='prifile-pic' />
                                </div>

                                <div className="col">
                                    <div className="d-block d-md-flex box-dir-reverse">
                                        <div className="col  px-0">
                                            <div className="d-flex ">
                                                <div className="d-block w-100">
                                                    <div className="col  w-100">
                                                        <div className="d-flex w-100" >
                                                            <h4 className="gallery-artist-name text-dir  w-100">Your account</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col ">
                                                        <div className="d-flex">
                                                            <span className=" graycolor text-dir w-100">0912071837</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col ">
                                            <div className="d-flex justify-custom">
                                            <span className="pull-dir graycolor">19:04 - 2020/05/02</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ticket-modal-block-body">
                                        <p className="text-dir">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                            diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                            volutpat</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="modal-footer">
                            <div className="form-group w-100">
                                <input className="form-control ticket-input w-100" placeholder={t("content-panel-messages.tabs.members.palaceholder_message")}/>
                                <button type="button" className="btn-blue">
                                    <img src={send_icon} width="34" height="34" alt="" className="center-block send-icon-message"/>
                                </button>
                            </div>
                        </div>



                    </div>
                </div>

            </Modal>
        </React.Fragment>

    )
}

export default ModalMessageMember


