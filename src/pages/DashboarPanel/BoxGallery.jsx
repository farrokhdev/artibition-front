import React from 'react';
import { t } from 'i18next';

import felsh_left from '../../assets/img/felsh-left.png';
import logo_icon from '../../assets/img/logo-icon.png';
import CreateGallery from '../GalleryPanelMyGallery/CreateGallery';


function BoxGallery() {
    return (
        <div className="row box-dir-reverse dir">
            <div className="col-lg-8">
                <div className="d-flex box-dir-reverse box box-1">
                    <div className="col">
                        <div className=" pull-dir">
                            <div className="d-flex box-dir-reverse">
                                <img src={logo_icon} width="1079" height="1079" alt=""
                                    className="img-responsive panel-pink-logo pull-right"/>
                                <span className="bolder-title">{t("content-panel-dashboard.box_gallery.gallery")}</span>
                            </div>
                        </div>
                    </div>
                    <div className="pull-dir">
                        <span className="pinkcolor pink-order"><span className="persian-num">1</span>{t("content-panel-dashboard.box_gallery.order")}</span>
                        <a href="#" className="btn-box-1 btn-pink pull-left">
                            <img src={felsh_left} width="16" height="16" className="center-block"/>
                        </a>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            <div className="col-lg-4">
                <CreateGallery/>
            </div>
        </div>
    )
}

export default BoxGallery
