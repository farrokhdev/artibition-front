import React from 'react';
import { Modal } from 'antd';
import close_icon from '../../assets/img/clear.svg';
import { t } from 'i18next';

function ModalSetDimention(props) {

    const {setVisibleSetDimentionModal , visibleSetDimentionModal} = props;

    const handleClose = () => {
        setVisibleSetDimentionModal(false)
    }

    return (
        <React.Fragment>

        <Modal
            centered
            className="custom-dimention"
            visible={visibleSetDimentionModal}
            onOk={handleClose}
            onCancel={handleClose}
            width={800}
            footer={[]}
        >
                <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{t("filter-header.size.dimention.select-custom-size.title")}</h5>
                <button>
                    <span onClick={handleClose}  aria-hidden="true" aria-label="Close">
                        <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                    </span>
                </button>
            </div>
            <div className="modal-body">
                <div className="custom-dimention">
                    <div className="row row-inputs">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>{t("filter-header.size.dimention.select-custom-size.min-width")}</label>
                                <input type="text" className=" persian-num"/>
                            </div>
                            <span className="unit-dimention">{t("filter-header.size.dimention.select-custom-size.to")}</span>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>{t("filter-header.size.dimention.select-custom-size.max-width")}</label>
                                <input type="text" className=" persian-num"/>
                            </div>
                        </div>
                    </div>
                    <div className="row row-inputs">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>{t("filter-header.size.dimention.select-custom-size.min-length")}</label>
                                <input type="text" className=" persian-num"/>
                            </div>
                            <span className="unit-dimention">{t("filter-header.size.dimention.select-custom-size.to")}</span>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>{t("filter-header.size.dimention.select-custom-size.max-length")}</label>
                                <input type="text" className=" persian-num"/>
                            </div>
                        </div>
                    </div>
                    <div className="row row-inputs">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>{t("filter-header.size.dimention.select-custom-size.min-height")}</label>
                                <input type="text" className=" persian-num"/>
                            </div>
                            <span className="unit-dimention">{t("filter-header.size.dimention.select-custom-size.to")}</span>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>{t("filter-header.size.dimention.select-custom-size.max-length")}</label>
                                <input type="text" className=" persian-num"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-black">{t("filter-header.size.dimention.select-custom-size.submit")}</button>
            </div>
        </div>
        </Modal>
    </React.Fragment>

    )
}

export default ModalSetDimention;
