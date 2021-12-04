import React from 'react';
import skorupskas from '../../assets/img/mainpage/paul-skorupskas-7KLa-xLbSXA-unsplash@3x.jpg';
import YeUVDKZWSZ4 from '../../assets/img/mainpage/rene-bohmer-YeUVDKZWSZ4-unsplash@3x.jpg';
import mainpage1x from '../../assets/img/mainpage/1@3x.jpg';
import gogh from '../../assets/img/mainpage/van-gogh-white@3x.jpg';

export default function Events() {
    return (
        <div className="events">
        <div className="row">
            <div className="d-flex public-header">
                <div className="col-xs-8">
                    <h2 className="text-right default-title">رویدادهای آرتیبیشن</h2>
                </div>
                <div className="col-xs-4">
                    <a href="#" className="btn-readmore pull-left">همه رویدادها</a>
                </div>
            </div>
            <div className="clearfix"></div>
            <div style={{overflowY : 'hidden'}} className="events-body">
                <div  className="d-flex ">
                    <div  className="d-flex owl-carousel" id="tab2">
                        <div className="ex-inperson mx-3">
                            <a href="#" className="cols">
                                <div className="col-img">
                                    <div className="tags tags-events">حضوری</div>
                                    <img src={skorupskas} width="840"
                                         height="840"
                                         alt="آرتیبیشن"
                                         className="img-responsive events"/>
                                </div>
                                <div className="col-body">
                                    <div className="finished-tag">پایان یافته</div>
                                    <h6 className="col-title text-right">
                                        <span className="col-name ">نمایشگاه مجازی هنر عکاسی</span>
                                    </h6>
                                    <div className="col-dimension text-right">
                                        <span className="col-dimension-title ">گالری آرتیبیشن</span>

                                    </div>
                                    <div className="col-date text-right">
                                        <span className="persian-num">16</span>
                                        <span>الی</span>
                                        <span className="persian-num">22</span>
                                        <span>اردیبهشت</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className=" mx-3">
                            <a href="#" className="cols">
                                <div className="col-img">
                                    <div className="tags tags-events">مجازی</div>
                                    <img src={YeUVDKZWSZ4} width="840"
                                         height="840"
                                         alt="آرتیبیشن"
                                         className="img-responsive events"/>
                                </div>
                                <div className="col-body text-right">
                                    <div className="finished-tag">پایان یافته</div>
                                    <h6 className="col-title text-right">
                                        <span className="col-name ">نمایشگاه مجازی هنر نورانی نئون</span>
                                    </h6>
                                    <div className="col-dimension text-right">
                                        <span className="col-dimension-title ">گالری آرتیبیشن</span>
                                    </div>
                                    <div className="coundown text-right">
                                        <div className="timers text-right" data-newdate="August 10, 2021 12:00 PDT">
                                            <span className="end ">تا پایان</span>
                                            <div className="days"></div>
                                            <div className="hours"></div>
                                            <div className="minutes"></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className=" mx-3">
                            <a href="#" className="cols finished">
                                <div className="col-img">
                                    <div className="tags tags-events">حضوری</div>
                                    <img src={mainpage1x} width="840" height="840" alt="آرتیبیشن"
                                         className="img-responsive events"/>
                                </div>
                                <div className="col-body text-right">
                                    <div className="finished-tag">پایان یافته</div>
                                    <h6 className="col-title">
                                        <span className="col-name">نمایشگاه رضا حسینی</span>
                                    </h6>
                                    <div className="col-dimension text-right">
                                        <span className="col-dimension-title">گالری آرتیبیشن</span>
                                    </div>
                                    <div className="col-date">
                                        <span className="persian-num">16</span>
                                        <span>الی</span>
                                        <span className="persian-num">22</span>
                                        <span>اردیبهشت</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className=" mx-3">
                            <a href="#" className="cols">
                                <div className="col-img">
                                    <div className="tags tags-events">مجازی</div>
                                    <img src={gogh} width="840" height="840"
                                         alt="آرتیبیشن"
                                         className="img-responsive events"/>
                                </div>
                                <div className="col-body text-right">
                                    <div className="finished-tag">پایان یافته</div>
                                    <h6 className="col-title">
                                        <span className="col-name">نمایشگاه عکاسی طبیعت ایران</span>
                                    </h6>
                                    <div className="col-dimension">
                                        <span className="col-dimension-title">گالری آرتیبیشن</span>
                                    </div>
                                    <div className="coundown">
                                        <div className="timers" data-newdate="August 10, 2021 12:00 PDT">
                                            <span className="end">تا پایان</span>
                                            <div className="days"></div>
                                            <div className="hours"></div>
                                            <div className="minutes"></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}
