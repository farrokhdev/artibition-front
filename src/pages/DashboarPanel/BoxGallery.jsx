import React from 'react';
import { t } from 'i18next';

import felsh_left from '../../assets/img/felsh-left.png';
import logo_icon from '../../assets/img/logo-icon.png';


function BoxGallery() {
    return (
        <div class="row box-dir-reverse">
            <div class="col-lg-8">
                <div class="d-flex box-dir-reverse box box-1">
                    <div className="col">
                        <div class=" pull-dir">
                            <div className="d-flex box-dir-reverse">
                                <img src={logo_icon} width="1079" height="1079" alt=""
                                    class="img-responsive panel-pink-logo pull-right"/>
                                <span class="bolder-title">{t("content-panel-dashboard.box_gallery.gallery")}</span>
                            </div>
                        </div>
                    </div>
                    <div class="pull-dir">
                        <span class="pinkcolor pink-order"><span class="persian-num">1</span>{t("content-panel-dashboard.box_gallery.order")}</span>
                        <a href="#" class="btn-box-1 btn-pink pull-left">
                            <img src={felsh_left} width="16" height="16" class="center-block"/>
                        </a>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="d-flex box-dir-reverse box box-1">
                    <div class="text-dir">
                        <h2 class="greencolor">{t("content-panel-dashboard.box_gallery.new_gallery")}</h2>
                        <p>{t("content-panel-dashboard.box_gallery.info_gallery")}</p>
                    </div>
                    <a href="#" class="btn-box-1 btn-green pull-left">
                        <img src={felsh_left} width="16" height="16" class="center-block"/>
                    </a>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    )
}

export default BoxGallery
