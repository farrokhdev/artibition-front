import React, { useEffect, useState } from "react";
import BasketFooter from "../../components/BasketFooter/BasketFooter";
import { Steps, Button, message, Popover, Spin } from "antd";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import BasketFooterPanel from "../../components/BasketFooterPanel/BasketFooterPanel";
import ArtworkInformation from "./ArtworkInformation";
import SellInformation from "./SellInformation";
import LoginPersonalInfo from "./LoginPersonalInfo";
import LoginArtistInfoForm from "./LoginArtistInfoForm";
import LoginUploadArtworks from "./LoginUploadArtworks";
import { useLocation } from "react-router-dom";
import apiServices from "../../utils/api.services";
import { PRODUCT_DETAIL } from "../../utils";
import { isNil } from "lodash";
import { LoadingOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { Step } = Steps;

function AddArtwork() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [id, setId] = useState();
  const [artwork, setArtwork] = useState();
  const getArtwork = async (id) => {
    apiServices
      .get(PRODUCT_DETAIL(id), "")
      .then((res) => {
        setArtwork(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const { id } = location.state;
    if (!isNil(id)) {
      setId(id);
      getArtwork(id);
    }
  }, []);

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          مرحله {index} وضعیت: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );

  const steps = () => [
    {
      title: t("content-panel-add-artwork.step4"),
      content: <ArtworkInformation prev={prev} next={next} artwork={artwork} />,
      icon: false,
    },
    {
      title: t("content-panel-add-artwork.step5"),
      content: <SellInformation prev={prev} next={next} artwork={artwork} />,
      icon: false,
    },
  ];
  if (isNil(artwork) && !isNil(id))
    return (
      <>
        <HeaderPanel t={t} />
        <div
          className="panel-style container mx-auto px-0  bg-white"
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin
            tip={i18n.language === "fa-IR" ? "لطفا شکیبا باشید" : "Loading..."}
            indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
            spinning={isNil(artwork)}
          ></Spin>
        </div>
      </>
    );
  return (
    <>
      <HeaderPanel t={t} />

      <div className="panel-style container mx-auto px-0 w-100 bg-white">
        <Steps className="d-flex dir" progressDot current={current}>
          {steps().map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>

        <div className="steps-content pt-5 px-4 px-sm-0">
          {steps()[current].content}
        </div>
      </div>
    </>
  );
}

export default AddArtwork;
