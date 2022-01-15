import React from "react";
import editName from '../../assets/img/edit_name.svg';


function ContractStatus() {
    return (
        <div className="box artistpanel-2">
            <div className="row box-dir-reverse">
                <div className="col-xs-6">
                    <div className="status-step passed">
                        <span className="step-title text-dir">وضعیت کاربری</span>
                        <span className="graycolor text-dir">هنرمند تأیید شده</span>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="status-step passed">
                        <span className="step-title text-dir">وضعیت قرارداد</span>
                        <span className="graycolor text-dir">تأیید شده</span>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-xs-6">
                    <div className="status-step failed">
                        <span className="step-title text-dir box-dir-reverse d-flex"> آدرس ایمیل
                            <a href="#">
                                <img src={editName} width="26" height="26" alt="" />
                            </a>
                        </span>
                        <span className="graycolor text-dir">تأیید نشده</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContractStatus