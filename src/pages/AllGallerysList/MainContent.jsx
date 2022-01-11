import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import HanLogo from '../../assets/img/gallery/hanlogo.jpg'


function MainContent() {

    const { t, i18n } = useTranslation();


    return (
        <div className="container">
            <div className="banner">
                <div className="content-banner">
                    <h2 className="content-title">{t("artworkList.box-banner.title")}</h2>
                    <p className="txt-title">{t("artworkList.box-banner.text")}</p>
                    <div className="nl-input">
                        <input placeholder={t("artworkList.box-banner.placeholder")} />
                        <button type="button" className="btn-black">{t("artworkList.box-banner.btn")}</button>
                    </div>
                </div>
            </div>
            <div className="default-content">
                <div className="content-header">
                    <div className="row">
                        <div className="col-sm-3 col-xs-6">
                        </div>
                        <div className="col-xs-6 col-sm-offset-3 ml-auto">
                            <div className="form-group pull-left">
                                <select className="form-control" id="sel1">
                                    <option>{t("select_province.all_province")}</option>
                                    <option>{t("select_province.tehran_city")}</option>
                                    <option>{t("select_province.other_city")}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body">

                    <div className="gallery-name-list">
                        <div className="row">
                            {[1, 2, 3, 4, 5, 6, 7]?.map((gallery) => {
                                return (

                                    <div className="col-md-3 col-sm-4 col-xs-6">
                                        <Link to="" className="gallery-logo-block">
                                            <div className="gallery-logo-img">
                                                <img src={HanLogo} width="110" height="110" alt=""
                                                    className="img-responsive center-block" />
                                            </div>
                                                <h3 className="fontbold19">گالری آرتیبیشن</h3>
                                                <span className="font-span">تهران</span>
                                        </Link>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className="row-pagination">
                        <ul className="pagination">
                            <li><Link to="/">1</Link></li>
                            <li className="active"><Link to="/">2</Link></li>
                            <li><Link to="/">3</Link></li>
                            <li><Link to="/">4</Link></li>
                            <li><Link to="/">5</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent; 