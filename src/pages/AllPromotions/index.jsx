import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { ArtworkRemoveFilter, Banner } from "../../components/ArtworksPage";
import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian_en from "react-date-object/locales/gregorian_en";
import apiServices from "../../utils/api.services";
import { PROMOTIONS_ALL_PRODUCTS } from "../../utils";
import ArtworkCard from "../../components/ArtworksPage/ArtworkCard";
import queryString from "query-string";

const AllPromotions = () => {
  const [search, setSearch] = useState();
  const [params, setParams] = useState({
    status: "active",
  });
  const [selectedOption, setSelectedOption] = useState("popularity");
  const [artworks, setArtworks] = useState();
  const [paginationConfig, setPaginationConfig] = useState();
  const [selectedPage, setSelectedPage] = useState();

  const handleBannerSearchInputChanged = (text) => setSearch(text);
  const handleBannerSearchClick = () =>
    setParams((state) => ({ ...state, search: search }));
  const [selectedDates, setSelectedDates] = useState([
    new DateObject({ calendar: persian, locale: persian_fa }),
  ]);
  const createPagination = () => {
    var elements = [];
    for (let i = 1; i <= paginationConfig?.last_page; i++) {
      elements.push(
        <li
          className={`${
            i === paginationConfig?.current_page_no ? "active" : ""
          } `}
        >
          <a onClick={() => setSelectedPage(i)}>{i}</a>
        </li>
      );
    }
    return elements;
  };
  useEffect(() => {
    const filter = [
      "page_size=12",
      queryString.stringify({
        page: selectedPage,
      }),
    ];
    if (selectedDates?.length > 0) {
      const date = selectedDates.map((item) =>
        item.convert(gregorian, gregorian_en).format("YYYY-MM-DD")
      );
      const filterDate = queryString.stringify(
        {
          active_promotion_product: [...date],
        },
        { arrayFormat: "comma", skipNull: true, skipEmptyString: true }
      );
      filter.push(filterDate);
    }
    getData(filter.join("&"));
  }, [selectedDates, selectedPage]);
  const getData = async (filter = "") => {
    //! filter is passed with queryString format
    apiServices
      .get(PROMOTIONS_ALL_PRODUCTS, filter)
      .then((res) => {
        if (res.data) {
          setArtworks(res.data.data.results);
          setPaginationConfig({
            current_page_no: res.data.data.current_page_no,
            last_page: res.data.data.last_page,
          });
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  // useEffect(() => {
  //   getData();
  // }, []);
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
                  {/* <div className="col-sm-4"> */}
                  {artworks?.map((artwork) => (
                    <ArtworkCard
                      key={artwork?.id}
                      product={{
                        ...artwork?.product,
                        toman_price: artwork?.toman_price,
                        dollar_price: artwork?.dollar_price,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="row-pagination">
                <ul className="pagination">{createPagination()}</ul>
                {/* <ul className="pagination">
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
                </ul> */}
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
