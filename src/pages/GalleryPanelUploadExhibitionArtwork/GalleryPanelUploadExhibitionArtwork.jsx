import React, { useEffect, useState } from "react";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import i18next, { t } from 'i18next';
import BasketFooterPanelNoBox from "../GalleryPanelSelectArtworkSource/BasketFooterPanelNoBox";
import classnames from 'classnames';
import { useDispatch, useSelector } from "react-redux";


import Aydin_Aghdashloo from '../../assets/img/Aydin_Aghdashloo_04@3x.jpg'
import add from '../../assets/img/add.png'
import artwork from '../../assets/img/artworks/hnrpqkfiup@3x.jpg'
import add_white from '../../assets/img/add-white@2x.png'
import cloude_upload_icon from '../../assets/img/cloud-upload.svg';
import edit_name_blue from '../../assets/img/edit_name_blue.svg'
import artwork10 from '../../assets/img/artworks/hnrpqkfiup@3x.jpg'
import edit_name from '../../assets/img/edit_name.svg'
import change_icon from '../../assets/img/change.png'
import apiServices from "../../utils/api.services";
import { ARTIST_BY_GALLERY, EXHIBITION, EXHIBITION_PRODUCT, GALLERY_ARTISTS } from "../../utils";
import { Form, Input, message, Modal, Button, Spin } from "antd";
import { GetLanguage } from "../../utils/utils";
import MultipleUpload from "../../components/MultiUpload/MultiUpload";
import OneUpload from "../../components/OneUpload/OneUpload";
import queryString from "query-string";
import Collection from "../CollectionsList/Collection";
import ExistArtworkCollection from "./ExistArtworkCollection";
import { Link, useNavigate } from "react-router-dom";
import { exhibitionForm } from "../../redux/reducers/Exhibition/exhibition.action";
import OneUploadCircle from "../../components/OneUploadCircle/OneUploadCircle";

const { TextArea } = Input

