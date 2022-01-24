import React, { useEffect, useState } from "react";
import classnames from 'classnames';
import { GetLanguage } from '../../utils/utils';
import { t } from 'i18next';
import no_address from '../../assets/img/no_address@3x.png'
import edit_name from '../../assets/img/edit_name.svg'
import edit_name_blue from '../../assets/img/edit_name_blue.svg'
import { Modal } from "antd";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../assets/style/leaflet.scss'





function AddressStep({ next, prev }) {

    const [showAddress, setShowAddress] = useState(false)
    const [showMap, setShowMap] = useState(false)
    const [point, setPoint] = useState({})
    const [zoom, setZoom] = useState(11)


    return (
        <>
            <div className="public-header">
                <div className="row dir">
                    <div className="col-xs-7">
                        <h2 className="default-title pull-dir">{t("payment.address_step.title")}</h2>
                        <button type="button" className="btn btn-default pull-dir-rev new-address" data-toggle="modal" data-target="#exampleModal" onClick={() => { setShowAddress(true) }}>
                            <span className="glyphicon glyphicon-plus visible-xs"></span>
                            <span className="hidden-xs">{t("payment.address_step.new_address_btn")}</span>
                        </button>
                    </div>
                    <div className="col-xs-1"></div>
                    <div className="col-xs-4 dir-rtl">
                        <button type="button" className="btn-back pull-dir-rev" onClick={() => { }}>
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
                            <button type="button" className="btn btn-default" data-toggle="modal" data-target="#exampleModal" onClick={() => { setShowAddress(true) }}>
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





            <Modal
                visible={showAddress}
                width={800}
                footer={[]}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{t("payment.address_step.modal.title")}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowAddress(false) }}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>


                    <div className="modal-body">
                        <div className="enter-address">
                            <div className="row-addaddress">
                                <div>
                                    <h3 className="addressform-title text-dir">{t("payment.address_step.modal.address_info")}</h3>
                                </div>
                            </div>
                            <form className="row dir">
                                <div className="col-sm-6">
                                    <div className="public-group">
                                        <select className="input-public" required>
                                            <option>تهران</option>
                                            <option>البرز</option>
                                            <option>قزوین</option>
                                        </select>
                                        <label className="lable-public">{t("payment.address_step.modal.province")}</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="public-group">
                                        <select className="input-public">
                                            <option>پاکدشت</option>
                                            <option>ورامین</option>
                                            <option>شمیرانات</option>
                                        </select>
                                        <label className="lable-public">{t("payment.address_step.modal.city")}</label>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="public-group">
                                        <input className="form-control input-public " required />
                                        <label className="lable-public">{t("payment.address_step.modal.address")}</label>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="public-group">
                                        <input className="form-control input-public " required />
                                        <label className="lable-public">{t("payment.address_step.modal.no.")}</label>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="public-group">
                                        <input className="form-control input-public " required />
                                        <label className="lable-public">{t("payment.address_step.modal.unit")}</label>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="public-group">
                                        <input className="form-control input-public " required />
                                        <label className="lable-public">{t("payment.address_step.modal.postal_code")}</label>
                                        <span className="input-help text-dir">{t("payment.address_step.modal.postal_code_description")}</span>
                                    </div>
                                </div>
                            </form>
                            <div className="row-addaddress">
                                <div>
                                    <h3 className="addressform-title text-dir">{t("payment.address_step.modal.receiver_information")}</h3>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <form className="row dir">
                                <div className="col-sm-6">
                                    <div className="public-group">
                                        <input className="form-control input-public " required />
                                        <label className="lable-public">{t("payment.address_step.modal.receiver_fullname")}</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="public-group">
                                        <input className="form-control input-public " required />
                                        <label className="lable-public">{t("payment.address_step.modal.phone_number")}</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="public-group">
                                        <input className="form-control input-public " required />
                                        <label className="lable-public">{t("payment.address_step.modal.national_code")}</label>
                                        <span className="input-help">{t("payment.address_step.modal.national_code_description")}</span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="lable-checkbox public-group text-dir">
                                        <input type="checkbox" />
                                        <span>{t("payment.address_step.modal.foreign_checkbox")}</span>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="col-sm-12 text-dir">
                                    <label className="lable-checkbox public-group">
                                        <input type="checkbox" />
                                        <span>{t("payment.address_step.modal.receiver_checkbox")}</span>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="col-sm-12 text-dir">
                                    <label className="lable-checkbox public-group">
                                        <input type="checkbox" />
                                        <span>{t("payment.address_step.modal.send_friend_checkbox")}</span>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="w-100 row justify-content-center">
                                    <button type="button" className="btn-back-blue" onClick={() => { setShowMap(true) }}>
                                        <img src={edit_name_blue} width="32" height="32" alt="" className="pull-right" />
                                        <span>{t("payment.address_step.modal.select_address_map")}</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>




                    <div className="modal-footer justify-content-center">
                        <button type="button" className="btn btn-black" onClick={() => { setShowAddress(false) }}>{t("payment.address_step.modal.confirm_btn")}</button>
                    </div>
                </div>
            </Modal>


            <Modal
                visible={showMap}
                width={800}
                footer={[]}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{t("payment.address_step.modal.title")}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowMap(false) }}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>


                    <div className="modal-body">
                        <Map
                            center={

                                ["35.690655", "51.380518"]
                            }

                            zoom={zoom}
                            onzoomend={e => setZoom(e.target._zoom)}
                            style={{ width: "100%", height: "500px" }}

                            onclick={e => {
                                setPoint({ latitude: e.latlng.lat, longitude: e.latlng.lng })
                            }}

                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            // attribution="<a href=http://biithome.com>biit.home.com</a>"
                            />

                            <Marker
                                position={(point?.latitude && point?.longitude) ?
                                    [point?.latitude, point?.longitude] :
                                    ["", ""]}
                            >
                                {/* <Popup>موقعیت خانه حراجی</Popup> */}
                            </Marker>


                        </Map>
                    </div>




                    <div className="modal-footer justify-content-center">
                        <button type="button" className="btn btn-black" onClick={() => { setShowMap(false) }}>{t("payment.address_step.modal.confirm_btn")}</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default AddressStep