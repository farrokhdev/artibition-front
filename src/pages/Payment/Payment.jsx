import React, { useEffect, useState } from "react";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import { t } from "i18next";
import BasketFooterPanel from "../../components/BasketFooterPanel/BasketFooterPanel";
import BasketFooterPanelNoBox from "../GalleryPanelSelectArtworkSource/BasketFooterPanelNoBox";
import { Steps, Button, message, Popover } from "antd";
import AddressStep from "./AddressStep";
import PayStep from "./PayStep";
import HeaderPayment from "../../components/HeaderPayment/HeaderPayment";
import { useLocation } from "react-router-dom";
import apiServices from "../../utils/api.services";
import { ORDER } from "../../utils";
import axios from "axios";
import { Token } from "../../utils/utils";
import ReceiverStep from "./ReceiverStep";

const { Step } = Steps;

function Payment() {
  const [current, setCurrent] = useState(0);
  const [orderID, setOrderID] = useState();
  const [order, setOrder] = useState();
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const getData = (id) => {
    try {
      apiServices
        .get(ORDER(id))
        .then((res) => {
          if (res?.data?.code === 200) {
            setOrder(res?.data?.data);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location.state === null) return;
    const { orderId: id } = location.state;

    if (id !== undefined) {
      setOrderID(id);
      getData(id);
    }
  }, []);

  // const customDot = (dot, { status, index }) => (
  //     <Popover
  //         content={
  //             <span>
  //                 مرحله {index} وضعیت: {status}
  //             </span>
  //         }
  //     >
  //         {dot}
  //     </Popover>
  // );

  const steps = [
    {
      title: t("payment.select_address_step"),
      // content: <ArtworkInformation next={next} />,
      content: <AddressStep next={next} prev={prev} order={order} />,
      icon: false,
    },
    {
      title: t("payment.address_step.modal.receiver_information"),
      content: <ReceiverStep next={next} prev={prev} order={order} />,
      icon: false,
    },
    {
      title: t("payment.payment_step"),
      // content: <SellInformation prev={prev} next={next} />,
      content: <PayStep next={next} prev={prev} order={order} />,
      icon: false,
    },
    {
      title: t("payment.bill_shipment_step"),
      // content: <SellInformation prev={prev} next={next} />,
      content: <div></div>,
      icon: false,
    },
  ];
  if (loading) {
    return <div>loading ...</div>;
  }
  return (
    <>
      <div style={{ height: "100vh" }}>
        {/* <HeaderPanel t={t} /> */}
        <HeaderPayment />
        <div className="container">
          {/* <div className="adv-btn-orginal">
                        <button type="button" className="btn-black center-block" data-target="#exist-artworks" data-toggle="modal">
                            {t("gallery-panel-select-artwork-source.select_from_exist_artwork")}
                        </button>
                        <button type="button" className="btn-black center-block mrgt16" data-target="#modal-edit-price" data-toggle="modal">
                            {t("gallery-panel-select-artwork-source.add_new_artwork")}
                        </button>
                    </div> */}

          <Steps
            className="d-flex payment-step-antd dir"
            progressDot
            current={current}
            responsive={false}
          >
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>

          <div className="steps-content pt-5 px-4 px-sm-0">
            {steps[current].content}
          </div>
        </div>
      </div>
      <BasketFooterPanelNoBox />
    </>
  );
}

export default Payment;
