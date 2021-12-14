import React from 'react';
import { Modal } from 'antd';
import close_icon from '../../assets/img/clear.svg';
import { Form, Input} from "antd";
import { t } from 'i18next';

function ModalWithdrawal(props) {


    const {visibleIncreaseModal , setVisibleIncreaseModal} = props
    const [form] = Form.useForm();

    const handleClose = ()=> {
        setVisibleIncreaseModal(false)
    }

    const onFinish = (values) =>{

    }

return (
<React.Fragment>

    <Modal 
        centered 
        className="" 
        visible={visibleIncreaseModal} 
        onOk={handleClose} 
        onCancel={handleClose} 
        width={700}
        footer={[]} 
     >
        <div className="modal-content px-5">
            <div className="d-flex justify-content-end">
                <button>
                    <span onClick={handleClose} aria-hidden="true" aria-label="Close">
                        <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                    </span>
                </button>
            </div>
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{t("content-panel-wallet.inventory.increasse_title_modal")}</h5>
            </div>
            <div class="modal-body">
                <div class="cachein-wallet">
                <div class="wallet-row">
                        <div className="d-flex align-items-center justify-content-center box-dir-reverse">
                            <span class="default-title">{t("content-panel-wallet.inventory.modal_inventory")}</span>
                            <div class="d-flex box-dir-reverse cash-state align-items-center">
                                <span class="persian-num mx-2">۸۶۰,۰۰۰</span>
                                <span>{t("toman")}</span>
                            </div>
                        </div>
                    </div>
                    <div class="public-group">
                        <input class="form-control input-public persian-num "
                            placeholder={t("content-panel-wallet.inventory.placeholder_input")} />
                        <span class="price-unit">{t("toman")}</span>
                    </div>
                    <span class="aligncenter center-block">{t("or")}</span>
                    <div class="content-type mrgt40">
                        <div class="col-sm-6">
                            <label class="d-flex box-dir-reverse container-radio pull-dir">
                                <span class="persian-num">1,000,000</span>
                                <span class="">{t("toman")}</span>
                                <input type="radio" checked="checked" name="radio"/>
                                <span class="checkmark-radio"></span>
                            </label>
                        </div>
                        <div class="col-sm-6">
                            <label class="d-flex box-dir-reverse container-radio pull-dir">
                                <span class="persian-num">1,500,000</span>
                                <span class="">{t("toman")}</span>
                                <input type="radio" name="radio"/>
                                <span class="checkmark-radio"></span>
                            </label>
                        </div>
                        <div class="col-sm-6">
                            <label class="d-flex box-dir-reverse container-radio pull-dir">
                                <span class="persian-num">2,000,000</span>
                                <span class="">{t("toman")}</span>
                                <input type="radio" name="radio"/>
                                <span class="checkmark-radio"></span>
                            </label>
                        </div>
                        <div class="col-sm-6">
                            <label class="d-flex box-dir-reverse container-radio pull-dir">
                                <span class="persian-num">2,500,000</span>
                                <span class="">{t("toman")}</span>
                                <input type="radio" name="radio"/>
                                <span class="checkmark-radio"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center modal-footer">
                <button type="button" class="btn btn-black">{t("content-panel-wallet.inventory.pay")}</button>
            </div>
        </div>

    </Modal>
</React.Fragment>
)
}

export default ModalWithdrawal