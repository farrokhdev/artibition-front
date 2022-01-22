import React from "react";
import classnames from 'classnames';
import { GetLanguage } from '../../utils/utils';
import { t } from 'i18next';
import no_address from '../../assets/img/no_address@3x.png'
import edit_name from '../../assets/img/edit_name.svg'
import { Modal } from "antd";





function AddressStep({ next, prev }) {
    return (
        <>
            <div className="public-header">
                <div className="row dir">
                    <div className="col-xs-7">
                        <h2 className="default-title pull-dir">{t("payment.address_step.title")}</h2>
                        <button type="button" className="btn btn-default pull-dir-rev new-address" data-toggle="modal" data-target="#exampleModal">
                            <span className="glyphicon glyphicon-plus visible-xs"></span>
                            <span className="hidden-xs">{t("payment.address_step.new_address_btn")}</span>
                        </button>
                    </div>
                    <div className="col-xs-1"></div>
                    <div className="col-xs-4 dir-rtl">
                        <button type="button" className="btn-back pull-dir-rev" onClick={() => {}}>
                            <i className="glyphicon glyphicon-chevron-right"></i>
                            <span>{t("payment.address_step.back_btn")}<span className="hidden-xs">{t("payment.address_step.prev_step")}</span></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="basket-list address">
                <div className="row dir">



                    {/* ------------------ NO ADDRESS STATE ---------------------- */}
                    <div className="col-md-8 col-sm-6">
                        <div className=" no-address">
                            <img src={no_address} width="570" height="188" alt="" className="img-responsive" />
                            <span className="notice">{t("payment.address_step.no_address_message")}</span>
                            <button type="button" className="btn btn-default" data-toggle="modal" data-target="#exampleModal">
                                {t("payment.address_step.new_address_btn")}
                            </button>
                        </div>
                    </div>
                    {/* ------------------ NO ADDRESS STATE ---------------------- */}






                    {/* ------------------ WITH ADDRESS STATE ---------------------- */}
                    <div className="col-md-7">
                        <label className="container-radio text-dir">تهران، خیابان ولیعصر، بالاتر از پارک ساعی، پلاک ۱۰، زنگ ۱۰
                            <input type="radio" checked name="radio" />
                            <span className="checkmark-radio"></span>
                            <a href="#" className="edit-address">
                                <img src={edit_name} width="32" height="32" className="pull-dir-rev" alt="" />
                            </a>
                        </label>
                        <label className="container-radio text-dir">تهران، خیابان ولیعصر، پایین‌تر از پارک وی، کوچه مهناز، ساختمان شماره ۸
                            <input type="radio" name="radio" />
                            <span className="checkmark-radio"></span>
                            <a href="#" className="edit-address">
                                <img src={edit_name} width="32" height="32" className="pull-dir-rev" alt="" />
                            </a>
                        </label>
                    </div>

                    <div className="col-md-1 hidden-sm"></div>
                    {/* ------------------ WITH ADDRESS STATE ---------------------- */}





                    <div className={"col-md-4 col-sm-6"}>
                        <div className="basket-total mrgt0">
                            <div className="basket-price">
                                <div className="price-row d-flex">
                                    <div className="col text-dir text-dir">
                                        {t("invoice.price")}
                                        <span className="asar">
                                            (2 {t("invoice.artworks")})
                                        </span>
                                    </div>
                                    <div className="col-xs-7">
                                        <div className="basket-pricestyle pull-dir-rev">
                                            <span className="persian-num">۴,۰۰۰,۰۰۰</span>
                                            <span>{t("invoice.price_unit")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="price-row off d-flex">
                                    <div className="col-xs-5 text-dir">{t("invoice.discount")}</div>
                                    <div className="col-xs-7">
                                        <div className="basket-pricestyle pull-dir-rev">
                                            <span className="persian-num">۱,۲۰۰,۰۰۰</span>
                                            <span>{t("invoice.price_unit")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-row d-flex">
                                    <div className="col-xs-5 text-dir">{t("invoice.shipment_fee")}</div>
                                    <div className="col-xs-7">
                                        <div className="basket-pricestyle pull-dir-rev">
                                            <span className="greencolor">{t("invoice.free")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="price-row total d-flex" style={{ paddingTop: "16px", borderTop: "2px solid #e4e6e9" }}>
                                    <div className="col-xs-5 text-dir">{t("invoice.total_price")}</div>
                                    <div className="col-xs-7">
                                        <div className="basket-pricestyle pull-dir-rev">
                                            <span className="persian-num">۲,۸۰۰,۰۰۰</span>
                                            <span>{t("invoice.price_unit")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <button type="button" className="btn btn-continue" onClick={() => { next() }}>{t("invoice.next_btn")}</button>
                                </div>
                            </div>

                        </div>
                    </div>




                </div>
            </div>
            <Modal>
                
            </Modal>
        </>
    )
}

export default AddressStep