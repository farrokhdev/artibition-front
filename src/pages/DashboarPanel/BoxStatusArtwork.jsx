import React, { useEffect, useState } from 'react';
import { t } from 'i18next';

import new_artwork from '../../assets/img/new-artwork.png';
import add_icon from '../../assets/img/add.png';
import apiServices from '../../utils/api.services';
import { PRODUCTS } from '../../utils';
import { useSelector } from 'react-redux';
import queryString from 'query-string';
import { Link } from 'react-router-dom';


function BoxStatusArtwork() {

    const { id } = useSelector((state) => state.authReducer)
    const [products, setProducts] = useState({});
    const [params, setParams] = useState({
        owner_id: id,
        status: "",
        page_size: 99999,
    });


    const countStatus = {
        "pending": 0,
        "pending edition": 0,
        "rejected": 0,
        "active": 0
    }
    

    useEffect(() => {
        apiServices.get(PRODUCTS, queryString.stringify(params))
            .then(res => {
                res.data.data.results.map((item) => {
                    switch (item.status) {
                        case "pending":
                            countStatus.pending += 1
                            break;
                        case "active":
                            countStatus.active += 1
                            break;
                        case "rejected":
                            countStatus.rejected += 1
                            break;
                        case "pending edition":
                            countStatus['pending edition'] += 1
                            break;
                        default:
                            break;
                    }

                })
                
                setProducts(countStatus)
                // console.log("countStatus===>" , countStatus); 
            })
    }, []);
    return (
        <div className="box artistpanel-1">
            <div className="d-blcok d-lg-flex box-dir-reverse ">
                <div className="col-12 col-md-3 px-0 w-100">
                    <img src={new_artwork} width="40" height="30" alt="new-artwork" className="center-block" />
                    <Link
                     to={"/panel/add-artwork"}
                     state={{ from: "/panel/dashboard" }}
                    // to="/panel/add-artwork"
                    >
                        <button type="button" className="d-flex align-items-center justify-content-center box-dir-reverse btn-outline-blue">
                            <img src={add_icon} width="12" height="12" alt="add-icon" className="mx-2" />
                            <span>{t("content-panel-dashboard.box_status.btn")}</span>
                        </button>
                    </Link>
                </div>
                <div className="col">
                    <div className="col col-md-3 px-0">
                        <div className="status-block">
                            <span className="persian-num greencolor font24">{products?.active}</span>
                            <span className="graycolor font17">{t("content-panel-dashboard.box_status.approved")}</span>
                            <a href="#" className="btn-back-blue">{t("content-panel-dashboard.box_status.veiw")}</a>
                        </div>
                    </div>
                    <div className="col col-md-3 px-0">
                        <div className="status-block">
                            <span className="persian-num font24">{products['pending edition']}</span>
                            <span className="graycolor font17">{t("content-panel-dashboard.box_status.modification")}</span>
                            <a href="#" className="btn-back-blue">{t("content-panel-dashboard.box_status.veiw")}</a>
                        </div>
                    </div>
                    <div className="col col-md-3 px-0">
                        <div className="status-block">
                            <span className="persian-num orangecolor font24">{products?.pending}</span>
                            <span className="graycolor font17">{t("content-panel-dashboard.box_status.pending")}</span>
                            <a href="#" className="btn-back-blue">{t("content-panel-dashboard.box_status.veiw")}</a>
                        </div>
                    </div>
                    <div className="col col-md-3 px-0 ">
                        <div className="status-block">
                            <span className="persian-num pinkcolor font24">{products?.rejected}</span>
                            <span className="graycolor font17">{t("content-panel-dashboard.box_status.not_approved")}</span>
                            <a href="#" className="btn-back-blue">{t("content-panel-dashboard.box_status.veiw")}</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BoxStatusArtwork
