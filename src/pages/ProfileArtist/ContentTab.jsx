import React from 'react';

import artist_content1 from '../../assets/img/artists/artist-content-1.jpg';
import artist_content2 from '../../assets/img/artists/artist-content-2.jpg';
import artist_content3 from '../../assets/img/artists/artist-content-3.jpg';
import video_icon from '../../assets/img/video.png';

function ContentTab() {
    return (
        <div id="artist5" className="tab-pane ">
                        <div className="d-flex box-dir-reverse">
                            <div className="col-sm-4">
                                <a href="#" className="cols">
                                    <div className="col-img">
                                        <div className="video-prev"><img src={video_icon} width="36" height="36" alt=""/>
                                        </div>
                                        <img src={artist_content1} width="1000" height="1000"
                                             alt="آرتیبیشن"
                                             className="img-responsive"/>
                                    </div>
                                    <div className="col-body">
                                        <h6 className="col-title text-dir">
                                            <span className="col-name">سخنرانی آیدین آغداشلو در تورنتو</span>
                                        </h6>
                                        <span className="block-time persian-num pull-dir">۲۰ دی ۹۸</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-4">
                                <a href="#" className="cols">
                                    <div className="col-img">
                                        <img src={artist_content2} width="381" height="381"
                                             alt="آرتیبیشن"
                                             className="img-responsive"/>
                                    </div>
                                    <div className="col-body">
                                        <h6 className="col-title text-dir">
                                            <span className="col-name">آیدین آغداشلو رییس داوران دوسالانه «دامون‌فر» شد</span>
                                        </h6>
                                        <span className="block-time persian-num pull-dir">4 فرودین ۹۸</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-4">
                                <a href="#" className="cols">
                                    <div className="col-img">
                                        <img src={artist_content3} width="840" height="840"
                                             alt="آرتیبیشن"
                                             className="img-responsive"/>
                                    </div>
                                    <div className="col-body">
                                        <h6 className="col-title text-dir">
                                            <span className="col-name">عکس آیدین آغداشلو و دخترش در کنار ابراهیم گلستان</span>
                                        </h6>
                                        <span className="block-time persian-num pull-dir">19 اردیبهشت ۹۹</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
    )
}

export default ContentTab;
