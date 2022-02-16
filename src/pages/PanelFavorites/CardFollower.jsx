import React, { useState } from 'react';
import { t } from 'i18next';
import { GetLanguage } from '../../utils/utils'
import { DEFAULT_URL_IMAGE } from '../../utils/defaultImage';
import { follow } from '../../utils/utils';


function CardFollower({ followers, getFollowers }) {
    const Language = GetLanguage();

    const callBack = () => {
        getFollowers()
      }
    
    return (
        <div className="col-lg-2 col-md-3 col-xs-6">
            <div className="artist-avatar">
                <img src={followers?.bg_image ? followers?.bg_image?.exact_url : DEFAULT_URL_IMAGE} width="192" height="192" className="img-responsive"
                    alt="آیدین آغداشلو" />
                <h3 className="avatar-name">{Language === 'fa-IR' ? followers?.owner?.translations?.fa?.first_name + " " + followers?.owner?.translations?.fa?.last_name  : followers?.owner?.translations?.en?.first_name + " " + followers?.owner?.translations?.en?.last_name }</h3>
                <button type="button" 
                className={"btn-follow " + (followers?.likes ? "btn-follow:hover" : "")}
                  onClick={() =>
                    follow({
                        content: "artist",
                        activity: "following",
                        object_id: followers?.id,
                        action: followers?.likes,
                        callBack
                    })
                }
              
                 
                 >{t("artwork.follow")}</button>
            </div>
        </div>
    )
}

export default CardFollower
