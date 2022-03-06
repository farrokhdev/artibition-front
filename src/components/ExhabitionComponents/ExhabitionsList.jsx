import React from "react";
// import { ExhabitionFilters } from "../Filters/ExhabitionFilters";

export const ExhabitionsList = () => {
  return (
    <>
      <div className="default-content">
        <div className="content-header">
          <div className="row">
            <div className="col-sm-3 col-xs-6">
              <div type="button" className="filter-btn">
                <img src="img/Filter.svg" width="16" height="15" alt="" />
                <span>فیلتر</span>
                <button className="btn clear-tag">
                  <img src="img/clear.svg" width="10" height="10" alt="" />
                  <span>حذف همه</span>
                </button>
              </div>
            </div>
            <div className="col-xs-6 col-sm-offset-3">
              <div className="form-group pull-left">
                <select className="form-control" id="sel1">
                  <option>محبوب ترین‌ها</option>
                  <option>پرفروش</option>
                  <option>پربازدید</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="content-body">
          <div className="row">
            {/* <ExhabitionFilters /> */}

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
    </>
  );
};
