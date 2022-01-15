import React from "react";
import revenue from "../../assets/img/my_revenue.svg"


function MyRevenue(){
    return(
        <div className="box artistpanel-7">
            <div className="public-header">
                <h2 className="default-title text-dir">درآمد من</h2>
            </div>
            <div className="cash-state">
                <img src={revenue} width="64" height="64" alt="" className="center-block"/>
                <span className="persian-num">۴,۵۰۰,۰۰۰</span>
                <span>تومان</span>
                <button type="button" className="btn-back-blue">جزئیات
                    <i className="glyphicon glyphicon-chevron-left"></i>
                </button>
            </div>
        </div>
    )
}

export default MyRevenue