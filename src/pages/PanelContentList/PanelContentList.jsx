import React from 'react';
import { t } from 'i18next';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';

import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import plus_white_icon from '../../assets/img/plus-white.png';


function PanelContentList() {
    return (
        <>
        <HeaderPanel t={t} />
        <div className="panel-style margin-top-20">
          <SidebarPanel />
          <div className="custom-container">



          <div className="d-block d-md-flex box-dir-reverse">
            <div className="col-md-8">
                <div className="box artistpanel-5">
                    <div className="public-header">
                        <h2 className="default-title text-dir">{t("content-panel-contents.title")}</h2>
                    </div>
                    <table className="table wallet-table dir">
                        <thead>
                        <tr>
                            <td>{t("content-panel-contents.table.row")}</td>
                            <td>{t("content-panel-contents.table.image")}</td>
                            <td>{t("content-panel-contents.table.subject")}</td>
                            <td>{t("content-panel-contents.table.type")}</td>
                            <td>{t("content-panel-contents.table.date_publish")}</td>
                            <td>{t("content-panel-contents.table.status")}</td>
                            <td>{t("content-panel-contents.table.details")}</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td data-label={t("content-panel-contents.table.row")} className="persian-num">1</td>
                            <td data-label={t("content-panel-contents.table.image")}><img src={artwork1} width="1776" height="1776"
                                                        alt=""
                                                        className="img-responsive center-block"/></td>
                            <td data-label={t("content-panel-contents.table.subject")}>...نگاهی به هنر مائوریتزیو کاتلان</td>
                            <td data-label={t("content-panel-contents.table.type")}>{t("content-panel-contents.table.video")}</td>
                            <td data-label={t("content-panel-contents.table.date_publish")} className="persian-num">۹۹/۰۶/۱۰</td>
                            <td data-label={t("content-panel-contents.table.status")}>{t("content-panel-contents.table.active")}</td>
                            <td data-label={t("content-panel-contents.table.details")} className="status">
                                <button type="button" className="btn-outline-blue">{t("content-panel-contents.table.edit")}</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-label={t("content-panel-contents.table.row")} className="persian-num">1</td>
                            <td data-label={t("content-panel-contents.table.image")}><img src={artwork1} width="1776" height="1776"
                                                        alt=""
                                                        className="img-responsive center-block"/></td>
                            <td data-label={t("content-panel-contents.table.subject")}>...نگاهی به هنر مائوریتزیو کاتلان</td>
                            <td data-label={t("content-panel-contents.table.type")}>{t("content-panel-contents.table.video")}</td>
                            <td data-label={t("content-panel-contents.table.date_publish")} className="persian-num">۹۹/۰۶/۱۰</td>
                            <td data-label={t("content-panel-contents.table.status")}>{t("content-panel-contents.table.active")}</td>
                            <td data-label={t("content-panel-contents.table.details")} className="status">
                                <button type="button" className="btn-outline-blue">{t("content-panel-contents.table.edit")}</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-label={t("content-panel-contents.table.row")} className="persian-num">1</td>
                            <td data-label={t("content-panel-contents.table.image")}><img src={artwork1} width="1776" height="1776"
                                                        alt=""
                                                        className="img-responsive center-block"/></td>
                            <td data-label={t("content-panel-contents.table.subject")}>...نگاهی به هنر مائوریتزیو کاتلان</td>
                            <td data-label={t("content-panel-contents.table.type")}>{t("content-panel-contents.table.video")}</td>
                            <td data-label={t("content-panel-contents.table.date_publish")} className="persian-num">۹۹/۰۶/۱۰</td>
                            <td data-label={t("content-panel-contents.table.status")}>{t("content-panel-contents.table.active")}</td>
                            <td data-label={t("content-panel-contents.table.details")} className="status">
                                <button type="button" className="btn-outline-blue">{t("content-panel-contents.table.edit")}</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-label={t("content-panel-contents.table.row")} className="persian-num">1</td>
                            <td data-label={t("content-panel-contents.table.image")}><img src={artwork1} width="1776" height="1776"
                                                        alt=""
                                                        className="img-responsive center-block"/></td>
                            <td data-label={t("content-panel-contents.table.subject")}>...نگاهی به هنر مائوریتزیو کاتلان</td>
                            <td data-label={t("content-panel-contents.table.type")}>{t("content-panel-contents.table.video")}</td>
                            <td data-label={t("content-panel-contents.table.date_publish")} className="persian-num">۹۹/۰۶/۱۰</td>
                            <td data-label={t("content-panel-contents.table.status")}>{t("content-panel-contents.table.active")}</td>
                            <td data-label={t("content-panel-contents.table.details")} className="status">
                                <button type="button" className="btn-outline-blue">{t("content-panel-contents.table.edit")}</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-label={t("content-panel-contents.table.row")} className="persian-num">1</td>
                            <td data-label={t("content-panel-contents.table.image")}><img src={artwork1} width="1776" height="1776"
                                                        alt=""
                                                        className="img-responsive center-block"/></td>
                            <td data-label={t("content-panel-contents.table.subject")}>...نگاهی به هنر مائوریتزیو کاتلان</td>
                            <td data-label={t("content-panel-contents.table.type")}>{t("content-panel-contents.table.video")}</td>
                            <td data-label={t("content-panel-contents.table.date_publish")} className="persian-num">۹۹/۰۶/۱۰</td>
                            <td data-label={t("content-panel-contents.table.status")}>{t("content-panel-contents.table.active")}</td>
                            <td data-label={t("content-panel-contents.table.details")} className="status">
                                <button type="button" className="btn-outline-blue">{t("content-panel-contents.table.edit")}</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-md-4">
                <div className="box box-1 create-ex">
                    <div className="pull-dir">
                        <span className="bolder-title">{t("content-panel-contents.create_content")}</span>
                    </div>
                    <a href="#" className="btn-box-1 btn-pink pull-left">
                        <img src={plus_white_icon} width="16" height="16" className="center-block"/>
                    </a>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
  
      
          </div>
          <BasketFooterPanel />
        </div>
      </>
    )
}

export default PanelContentList;
