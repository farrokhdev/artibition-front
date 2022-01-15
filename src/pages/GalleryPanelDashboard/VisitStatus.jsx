import React from "react";


function VisitStatus() {
    return (
        <div className="box artistpanel-6"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
            <div className="public-header">
                <div className="pull-right">
                    <h2 className="default-title">بازدید آثار</h2>
                </div>
            </div>
            <div className=" pull-left artworks-filter">
                <button className="btn-dropdown" type="button" data-toggle="collapse" data-target="#artworks-filter" aria-expanded="false" aria-controls="artworks-filter">
                    فیلتر آثار
                    <i className="glyphicon glyphicon-chevron-down"></i>
                </button>
                <div className="collapse artwork-filter-aria" id="artworks-filter">
                    <div className="filter-body">
                        <div className="artworksFilter">
                            <label className="lable-checkbox">
                                <input type="checkbox" value="" />
                                <span className="checkmark"></span>
                            </label>
                            <img src="img/all-select.jpg" width="48" height="48" alt="" className="img-responsive" />
                            <span>بازدید کلی همه آثار</span>
                        </div>
                        <div className="artworksFilter">
                            <label className="lable-checkbox">
                                <input type="checkbox" value="" />
                                <span className="checkmark"></span>
                            </label>
                            <div className="checkbox-detail">
                                <img src="img/artworks/artwork-1.jpg" width="1776" height="1776" alt="" className="img-responsive pull-right" />
                                <div className="pull-right">
                                    <span>بدون عنوان</span>
                                    <br />
                                    <span className="persian-num font13 graycolor">۳۸۷۴۶</span>
                                </div>
                                <div className="col-price pull-left">
                                    <span className="col-price-num">22.000.000</span>
                                    <span className="col-price-unit">تومان</span>
                                </div>
                            </div>
                        </div>
                        <div className="artworksFilter">
                            <label className="lable-checkbox">
                                <input type="checkbox" value="" />
                                <span className="checkmark"></span>
                            </label>
                            <div className="checkbox-detail">
                                <img src="img/artworks/artwork-1.jpg" width="1776" height="1776" alt="" className="img-responsive pull-right" />
                                <div className="pull-right">
                                    <span>بدون عنوان</span>
                                    <br />
                                    <span className="persian-num font13 graycolor">۳۸۷۴۶</span>
                                </div>
                                <div className="col-price pull-left">
                                    <span className="col-price-num">22.000.000</span>
                                    <span className="col-price-unit">تومان</span>
                                </div>
                            </div>
                        </div>
                        <div className="artworksFilter">
                            <label className="lable-checkbox">
                                <input type="checkbox" value="" />
                                <span className="checkmark"></span>
                            </label>
                            <div className="checkbox-detail">
                                <img src="img/artworks/artwork-1.jpg" width="1776" height="1776" alt="" className="img-responsive pull-right" />
                                <div className="pull-right">
                                    <span>بدون عنوان</span>
                                    <br />
                                    <span className="persian-num font13 graycolor">۳۸۷۴۶</span>
                                </div>
                                <div className="col-price pull-left">
                                    <span className="col-price-num">22.000.000</span>
                                    <span className="col-price-unit">تومان</span>
                                </div>
                            </div>
                        </div>
                        <div className="artworksFilter">
                            <label className="lable-checkbox">
                                <input type="checkbox" value="" />
                                <span className="checkmark"></span>
                            </label>
                            <div className="checkbox-detail">
                                <img src="img/artworks/artwork-1.jpg" width="1776" height="1776" alt="" className="img-responsive pull-right" />
                                <div className="pull-right">
                                    <span>بدون عنوان</span>
                                    <br />
                                    <span className="persian-num font13 graycolor">۳۸۷۴۶</span>
                                </div>
                                <div className="col-price pull-left">
                                    <span className="col-price-num">22.000.000</span>
                                    <span className="col-price-unit">تومان</span>
                                </div>
                            </div>
                        </div>
                        <div className="artworksFilter">
                            <label className="lable-checkbox">
                                <input type="checkbox" value="" />
                                <span className="checkmark"></span>
                            </label>
                            <div className="checkbox-detail">
                                <img src="img/artworks/artwork-1.jpg" width="1776" height="1776" alt="" className="img-responsive pull-right" />
                                <div className="pull-right">
                                    <span>بدون عنوان</span>
                                    <br />
                                    <span className="persian-num font13 graycolor">۳۸۷۴۶</span>
                                </div>
                                <div className="col-price pull-left">
                                    <span className="col-price-num">22.000.000</span>
                                    <span className="col-price-unit">تومان</span>
                                </div>
                            </div>
                        </div>
                        <div className="artworksFilter">
                            <label className="lable-checkbox">
                                <input type="checkbox" value="" />
                                <span className="checkmark"></span>
                            </label>
                            <div className="checkbox-detail">
                                <img src="img/artworks/artwork-1.jpg" width="1776" height="1776" alt="" className="img-responsive pull-right" />
                                <div className="pull-right">
                                    <span>بدون عنوان</span>
                                    <br />
                                    <span className="persian-num font13 graycolor">۳۸۷۴۶</span>
                                </div>
                                <div className="col-price pull-left">
                                    <span className="col-price-num">22.000.000</span>
                                    <span className="col-price-unit">تومان</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-footer">
                        <button type="button" className="btn-blue btn-artfilter">اعمال فیلتر</button>
                    </div>
                </div>
            </div>
            {/* <canvas id="artist-chart" width="1958" height="1142" style="display: block; width: 979px; height: 571px;" className="chartjs-render-monitor"></canvas> */}
            <canvas></canvas>
        </div>
    )
}

export default VisitStatus