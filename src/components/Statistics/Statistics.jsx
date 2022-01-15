import React from 'react';

import users_icon from '../../assets/img/users.svg';
import artist_icon from '../../assets/img/artist.jpg';
import art_icon from '../../assets/img/art.jpg';
import success_icon from '../../assets/img/success.svg';
import { t } from 'i18next';


function Statistics() {
    return (
        <div className="statistics col-md-8 col-md-offset-2">
            <div className="col-sm-3 col-xs-6">
                <img src={users_icon} width="64" height="64" alt="" className="img-responsive center-block"/>
                <div className="statistic-num persian-num">
                    <span className="counter">۸۵۶۴</span>
                    <i className="glyphicon glyphicon-plus"></i>
                    <span className="counter-unit">{t("text-statistics-users")}</span>
                </div>
            </div>
            <div className="col-sm-3 col-xs-6">
                <img src={artist_icon} width="64" height="64" alt="" className="img-responsive center-block"/>
                <div className="statistic-num persian-num">
                    <span className="counter">۶۵۰</span>
                    <i className="glyphicon glyphicon-plus"></i>
                    <span className="counter-unit">{t("text-statistics-artists")}</span>
                </div>
            </div>
            <div className="col-sm-3 col-xs-6">
                <img src={art_icon} width="64" height="64" alt="" className="img-responsive center-block"/>
                <div className="statistic-num persian-num">
                    <span className="counter">۲۹۴۰</span>
                    <i className="glyphicon glyphicon-plus"></i>
                    <span className="counter-unit">{t("text-statistics-artworks")}</span>
                </div>
            </div>
            <div className="col-sm-3 col-xs-6">
                <img src={success_icon} width="64" height="64" alt="" className="img-responsive center-block"/>
                <div className="statistic-num persian-num">
                    <span className="counter">۱۲۸</span>
                    <i className="glyphicon glyphicon-plus"></i>
                    <span className="counter-unit">{t("text-statistics-purchase")}</span>
                </div>
            </div>
        </div>
    )
}

export default Statistics
