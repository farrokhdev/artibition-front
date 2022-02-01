import React, { useEffect, useState } from 'react';
import skorupskas from '../../assets/img/mainpage/paul-skorupskas-7KLa-xLbSXA-unsplash@3x.jpg';
import YeUVDKZWSZ4 from '../../assets/img/mainpage/rene-bohmer-YeUVDKZWSZ4-unsplash@3x.jpg';
import mainpage1x from '../../assets/img/mainpage/1@3x.jpg';
import gogh from '../../assets/img/mainpage/van-gogh-white@3x.jpg';
import { t } from 'i18next';
import { EXHIBITION_LIST } from '../../utils';
import apiServices from '../../utils/api.services';
import QueryString from 'qs';
import { useTranslation } from 'react-i18next';
import Countdown from 'antd/lib/statistic/Countdown';
import { timeToStr } from '../../utils/utils';
// import Countdown from 'react-countdown';

export default function Events() {

    const { t, i18n } = useTranslation();
    const [exhibitionList, setExhibitionList] = useState();
    const [toggleConfig, setToggleConfig] = useState(false);
    const [exhibitionSituation, setExhibitionSituation] = useState();
    const [params, setParams] = useState({
        page: 1
    });
    const getExhibitionList = () => {
        apiServices.get(EXHIBITION_LIST, QueryString.stringify(params))
            .then(res => {
                if (res.data) {
                    setExhibitionList(res.data.data)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }
    function onChange(val) {
        if (4.95 * 1000 < val && val < 5 * 1000) {
          console.log('changed!');
        }
      }
      
    useEffect(() => {
        getExhibitionList()
    }, []);
    useEffect(() => {
        if (!toggleConfig) {
            exhibitionList?.results?.map(item => {
                let start = item.type === "real" ? new Date(item.start_date?.real_start_date) : item.type === "virtual" ? new Date(item.start_date?.virtual_start_date) : new Date(item.start_date?.virtual_start_date)
                let expire = item.type === "real" ? new Date(item.end_date?.real_end_date) : item.type === "virtual" ? new Date(item.end_date?.virtual_end_date) : new Date(item.end_date?.virtual_end_date)
                let now = new Date()
                setToggleConfig(true)
                return expire < now ? setExhibitionSituation('expired') : start < now < expire ? setExhibitionSituation('onPerform') : now < start ? setExhibitionSituation('progress') : null
            })
        }
    }, [exhibitionList]);
    return (
        <div className="events">
            <div className="row">
                <div className="d-flex public-header">
                    <div className="col-xs-8">
                        <h2 className="text-right default-title">{t("artibition-events.title")}</h2>
                    </div>
                    <div className="col-xs-4">
                        <a href="#" className="btn-readmore pull-left">{t("event-all")}</a>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div style={{ overflowY: 'hidden' }} className="events-body">
                    <div className="d-flex ">
                        <div className="d-flex owl-carousel" id="tab2">
                            {exhibitionList?.results?.map((item, index) =>
                                <div key={index} className="ex-inperson mx-3">
                                    <a href="#" className={`cols ${exhibitionSituation && exhibitionSituation === 'expired' ? 'finished' : ''}`}>
                                        <div className="col-img">
                                            <div className="tags tags-events">
                                                {i18n.language === 'fa-IR' ?
                                                    item.type === "real" ? 'حضوری' : item.type === 'virtual' ? 'مجازی' : 'مجازی - حضوری'
                                                    :
                                                    item.type
                                                }
                                            </div>
                                            <img src={item.gallery?.poster && item.gallery?.poster[0]?.exact_url} width="840"
                                                height="840"
                                                alt="آرتیبیشن"
                                                className="img-responsive events" />
                                        </div>
                                        <div className="col-body">
                                            <div className="finished-tag">{t('promotion-competition.banner.finished')}</div>
                                            <h6 className="col-title text-right">
                                                <span className="col-name ">{
                                                    i18n.language === 'fa-IR' ?
                                                        item.translations?.fa?.name
                                                        :
                                                        item.translations?.en?.name
                                                }</span>
                                            </h6>
                                            <div className="col-dimension text-right">
                                                <span className="col-dimension-title ">{
                                                    i18n.language === 'fa-IR' ?
                                                        item.gallery?.translations?.fa?.title
                                                        :
                                                        item.gallery?.translations?.en?.title
                                                }</span>

                                            </div>
                                            {exhibitionSituation && exhibitionSituation === 'onPerform' ?
                                                <div className="coundown text-right">
                                                    <div className="timers text-right" data-newdate="August 10, 2021 12:00 PDT">
                                                        <span className=" ">تا پایان</span>
                                                        <Countdown value={Date.now() + 10 * 2000} onChange={onChange} />
                                                    </div>
                                                </div>
                                                :
                                                <div className="col-date text-right">
                                                    <span className="persian-num">{timeToStr(item.start_date[`${item.type=== 'virtual_real'? 'virtual' : item.type}_start_date`], "jDD")}</span>
                                                    <span>الی</span>
                                                    <span className="persian-num">{timeToStr(item.end_date[`${item.type=== 'virtual_real'? 'virtual' : item.type}_end_date`], "jDD")}</span>
                                                    <span>{timeToStr(item.end_date[`${item.type=== 'virtual_real'? 'virtual' : item.type}_end_date`], "jMM")}</span>
                                                </div>
                                            }
                                        </div>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
