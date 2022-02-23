import React, { useEffect, useState } from 'react';

import mainpage1_1 from '../../assets/img/mainpage/1-1.jpg';
import mainpage1_3 from '../../assets/img/mainpage/1-3.jpg';
import mainpage2_1 from '../../assets/img/mainpage/2-1.jpg';
import mainpage2_2 from '../../assets/img/mainpage/2-2.jpg';
import mainpage2_3 from '../../assets/img/mainpage/2-3.jpg';
import mainpage3_1 from '../../assets/img/mainpage/3-1.jpg';
import mainpage3_2 from '../../assets/img/mainpage/3-2.jpg';
import mainpage3_3 from '../../assets/img/mainpage/3-3.jpg';
import mainpage4_1 from '../../assets/img/mainpage/4-1.jpg';
import mainpage4_2 from '../../assets/img/mainpage/4-2.jpg';
import mainpage4_3 from '../../assets/img/mainpage/4-3.jpg';
import mainpage1_2 from '../../assets/img/mainpage/1-2.jpg';
import tip from '../../assets/img/tip.svg';
import { t } from 'i18next';
import apiServices from '../../utils/api.services';
import { ARTIST_CATEGORY } from '../../utils';
import QueryString from 'qs';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Popover } from 'antd';


export default function Collection() {
    let navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [artistCategory, setArtistCategory] = useState();
    const [params, setParams] = useState({
        page: 1,
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
    const content = (
        <div
            className="popover-content"
        >
            <p>با ایجاد کالکشن شما می‌توانید آثار مورد علاقه
                خود را با آن اضافه و آن‌ها را طبقه‌بندی نمایید</p>
            <a className="popover-btn" href="#" type="button">ایجاد کالکشن</a>
        </div>
    );

    useEffect(() => {
        getArtistCategory()
    }, [params]);
    return (

        <div className="collection">
            <div className="row dir">

                <div className="public-header d-flex">
                    <div className="col-6 col-md-8 ">
                        <div className="d-flex">
                            <h2 className="default-title pull-right px-4 ">{t("collection-artworks-home.title")}</h2>
                            <div className="popover-collection">
                                <Popover placement="left" autoAdjustOverflow={true} content={content} title="کالکشن آثار" overlayInnerStyle={{ paddingBottom: '30px' }}>

                                    <a title="کالکشن آثار" data-toggle="popover" data-placement="left">
                                        <img src={tip} width="18" height="18" alt="کالکشن آثار" />
                                    </a>
                                </Popover>

                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 ">
                        <div className="btn-readmore pull-dir-rev " onClick={() => navigate('/site/collections-list')}>{t("collection-all")}</div>
                    </div>
                </div>

                <div className="col">
                    <div className="collection-body">

                        <div style={{ overflow: 'auto' }} className="owl-carousel d-flex" id="tab6">
                            {artistCategory?.results?.map((item, index) =>
                                <div>
                                    <Link to="/site/collections-list" className="cols">
                                        <div className="col-img mx-4">
                                            <div className=" collection-firstrow m-0">
                                                <img src={item?.products[0]?.medias[0]?.exact_url} width="280" height="280" className="img-responsive w-100" />
                                            </div>
                                            {<div className="d-flex collection-secondrow  px-0">
                                                {item.products[1] && <div className="col px-0  mt-2">
                                                    <img src={item?.products[1]?.medias[0]?.exact_url}
                                                        width="280" height="280"
                                                        className="img-responsive clolection-image w-100" />
                                                </div>}
                                                {item?.products[2] && <div className="col px-0 mr-2 mt-2">
                                                    <img src={item?.products[2]?.medias[0]?.exact_url}
                                                        width="280" height="280"
                                                        className="img-responsive clolection-image w-100" />
                                                </div>}
                                            </div>}
                                            {/* {item?.products[1] || item?.products[2] && <div className="d-flex collection-secondrow  px-0">
                                                {item.products[1] && <div className="col px-0  mt-2">
                                                    <img src={item?.products[1]?.medias[1]?.exact_url}
                                                        className="img-responsive clolection-image w-100" />
                                                </div>}
                                                {item?.products[2] && <div className="col px-0 mr-2 mt-2">
                                                    <img src={item?.products[2]?.medias[2]?.exact_url}
                                                        className="img-responsive clolection-image w-100" />
                                                </div>}
                                            </div>} */}
                                        </div>
                                        <div className="col-body">
                                            <h6 className="col-title">
                                                <span className="col-name">
                                                    {i18n.language === 'fa-IR' ?
                                                        item?.translations?.fa?.title
                                                        :
                                                        item?.translations?.en?.title
                                                    }</span>
                                            </h6>
                                            <div className="col-dimension">
                                                <span className="col-dimension-title">
                                                    {i18n.language === 'fa-IR' ?
                                                        item?.owner?.translations?.fa?.first_name + ' ' + item?.owner?.translations?.fa?.last_name
                                                        :
                                                        item?.owner?.translations?.en?.first_name + ' ' + item?.owner?.translations?.en?.last_name
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
