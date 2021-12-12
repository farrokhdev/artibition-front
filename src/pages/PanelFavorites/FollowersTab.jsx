import React from 'react';

import artist from '../../assets/img/Aydin_Aghdashloo_04@3x.jpg';
import artist1 from '../../assets/img/artist-1.jpg';
import artist2 from '../../assets/img/artist-2.jpg';
import artist3 from '../../assets/img/artist-3.jpg';
import artist4 from '../../assets/img/artist-4.jpg';

function FollowersTab() {
return (
    <div className="row">
        <div className="col-lg-2 col-md-3 col-xs-6">
            <div className="artist-avatar">
                <img src={artist}  width="408" height="408" className="img-responsive"
                    alt="آیدین آغداشلو" />
                <h3 className="avatar-name">پرویز تناولی</h3>
                <button type="button" className="btn-follow">دنبال کردن</button>
            </div>
        </div>
        <div className="col-lg-2 col-md-3 col-xs-6">
            <div className="artist-avatar">
                <img src={artist1} width="408" height="408" className="img-responsive" alt="آیدین آغداشلو" />
                <h3 className="avatar-name">پرویز تناولی</h3>
                <button type="button" className="btn-follow">دنبال کردن</button>
            </div>
        </div>
        <div className="col-lg-2 col-md-3 col-xs-6">
            <div className="artist-avatar">
                <img src={artist2} width="408" height="408" className="img-responsive" alt="آیدین آغداشلو" />
                <h3 className="avatar-name">پرویز تناولی</h3>
                <button type="button" className="btn-follow followed">دنبال شده</button>

            </div>
        </div>
        <div className="col-lg-2 col-md-3 col-xs-6">
            <div className="artist-avatar">
                <img src={artist3} width="408" height="408" className="img-responsive" alt="آیدین آغداشلو" />
                <h3 className="avatar-name">پرویز تناولی</h3>
                <button type="button" className="btn-follow followed">دنبال شده</button>
            </div>
        </div>
        <div className="col-lg-2 col-md-3 col-xs-6">
            <div className="artist-avatar">
                <img src={artist4} width="192" height="192" className="img-responsive"
                    alt="آیدین آغداشلو" />
                <h3 className="avatar-name">پرویز تناولی</h3>
                <button type="button" className="btn-follow followed">دنبال شده</button>
            </div>
        </div>
        <div className="col-lg-2 col-md-3 col-xs-6">
            <div className="artist-avatar">
                <img src={artist} width="192" height="192" className="img-responsive"
                    alt="آیدین آغداشلو" />
                <h3 className="avatar-name">پرویز تناولی</h3>
                <button type="button" className="btn-follow followed">دنبال شده</button>
            </div>
        </div>
        <div className="col-lg-2 col-md-3 col-xs-6">
            <div className="artist-avatar">
                <img src={artist1} width="192" height="192" className="img-responsive"
                    alt="آیدین آغداشلو" />
                <h3 className="avatar-name">پرویز تناولی</h3>
                <button type="button" className="btn-follow followed">دنبال شده</button>
            </div>
        </div>
        <div className="col-lg-2 col-md-3 col-xs-6">
            <div className="artist-avatar">
                <img src={artist2} width="192" height="192" className="img-responsive"
                    alt="آیدین آغداشلو" />
                <h3 className="avatar-name">پرویز تناولی</h3>
                <button type="button" className="btn-follow followed">دنبال شده</button>
            </div>
        </div>
    </div>
    )
}

export default FollowersTab