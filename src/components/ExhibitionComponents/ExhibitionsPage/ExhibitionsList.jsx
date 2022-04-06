import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { EXHIBITION_LIST, GALLERY_LIST } from "../../../utils";
import apiServices from "../../../utils/api.services";
import queryString from "query-string";
import ExhibitionRemoveFilters from "./ExhibitionRemoveFilters";
import ExhibitionCard from "./ExhibitionCard";
import ExhibitionSidebar from "./ExhibitionSidebar";
const ExhibitionsList = () => {
  const { t, i18n } = useTranslation();
  const [exhibitions, setExhibitions] = useState();
  const [allExhibitions, setAllExhibitions] = useState([]);
  const [galleries, setGalleries] = useState([]);
  const [selectedGalleries, setSelectedGalleries] = useState([]);
  const [selectedExhibitions, setSelectedExhibitions] = useState([]);
  const [selectedExhibitionsType, setSelectedExhibitionsType] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const handleFilterGallery = (selected, id) => {
    let tempSelectedGalleries;
    if (selected) {
      tempSelectedGalleries = [...selectedGalleries, id];
    } else {
      tempSelectedGalleries = selectedGalleries.filter((item) => item !== id);
    }
    setSelectedGalleries(tempSelectedGalleries);
  };
  const handleChangeType = (selected, type) => {
    let tempSelectedType;

    if (selected) {
      if (type.length < 1) return;
      tempSelectedType = [...selectedExhibitionsType, type];
    } else {
      tempSelectedType = selectedExhibitionsType.filter(
        (item) => item !== type
      );
    }
    setSelectedExhibitionsType(tempSelectedType);
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

  const fetchExhibition = (filter = "") => {
    return new Promise((resolve, reject) => {
      apiServices
        .get(
          EXHIBITION_LIST,
          typeof filter === "string" && filter.length > 0
            ? filter
            : queryString.stringify({ page_size: 12, ...filter })
        )
        .then((res) => {
          resolve(res?.data?.data);
        })
        .catch((err) => {
          console.log(err);
          reject();
        });
    });
  };
  const getAllExhibitions = async () => {
    const result = await fetchExhibition({ page_size: 1000 });
    setAllExhibitions(result?.results);
  };
  const getGalleries = (filter) => {
    apiServices
      .get(GALLERY_LIST, queryString.stringify({ page_size: 1000, ...filter }))
      .then((res) => {
        setGalleries(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getExhibitionsForCards = async (filter) => {
    const result = await fetchExhibition(filter);
    setExhibitions(result);
  };
  const getExhibitionsForSidebar = async (filter) => {
    const result = await fetchExhibition({ page_size: 1000, ...filter });
    setAllExhibitions(result?.results);
  };

  useEffect(() => {
    const filterExhibitionCards = async () => {
      const filter = [
        "page_size=12",
        queryString.stringify({
          page: selectedPage,
        }),
        queryString.stringify(
          {
            gallery_id: [...selectedGalleries],
          },
          { arrayFormat: "comma", skipNull: true, skipEmptyString: true }
        ),
        queryString.stringify(
          {
            type: [...selectedExhibitionsType],
          },
          { arrayFormat: "comma", skipNull: true, skipEmptyString: true }
        ),
      ].join("&");

      getExhibitionsForCards(filter);
    };
    filterExhibitionCards();
  }, [
    selectedGalleries,
    selectedExhibitions,
    selectedExhibitionsType,
    selectedPage,
  ]);
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
          <a onClick={() => setSelectedPage(i)}>{i}</a>
        </li>
      );
    }
    return elements;
  };
  return (
    <div className="container">
      <div className="default-content">
        <div className="content-header">
          <div
            className={`row ${
              i18n.language === "fa-IR"
                ? "flex-row"
                : "flex-row-reverse text-left"
            }`}
          >
            <div className="col-sm-3 ">
              <ExhibitionRemoveFilters />
            </div>
            <div className="col-xs-6 col-sm-offset-3"></div>
          </div>
        </div>
        <div className="content-body">
          <div
            className={`${
              i18n.language === "fa-IR"
                ? "row flex-row"
                : "row flex-row-reverse"
            }`}
          >
            <div className="col-md-3 filter-side">
              <ExhibitionSidebar
                galleries={galleries?.results}
                getGalleries={getGalleries}
                handleFilterGallery={handleFilterGallery}
                exhibitions={allExhibitions}
                getExhibitions={getExhibitionsForSidebar}
                handleFilterExhibition={handleFilterExhibition}
                t={t}
                handleChangeType={handleChangeType}
              />
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
