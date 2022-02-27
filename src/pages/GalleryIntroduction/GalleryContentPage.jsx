import React from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import poster1 from '../../assets/img/artworks/poster1.jpg';
import poster2 from '../../assets/img/artworks/poster2.jpg';
import articles101 from '../../assets/img/articles/101.jpg'
import i18next, { t } from 'i18next';
import Footer from '../../components/Footer/Footer';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import apiServices from '../../utils/api.services';
import { GALLERY, GALLERY_CONTENT, GALLERY_CONTENT_DETAILS } from '../../utils';
import { useEffect } from 'react';
import { useState } from 'react';
import { Breadcrumb, message, Spin } from 'antd';
import queryString from 'query-string'
import moment from 'jalali-moment';
import Slider from "react-slick";
import whatsapp from "../../assets/img/whatsapp.svg";
import telegram from "../../assets/img/telegram.svg";
import linkedIn from "../../assets/img/linkedIn.svg";
import twitter from "../../assets/img/twitter.svg";
import { LinkedinShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';


function GalleryContentPage() {

    let params = useParams();
    const navigate = useNavigate()
    let location = useLocation()
    const [contentDetails, setContentDetilas] = useState()
    const [galleryDetails, setGalleryDetilas] = useState()
    const [galleryContents, setGalleryContents] = useState()
    const [loading, setLoading] = useState(true)
    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    const [query, setQuery] = useState({
        page_size: 5
    })



    const getGalleryContent = () => {
        apiServices.get(GALLERY_CONTENT(params.galleryId), queryString.stringify(query))
            .then(res => {
                if (res.data) {
                    setGalleryContents(res.data.data.results)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    const getGalleryDetails = () => {
        apiServices.get(GALLERY(params.galleryId), "")
            .then(res => {
                if (res.data) {
                    setGalleryDetilas(res.data.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    const getContentDetails = () => {
        apiServices.get(GALLERY_CONTENT_DETAILS(params.galleryId, params.contentId), "")
            .then(res => {
                // console.log(res);
                if (res?.response?.status === 404) {
                    navigate("/site/page-404")
                }
                else if (res.data) {
                    setContentDetilas(res.data.data);
                    setLoading(false)
                }
                else {
                    message.error({
                        content: res.response.data.message,
                        style: { marginTop: "110px" }
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        setLoading(true)
        getContentDetails()
        getGalleryDetails()
        getGalleryContent()
    }, [location])


    return (
        <>
            <div className="container">
                <Header />
                <Menu />

                <div className="body-overly"></div>
                <div className="container">
                    {loading ?
                        <>
                            <Spin size='large' />
                        </>
                        :
                        <>
                            {/* <ul className="breadcrumb">
                                <li><a href="#">{t("artwork.artibition")}</a></li>
                                <li><a href="#">{t("artist_profile.artists")}</a></li>
                                <li><a href="#">{t("gallery-panel-my-gallery.my_gallery")}</a></li>
                                <li><a href="#">{t("Journal")}</a></li>
                                <li className="active">{t("Lorem_ipsum_Arthibition_gallery")}</li>
                            </ul> */}




                            <Breadcrumb
                                className="d-flex box-dir-reverse breadcrumb"
                                separator=""
                            >
                                <Breadcrumb.Item>
                                    <Link to={"/"}>
                                        {t("artwork.artibition")}
                                    </Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Separator>{i18next.language === 'fa-IR' ? ">" : "<"}</Breadcrumb.Separator>
                                <Breadcrumb.Item>
                                    <Link to={"/site/all-galleris-list"}>
                                        گالری ها
                                    </Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Separator>{i18next.language === 'fa-IR' ? ">" : "<"}</Breadcrumb.Separator>
                                <Breadcrumb.Item>
                                    <Link to={`/site/gallery-introduction/?id=${params.galleryId}`}>
                                        {i18next.language === 'fa-IR' ?
                                            galleryDetails?.translations?.fa?.title :
                                            galleryDetails?.translations?.en?.title
                                        }
                                    </Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Separator>{i18next.language === 'fa-IR' ? ">" : "<"}</Breadcrumb.Separator>
                                <Breadcrumb.Item>
                                    <Link to={`/site/gallery-introduction/?id=${params.galleryId}`}>
                                        مجله
                                    </Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Separator>{i18next.language === 'fa-IR' ? ">" : "<"}</Breadcrumb.Separator>
                                <Breadcrumb.Item className="active persian-num">
                                    {i18next.language === 'fa-IR' ? contentDetails?.translations?.fa?.title : contentDetails?.translations?.en?.title}
                                </Breadcrumb.Item>
                            </Breadcrumb>


                            <div className="row dir">
                                <div className="col-sm-8">




                                    <Slider asNavFor={nav2}
                                        ref={slider1 => setNav1(slider1)}
                                        infinite={true}>
                                        {contentDetails?.content_file?.map((item, index) => {
                                            return (
                                                <div>
                                                    <img src={item.exact_url} style={{ width: "100%" }} />
                                                </div>
                                            )
                                        })}

                                    </Slider>

                                    <Slider
                                        asNavFor={nav1}
                                        ref={(slider2) => setNav2(slider2)}
                                        slidesToShow={3}
                                        swipeToSlide={true}
                                        focusOnSelect={true}
                                        rows={1}
                                        centerMode={contentDetails?.content_file.lenght > 3 ? true : false} //Enable whene count is more than 3
                                        infinite={contentDetails?.content_file.lenght > 3 ? true : false} //Enable whene count is more than 3
                                        style={{ marginTop: "30px" }}
                                    >
                                        {contentDetails?.content_file?.map((item, index) => {
                                            return (
                                                <div>
                                                    <img src={item.exact_url} style={{ width: "100%", padding: "0 10px" }} />
                                                </div>
                                            )
                                        })}
                                    </Slider>




                                    <div className="content-txt">
                                        <h2 className="fontbold28">{contentDetails?.translations?.fa?.title}</h2>
                                        <div className="content-date">
                                            {/* <span className="persian-num">22</span>
                                    <span>تیر</span>
                                    <span className="persian-num">99</span> */}
                                            <span>{moment(contentDetails?.creation_date, 'YYYY/MM/DD').locale(i18next?.language === 'fa-IR' ? 'fa' : 'en').format('D MMMM YYYY')}</span>

                                        </div>
                                        <p className="text-justify" style={{ whiteSpace: "pre-wrap" }}>
                                            {contentDetails?.translations?.fa?.description}
                                        </p>
                                        {/* <p className="text-justify">
                                            انتخاب هنرمندان این نمایشگاه با سیاستی از پیش تعیین‌شده بر روی هنرمندان برجسته تاریخ هنر ایران،
                                            اساتید بنام و شاگردان آنها و جوانان مستعد این حوزه و همچنین سایر مدرسان دانشگاه‌ها و هنرجویان آنها
                                            که همگی از هنرمندان آینده‌دار خواهند بود، تمرکز داشته است.
                                        </p>
                                        <h3 className="default-title">
                                            مجموعه آثار چاپ، طراحی و نقاشی در گالری آرتیبیشن
                                        </h3>
                                        <p className="text-justify">
                                            اما از آنجا که نمایشگاه با تاکید بر فرهنگ مجموعه‌داری، ترویج خرید کارهای چاپ، طراحی و نقاشی‌هایی با
                                            سایز کوچک بوده است در میان آثار این نمایشگاه اسامی هنرمندان پیشکسوتی چون علی اکبرصادقی، اردشیر محصص،
                                            هانیبال الخاص، رضا بانگیز، مهدی حسینی، کامبیز درمبخش، همایون سلیمی، عبدی اسبقی و... حضور دارد،
                                            همچنین تعدادی از آلبوم‌ها نیز با جمع‌آوری آثاری از بهترین هنرجویان اساتید دانشگاه‌ها انتخاب شده است.
                                        </p>
                                        <p className="text-justify">
                                            نمایش و فروش آثار نمایشگاه آرشیو راس ساعت 16، روز جمعه 31 مرداد 98 افتتاح و تا 15 شهریور ادامه خواهد
                                            داشت. مخاطبین می‌توانند به مدت 16روز برای بازدید از این نمایشگاه به گالری آرتیبیشن واقع در خیابان
                                            شریعتی، پایین‌تر از حسینیۀ ارشاد، نرسیده‌به همت، گل‌نبی(غرب)، میدان احمدی‌روشن(کتابی)، خیابان
                                            ساسانی‌پور، خیابان قندی(دریا)، پلاک 6 مراجعه نمایند. همچنین آثار این نمایشگاه برای علاقمندانی که در
                                            تهران سکونت ندارند به‌صورت آنلاین در سایت آرتیبیشن(www.Artibition.net) به نمایش گذاشته خواهند شد.
                                        </p> */}
                                    </div>
                                    <div className="content-share">
                                        <span className="bolder-title pull-dir">{t("share")}:</span>
                                        <ul className="share shares">
                                            {/* <li><a href="#" className="share-instagram"></a></li>
                                            <li><a href="#" className="share-telegram"></a></li>
                                            <li><a href="#" className="share-linkedin"></a></li>
                                            <li><a href="#" className="share-twitter"></a></li> */}

                                            <TelegramShareButton url={window.location.href} style={{ margin: "0 10px" }}>
                                                <img src={telegram} alt="icon_Telegram" style={{ width: "15px" }} />
                                            </TelegramShareButton>
                                            <LinkedinShareButton url={window.location.href} style={{ margin: "0 10px" }}>
                                                <img src={linkedIn} alt="icon_Linkedin" style={{ width: "15px" }} />
                                            </LinkedinShareButton>
                                            <TwitterShareButton url={window.location.href} style={{ margin: "0 10px" }}>
                                                <img src={twitter} alt="icon_Twitter" style={{ width: "15px" }} />
                                            </TwitterShareButton>
                                            <WhatsappShareButton url={window.location.href} style={{ margin: "0 10px" }}>
                                                <img src={whatsapp} alt="icon_Whatsapp" style={{ width: "15px" }} />
                                            </WhatsappShareButton>
                                        </ul>
                                        <div className="clearfix"></div>
                                        <span className="bolder-title pull-dir" style={{ marginTop: "11px" }}>{t("artwork.tags.title")}:</span>
                                        <ul className="content-tags shares" style={{ marginTop: "15px" }}>
                                            <li><a href="#">{t("artwork.artibition")}</a></li>
                                            <li><a href="#">{t("gallery-panel-dashboard.counter_status.exhibition")}</a></li>
                                            <li><a href="#">{t("filter-header.category.painting")}</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <h3 className="default-title mrgb32 mrgt16 text-dir">{`سایر محتوای گالری ${i18next.language === 'fa-IR' ?
                                        galleryDetails?.translations?.fa?.title :
                                        galleryDetails?.translations?.en?.title
                                        }`}
                                    </h3>
                                    {galleryContents && galleryContents.map((item) => {
                                        if (item.id != params.contentId) {
                                            return (
                                                <Link to={`/site/gallery-content/${params.galleryId}/${item.id}`}>
                                                    <div className="more-articles">
                                                        <img src={item?.poster?.exact_url} width="1152" height="1152" alt=""
                                                            className="img-responsive pull-dir" />
                                                        <div className="more-articles-title">
                                                            <h6 className='text-dir'>{i18next.language === 'fa-IR' ? item?.translations?.fa?.title : item?.translations?.en?.title}</h6>
                                                            <div className="content-date">
                                                                <span className="persian-num">{moment(item?.creation_date, 'YYYY/MM/DD').locale(i18next?.language === 'fa-IR' ? 'fa' : 'en').format('D MMMM YYYY')}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>

                                            )
                                        }
                                    })}
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-md-8 col-sm-12">
                                    <div className="content-more">
                                        <h3 className="default-title text-dir">{t("read_more")}</h3>
                                        <div className="row">
                                            {galleryContents && galleryContents.map((item) => {
                                                if (item.id != params.contentId) {
                                                    return (
                                                        <Link to={`/site/gallery-content/${params.galleryId}/${item.id}`} className="col-sm-6">
                                                            <div className="more-articles">
                                                                <img src={item?.poster?.exact_url} width="1152" height="1152" alt=""
                                                                    className="img-responsive pull-dir" />
                                                                <div className="more-articles-title">
                                                                    <h6 className='text-dir' >{i18next.language === 'fa-IR' ? item?.translations?.fa?.title : item?.translations?.en?.title}</h6>
                                                                    <div className="content-date">
                                                                        <span className="persian-num">{moment(item?.creation_date, 'YYYY/MM/DD').locale(i18next?.language === 'fa-IR' ? 'fa' : 'en').format('D MMMM YYYY')}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default GalleryContentPage;