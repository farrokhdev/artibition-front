import React from 'react'
import { Modal } from 'antd';
import close_icon from '../../assets/img/clear.svg';

function ModalEditProfile(props) {

    const {setVisibleModalEditProfile , visibleModalEditProfile} = props;

    const handleClose = () => {
        setVisibleModalEditProfile(false)
    }
    return (
        <React.Fragment>

        <Modal
            centered
            className=""
            visible={visibleModalEditProfile}
            onOk={handleClose}
            onCancel={handleClose}
            width={600}
            footer={[]}
            // header={[]}
        >
                       <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">ویرایش اطلاعات</h5>
                    <button>
                        <span  onClick={handleClose}  aria-hidden="true" aria-label="Close">
                            <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                        </span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="col-sm-6">
                        <div className="public-group">
                            <input id="info-1" className="form-control input-public " required placeholder=""
                                   value="آیدین آغداشلو"/>
                            <label for="info-1" className="lable-public">نام و نام خانوادگی</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="public-group">
                            <input id="info-2" className="form-control input-public persian-num " placeholder=""
                                   value="09124048563"/>
                            <label for="info-2" className="lable-public">شماره همراه</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="public-group">
                            <input id="info-3" className="form-control input-public persian-num " placeholder=""
                                   value="0010854785"/>
                            <label for="info-3" className="lable-public">کد ملی</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="public-group">
                            <input id="info-4" className="form-control input-public en-lang " placeholder=""
                                   value="Karimi.hirad@gmail.com"/>
                            <label for="info-4" className="lable-public">آدرس ایمیل</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="public-group">
                            <input id="info-5" className="form-control input-public persian-num " required placeholder=""
                                   value=""/>
                            <label for="info-5" className="lable-public">تاریخ تولد</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="public-group">
                            <input id="info-6" className="form-control input-public persian-num " required placeholder=""
                                   value=""/>
                            <label for="info-6" className="lable-public">نام کاربری</label>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-black">ثبت تغییرات</button>
                </div>
            </div> 
  
        </Modal>
    </React.Fragment>
    )
}

export default ModalEditProfile