function GalleryPanelUploadExhibitionArtwork() {
    const { lastform } = useSelector((state) => state.exhibitionReducer)
    const [selectedArtistId, setSelectedArtistId] = useState(lastform?.artist ? lastform.artist : [])
    const [selectedArtists, setSelectedArtists] = useState([])
    const [selectedArtist, setSelectedArtist] = useState()
    const [showNewArtist, setShowNewArtist] = useState(false)
    const [showSelectArtworkSource, setShowSelectArtworkSource] = useState(false)
    const [showExistArtwork, setShowExistArtwork] = useState(false)
    const [showChangePrice, setShowChangePrice] = useState(false)
    const [uploadList, setUploadList] = useState([])
    const [selectedArtworks, setSelectedArtworks] = useState([])
    const [artworkToChange, setArtworkToChange] = useState({})
    const [artistToChange, setArtistToChange] = useState({})
    const dispatch = useDispatch()
    const { id } = useSelector((state) => state.galleryReducer)
    const { exhibitionId } = useSelector((state) => state.exhibitionReducer)
    const { editExhibitionMode } = useSelector((state) => state.exhibitionReducer)











    const [chosenList, setChosenList] = useState([])
    const [changePriceForm] = Form.useForm()


    const [params, setParams] = useState({
        page_size: 9999999
    })

    const [form] = Form.useForm()
    const navigate = useNavigate()


    const sendData = () => {
        let temp = []
        selectedArtworks.map((item, index) => {
            temp.push(...item.selected)
        })
        lastform["product"] = temp
        apiServices.post(EXHIBITION(id), lastform)
            .then(res => {
                if (res.data) {
                    // console.log(res.data.data);
                }
                else {
                    message.error(res.response.data.message)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }



    const getExhibitionProduct = () => {
        editExhibitionMode &&
            apiServices.get(EXHIBITION_PRODUCT(id, exhibitionId), queryString.stringify(params))
                .then(res => {
                    if (res.data) {
                        // console.log(res.data.data.results);
                        const result = res.data.data.results
                        const temp = []
                        const artistsTemp = []
                        result.map((item) => {
                            const data = {}
                            data["id"] = item.id;
                            data["selected"] = []
                            artistsTemp.push(item.id);
                            item.product_item.map((product) => {
                                data.selected.push({
                                    product_id: product.product.id,
                                    product_item_id: product.id,
                                    reserved_dollar_price: product.reserved_dollar_price,
                                    reserved_toman_price: product.reserved_toman_price
                                })
                            })
                            temp.push(data)
                        })
                        // console.log(temp);
                        // console.log("IIIDDDD", artistsTemp);
                        setSelectedArtworks(temp)
                        // console.log(myObject);
                        setSelectedArtistId(artistsTemp)

                        // setSelectedArtworks()
                    }
                })
                .catch(err => {
                    console.log(err);
                })
    }




    const getGalleryArtists = () => {
        apiServices.get(GALLERY_ARTISTS(id), queryString.stringify(params))
            .then(res => {
                if (res.data) {
                    let filter = []
                    // console.log(res.data.data.results);
                    res.data.data.results.map((item) => {
                        if (selectedArtistId.includes(item.id)) {
                            filter.push(item)
                        }
                    })
                    setSelectedArtists(filter);
                } else {
                    message.error(res.response.data.message)
                }

            })
            .catch((err) => {
                console.error(err);
            });
    }






    useEffect(() => {
        getExhibitionProduct()
        getGalleryArtists()
    }, [])


    // useEffect(() => {
    //     console.log(selectedArtists)
    // }, [selectedArtists])

    // useEffect(() => {
    //     console.log(selectedArtworks);
    // }, [selectedArtworks])



    const submitSelectedArtwork = () => {
        // setSelectedArtworks(ttemp)
    }


    const onFinishNewArtist = (value) => {
        if (uploadList.length > 0) {
            const payload = {
                "translations": {
                    "en": {
                        "biography": value.bio_en,
                        "first_name": value.name_en,
                        "last_name": value.family_en,
                    },
                    "fa": {
                        // "biography": value.bio_fa ? value.bio_fa : null,
                        // "first_name": value.name_fa ? value.name_fa : null,
                        // "last_name": value.family_fa ? value.family_fa : null,
                        "biography": value.bio_fa ? value.bio_fa : value.bio_en,
                        "first_name": value.name_fa ? value.name_fa : value.name_en,
                        "last_name": value.family_fa ? value.family_fa : value.family_en,
                    }
                },
                "bg_image": {
                    "media_path": uploadList[0].media_path,
                    "file_key": uploadList[0].file_key,
                    "type": "image",
                    "bucket_name": "image"
                }
            }


            apiServices.post(ARTIST_BY_GALLERY(id), payload)
                .then(res => {
                    if (res.data) {
                        let temp = lastform
                        if (!temp.artist) {
                            temp["artist"] = []
                        }
                        temp?.artist?.push(res.data.data.id)
                        // console.log(temp);
                        dispatch(exhibitionForm(temp))
                        setSelectedArtists([...selectedArtists, res.data.data])
                        setSelectedArtistId([...selectedArtistId, res.data.data.id])
                        setUploadList([]);
                        form.resetFields();
                        setShowNewArtist(false)
                    } else {
                        message.error(res.response.data.message)
                    }

                })
        } else {
            message.error({
                content: t("add-new-artist-by-gallery.upload_avatar_error"), style: {
                    marginTop: '110px',
                },
            })
        }
    }


    const changePriceFinish = (form) => {
        let temp = selectedArtworks

        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id === artistToChange.id) {
                for (let j = 0; j < temp[i].selected.length; j++) {
                    const element = temp[i].selected[j];
                    if (element.product_id === artworkToChange.product_id && element.product_item_id === artworkToChange.product_item_id) {
                        element.reserved_dollar_price = form.dollarPrice
                        element.reserved_toman_price = form.tomanPrice
                    }
                }
            }
        }
        // console.log(temp);
        setSelectedArtworks(temp)
    }


    return (
        <div>
            <div className="container container-fixed">
                <HeaderPanel t={t} />
                <div className="upload-exhibition-artist mrgt125">
                    <h2 className="default-title aligncenter">{t("upload-exhibition-artwork.title")}</h2>
                    {
                        // console.log("selectedArtists", selectedArtists)
                    }
                    {selectedArtists.map((artist, artistIndex) => {
                        // console.log(selectedArtists);
                        return (
                            <div className=" artist-upload-row">
                                <div className="artist-name-row">
                                    <div className="artist-avatar pull-dir">
                                        <img className="img-responsive" src={artist?.bg_image?.exact_url} height="192" width="192" alt="" />
                                    </div>
                                    <h4 className="artists-name text-dir">
                                        <span>
                                            {i18next.language === 'fa-IR' ?
                                                artist.translations?.fa?.nick_name :
                                                artist.translations?.en?.nick_name}
                                        </span>
                                    </h4>
                                </div>
                                <div className="clearfix"></div>
                                <div className="row dir">
                                    {
                                        // console.log("selectedArtworks", selectedArtworks)
                                    }
                                    {
                                        selectedArtworks.map((artwork, artworkIndex) => {
                                            // console.log("AAAAAAAAA",selectedArtists);

                                            if (artwork.id === artist.id) {
                                                {
                                                    return (
                                                        artwork.selected.map((showArtwork, showArtworkIndex) => {
                                                            return (
                                                                <div className="cols" tabIndex="-1" style={{ padding: "0 5px", cursor: "unset" }}>
                                                                    <div className="col-img">
                                                                        <div className="tags tags-off persian-num">30 %</div>
                                                                        <img src="/static/media/hnrpqkfiup@3x.27cdebb9.jpg" width="200" height="200" alt="آرتیبیشن" className="img-responsive" />
                                                                    </div>
                                                                    <div className="col-body text-dir dir">
                                                                        <h6 className="col-title">
                                                                            <span className="col-name">آیدین</span>
                                                                            <span className="col-name">آغداشلو</span>
                                                                        </h6>
                                                                        <div className="col-dimension">
                                                                            <span className="col-dimension-title">ابعاد:</span>
                                                                            <span className="col-dimension-body">
                                                                                <span className="dimension-width">60</span>
                                                                                <span> در </span>
                                                                                <span className="dimension-height">60</span>
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-price">
                                                                            <span className="col-price-num">22.000.000</span>
                                                                            <span className="col-price-unit">تومان</span>
                                                                            <span className="edit-price" data-toggle="modal" data-target="modal-edit-price" style={{ cursor: "pointer" }} onClick={() => {
                                                                                setArtistToChange(artist)
                                                                                setArtworkToChange(showArtwork)
                                                                                changePriceForm.resetFields()
                                                                                setShowChangePrice(true)
                                                                            }}
                                                                            >
                                                                                <img src="/static/media/edit_name.952e3f26.svg" width="32" height="32" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    )
                                                }
                                            }
                                        })}

                                    <div>
                                        <button style={{ width: "200px", height: "200px" }} className="artist-upload addbtn" onClick={() => {
                                            setShowSelectArtworkSource(true)
                                            setSelectedArtist(artist.id)
                                        }}>
                                            <img src={add} width="36" height="36" alt="" className="img-responsive" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )

                    })}
                    <button type="button" className="btn-add-artist" onClick={() => { setShowNewArtist(true) }}>
                        <img src={add_white} width="24" height="24" alt="" className="img-responsive" />
                        <span>{t("upload-exhibition-artwork.new_artist")}</span>
                    </button>
                    <div className="adv-btn" style={{ backgroundColor: "white" }}>
                        <div className="container">
                            <button type="button" className="btn-next pull-dir-rev" onClick={() => { sendData() }}>{t("upload-exhibition-artwork.confirm_gallery_info")}</button>
                        </div>
                    </div>
                </div>





                <Modal
                    visible={showNewArtist}
                    width={800}
                    footer={[]}
                    destroyOnClose={true}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("gallery-panel-create-exhibition.add_new_artist.title")}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowNewArtist(false) }}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>


                        <div className="modal-body">
                            <div className="enter-address">
                                <div className="row-addaddress">
                                    <h3 className="addressform-title text-dir">{t("gallery-panel-create-exhibition.add_new_artist.upload_artist_picture")}</h3>
                                </div>
                                <OneUploadCircle uploadList={uploadList} setUploadList={setUploadList} />
                                <Form form={form} name="add_new_artist"
                                    onFinish={onFinishNewArtist}
                                    className="row dir">
                                    <h3 className="addressform-title text-dir w-100" >{t("gallery-panel-create-exhibition.add_new_artist.artist_info")}</h3>
                                    <br />
                                    <div className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "d-none": GetLanguage() === 'en-US'
                                    })}>
                                        <div className="public-group">
                                            <Form.Item name={"name_fa"}>
                                                <Input required={GetLanguage() === 'fa-IR' ? true : false} className="form-control input-public" placeholder={t("gallery-panel-create-exhibition.add_new_artist.first_name_fa")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "d-none": GetLanguage() === 'en-US'
                                    })}>
                                        <div className="public-group">
                                            <Form.Item name={"family_fa"}>
                                                <Input required={GetLanguage() === 'fa-IR' ? true : false} className="form-control input-public" placeholder={t("gallery-panel-create-exhibition.add_new_artist.last_name_fa")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="public-group en">
                                            <Form.Item name={"name_en"}>
                                                <Input required className="form-control input-public" placeholder={t("gallery-panel-create-exhibition.add_new_artist.first_name_en")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="public-group en ">
                                            <Form.Item name={"family_en"}>
                                                <Input required className="form-control input-public" placeholder={t("gallery-panel-create-exhibition.add_new_artist.last_name_en")} />
                                            </Form.Item>
                                        </div>
                                    </div>

                                    <div className={classnames("", {
                                        "col-sm-12": GetLanguage() === 'fa-IR',
                                        "d-none": GetLanguage() === 'en-US'
                                    })}>
                                        <div className="public-group ">
                                            <Form.Item name={"bio_fa"}>
                                                <TextArea required={GetLanguage() === 'fa-IR' ? true : false} rows={"6"} placeholder={t("gallery-panel-create-exhibition.add_new_artist.bio_fa")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="public-group en">
                                            <Form.Item name={"bio_en"}>
                                                <TextArea required rows={"6"} placeholder={t("gallery-panel-create-exhibition.add_new_artist.bio_en")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="modal-footer justify-content-center">
                                        <Button htmlType="submit" className="btn btn-black">{t("gallery-panel-create-exhibition.add_new_artist.confirm_btn")}</Button>
                                    </div>
                                </Form>
                            </div>
                        </div>

                    </div>
                </Modal>



                <Modal visible={showSelectArtworkSource}
                    width={800}
                    footer={[]}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("gallery-panel-create-exhibition.add_new_artist.title")}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowSelectArtworkSource(false) }}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>


                        <div className="modal-body">
                            <div className="adv-btn" style={{ flexDirection: "column" }}>
                                <button type="button" className="btn-black center-block" data-target="#exist-artworks" data-toggle="modal" onClick={() => { setShowExistArtwork(true) }}>
                                    انتخاب از آثار موجود
                                </button>
                                {/* <button type="button" className="btn-black center-block mrgt16" data-target="#modal-import { useLocation } from 'react-router-dom';edit-price" data-toggle="modal" onClick={() => {
                                    navigate({
                                        pathname: '/panel/add-artwork',
                                        search: `?artist_id=${selectedArtist}&back=/panel/upload-exhibition-artwotk`,
                                        state: { from: "/panel/upload-exhibition-artwotk" }
                                    });
                                }}>
                                    افزودن اثر جدید
                                </button> */}
                                <Link to={`/panel/add-artwork?artist_id=${selectedArtist}`} className="btn-black center-block mrgt16"
                                    state={{ from: "/panel/upload-exhibition-artwotk" }}>
                                    افزودن اثر جدید
                                </Link>
                            </div>
                        </div>

                    </div>
                </Modal>





                <Modal visible={showExistArtwork}
                    width={"100vw"}
                    footer={[]}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("gallery-panel-create-exhibition.add_new_artist.title")}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowExistArtwork(false) }}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>


                        <div className="modal-body">
                            <div className="container">
                                {selectedArtists.map((artist, index) => {
                                    // console.log("ARTIST", artist);
                                    return (
                                        <div className="exist-artwork-row">
                                            <div className="artist-name-row">
                                                <div className="artist-avatar pull-right">
                                                    <img className="img-responsive" src={artist?.bg_image?.exact_url} height="192" width="192" alt="" />
                                                </div>
                                                <h4 className="artists-name text-dir">
                                                    <span>{i18next.language === "fa-IR" ? artist?.translations?.fa?.nick_name : artist?.translations?.en?.nick_name}</span>
                                                </h4>
                                            </div>
                                            <div className="artist-artworks-row advisory-select">
                                                <ExistArtworkCollection artistID={artist.id} selectedArtwork={selectedArtworks} setSelectedArtwork={setSelectedArtworks} />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="adv-btn" style={{ backgroundColor: "white" }}>
                                <div className="container">
                                    <button type="button" className="btn-next pull-left" onClick={() => {
                                        submitSelectedArtwork()
                                    }}>تایید و ادامه</button>
                                    {/* <div className="selected-artwork pull-left">
                                        <span className="persian-num">5</span>
                                        <span>اثر<span className="hidden-xs"> انتخاب شد</span></span>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </Modal>


                <Modal
                    visible={showChangePrice}
                    width={"800px"}
                    footer={[]}>

                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">تغییرات قیمت</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowChangePrice(false) }}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>


                        <div className="modal-body">
                            <Form name="changePrice"
                                onFinish={changePriceFinish}
                                form={changePriceForm}>
                                <div className="container w-100">
                                    <div className="block-artworks">
                                        <img src={artwork10} width="840" height="840" alt="" className="img-responsive center-block" />
                                        <h6 className="col-title" style={{ justifyContent: "center" }}>
                                            <span className="col-name">آیدین</span>
                                            <span className="col-name">آغداشلو</span>
                                        </h6>
                                        <span>بدون عنوان</span>
                                    </div>
                                    <div className="block-edit-price dir text-dir">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <label className="lable-checkbox public-group">
                                                    <input type="checkbox" value="" />
                                                    <span>برای نمایش</span>
                                                    <span className="checkmark"></span>
                                                    <span className="input-help" style={{ position: "block", top: "25px" }}>با انتخاب این گزینه اثر تنها برای نمایش در سایت قرار می‌گیرد</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row" style={{ marginTop: "40px" }}>
                                            <div className="col-sm-6">
                                                <div className="public-group">
                                                    <Form.Item name={"tomanPrice"}>
                                                        <Input className="form-control input-public persian-num " placeholder="قیمت اثر با تومان" defaultValue={artworkToChange.reserved_toman_price} />
                                                    </Form.Item>
                                                </div>
                                                <a href="#" className="btn-change">
                                                    <img src={change_icon} width="24" height="24" alt="" className="" />
                                                </a>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="public-group">
                                                    <Form.Item name={"dollarPrice"}>
                                                        <Input className="form-control input-public persian-num " placeholder="قیمت اثر با دلار" defaultValue={artworkToChange.reserved_dollar_price} />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer" style={{ flexDirection: "column", padding: "0 15px" }}>
                                    <Form.Item>
                                        <Button htmlType="submit" className="btn btn-black" onClick={() => { setShowChangePrice(false) }}>ثبت تغییرات</Button>
                                    </Form.Item>
                                    <span style={{ margin: "10px 0" }}>تغییرات قیمتی شما در مدت برگزاری نمایشگاه باقی خواهد ماند</span>
                                </div>
                            </Form>
                        </div>

                    </div>

                </Modal>


            </div>
            <BasketFooterPanelNoBox />
        </div>
    )
}

export default GalleryPanelUploadExhibitionArtwork