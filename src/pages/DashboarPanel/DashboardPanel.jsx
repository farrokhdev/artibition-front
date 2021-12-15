import React from "react";
import BasketFooterPanel from "../../components/BasketFooterPanel/BasketFooterPanel";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import SidebarPanel from "../../components/SidebarPanel/SidebarPanel";
import { t } from "i18next";

import financial_reports_orange from '../../assets/img/financial_reports-orange.svg';
import new_artwork from '../../assets/img/new-artwork.png';
import add_icon from '../../assets/img/add.png';
import add_white_icon from '../../assets/img/add-white.png';
import edit_icon from '../../assets/img/edit_name.svg';
import empty_list_icon from '../../assets/img/empty_list.svg';
import tip_icon from '../../assets/img/tip.svg';
import dates_icon from '../../assets/img/dates.svg';
import info_pink_icon from '../../assets/img/info-pink.png';
import cash_icon from '../../assets/img/cash.png';
import done_icon from '../../assets/img/done.svg';
import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import statistic_icon from '../../assets/img/statistic.png';
import logo_icon from '../../assets/img/logo-icon.png';
import felsh_left from '../../assets/img/felsh-left.png';
import upload_icon from '../../assets/img/upload.png';

function DashboardPanel() {
  return (
    <>
      <HeaderPanel t={t} />

      <div className="panel-style margin-top-fa">
        <SidebarPanel />

        <div className="custom-container">
            <div class=" d-flex box-dir-reverse  alert alert-notice text-dir " role="alert">
                
                    <img src={financial_reports_orange} width="24" height="24" alt="report-icon" class=""/>
                    <p>{t("content-panel-dashboard.alerts.info_notice.text1")} <a href="#">{t("content-panel-dashboard.alerts.this_contract")}</a>{t("content-panel-dashboard.alerts.info_notice.text2")}<a href="#">{t("content-panel-dashboard.alerts.here")}</a> {t("content-panel-dashboard.alerts.info_notice.text3")}</p>
                    <button type="button" class="btn-blue mx-2">
                        <img src={new_artwork} width="20" height="20" alt="new-artwork" class="mx-2" />
                        <span >{t("content-panel-dashboard.alerts.btn_upload")}</span>
                    </button>
            
            </div>
            
            <div class=" d-flex box-dir-reverse  alert alert-success text-dir " role="alert">
                
                    <img src={done_icon} width="24" height="24" alt="" class=""/>
                    <p>{t("content-panel-dashboard.alerts.info_success")}
                    <a href="#">{t("content-panel-dashboard.alerts.text_upload")}</a></p>
                    <button type="button" class="pull-left btn-close"></button>
            
            </div>
            
   
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
            <div class="row box-dir-reverse ">
                <div class="col-lg-8 ">
                    <div class="box artistpanel-1">
                        <div class="d-blcok d-lg-flex box-dir-reverse ">
                            <div class="col-12 col-md-3 px-0 w-100">
                                <img src={new_artwork} width="40" height="30" alt="new-artwork" class="center-block"/>
                                <button type="button" class="d-flex align-items-center justify-content-center box-dir-reverse btn-outline-blue">
                                    <img src={add_icon} width="12" height="12" alt="add-icon" class="mx-2"/>
                                    <span>{t("content-panel-dashboard.box_status.btn")}</span>
                                </button>
                            </div>
                            <div class="col">
                                <div class="col col-md-3 px-0">
                                    <div class="status-block">
                                        <span class="persian-num greencolor font24">5</span>
                                        <span class="graycolor font17">{t("content-panel-dashboard.box_status.approved")}</span>
                                        <a href="#" class="btn-back-blue">{t("content-panel-dashboard.box_status.veiw")}</a>
                                    </div>
                                </div>
                                <div class="col col-md-3 px-0">
                                    <div class="status-block">
                                        <span class="persian-num font24">1</span>
                                        <span class="graycolor font17">{t("content-panel-dashboard.box_status.modification")}</span>
                                        <a href="#" class="btn-back-blue">{t("content-panel-dashboard.box_status.veiw")}</a>
                                    </div>
                                </div>
                                <div class="col col-md-3 px-0">
                                    <div class="status-block">
                                        <span class="persian-num orangecolor font24">1</span>
                                        <span class="graycolor font17">{t("content-panel-dashboard.box_status.pending")}</span>
                                        <a href="#" class="btn-back-blue">{t("content-panel-dashboard.box_status.veiw")}</a>
                                    </div>
                                </div>
                                <div class="col col-md-3 px-0 ">
                                    <div class="status-block">
                                        <span class="persian-num pinkcolor font24">1</span>
                                        <span class="graycolor font17">{t("content-panel-dashboard.box_status.not_approved")}</span>
                                        <a href="#" class="btn-back-blue">{t("content-panel-dashboard.box_status.veiw")}</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="box artistpanel-2">
                        <div class="row box-dir-reverse">
                            <div class=" col-sm-6 px-0">
                                <div class="status-step passed">
                                    <span class="step-title text-dir">{t("content-panel-dashboard.box_status.user_status")}</span>
                                    <span class="graycolor text-dir">هنرمند تأیید شده</span>
                                </div>
                            </div>
                            <div class="col-sm-6 px-0">
                                <div class="status-step passed">
                                    <span class="step-title text-dir">{t("content-panel-dashboard.box_status.contact_status")}</span>
                                    <span class="graycolor text-dir">تأیید شده</span>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="col-sm-6 px-0">
                                <div class="status-step failed">
                                    <span class="step-title text-dir"> {t("content-panel-dashboard.box_status.email_status")}
                                        <a href="#">
                                            <img src={edit_icon} width="26" height="26" alt=""/>
                                        </a>
                                    </span>
                                    <span class="graycolor text-dir">تأیید نشده</span>
                                </div>
                            </div>
                            <div class="col-sm-6 px-0">
                            <div class="status-step failed">
                                <span class="d-flex box-dir-reverse step-title text-dir">{t("content-panel-dashboard.box_status.resume")}
                                    <a href="#">
                                        <img src={upload_icon} width="20" height="20" alt=""/>
                                    </a>
                                </span>
                                <span class="graycolor text-dir">ارسال نشده</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 ">

                <div class=" box artistpanel-3">
                        <div className="col w-100">
                        <div class="public-header">
                            <h2 class="default-title pull-dir">{t("content-panel-dashboard.tables.orders")}</h2>
                        </div>
                        <div>
                        <div className="d-flex box-dir-reverse">
                            <div collapse className="table-responsive ">
                                <table className="table  wallet-table  dir">
                                        <thead>
                                        <tr>
                                            <td>{t("content-panel-dashboard.tables.row")}</td>
                                            <td>{t("content-panel-dashboard.tables.image")}</td>
                                            <td>{t("content-panel-dashboard.tables.code")}</td>
                                            <td className='min-width-td-4'>{t("content-panel-dashboard.tables.price")}</td>
                                            <td className='min-width-td-4'>{t("content-panel-dashboard.tables.discount")}</td>
                                            <td className='min-width-td-4'>{t("content-panel-dashboard.tables.suggested")}</td>
                                            <td>{t("content-panel-dashboard.tables.date_registration")}</td>
                                            <td className='min-width-td-4'>{t("content-panel-dashboard.tables.your_respond")}</td>
                                            <td className="min-width-td-6">{t("content-panel-dashboard.tables.status")}</td>
                                            <td>{t("content-panel-dashboard.tables.details")}</td>
                                            <td>{t("content-panel-dashboard.tables.action")}</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="failed-state">
                                                <td data-label={t("content-panel-dashboard.tables.row")} class="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776"
                                                                            alt=""
                                                                            class="img-responsive"/></td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} class="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} class="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.suggested")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.date_registration")} class="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.your_respond")} class="persian-num"></td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} class="persian-num status text-center">رد شده</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} class="status"></td>
                                                <td>
                                                    <button class="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-suggestion">پاسخ
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr class="failed-state">
                                                <td data-label={t("content-panel-dashboard.tables.row")} class="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776"
                                                                            alt=""
                                                                            class="img-responsive"/></td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} class="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} class="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.suggested")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.date_registration")} class="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.your_respond")} class="persian-num"></td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} class="persian-num status text-center">رد شده</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} class="status"></td>
                                                <td>
                                                    <button class="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-suggestion">پاسخ
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr class="failed-state">
                                                <td data-label={t("content-panel-dashboard.tables.row")} class="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776"
                                                                            alt=""
                                                                            class="img-responsive"/></td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} class="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} class="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.suggested")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.date_registration")} class="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.your_respond")} class="persian-num"></td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} class="persian-num status text-center">رد شده</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} class="status"></td>
                                                <td>
                                                    <button class="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-suggestion">پاسخ
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr class="pending-state">
                                                <td data-label={t("content-panel-dashboard.tables.row")} class="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776"
                                                                            alt=""
                                                                            class="img-responsive"/></td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} class="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} class="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.suggested")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.date_registration")} class="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.your_respond")} class="persian-num"></td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} class="persian-num status text-center">رد شده</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} class="status"></td>
                                                <td>
                                                    <button class="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-suggestion">پاسخ
                                                    </button>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                        </div>

                        
                        </div>
                        
                    </div>








                    <div class=" box artistpanel-3">
                        <div className="col w-100 px-0">
                        <div class="public-header">
                            <h2 class="default-title pull-dir">{t("content-panel-dashboard.tables.order_active")}</h2>
                        </div>
                        <div>
                        <div className="d-flex box-dir-reverse ">
                            <div collapse className="table-responsive ">
                                <table className="table  wallet-table  dir">
                                        <thead>
                                            <tr>
                                                <td>{t("content-panel-dashboard.tables.row")}</td>
                                                <td>{t("content-panel-dashboard.tables.image")}</td>
                                                <td>{t("content-panel-dashboard.tables.code")}</td>
                                                <td className='min-width-td-2'>{t("content-panel-dashboard.tables.edition")}</td>
                                                <td className='min-width-td-4'>{t("content-panel-dashboard.tables.price")}</td>
                                                <td className='min-width-td-1'>{t("content-panel-dashboard.tables.discount")}</td>
                                                <td className='min-width-td-4'>{t("content-panel-dashboard.tables.paid")}</td>
                                                <td className="min-width-td-6">{t("content-panel-dashboard.tables.status")}</td>
                                                <td>{t("content-panel-dashboard.tables.details")}</td>
                                                <td>{t("content-panel-dashboard.tables.action")}</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='pending-state'>
                                                <td data-label={t("content-panel-dashboard.tables.row")} class="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}>
                                                    <img 
                                                        src={artwork1} 
                                                        width="1776" height="1776" alt=""
                                                        class="img-responsive "
                                                    />
                                                </td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} class="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.edition")} class="persian-num">۲</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} class="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.paid")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} class="persian-num status text-center">منتظر ارسال اثر به آرتیبیشن</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} class=""> </td>
                                                <td data-label={t("content-panel-dashboard.tables.action")}>
                                                    <button class="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-price">مشاهده
                                                    </button>
                                                </td>
                                            </tr>

                                            <tr className='pending-state'>
                                            <td data-label={t("content-panel-dashboard.tables.row")} class="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}>
                                                    <img 
                                                        src={artwork1} 
                                                        width="1776" height="1776" alt=""
                                                        class="img-responsive "
                                                    />
                                                </td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} class="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.edition")} class="persian-num">۲</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} class="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.paid")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} class="persian-num status text-center">منتظر ارسال اثر به آرتیبیشن</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} class=""> </td>
                                                <td data-label={t("content-panel-dashboard.tables.action")}>
                                                    <button class="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-price">مشاهده
                                                    </button>
                                                </td>
                                            </tr>

                                            <tr className='delivered-state'>
                                            <td data-label={t("content-panel-dashboard.tables.row")} class="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}>
                                                    <img 
                                                        src={artwork1} 
                                                        width="1776" height="1776" alt=""
                                                        class="img-responsive "
                                                    />
                                                </td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} class="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.edition")} class="persian-num">۲</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} class="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.paid")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} class="persian-num status text-center">منتظر ارسال اثر به آرتیبیشن</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} class=""> </td>
                                                <td data-label={t("content-panel-dashboard.tables.action")}>
                                                    <button class="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-price">مشاهده
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className='pending-state'>
                                            <td data-label={t("content-panel-dashboard.tables.row")} class="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}>
                                                    <img 
                                                        src={artwork1} 
                                                        width="1776" height="1776" alt=""
                                                        class="img-responsive "
                                                    />
                                                </td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} class="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.edition")} class="persian-num">۲</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} class="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.paid")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} class="persian-num status text-center">منتظر ارسال اثر به آرتیبیشن</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} class=""> </td>
                                                <td data-label={t("content-panel-dashboard.tables.action")}>
                                                    <button class="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-price">مشاهده
                                                    </button>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                        </div>

                        <div class="empty-order box">
                            <img src={empty_list_icon} width="72" height="72" alt="empty-icon"
                                class="center-block img-responsive"/>
                            <span class="bolder-title">{t("content-panel-dashboard.tables.empty_active_order.title")}</span>
                            <p>
                            {t("content-panel-dashboard.tables.empty_active_order.info.text1")}
                                <br/>
                                {t("content-panel-dashboard.tables.empty_active_order.info.text2")}
                            </p>
                            <div className="d-flex justify-content-center">
                                <button type="button" class="btn-blue d-flex box-dir-reverse">
                                    <img src={add_white_icon} width="12" height="12" alt="" class=""/>
                                    <span>{t("content-panel-dashboard.box_status.btn")}</span>
                                </button>
                            </div>
                        </div>
                        </div>
                        
                    </div>

                    




                    <div class=" box artistpanel-3">
                        <div className="col w-100">
                        <div class="public-header">
                            <h2 class="default-title pull-dir">{t("content-panel-dashboard.tables.suggestion_artwork")}</h2>
                        </div>
                        <div>
                        <div className="d-flex box-dir-reverse">
                            <div collapse className="table-responsive ">
                                <table className="table  wallet-table  dir">
                                        <thead>
                                        <tr>
                                            <td>{t("content-panel-dashboard.tables.row")}</td>
                                            <td>{t("content-panel-dashboard.tables.image")}</td>
                                            <td>{t("content-panel-dashboard.tables.code")}</td>
                                            <td className='min-width-td-4'>{t("content-panel-dashboard.tables.price")}</td>
                                            <td className='min-width-td-4'>{t("content-panel-dashboard.tables.discount")}</td>
                                            <td className='min-width-td-4'>{t("content-panel-dashboard.tables.suggested")}</td>
                                            <td>{t("content-panel-dashboard.tables.date_registration")}</td>
                                            <td className='min-width-td-4'>{t("content-panel-dashboard.tables.your_respond")}</td>
                                            <td className="min-width-td-6">{t("content-panel-dashboard.tables.status")}</td>
                                            <td>{t("content-panel-dashboard.tables.details")}</td>
                                            <td>{t("content-panel-dashboard.tables.action")}</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="failed-state">
                                                <td data-label={t("content-panel-dashboard.tables.row")} class="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776"
                                                                            alt=""
                                                                            class="img-responsive"/></td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} class="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} class="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.suggested")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.date_registration")} class="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.your_respond")} class="persian-num"></td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} class="persian-num status text-center">رد شده</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} class="status"></td>
                                                <td>
                                                    <button class="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-suggestion">پاسخ
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr class="replied-state">
                                            <td data-label={t("content-panel-dashboard.tables.row")} class="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776"
                                                                            alt=""
                                                                            class="img-responsive"/></td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} class="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} class="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.suggested")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.date_registration")} class="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.your_respond")} class="persian-num"></td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} class="persian-num status text-center">رد شده</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} class="status"></td>
                                                <td>
                                                    <button class="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-suggestion">پاسخ
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr class="delivered-state">
                                            <td data-label={t("content-panel-dashboard.tables.row")} class="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776"
                                                                            alt=""
                                                                            class="img-responsive"/></td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} class="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} class="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.suggested")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.date_registration")} class="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.your_respond")} class="persian-num"></td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} class="persian-num status text-center">رد شده</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} class="status"></td>
                                                <td>
                                                    <button class="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-suggestion">پاسخ
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr class="pending-state">
                                            <td data-label={t("content-panel-dashboard.tables.row")} class="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776"
                                                                            alt=""
                                                                            class="img-responsive"/></td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} class="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} class="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.suggested")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.date_registration")} class="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.your_respond")} class="persian-num"></td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} class="persian-num status text-center">رد شده</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} class="status"></td>
                                                <td>
                                                    <button class="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-suggestion">پاسخ
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                        </div>

                        <div class="empty-order box">
                            <img src={empty_list_icon} width="72" height="72" alt="empty-icon"
                                class="center-block img-responsive"/>
                            <span class="bolder-title">{t("content-panel-dashboard.tables.empty_offers_artworks.title")}</span>
                            
                        </div>
                        </div>
                        
                    </div>

                    <div class="box artistpanel-6">
                        <div class="public-header">
                            <h2 class="default-title text-dir">{t("content-panel-dashboard.tables.veiw_artworks")}</h2>
                        </div>
                        <div class="sec2-emptybody empty-statistic">
                            <img src={statistic_icon} width="67" height="83"/>
                            <p>{t("content-panel-dashboard.tables.empty_offers_artworks.title")}</p>
                            <button type="button" class="btn-blue ">
                                <img src="img/add-white.png" width="12" height="12" alt="" class=""/>
                                <span>{t("content-panel-dashboard.box_status.btn")}</span>
                            </button>
                        </div>
                </div>


                </div>

                
                <div class="col-lg-4">

                    <div class="box artistpanel-7">
                        <div class="public-header">
                            <h2 class="default-title text-dir">{t("content-panel-dashboard.my_income.title")}</h2>
                        </div>
                        <div class="cash-state">
                            <img src={cash_icon} width="64" height="64" alt="" class="center-block"/>
                            <div className="d-flex box-dir-reverse justify-content-center align-items-center">
                                <span class="persian-num mx-2">۴,۵۰۰,۰۰۰</span>
                                <span>تومان</span>
                            </div>
                            <button type="button" class="btn-back-blue">{t("content-panel-dashboard.my_income.detail")}
                                <i class="glyphicon glyphicon-chevron-left"></i>
                            </button>
                        </div>
                    </div>

                    <div class="box artistpanel-4 ">
                        <div class="d-flex box-dir-reverse justify-content-between public-header ">
                            <div class="pull-dir">
                                <h2 class="d-flex default-title box-dir-reverse "><span className="mx-2">{t("content-panel-dashboard.promotion.title")}</span>
                                    <a href="#">
                                        <img src={tip_icon} width="18" height="18" alt=""/>
                                    </a>
                                </h2>
                            </div>
                            <div class="pull-dir ">
                                <a href="#">
                                    <img src={dates_icon} width="20" height="20" alt="dates-icon"/>
                                </a>
                            </div>
                        </div>
                        <div class="promotion-blocks">
                            <div class="promotion-block">
                                <h3 class="d-flex box-dir-reverse pink-title">
                                    <img src={info_pink_icon} width="16" height="16" alt="" class="mx-2"/>
                                    <span>تخفیف ویژه یلدای ۹۹</span>
                                </h3>
                                <h3 class="d-flex box-dir-reverse gray-title">
                                    <i class="glyphicon glyphicon-time mx-2"></i>
                                    <span>۲۵ آذر الی ۱ دی ماه</span>
                                </h3>
                                <p class="text-dir">
                                    به مناسبت شب یلدا تمامی آثار در آرتیبیش با ۲۵ درصد تخفیف در
                                    .سایت قرار خواهند گرفت
                                </p>
                            </div>
                            <div class="promotion-block">
                                <h3 class="d-flex box-dir-reverse pink-title">
                                    <img src={info_pink_icon} width="16" height="16" alt="" class="mx-2"/>
                                    <span>کمپین آثار نقاشی آرتیبیشن</span>
                                </h3>
                                <h3 class="d-flex box-dir-reverse gray-title">
                                    <i class="glyphicon glyphicon-time mx-1"></i>
                                    <span>۱۹ الی ۲۶ مرداد ماه</span>
                                </h3>
                                <p class="text-dir">
                                    در کمپین نقاشی آرتیبیشن قصد داریم از با تبلیغ آثار نقاشی آن‌ها را
                                    در معرض دید مخاطبان بیشتری قرار دهیم. با انتشار اثر جدید و یا
                                    گذاشتن تخفیف برای آثار نقاشی خود می‌توانید بیشتر دیده شوید
                                    و آثار بیشتری به فروش برسانید.
                                </p>
                            </div>
                        </div>
                        <button type="button" class="btn btn-more">{t("content-panel-dashboard.promotion.veiw_more")}</button>
                    </div>


                </div>
            </div>
        </div>

        <BasketFooterPanel />
      </div>
    </>
  );
}

export default DashboardPanel;
