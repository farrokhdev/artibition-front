import React, { useState, useEffect } from 'react';
import felsh_left from '../../assets/img/felsh-left.png';
import CreateGallery from '../GalleryPanelMyGallery/CreateGallery';
import apiServices from '../../utils/api.services';
import { GALLERY_COUNT_PENDING } from '../../utils';
import { DEFAULT_URL_IMAGE } from '../../utils/defaultImage';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { galleryId, galleryProfile } from '../../redux/reducers/Gallery/gallery.actions';
import { setProfile } from '../../redux/reducers/auth/auth.actions';


function BoxGallery() {

    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [galleryListCount, setGalleryListCount] = useState([]);

    const getGallryCount = () => {
        apiServices.get(GALLERY_COUNT_PENDING, "")
            .then(res => {
                setGalleryListCount(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const goToGalleryProfile = (gallery) => {
        dispatch(galleryId(gallery?.id))
        dispatch(galleryProfile(gallery))
        dispatch(setProfile({ roles: "gallery" }))
        navigate("/panel/orders")
    }

    useEffect(() => {
        getGallryCount()
    }, []);

    return (
        <div className="row box-dir-reverse dir">
            {galleryListCount && galleryListCount?.map((item) => {
                return (
                    <div className="col-lg-8">
                        <div className="d-flex box-dir-reverse box box-1">
                            <div className="col">
                                <div className=" pull-dir">
                                    <div className="d-flex box-dir-reverse">
                                        <img src={item?.gallery?.logo?.exact_url ? item?.gallery?.logo?.exact_url : DEFAULT_URL_IMAGE} width="1079" height="1079" alt=""
                                            className="img-responsive panel-pink-logo pull-right" />
                                        <span className="bolder-title">{i18n.language === "fa-IR" ? item?.gallery?.translations?.fa?.title : item?.gallery?.translations?.en?.title}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pull-dir">
                                <span className="pinkcolor pink-order"><span className="persian-num">{item?.active_orders}</span>{t("content-panel-dashboard.box_gallery.order")}</span>
                                <a className="btn-box-1 btn-pink pull-left" onClick={() => { goToGalleryProfile(item?.gallery) }}>
                                    <img src={felsh_left} width="16" height="16" className="center-block" />
                                </a>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                )
            })}
            <div className="col-lg-4">
                <CreateGallery />
            </div>
        </div>
    )
}

export default BoxGallery
