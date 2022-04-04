import React, { useEffect, useState } from "react";
import clear_icon from "../../../assets/img/clear.svg";
import { useTranslation } from "react-i18next";
import { EXHIBITION_LIST, GALLERY_LIST } from "../../../utils";
import apiServices from "../../../utils/api.services";
import queryString from "query-string";
import ExhibitionFilterGallery from "./ExhibitionFilterGallery";

const ExhibitionsList = () => {
  const { t, i18n } = useTranslation();
  const [exhibitions, setExhibitions] = useState();
  const [allExhibitions, setAllExhibitions] = useState([]);
  const [galleries, setGalleries] = useState([]);
  const [selectedGalleries, setSelectedGalleries] = useState([]);
  console.log(
    "🚀 ~ file: ExhibitionsList.jsx ~ line 12 ~ ExhibitionsList ~ selectedGalleries",
    selectedGalleries
  );
  const handleFilterGallery = (selected, id) => {
    console.log(
      "🚀 ~ file: ExhibitionsList.jsx ~ line 17 ~ handleFilterGallery ~ id",
      id,
      selected
    );
    let tempSelectedGalleries;
    if (selected) {
      tempSelectedGalleries = [...selectedGalleries, id];
    } else {
      tempSelectedGalleries = selectedGalleries.filter((item) => item !== id);
      console.log("hi", tempSelectedGalleries);
    }
    setSelectedGalleries(tempSelectedGalleries);
  };

  const getData = (filter = "") => {
    return new Promise((resolve, reject) => {
      apiServices
        .get(EXHIBITION_LIST, queryString.stringify({ ...filter }))
        .then((res) => {
          setExhibitions(res.data.data);
          resolve({ list: res.data.data.results });
        })
        .catch((err) => {
          console.log(err);
          reject();
        });
    });
  };
  const getAllExihibitions = async () => {
    const result = await getData();
    setAllExhibitions(result?.list);
  };
  const getGalleries = (filter) => {
    console.log(
      "🚀 ~ file: ExhibitionsList.jsx ~ line 53 ~ getGalleries ~ filter",
      filter
    );
    apiServices
      .get(GALLERY_LIST, queryString.stringify({ page_size: 1000, ...filter }))
      .then((res) => {
        setGalleries(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllExihibitions();
    getGalleries();
  }, []);
  return (
    <div className="container">
      <div className="default-content">
        <div className="content-header">
          <div className="row">
            <div className="col-sm-3 ">
              <div type="button" className="filter-btn">
                <img src="img/Filter.svg" width="16" height="15" alt="" />
                <span>{t("exhibitions-page.filter")}</span>
                <button className="btn clear-tag">
                  <img src={clear_icon} width="10" height="10" alt="" />
                  <span>{t("exhibitions-page.remove-all")}</span>
                </button>
              </div>
            </div>
            <div className="col-xs-6 col-sm-offset-3"></div>
          </div>
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
                        href="#collapse9"
                      >
                        {t("exhibitions-page.galleries")}
                      </a>
                    </h4>
                  </div>
                  <div id="collapse9" className="panel-collapse collapse in">
                    <div className="panel-body ">
                      <ExhibitionFilterGallery
                        galleries={galleries?.results}
                        getGalleries={getGalleries}
                        handleFilterGallery={handleFilterGallery}
                      />
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        aria-expanded="true"
                        href="#collapse11"
                      >
                        {t("exhibitions-page.exhibitions")}
                      </a>
                    </h4>
                  </div>
                  <div id="collapse11" className="panel-collapse collapse in">
                    <div className="panel-body ">
                      <div className="nl-input filter-search ">
                        <input
                          placeholder={t("exhibitions-page.search-exhibition")}
                        />
                        <button className="noborder" type="button">
                          <img
                            src="img/search.svg"
                            width="24"
                            height="24"
                            alt=""
                          />
                        </button>
                        <div className="constant-height md-mrgt30">
                          <label className="lable-checkbox">
                            <input type="checkbox" value="" />
                            <span>نمایشگاه مجازی هنر نورانی نئون</span>
                            <span className="checkmark"></span>
                          </label>
                          <label className="lable-checkbox">
                            <input type="checkbox" value="" />
                            <span>نمایشگاه مجازی هنر ترکیب رنگ</span>
                            <span className="checkmark"></span>
                          </label>
                          <label className="lable-checkbox">
                            <input type="checkbox" value="" />
                            <span>نمایشگاه تیرآرت ۹۹</span>
                            <span className="checkmark"></span>
                          </label>
                          <label className="lable-checkbox">
                            <input type="checkbox" value="" />
                            <span>نمایشگاه عکاسی طبیعت ایران</span>
                            <span className="checkmark"></span>
                          </label>
                          <label className="lable-checkbox">
                            <input type="checkbox" value="" />
                            <span>نمایشگاه مجازی نقاشی‌های پرتره</span>
                            <span className="checkmark"></span>
                          </label>
                          <label className="lable-checkbox">
                            <input type="checkbox" value="" />
                            <span>نمایشگاه عکاسی طبیعت ایران</span>
                            <span className="checkmark"></span>
                          </label>
                          <label className="lable-checkbox">
                            <input type="checkbox" value="" />
                            <span>نمایشگاه مجازی نقاشی‌های پرتره</span>
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        aria-expanded="true"
                        href="#collapse10"
                      >
                        {t("exhibitions-page.exhibition-type")}
                      </a>
                    </h4>
                  </div>
                  <div id="collapse10" className="panel-collapse collapse in">
                    <div className="panel-body">
                      <label className="lable-checkbox">
                        <input type="checkbox" checked value="" />
                        <span>{t("exhibitions-page.all")}</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="lable-checkbox">
                        <input type="checkbox" value="" />
                        <span>{t("exhibitions-page.local-exhibition")}</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="lable-checkbox">
                        <input type="checkbox" value="" />
                        <span>{t("exhibitions-page.online-exhibition")}</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="lable-checkbox">
                        <input type="checkbox" value="" />
                        <span>{t("exhibitions-page.promotions")}</span>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row-events">
                <div className="col-sm-4">
                  {}
                  <a href="#" className="cols">
                    <div className="col-img">
                      <div className="tags tags-events">
                        {t("exhibitions-page.local")}
                      </div>
                      <img
                        src="img/gallery/106.jpg"
                        width="840"
                        height="840"
                        alt="آرتیبیشن"
                        className="img-responsive"
                      />
                    </div>
                    <div className="col-body">
                      <div className="finished-tag">
                        {t("exhibitions-page.finished")}
                      </div>
                      <h6 className="col-title">
                        <span className="col-name">
                          نمایشگاه مجازی هنر عکاسی
                        </span>
                      </h6>
                      <div className="col-dimension">
                        <span className="col-dimension-title">
                          گالری آرتیبیشن
                        </span>
                      </div>
                      <div className="coundown">
                        <div
                          className="timers"
                          data-newdate="August 28, 2020 12:00 PDT"
                        >
                          <span className="timer-status">
                            {t("exhibitions-page.to-end")}
                          </span>
                          <div className="days"></div>
                          <div className="hours"></div>
                          <div className="minutes"></div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-sm-4">
                  <a href="#" className="cols">
                    <div className="col-img">
                      <div className="tags tags-events">حضوری</div>
                      <img
                        src="img/gallery/112.jpg"
                        width="840"
                        height="840"
                        alt="آرتیبیشن"
                        className="img-responsive"
                      />
                    </div>
                    <div className="col-body">
                      <div className="finished-tag">پایان یافته</div>
                      <h6 className="col-title">
                        <span className="col-name">
                          نمایشگاه مجازی هنر عکاسی
                        </span>
                      </h6>
                      <div className="col-dimension">
                        <span className="col-dimension-title">
                          گالری آرتیبیشن
                        </span>
                      </div>
                      <div className="coundown">
                        <div
                          className="timers"
                          data-newdate="August 28, 2020 12:00 PDT"
                        >
                          <span className="timer-status">تا پایان</span>
                          <div className="days"></div>
                          <div className="hours"></div>
                          <div className="minutes"></div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-4">
                  <a href="#" className="cols">
                    <div className="col-img">
                      <div className="tags tags-events">حضوری</div>
                      <img
                        src="img/gallery/107.jpg"
                        width="840"
                        height="840"
                        alt="آرتیبیشن"
                        className="img-responsive"
                      />
                    </div>
                    <div className="col-body">
                      <div className="finished-tag">پایان یافته</div>
                      <h6 className="col-title">
                        <span className="col-name">
                          نمایشگاه مجازی هنر عکاسی
                        </span>
                      </h6>
                      <div className="col-dimension">
                        <span className="col-dimension-title">
                          گالری آرتیبیشن
                        </span>
                      </div>
                      <div className="coundown">
                        <div
                          className="timers"
                          data-newdate="August 28, 2020 12:00 PDT"
                        >
                          <span className="timer-status">تا پایان</span>
                          <div className="days"></div>
                          <div className="hours"></div>
                          <div className="minutes"></div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-4">
                  <a href="#" className="cols">
                    <div className="col-img">
                      <div className="tags tags-events">حضوری</div>
                      <img
                        src="img/gallery/113.jpg"
                        width="840"
                        height="840"
                        alt="آرتیبیشن"
                        className="img-responsive"
                      />
                    </div>
                    <div className="col-body">
                      <div className="finished-tag">پایان یافته</div>
                      <h6 className="col-title">
                        <span className="col-name">
                          نمایشگاه مجازی هنر عکاسی
                        </span>
                      </h6>
                      <div className="col-dimension">
                        <span className="col-dimension-title">
                          گالری آرتیبیشن
                        </span>
                      </div>
                      <div className="coundown">
                        <div
                          className="timers"
                          data-newdate="August 28, 2020 12:00 PDT"
                        >
                          <span className="timer-status">تا پایان</span>
                          <div className="days"></div>
                          <div className="hours"></div>
                          <div className="minutes"></div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-sm-4">
                  <a href="#" className="cols">
                    <div className="col-img">
                      <div className="tags tags-events">حضوری</div>
                      <img
                        src="img/gallery/114.jpg"
                        width="840"
                        height="840"
                        alt="آرتیبیشن"
                        className="img-responsive"
                      />
                    </div>
                    <div className="col-body">
                      <div className="finished-tag">پایان یافته</div>
                      <h6 className="col-title">
                        <span className="col-name">
                          نمایشگاه مجازی هنر عکاسی
                        </span>
                      </h6>
                      <div className="col-dimension">
                        <span className="col-dimension-title">
                          گالری آرتیبیشن
                        </span>
                      </div>
                      <div className="coundown">
                        <div
                          className="timers"
                          data-newdate="August 28, 2020 12:00 PDT"
                        >
                          <span className="timer-status">تا پایان</span>
                          <div className="days"></div>
                          <div className="hours"></div>
                          <div className="minutes"></div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-4">
                  <a href="#" className="cols">
                    <div className="col-img">
                      <div className="tags tags-events">حضوری</div>
                      <img
                        src="img/gallery/115.jpg"
                        width="840"
                        height="840"
                        alt="آرتیبیشن"
                        className="img-responsive"
                      />
                    </div>
                    <div className="col-body">
                      <div className="finished-tag">پایان یافته</div>
                      <h6 className="col-title">
                        <span className="col-name">
                          نمایشگاه مجازی هنر عکاسی
                        </span>
                      </h6>
                      <div className="col-dimension">
                        <span className="col-dimension-title">
                          گالری آرتیبیشن
                        </span>
                      </div>
                      <div className="coundown">
                        <div
                          className="timers"
                          data-newdate="August 28, 2020 12:00 PDT"
                        >
                          <span className="timer-status">تا پایان</span>
                          <div className="days"></div>
                          <div className="hours"></div>
                          <div className="minutes"></div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-4">
                  <a href="#" className="cols">
                    <div className="col-img">
                      <div className="tags tags-events">حضوری</div>
                      <img
                        src="img/gallery/116.jpg"
                        width="840"
                        height="840"
                        alt="آرتیبیشن"
                        className="img-responsive"
                      />
                    </div>
                    <div className="col-body">
                      <div className="finished-tag">پایان یافته</div>
                      <h6 className="col-title">
                        <span className="col-name">
                          نمایشگاه مجازی هنر عکاسی
                        </span>
                      </h6>
                      <div className="col-dimension">
                        <span className="col-dimension-title">
                          گالری آرتیبیشن
                        </span>
                      </div>
                      <div className="coundown">
                        <div
                          className="timers"
                          data-newdate="August 28, 2020 12:00 PDT"
                        >
                          <span className="timer-status">تا پایان</span>
                          <div className="days"></div>
                          <div className="hours"></div>
                          <div className="minutes"></div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="clearfix"></div>
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
    </div>
  );
};

export default ExhibitionsList;
