import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { ArtworkRemoveFilter, Banner } from "../../components/ArtworksPage";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian_en from "react-date-object/locales/gregorian_en";
import apiServices from "../../utils/api.services";
import { PROMOTIONS_ALL_PRODUCTS } from "../../utils";

const AllPromotions = () => {
  const [search, setSearch] = useState();
  const [params, setParams] = useState({
    status: "active",
  });
  const [selectedOption, setSelectedOption] = useState("popularity");
  const [artworks, setArtworks] = useState();
  const handleBannerSearchInputChanged = (text) => setSearch(text);
  const handleBannerSearchClick = () =>
    setParams((state) => ({ ...state, search: search }));
  const [selectedDates, setSelectedDates] = useState([]);
  const date = selectedDates.map((item) =>
    item.convert(gregorian, gregorian_en).format("YYYY-MM-DD hh:mm:ss")
  );
  console.log("🚀 ~ file: index.jsx ~ line 25 ~ AllPromotions ~ date", date);
  const getData = async () => {
    apiServices
      .get(PROMOTIONS_ALL_PRODUCTS)
      .then((res) => {
        if (res.data) {
          setArtworks(res.data.data.results);
          console.log("res.data.data.results", res.data.data.results);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
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
                      <div className="caleander-event side-bar">
                        <Calendar
                          multiple
                          value={selectedDates}
                          onChange={setSelectedDates}
                          calendar={persian}
                          locale={persian_fa}
                          calendarPosition="bottom-right"
                          style={{ fontSize: "1rem" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
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
                    {artworks?.map((artwork) => (
                      <div className="cols">
                        <div className="col-img">
                          <img
                            src={artwork?.product?.medias[0]?.exact_url}
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
                            <span className="col-name">
                              artwork?.product?.translations?.fa?.artist_name
                            </span>
                            {/* <span className="col-name">آغداشلو</span> */}
                          </h6>
                          <div className="col-dimension">
                            <span className="col-dimension-title">ابعاد:</span>
                            <span className="col-dimension-body">
                              <span className="dimension-width">
                                {artwork?.product?.width}
                              </span>
                              <span> در </span>
                              <span className="dimension-height">
                                {artwork?.product?.height}
                              </span>
                            </span>
                          </div>
                          <div className="col-price">
                            <span className="col-price-num">
                              {artwork?.product?.toman_price}
                            </span>
                            <span className="col-price-unit">تومان</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* <div className="cols">
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
                    </div>*/}
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
