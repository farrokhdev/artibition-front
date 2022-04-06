import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { EXHIBITION_LIST, GALLERY_LIST } from "../../../utils";
import apiServices from "../../../utils/api.services";
import queryString from "query-string";
import ExhibitionFilterGallery from "./ExhibitionFilterGallery";
import ExhibitionRemoveFilters from "./ExhibitionRemoveFilters";
import ExhibitionsFilterExhibition from "./ExhibitionsFilterExhibition";
import ExhibitionsFilterType from "./ExhibitionsFilterType";
import ExhibitionCard from "./ExhibitionCard";
const ExhibitionsList = () => {
  const { t, i18n } = useTranslation();

  const [exhibitions, setExhibitions] = useState();
  const [allExhibitions, setAllExhibitions] = useState([]);
  const [galleries, setGalleries] = useState([]);
  const [selectedGalleries, setSelectedGalleries] = useState([]);
  const [selectedExhibitions, setSelectedExhibitions] = useState([]);
  const handleFilterGallery = (selected, id) => {
    let tempSelectedGalleries;
    if (selected) {
      tempSelectedGalleries = [...selectedGalleries, id];
    } else {
      tempSelectedGalleries = selectedGalleries.filter((item) => item !== id);
    }
    setSelectedGalleries(tempSelectedGalleries);
  };
  const handleFilterExhibition = (selected, id, galleryId) => {
    let tempSelectedExhibitions;
    if (selected) {
      tempSelectedExhibitions = [...selectedExhibitions, { id, galleryId }];
    } else {
      tempSelectedExhibitions = selectedExhibitions.filter(
        (item) => item.id !== id
      );
    }
    setSelectedExhibitions(tempSelectedExhibitions);
  };

  const getData = (filter = "") => {
    return new Promise((resolve, reject) => {
      apiServices
        .get(
          EXHIBITION_LIST,
          queryString.stringify({ page_size: 12, ...filter })
        )
        .then((res) => {
          resolve(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          reject();
        });
    });
  };
  const getAllExhibitions = async () => {
    const result = await getData({ page_size: 1000 });
    setAllExhibitions(result?.results);
  };
  const getGalleries = (filter) => {
    apiServices
      .get(GALLERY_LIST, queryString.stringify({ page_size: 1000, ...filter }))
      .then((res) => {
        setGalleries(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getExhibitionsForCards = async (filter) => {
    //here we should add sidebar filters
    const result = await getData(filter);
    setExhibitions(result);
  };
  const getExhibitionsForSidebar = async (filter) => {
    const result = await getData({ page_size: 1000, ...filter });
    setAllExhibitions(result?.results);
  };
  const handleChangeType = (type) => {};
  useEffect(() => {
    getAllExhibitions();
    getExhibitionsForCards();
    getGalleries();
  }, []);
  const createPagination = () => {
    var elements = [];
    for (let i = 1; i <= exhibitions?.last_page; i++) {
      elements.push(
        <li
          className={`${i === exhibitions?.current_page_no ? "active" : ""} `}
        >
          <a onClick={() => getExhibitionsForCards({ page: i })}>{i}</a>
        </li>
      );
    }
    return elements;
  };
  return (
    <div className="container">
      <div className="default-content">
        <div className="content-header">
          <div className="row">
            <div className="col-sm-3 ">
              <ExhibitionRemoveFilters />
            </div>
            <div className="col-xs-6 col-sm-offset-3"></div>
          </div>
        </div>
        <div className="content-body">
          <div className="row">
            <div className="col-md-3 filter-side">
              <section className="panel-group" id="accordion">
                <ExhibitionFilterGallery
                  galleries={galleries?.results}
                  getGalleries={getGalleries}
                  handleFilterGallery={handleFilterGallery}
                />

                <ExhibitionsFilterExhibition
                  exhibitions={allExhibitions}
                  getExhibitions={getExhibitionsForSidebar}
                  handleFilterExhibition={handleFilterExhibition}
                />
                <ExhibitionsFilterType
                  t={t}
                  handleChangeType={handleChangeType}
                />
              </section>
            </div>
            <div className="col-md-9">
              <div className="row mb-5">
                {exhibitions?.results?.map((exhibition) => {
                  return (
                    <ExhibitionCard {...exhibition} t={t} key={exhibition.id} />
                  );
                })}
              </div>
              <div className="clearfix"></div>
              <div className="row-pagination">
                <ul className="pagination">{createPagination()}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionsList;
