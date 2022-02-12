import React from 'react';
import { Modal } from 'antd';
import close_icon from '../../assets/img/clear.svg';
import { Form, Input } from "antd";
import { t } from 'i18next';
import apiServices from '../../utils/api.services';
import { WALLET_TRANSACTIONS_REQUEST } from '../../utils';

function ModalWithdrawal(props) {


    const { visibleIncreaseModal, setVisibleIncreaseModal, wallet } = props

    const [form] = Form.useForm();

    const handleClose = () => {
        setVisibleIncreaseModal(false)
    }

    const onFinish = (values) => {
        let payload = {
            "amount": values?.amount,
            "type": "deposit"
        }
        apiServices.post(WALLET_TRANSACTIONS_REQUEST, payload)
            .then(res => {
                setTimeout(() => {
                    setVisibleIncreaseModal(false)
                }, 500);
            })
            .catch(err => {
                console.log(err);
            })
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

                <Form
                    className=""
                    form={form}
                    onFinish={onFinish}
                >

                    <div className="modal-content px-5">
                        <div className="d-flex justify-content-end">
                            <button>
                                <span onClick={handleClose} aria-hidden="true" aria-label="Close">
                                    <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                                </span>
                            </button>
                        </div>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("content-panel-wallet.inventory.increasse_title_modal")}</h5>
                        </div>
                        <div className="modal-body">
                            <div className="cachein-wallet">
                                <div className="wallet-row">
                                    <div className="d-flex align-items-center justify-content-center box-dir-reverse">
                                        <span className="default-title">{t("content-panel-wallet.inventory.modal_inventory")}</span>
                                        <div className="d-flex box-dir-reverse cash-state align-items-center">
                                            <span className="persian-num mx-2">{wallet?.total_balance ? wallet?.total_balance : "0"}</span>
                                            <span>{t("toman")}</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="public-group">

                                    <Form.Item
                                        className="w-100"
                                        name="amount"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Input
                                            type="number"
                                            id="info-216"
                                            className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                            placeholder={t("content-panel-wallet.inventory.placeholder_input")}
                                        />

                                    </Form.Item>
                                    <span className="price-unit" style={{ bottom: '2.2rem' }}>{t("toman")}</span>
                                </div>
                                {/* <span className="aligncenter center-block">{t("or")}</span> */}
                                {/* <div className="content-type mrgt40">
                                            <div className="col-sm-6">
                                                <label className="d-flex box-dir-reverse container-radio pull-dir">
                                                    <span className="persian-num">1,000,000</span>
                                                    <span className="">{t("toman")}</span>
                                                    <input type="radio" checked="checked" name="radio" />
                                                    <span className="checkmark-radio"></span>
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="d-flex box-dir-reverse container-radio pull-dir">
                                                    <span className="persian-num">1,500,000</span>
                                                    <span className="">{t("toman")}</span>
                                                    <input type="radio" name="radio" />
                                                    <span className="checkmark-radio"></span>
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="d-flex box-dir-reverse container-radio pull-dir">
                                                    <span className="persian-num">2,000,000</span>
                                                    <span className="">{t("toman")}</span>
                                                    <input type="radio" name="radio" />
                                                    <span className="checkmark-radio"></span>
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="d-flex box-dir-reverse container-radio pull-dir">
                                                    <span className="persian-num">2,500,000</span>
                                                    <span className="">{t("toman")}</span>
                                                    <input type="radio" name="radio" />
                                                    <span className="checkmark-radio"></span>
                                                </label>
                                            </div>
                                        </div> */}
                            </div>
                        </div>
                        <div className="d-flex justify-content-center modal-footer">
                            <button htmlType="submit" className="btn btn-black">{t("content-panel-wallet.inventory.pay")}</button>
                        </div>
                    </div>
                </Form>
            </Modal>
        </React.Fragment>
    )
}

export default ModalWithdrawal