import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import HanLogo from '../../assets/img/gallery/hanlogo.jpg'
import { GALLERY_LIST } from '../../utils';
import apiServices from '../../utils/api.services';
import queryString from 'query-string'
import { DEFAULT_URL_IMAGE } from '../../utils/defaultImage';


function MainContent() {

    const { t, i18n } = useTranslation();

    const pages = []
    const [search, setSearch] = useState();
    const [galleryList, setGalleryList] = useState();
    const [params, setParams] = useState({
        search: "",
        page: 1,

    })
    const getGalleryList = () => {
        apiServices.get(GALLERY_LIST, queryString.stringify(params))
            .then(res => {
                if (res.data) {
                    setGalleryList(res.data.data)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    // for (let i = 1; i < (galleryList.results.length / galleryList?.page_size); i++) {

    useEffect(() => {
        getGalleryList()
    }, [params]);


    const changePages = (value)=>{
        setParams({...params,page:value})
    }

    for (let i = 1; i < ([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].length / galleryList?.page_size); i++) {
        pages.push(<li className={galleryList.current_page_no === i ? "active" : null} onClick={()=>changePages(i)}><Link to="">
            
            {i}</Link></li>)
    }
    
   
    console.log("gallery", galleryList)
    return (
        <div className="container">
            <div className="banner">
                <div className="content-banner">
                    <h2 className="content-title">{t("artworkList.box-banner.title")}</h2>
                    <p className="txt-title">{t("artworkList.box-banner.text")}</p>
                    <div className="nl-input">
                        <input placeholder={t("artworkList.box-banner.placeholder")} onChange={e => setSearch(e.target.value)} />
                        <button type="button" className="btn-black" onClick={() => setParams(state => ({ ...state, search: search }))}>{t("artworkList.box-banner.btn")}</button>
                    </div>
                </div>
            </div>
            <div className="default-content dir">
                <div className="content-header">
                    <div className="row">
                        <div className="col-sm-3 col-xs-6">
                        </div>
                        <div className="col-xs-6 col-sm-offset-3 m-dir-rev-auto">
                            <div className="form-group pull-dir-rev">
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
                            {galleryList?.results?.map((gallery) => {
                                return (
                                    <div className="col-md-3 col-sm-4 col-xs-6">
                                        <Link to={`/site/gallery-introduction/?id=${gallery?.id}`} className="gallery-logo-block">
                                            <div className="gallery-logo-img">
                                                <img src={gallery?.logo ? gallery?.logo?.exact_url : DEFAULT_URL_IMAGE} width="286"  style={{height:180}} alt=""
                                                    className="img-responsive center-block" />
                                            </div>
                                            <h3 className="fontbold19">
                                                {i18n.language === 'fa-IR' ?
                                                    gallery?.translations?.fa?.title
                                                    : gallery?.translations?.en?.title
                                                }
                                            </h3>
                                            {i18n.language === 'fa-IR' ?
                                                <span className="font-span">{gallery?.locations && gallery?.locations[0]?.translations?.fa?.city}</span> :
                                                <span className="font-span">{gallery?.locations && gallery?.locations[0]?.translations?.en?.city}</span>}
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* {galleryList?.results?.length > galleryList?.count && ( */}
                        
                    <div className="row-pagination">
                        <ul className="pagination">
                            {pages}
                        </ul>
                    </div>
                    {/* )} */}
                </div>
            </div>
        </div>
    )
}

export default MainContent; 