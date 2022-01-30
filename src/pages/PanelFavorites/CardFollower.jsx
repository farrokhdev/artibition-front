import React from 'react';
import { t } from 'i18next';
import artist from '../../assets/img/Aydin_Aghdashloo_04@3x.jpg';
import { GetLanguage } from '../../utils/utils'
import { handleShowImage } from '../../utils/showImageProduct';
import { DEFAULT_URL_IMAGE } from '../../utils/defaultImage';


function CardFollower({follower}) {
    const Language = GetLanguage();
    return (
        <div className="col-lg-2 col-md-3 col-xs-6">
            <div className="artist-avatar">
                <img src={follower ? handleShowImage(follower) : DEFAULT_URL_IMAGE} width="192" height="192" className="img-responsive"
                    alt="آیدین آغداشلو" />
                <h3 className="avatar-name">{Language === 'fa-IR' ? follower?.translations?.fa?.nick_name : follower?.translations?.en?.nick_name}</h3>
                <button type="button" className="btn-follow">{t("artwork.follow")}</button>
            </div>
        </div>
    )
}

export default CardFollower
