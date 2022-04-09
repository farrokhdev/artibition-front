import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

import { connect } from "react-redux";
import {
  clearFilterStorage,
  setFilters,
} from "../../redux/reducers/Filters/filters.action";
import { ArtworksList, Banner } from "../../components/ArtworksPage";

function ArtworksPage(props) {
  const [params, setParams] = useState({
    status: "active",
    // order: selectedOption,
    // page: 1,
    // size_id: size_id,
    // category_id: category_id,
    // toman_price_range_min: toman_price_range_min,
    // toman_price_range_max: toman_price_range_max,
    // dollar_price_range_min: dollar_price_range_min,
    // dollar_price_range_max: dollar_price_range_max,
    // discount: discountو
  });
  const [search, setSearch] = useState();

  const handleBannerSearchInputChanged = (text) => setSearch(text);
  const handleBannerSearchClick = () =>
    setParams((state) => ({ ...state, search: search }));
  return (
    <>
      <div className="container mx-auto px-0 w-100 bg-white">
        <Header />
        <Menu />
        <Banner
          handleBannerSearchInputChanged={handleBannerSearchInputChanged}
          handleBannerSearchClick={handleBannerSearchClick}
        />
        <ArtworksList
          params={params}
          setParams={setParams}
          search={search}
          setSearch={setSearch}
          clearFilterStorage={props.clearFilterStorage}
          filtersReducer={props?.filters?.filters_reducer}
        />
      </div>

      <Footer />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilters: (data) => dispatch(setFilters(data)),
    clearFilterStorage: (data) => dispatch(clearFilterStorage(data)),
  };
};

const mapStateToProps = (store) => {
  return {
    filters: store.filtersReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksPage);
