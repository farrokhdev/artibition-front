import React from 'react';
import logo from '../../assets/img/logo.svg';


function BasketFooterPanel() {
    return (
        <div className=" box basket-footer ">
            <div className="d-flex custom-container justify-content-between box-dir-reverse">
                <div className="col-sm-9">
                    <div className="d-flex box-dir-reverse">
                        <span>در صورت ایجاد هر گونه سوال با ما تماس بگیرید:</span>
                        <span class="persian-num">۲۲۵۳۸ ۲۲۹ ۰۲۱</span>
                    </div>
                </div>
                <div className="col-sm-3 hidden-xs">
                    <div className="d-flex justify-content-end w-100">
                        <img src={logo} width="240" height="62" alt="لوگو-آرتیبیشن"
                            className="img-responsive pull-left"/>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}

export default BasketFooterPanel
