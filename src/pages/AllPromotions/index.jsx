import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { ArtworkRemoveFilter, Banner } from "../../components/ArtworksPage";

const AllPromotions = () => {
  const [search, setSearch] = useState();
  const [params, setParams] = useState({
    status: "active",
  });
  const [selectedOption, setSelectedOption] = useState("popularity");
  const handleBannerSearchInputChanged = (text) => setSearch(text);
  const handleBannerSearchClick = () =>
    setParams((state) => ({ ...state, search: search }));

  return (
    <div className="container">
      <Header />
      <Menu />
      <Banner
        handleBannerSearchInputChanged={handleBannerSearchInputChanged}
        handleBannerSearchClick={handleBannerSearchClick}
      />
      <div className="default-content">
        <div className="content-header">
          <ArtworkRemoveFilter
            setParams={setParams}
            params={params}
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
          />
          <div className="row"></div>
        </div>
        <div className="content-body">
          <div className="row">
            <div className="col-md-3 filter-side">
              <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        aria-expanded="true"
                        href="#collapse11"
                      >
                        تاریخ
                      </a>
                    </h4>
                  </div>
                  <div id="collapse11" className="panel-collapse collapse in">
                    <div className="panel-body">
                      {/* <div className="caleander-event side-bar">
                        <div className="caleander-month">
                          <ul>
                            <li className="next">&#10095;</li>
                            <li className="prev">&#10094;</li>
                            <li className="limonth">تیر</li>
                          </ul>
                        </div>
                        <ul className="caleander-weekdays">
                          <li>ش</li>
                          <li>ی</li>
                          <li>د</li>
                          <li>س</li>
                          <li>چ</li>
                          <li>پ</li>
                          <li>ج</li>
                        </ul>
                        <ul className="caleander-days">
                          <li>1</li>
                          <li>2</li>
                          <li>3</li>
                          <li>4</li>
                          <li>5</li>
                          <li>6</li>
                          <li>7</li>
                          <li>8</li>
                          <li>9</li>
                          <li className="active">10</li>
                          <li>11</li>
                          <li>12</li>
                          <li>13</li>
                          <li>14</li>
                          <li>15</li>
                          <li>16</li>
                          <li>17</li>
                          <li className="active">18</li>
                          <li>19</li>
                          <li>20</li>
                          <li className="active">21</li>
                          <li>22</li>
                          <li>23</li>
                          <li>24</li>
                          <li>25</li>
                          <li>26</li>
                          <li>27</li>
                          <li>28</li>
                          <li>29</li>
                          <li>30</li>
                          <li>31</li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  {/* <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        aria-expanded="true"
                        href="#collapse10"
                      >
                        نوع
                      </a>
                    </h4>
                  </div> */}
                  <div id="collapse10" className="panel-collapse collapse in">
                    {/* <div className="panel-body">
                      <label className="lable-checkbox">
                        <input type="checkbox" value="" />
                        <span>فراخوان</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="lable-checkbox">
                        <input type="checkbox" value="" />
                        <span>پروموشن</span>
                        <span className="checkmark"></span>
                      </label>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row-gridimg">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="cols">
                      <div className="col-img">
                        <img
                          src="img/artworks/jpaytrkase@3x.jpg"
                          width="840"
                          height="1259"
                          alt="آرتیبیشن"
                          className="img-responsive"
                        />
                        <div className="tab-overly">
                          <a href="#" className="btn-see">
                            <span className="view-icon pull-right"></span>
                            <span>مشاهده اثر</span>
                          </a>
                          <a href="#" className="btn-sale">
                            درخواست خرید
                          </a>
                          <a href="#" className="like-icon isLike"></a>
                        </div>
                      </div>
                      <div className="col-body">
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
                        </div>
                      </div>
                    </div>
                    <div className="cols">
                      <div className="col-img">
                        <img
                          src="img/artworks/hnrpqkfiup@3x.jpg"
                          width="840"
                          height="840"
                          alt="آرتیبیشن"
                          className="img-responsive"
                        />
                        <div className="tab-overly">
                          <a href="#" className="btn-see">
                            <span className="view-icon pull-right"></span>
                            <span>مشاهده اثر</span>
                          </a>
                          <a href="#" className="btn-sale">
                            درخواست خرید
                          </a>
                          <a href="#" className="like-icon"></a>
                        </div>
                      </div>
                      <div className="col-body">
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
                          <span className="tag-gift">
                            <img
                              src="img/gift.svg"
                              width="22"
                              height="22"
                              alt=""
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="cols">
                      <div className="col-img">
                        <div className="tags tags-off persian-num">30 %</div>
                        <img
                          src="img/artworks/nqliiocbif@3x.jpg"
                          width="840"
                          height="924"
                          alt="آرتیبیشن"
                          className="img-responsive"
                        />
                        <div className="tab-overly">
                          <a href="#" className="btn-see">
                            <span className="view-icon pull-right"></span>
                            <span>مشاهده اثر</span>
                          </a>
                          <a href="#" className="btn-sale">
                            درخواست خرید
                          </a>
                          <a href="#" className="like-icon"></a>
                        </div>
                      </div>
                      <div className="col-body">
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
                        </div>
                      </div>
                    </div>
                    <div className="cols">
                      <div className="col-img">
                        <div className="tags tags-spacial">ویژه</div>
                        <div className="tags tags-off persian-num">33 %</div>
                        <img
                          src="img/artworks/ucuurcufbm@3x.jpg"
                          width="840"
                          height="1259"
                          alt="آرتیبیشن"
                          className="img-responsive"
                        />
                        <div className="tab-overly">
                          <a href="#" className="btn-see">
                            <span className="view-icon pull-right"></span>
                            <span>مشاهده اثر</span>
                          </a>
                          <a href="#" className="btn-sale">
                            درخواست خرید
                          </a>
                          <a href="#" className="like-icon"></a>
                        </div>
                      </div>
                      <div className="col-body">
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
                        </div>
                      </div>
                    </div>
                    <div className="cols">
                      <div className="col-img">
                        <img
                          src="img/artworks/jpaytrkase@3x.jpg"
                          width="840"
                          height="1259"
                          alt="آرتیبیشن"
                          className="img-responsive"
                        />
                        <div className="tab-overly">
                          <a href="#" className="btn-see">
                            <span className="view-icon pull-right"></span>
                            <span>مشاهده اثر</span>
                          </a>
                          <a href="#" className="btn-sale">
                            درخواست خرید
                          </a>
                          <a href="#" className="like-icon"></a>
                        </div>
                      </div>
                      <div className="col-body">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="cols">
                      <div className="col-img">
                        <img
                          src="img/artworks/3.jpg"
                          width="840"
                          height="850"
                          alt="آرتیبیشن"
                          className="img-responsive"
                        />
                        <div className="tab-overly">
                          <a href="#" className="btn-see">
                            <span className="view-icon pull-right"></span>
                            <span>مشاهده اثر</span>
                          </a>
                          <a href="#" className="btn-sale">
                            درخواست خرید
                          </a>
                          <a href="#" className="like-icon"></a>
                        </div>
                      </div>
                      <div className="col-body">
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
                        </div>
                      </div>
                    </div>
                    <div className="cols finished">
                      <div className="col-img">
                        <img
                          src="img/artworks/rdbewaopdm@3x.jpg"
                          width="840"
                          height="1120"
                          alt="آرتیبیشن"
                          className="img-responsive"
                        />
                        <div className="tab-overly">
                          <a href="#" className="btn-see">
                            <span className="view-icon pull-right"></span>
                            <span>مشاهده اثر</span>
                          </a>
                          <a href="#" className="btn-sale">
                            درخواست خرید
                          </a>
                          <a href="#" className="like-icon"></a>
                        </div>
                      </div>
                      <div className="col-body">
                        <div className="finished-tag">فروخته شد</div>

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
                        </div>
                      </div>
                    </div>
                    <div className="cols">
                      <div className="col-img">
                        <img
                          src="img/artworks/hezvtaokhv@3x.jpg"
                          width="840"
                          height="1130"
                          alt="آرتیبیشن"
                          className="img-responsive"
                        />
                        <div className="tab-overly">
                          <a href="#" className="btn-see">
                            <span className="view-icon pull-right"></span>
                            <span>مشاهده اثر</span>
                          </a>
                          <a href="#" className="btn-sale">
                            درخواست خرید
                          </a>
                          <a href="#" className="like-icon"></a>
                        </div>
                      </div>
                      <div className="col-body">
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
                        </div>
                      </div>
                    </div>
                    <div className="cols">
                      <div className="col-img">
                        <img
                          src="img/artworks/ffhxzfmfyx@3x.jpg"
                          width="840"
                          height="840"
                          alt="آرتیبیشن"
                          className="img-responsive"
                        />
                        <div className="tab-overly">
                          <a href="#" className="btn-see">
                            <span className="view-icon pull-right"></span>
                            <span>مشاهده اثر</span>
                          </a>
                          <a href="#" className="btn-sale">
                            درخواست خرید
                          </a>
                          <a href="#" className="like-icon"></a>
                        </div>
                      </div>
                      <div className="col-body">
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
                        </div>
                      </div>
                    </div>
                    <div className="cols">
                      <div className="col-img">
                        <img
                          src="img/artworks/lhggrzlgoc@3x.jpg"
                          width="840"
                          height="1130"
                          alt="آرتیبیشن"
                          className="img-responsive"
                        />
                        <div className="tab-overly">
                          <a href="#" className="btn-see">
                            <span className="view-icon pull-right"></span>
                            <span>مشاهده اثر</span>
                          </a>
                          <a href="#" className="btn-sale">
                            درخواست خرید
                          </a>
                          <a href="#" className="like-icon"></a>
                        </div>
                      </div>
                      <div className="col-body">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="cols">
                      <div className="col-img">
                        <img
                          src="img/artworks/lhggrzlgoc@3x.jpg"
                          width="840"
                          height="1130"
                          alt="آرتیبیشن"
                          className="img-responsive"
                        />
                        <div className="tab-overly">
                          <a href="#" className="btn-see">
                            <span className="view-icon pull-right"></span>
                            <span>مشاهده اثر</span>
                          </a>
                          <a href="#" className="btn-sale">
                            درخواست خرید
                          </a>
                          <a href="#" className="like-icon"></a>
                        </div>
                      </div>
                      <div className="col-body">
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
                        </div>
                      </div>
                    </div>
                    <div className="cols">
                      <div className="col-img">
                        <img
                          src="img/artworks/hyxvpfinmx@3x.jpg"
                          width="840"
                          height="1259"
                          alt="آرتیبیشن"
                          className="img-responsive"
                        />
                        <div className="tab-overly">
                          <a href="#" className="btn-see">
                            <span className="view-icon pull-right"></span>
                            <span>مشاهده اثر</span>
                          </a>
                          <a href="#" className="btn-sale">
                            درخواست خرید
                          </a>
                          <a href="#" className="like-icon"></a>
                        </div>
                      </div>
                      <div className="col-body">
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
                        </div>
                      </div>
                    </div>
                    <div className="cols">
                      <div className="col-img">
                        <img
                          src="img/artworks/ayvglbkdfo@3x.jpg"
                          width="840"
                          height="840"
                          alt="آرتیبیشن"
                          className="img-responsive"
                        />
                        <div className="tab-overly">
                          <a href="#" className="btn-see">
                            <span className="view-icon pull-right"></span>
                            <span>مشاهده اثر</span>
                          </a>
                          <a href="#" className="btn-sale">
                            درخواست خرید
                          </a>
                          <a href="#" className="like-icon"></a>
                        </div>
                      </div>
                      <div className="col-body">
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
                        </div>
                      </div>
                    </div>
                    <div className="cols">
                      <div className="col-img">
                        <img
                          src="img/artworks/gbazvsspbk@3x.jpg"
                          width="840"
                          height="840"
                          alt="آرتیبیشن"
                          className="img-responsive"
                        />
                        <div className="tab-overly">
                          <a href="#" className="btn-see">
                            <span className="view-icon pull-right"></span>
                            <span>مشاهده اثر</span>
                          </a>
                          <a href="#" className="btn-sale">
                            درخواست خرید
                          </a>
                          <a href="#" className="like-icon"></a>
                        </div>
                      </div>
                      <div className="col-body">
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
                        </div>
                      </div>
                    </div>
                    <div className="cols">
                      <div className="col-img">
                        <img
                          src="img/artworks/rdbewaopdm@3x.jpg"
                          width="840"
                          height="1120"
                          alt="آرتیبیشن"
                          className="img-responsive"
                        />
                        <div className="tab-overly">
                          <a href="#" className="btn-see">
                            <span className="view-icon pull-right"></span>
                            <span>مشاهده اثر</span>
                          </a>
                          <a href="#" className="btn-sale">
                            درخواست خرید
                          </a>
                          <a href="#" className="like-icon"></a>
                        </div>
                      </div>
                      <div className="col-body">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-pagination">
                <ul className="pagination">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllPromotions;
