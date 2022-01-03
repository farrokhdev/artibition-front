import React from 'react';

function CardFollower() {
    return (
        <div className="col-lg-2 col-md-3 col-xs-6">
            <div className="artist-avatar">
                <img src="img/Aydin_Aghdashloo_04@3x.jpg" width="192" height="192" className="img-responsive"
                    alt="آیدین آغداشلو" />
                <h3 className="avatar-name">پرویز تناولی</h3>
                <button type="button" className="btn-follow">{t("artwork.follow")}</button>
            </div>
        </div>
    )
}

export default CardFollower
