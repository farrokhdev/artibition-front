import React from 'react';
import { t } from 'i18next';

import felsh_left from '../../assets/img/felsh-left.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BoxesInfo({ items }) {

    const { roles } = useSelector((state) => state.authReducer)
    const getUserRole = () => {
        let userRole = "user"
        if (typeof roles === "string") {
            return roles
        } else {
            if (roles && roles.length > 0) {
                if (roles.includes("seller")) {
                    userRole = "seller"
                }
                if (roles.includes("artist")) {
                    userRole = "artist"
                }
            } else {
                userRole = 'user'
            }
        }
        return userRole
    }


    console.log(getUserRole());
    return (
        <div className="row dir">
            {getUserRole() === "artist" &&
                <>
                    <div className="col-md-4">
                        <div className="box box-1">
                            <div className="pull-dir">
                                <h2 className="pinkcolor text-dir">{t('content-panel-profile.info-box.seller.title')}</h2>
                                <p className="text-dir text-success">{t('content-panel-profile.info-box.artists.text-success')}</p>
                            </div>

                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box box-1">
                            <div className="pull-dir">
                                <h2 className="purplecolor text-dir">{t('content-panel-profile.info-box.artists.title')}</h2>
                                <p className="text-dir text-success">{t('content-panel-profile.info-box.artists.text-success')}</p>
                            </div>


                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="box box-1">
                            <div className="pull-dir">
                                <h2 className="greencolor text-dir">{t('content-panel-profile.info-box.register.title')}</h2>
                                <p className="text-dir">{t('content-panel-profile.info-box.register.text')}</p>
                            </div>
                            <Link to="/panel/gallery-info" className="btn-box-1 btn-green pull-left">
                                <img src={felsh_left} width="16" height="16" className="center-block" />
                            </Link>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </>
            }
            {getUserRole() === "seller" &&
                <>
                    <div className="col-md-4">
                        <div className="box box-1">
                            <div className="pull-dir">
                                <h2 className="pinkcolor text-dir">{t('content-panel-profile.info-box.seller.title')}</h2>
                                <p className="text-dir text-success">{t('content-panel-profile.info-box.artists.text-success')}</p>
                            </div>

                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box box-1">
                            <div className="pull-dir">
                                <h2 className="purplecolor text-dir">{t('content-panel-profile.info-box.artists.title')}</h2>
                                <p className="text-dir">{t('content-panel-profile.info-box.artists.text')}</p>
                            </div>

                            {items?.is_approved ?
                                <Link to="/panel/registration-artists" className=" btn-box-1 btn-purple pull-left">
                                    <img src={felsh_left} width="16" height="16" className="center-block" />
                                </Link>
                                :
                                <Link to="" className=" btn-box-1 btn-purple pull-left">
                                    <img src={felsh_left} width="16" height="16" className="center-block" />
                                </Link>
                            }
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="box box-1">
                            <div className="pull-dir">
                                <h2 className="greencolor text-dir">{t('content-panel-profile.info-box.register.title')}</h2>
                                <p className="text-dir">{t('content-panel-profile.info-box.register.text')}</p>
                            </div>
                            <Link to="/panel/gallery-info" className="btn-box-1 btn-green pull-left">
                                <img src={felsh_left} width="16" height="16" className="center-block" />
                            </Link>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </>
            }
            {getUserRole() === "user" &&
                <>
                    <div className="col-md-4">
                        <div className="box box-1">
                            <div className="pull-dir">
                                <h2 className="pinkcolor text-dir">{t('content-panel-profile.info-box.seller.title')}</h2>
                                <p className="text-dir">{t('content-panel-profile.info-box.seller.text')}</p>
                            </div>
                            <Link to="/panel/become-seller" className="btn-box-1 btn-pink pull-left">
                                <img src={felsh_left} width="16" height="16" className="center-block" />
                            </Link>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box box-1">
                            <div className="pull-dir">
                                <h2 className="purplecolor text-dir">{t('content-panel-profile.info-box.artists.title')}</h2>
                                <p className="text-dir">{t('content-panel-profile.info-box.artists.text')}</p>
                            </div>

                            {items?.is_approved ?
                                <Link to="/panel/registration-artists" className=" btn-box-1 btn-purple pull-left">
                                    <img src={felsh_left} width="16" height="16" className="center-block" />
                                </Link>
                                :
                                <Link to="" className=" btn-box-1 btn-purple pull-left">
                                    <img src={felsh_left} width="16" height="16" className="center-block" />
                                </Link>
                            }
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="box box-1">
                            <div className="pull-dir">
                                <h2 className="greencolor text-dir">{t('content-panel-profile.info-box.register.title')}</h2>
                                <p className="text-dir">{t('content-panel-profile.info-box.register.text')}</p>
                            </div>
                            <Link to="/panel/gallery-info" className="btn-box-1 btn-green pull-left">
                                <img src={felsh_left} width="16" height="16" className="center-block" />
                            </Link>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default BoxesInfo
