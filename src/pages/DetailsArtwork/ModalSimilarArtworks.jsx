import React from 'react';
import { Modal } from 'antd';
import edit_icon from '../../assets/img/edit_name.svg';
import close_icon from '../../assets/img/clear.svg';
import { Form, Input} from "antd";
import ver_code from '../../assets/img/ver_code.svg';
import { t } from 'i18next';

import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import artwork11 from '../../assets/img/artworks/artwork-11.jpg';
import artist4 from '../../assets/img/artist-4.jpg';
import circle_plus_icon from '../../assets/img/circle-plus-1.png';

function ModalSimilarArtworks(props) {

    const {visibleSimilarArtworksModal , setVisibleSimilarArtworksModal} = props;

    const handleClose = () => {
        setVisibleSimilarArtworksModal(false);
    }


    return (
        <React.Fragment>

        <Modal
            centered
            className=""
            visible={visibleSimilarArtworksModal}
            onOk={handleClose}
            onCancel={handleClose}
            width={'100vw'}
            footer={[]}
        >
                <div className="modal-content px-0 px-md-0">
                        <div className="d-flex justify-content-end">
                            <button>
                            <span  onClick={handleClose}  aria-hidden="true" aria-label="Close">
                                <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                            </span>
                            </button>
                        </div>
                        <div className="modal-header">
                            <h5 className="fontbold28 aligncenter" id="exampleModalLabel">{t("artwork.modal_similar_artwork.title")}</h5>
                        </div>
                        <div className="modal-body">
                            <div className="container modal-similar-artwork">
                                <div className="row">
                                    <div className="d-flex box-dir-reverse modal-similar-header">
                                        <div className="col-xs-3 px-0">
                                            <div className="d-flex pull-dir">
                                                <img src={artwork1} width="1776" height="1776" alt=""
                                                    className="img-responsive"/>
                                            </div>
                                        </div>
                                        <div className="col-xs-9 px-0">
                                            <div className="d-flex">
                                               <div className="col-4 col-sm-3 col-md-2 ">
                                                    <div className="artist-avatar">
                                                        <img src={artist4} width="312" height="312" alt=""
                                                            className="img-responsive pull-dir "/>
                                                    </div>
                                               </div>
                                                <div className="col">
                                                    <h3 className="fontbold20 text-dir">Behrouz Zindashti</h3>
                                                    <h4 className="fontbold20 text-dir">Untitle</h4>
                                                    <button type="button" className="btn btn-galleryfollow pull-dir">
                                                        <img src={circle_plus_icon} width="17" height="17" alt="" className="pull-left"/>
                                                        <span >Follow</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row-similar-artwork">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <a className="cols" href="#">
                                                <div className="col-img">
                                                    <img src={artwork1} width="1776" height="1776" alt="Arthibition"
                                                        className="img-responsive"/>
                                                    <div className="tab-overly">
                                                        <span className="btn-see">
                                                            <span className="view-icon pull-left"></span>
                                                            <span>view</span>
                                                        </span>
                                                        <span className="btn-sale">Shop now</span>
                                                        <span className="like-icon"></span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a className="cols" href="#">
                                                <div className="col-img">
                                                    <img src={artwork11} width="840" height="1041" alt="Arthibition"
                                                        className="img-responsive"/>
                                                    <div className="tab-overly">
                                                        <span className="btn-see">
                                                            <span className="view-icon pull-left"></span>
                                                            <span>view</span>
                                                        </span>
                                                        <span className="btn-sale">Shop now</span>
                                                        <span className="like-icon"></span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a className="cols" href="#">
                                                <div className="col-img">
                                                    <img src={artwork1} width="1776" height="1776" alt="Arthibition"
                                                        className="img-responsive"/>
                                                    <div className="tab-overly">
                                                        <span className="btn-see">
                                                            <span className="view-icon pull-left"></span>
                                                            <span>view</span>
                                                        </span>
                                                        <span className="btn-sale">Shop now</span>
                                                        <span className="like-icon"></span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a className="cols" href="#">
                                                <div className="col-img">
                                                    <img src={artwork11} width="840" height="1041" alt="Arthibition"
                                                        className="img-responsive"/>
                                                    <div className="tab-overly">
                                                        <span className="btn-see">
                                                            <span className="view-icon pull-left"></span>
                                                            <span>view</span>
                                                        </span>
                                                        <span className="btn-sale">Shop now</span>
                                                        <span className="like-icon"></span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a className="cols" href="#">
                                                <div className="col-img">
                                                    <img src={artwork1} width="1776" height="1776" alt="Arthibition"
                                                        className="img-responsive"/>
                                                    <div className="tab-overly">
                                                        <span className="btn-see">
                                                            <span className="view-icon pull-left"></span>
                                                            <span>view</span>
                                                        </span>
                                                        <span className="btn-sale">Shop now</span>
                                                        <span className="like-icon"></span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a className="cols" href="#">
                                                <div className="col-img">
                                                    <img src={artwork11} width="840" height="1041" alt="Arthibition"
                                                        className="img-responsive"/>
                                                    <div className="tab-overly">
                                                        <span className="btn-see">
                                                            <span className="view-icon pull-left"></span>
                                                            <span>view</span>
                                                        </span>
                                                        <span className="btn-sale">Shop now</span>
                                                        <span className="like-icon"></span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                    </div>
  
        </Modal>
    </React.Fragment>
    )
}

export default ModalSimilarArtworks;