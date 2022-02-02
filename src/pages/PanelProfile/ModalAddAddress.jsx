import React from 'react'
import { Modal } from 'antd';
import close_icon from '../../assets/img/clear.svg';
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Form, Input } from 'antd';
import APIService from "../../utils/api.services";
import { PROFILE } from "../../utils";
import { setProfile } from "../../redux/reducers/auth/auth.actions";

function ModalAddAddress({ setVisibleAddAddress, visibleAddAddress }) {

    const handleClose = () => {
        setVisibleAddAddress(false)
    }

    console.log(visibleAddAddress, "visi");

    return (
        <React.Fragment>

            <Modal
                centered
                className=" mt-5 pt-5"
                visible={visibleAddAddress}
                onOk={handleClose}
                onCancel={handleClose}
                width={600}
                footer={[]}
            >
                <div class="modal-content mt-5">
                    <div class="modal-header">
                        <h5 class="modal-title mx-auto" id="exampleModalLabel">افزودن آدرس جدید</h5>
                        <span onClick={handleClose} aria-hidden="true" aria-label="Close">
                            <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                        </span>
                    </div>
                    <div class="modal-body">
                        <div class="enter-address">
                            <div class="row-addaddress">
                                <div class="col-xs-12">
                                    <h3 class="addressform-title text-right">اطلاعات آدرس</h3>
                                </div>
                            </div>
                            <form>
                                <div class="col-sm-6">
                                    <div class="public-group">
                                        <select class="input-public" required>
                                            <option>تهران</option>
                                            <option>البرز</option>
                                            <option>قزوین</option>
                                        </select>
                                        <label class="lable-public">استان</label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="public-group">
                                        <select class="input-public">
                                            <option>پاکدشت</option>
                                            <option>ورامین</option>
                                            <option>شمیرانات</option>
                                        </select>
                                        <label class="lable-public">شهر</label>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="public-group">
                                        <input class="form-control input-public " required
                                            placeholder=""
                                            value="" />
                                        <label class="lable-public">کد پستی</label>
                                        <span class="input-help">کد پستی می‌بایست ۱۰ رقم و بدون خط تیره باشد</span>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-black">ثبت و تأیید آدرس</button>
                    </div>
                </div>

            </Modal>
        </React.Fragment>
    );
}

export default ModalAddAddress;
