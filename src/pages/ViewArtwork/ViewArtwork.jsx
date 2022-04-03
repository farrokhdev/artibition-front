import React, { useEffect, useState } from "react";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import { t } from "i18next";
import GeneralInfo from "./GeneralInfo";
import PriceInfo from "./PriceInfo";
import { useLocation, useNavigate } from "react-router-dom";
import apiServices from "../../utils/api.services";
import { PRODUCT_DETAIL } from "../../utils";

const ViewArtwork = () => {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState();
  const navigate = useNavigate();

  const getData = async (id) => {
    apiServices
      .get(PRODUCT_DETAIL(id), "")
      .then((res) => {
        console.log(
          "🚀 ~ file: ViewArtwork.jsx ~ line 21 ~ .then ~ res.data.data",
          res.data.data
        );
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const location = useLocation();

  useEffect(() => {
    const id = new URLSearchParams(location.search).get("id");
    getData(id);
  }, []);

  const next = () => {
    if (current === steps.length - 1) {
      navigate(-1);
    } else setCurrent(current + 1);
  };

  const prev = () => {
    if (current === 0) {
      navigate(-1);
    } else setCurrent(current - 1);
  };

  const steps = [
    {
      title: t("content-panel-add-artwork.step4"),
      content: <GeneralInfo prev={prev} next={next} data={data} />,
      icon: false,
    },
    {
      title: t("content-panel-add-artwork.step5"),
      content: <PriceInfo prev={prev} next={next} data={data} />,
      icon: false,
    },
  ];

  return (
    <>
      <HeaderPanel t={t} />

      <div className="panel-style container mx-auto px-0 w-100 bg-white">
        {/* <Steps 
            className='d-flex box-dir-reverse'
            progressDot={customDot}
            current={current}>
            {steps.map(item => (
            <Step key={item.title} title={item.title} />
            ))}
        </Steps> */}

        {/* <Steps className="d-flex dir" progressDot current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps> */}

        <div className="steps-content pt-5 px-4 px-sm-0">
          {steps[current].content}
        </div>
        {/* <div className="steps-action">
            {current < steps.length - 1 && (
            <Button type="success" onClick={() => next()}>
                Next
            </Button>
            )}
            {current === steps.length - 1 && (
            <Button type="success" onClick={() => message.success('Processing complete!')}>
                Done
            </Button>
            )}
            {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
            </Button>
            )}
        </div> */}
      </div>
    </>
  );
};

export default ViewArtwork;
