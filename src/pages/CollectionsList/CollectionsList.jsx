import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import Menu from '../../components/Menu/Menu';

import filter_icon from '../../assets/img/Filter.svg';
import clear_icon from '../../assets/img/clear.svg';
import search_icon from '../../assets/img/search.svg';
import jpaytrkase3 from '../../assets/img/artworks/jpaytrkase@3x.jpg';
import hnrpqkfiup3 from '../../assets/img/artworks/hnrpqkfiup@3x.jpg';
import nqliiocbif from '../../assets/img/artworks/nqliiocbif@3x.jpg';
import ucuurcufbm from '../../assets/img/artworks/ucuurcufbm@3x.jpg';
import gift_icon from '../../assets/img/gift.svg';
import artwork3 from '../../assets/img/artworks/3.jpg';
import rdbewaopdm3 from '../../assets/img/artworks/rdbewaopdm@3x.jpg';
import hezvtaokhv3 from '../../assets/img/artworks/hezvtaokhv@3x.jpg';
import ffhxzfmfyx3 from '../../assets/img/artworks/ffhxzfmfyx@3x.jpg';
import lhggrzlgoc3 from '../../assets/img/artworks/lhggrzlgoc@3x.jpg';
import hyxvpfinmx3 from '../../assets/img/artworks/hyxvpfinmx@3x.jpg';
import ayvglbkdfo3 from '../../assets/img/artworks/ayvglbkdfo@3x.jpg';
import gbazvsspbk3 from '../../assets/img/artworks/gbazvsspbk@3x.jpg';
import { Pagination } from 'antd';
import { t } from 'i18next';
import Collection from './Collection';
import apiServices from '../../utils/api.services';
import { ARTIST_CATEGORY } from '../../utils';
import QueryString from 'qs';
import { useTranslation } from 'react-i18next';

function CollectionsList() {


    const [artistCategory, setArtistCategory] = useState();
    const [params, setParams] = useState({
        // search: "",
        page: 1,
        // owner_id: ownerId,
  
    })
    const getArtistCategory = () => {
        apiServices.get(ARTIST_CATEGORY, QueryString.stringify(params))
            .then(res => {
                if (res.data) {
                    setArtistCategory(res.data.data)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }
    useEffect(() => {
        getArtistCategory()
    }, [params]);
    console.log("artistCategory",artistCategory)
    return (
        <>
            <div className="container mx-auto px-0 w-100 bg-white">
                <Header />
                <Menu />

                <div className="banner">
                    <div className="content-banner">
                        <h2 className="content-title">{t("artworkList.box-banner.title")}</h2>
                        <p className="txt-title">
                            {t("artworkList.box-banner.text")}
                        </p>
                        <div className="nl-input">
                            <input placeholder={t("artworkList.box-banner.placeholder")} />
                            <button type="button" className="btn-black">{t("artworkList.box-banner.btn")}</button>
                        </div>
                    </div>
                </div>



                <div className="default-content">
                    <div className="content-header">
                        <div className="d-flex box-dir-reverse">
                            <div className="col p-0">
                                <div className="d-flex justify-custom">
                                    <div className="form-group pull-left">
                                        <select className="form-control dir" id="sel1">
                                            <option className="text-dir">{t("artworkList.filter.last_update")}</option>
                                            <option className="text-dir">{t("artworkList.filter.sell")}</option>
                                            <option className="text-dir">{t("artworkList.filter.visite")}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-body">
                        {artistCategory?.results?.map((item) => 
                            <Collection collectionItem={item} getArtistCategory={getArtistCategory}/>
                        )}
                        {/* <Collection/>
                        <Collection/> */}
                        <div className=" row-pagination">
                            <Pagination total={50} />
                        </div>
                    </div>
                </div>


            </div>

            <Footer />
        </>
    )
}

export default CollectionsList;