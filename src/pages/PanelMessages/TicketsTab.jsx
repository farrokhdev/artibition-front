import React, { useState, useEffect } from "react";
import i18next, { t } from "i18next";

import add_white_icon from "../../assets/img/add-white.png";
import { TICKET, TICKET_ID } from "../../utils";
import apiServices from "../../utils/api.services";
import ModalAddTicket from "./ModalAddTicket";
import ModalDatailTicket from "./ModalDatailTicket";
import queryString from "query-string";
import moment from "jalali-moment";
import { stateTo } from "../../utils/converToPersian";
function TicketsTab() {
  const [visibleAddTicketModal, setVisibleAddTicketModal] = useState(false);
  const [visibleDetailTicket, setVisibleDetailTicket] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [ticketDetail, setTicketDetail] = useState("");

  const [params, setParams] = useState({
    page: 1,
  });

  const handleShowAddTicket = () => {
    setVisibleAddTicketModal(true);
  };

  const handleShowDetailTicket = () => {
    setVisibleDetailTicket(true);
  };

  const getTickets = () => {
    apiServices
      .get(TICKET, queryString.stringify(params))
      .then((res) => {
        console.log(res.data.data);
        setTickets(res.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTicketId = (id) => {
    console.log("id=>", id);
    apiServices
      .get(TICKET_ID(id), "")
      .then((res) => {
        setTicketDetail(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (visibleAddTicketModal === false) {
      getTickets();
    }
  }, [visibleAddTicketModal]);

  return (
    <>
      <div className="tickets">
        <div className="d-flex justify-custom mb-5">
          <button
            onClick={handleShowAddTicket}
            className="btn-blue btn-add-new-ticket"
          >
            <div className="d-flex box-dir-reverse">
              <img src={add_white_icon} alt="add-icon" className="mx-2" />
              <span>{t("content-panel-messages.tabs.tickets.new_ticket")}</span>
            </div>
          </button>
        </div>

        {tickets?.length
          ? tickets?.map((item, key) => {
              {
                console.log("item?.i===>", item?.id);
              }
              return (
                <div
                  className={"ticket-block"}
                  data-toggle="modal"
                  data-target="#ticket-modal"
                  onClick={() => {
                    getTicketId(item?.id);
                  }}
                  key={key}
                >
                  <div className="ticket-header">
                    <div className="d-block d-md-flex box-dir-reverse">
                      <div className="col ">
                        <div className="d-block d-md-flex box-dir-reverse ">
                          <div className="col px-0">
                            <div className="d-flex box-dir-reverse">
                              <h3 className="ticket-title text-dir">
                                <span>{item?.title}</span>
                              </h3>
                            </div>
                          </div>
                          <div className="col px-0">
                            <div className="d-flex box-dir-reverse">
                              <h3 className="ticket-title text-dir">
                                <span
                                  className={
                                    stateTo(item?.state).type +
                                    " ticket-status "
                                  }
                                >
                                  {stateTo(item?.state).title}
                                </span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <div className="d-flex box-dir-reverse   w-100  justify-content-md-end">
                          <span className="ticket-date  persian-num text-dir">
                            {item?.creation_date
                              ? moment(item?.creation_date, "YYYY/MM/DD")
                                  .locale(
                                    i18next.language === "fa-IR" ? "fa" : "en"
                                  )
                                  .format("YYYY/MM/DD")
                              : ""}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ticket-body">
                    <div className="d-flex box-dir-reverse mt-0 mt-lg-4">
                      <p className="text-justify text-dir ">{item?.body}</p>
                    </div>
                    <div className="d-flex box-dir-reverse">
                      <div
                        onClick={handleShowDetailTicket}
                        className="ticket-more pull-dir"
                      >
                        <span>{t("content-panel-messages.veiw")}</span>
                        <span className="glyphicon glyphicon-menu-left"></span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}

        <ModalDatailTicket
          ticketDetail={ticketDetail}
          setVisibleDetailTicket={setVisibleDetailTicket}
          visibleDetailTicket={visibleDetailTicket}
        />

        <ModalAddTicket
          visibleAddTicketModal={visibleAddTicketModal}
          setVisibleAddTicketModal={setVisibleAddTicketModal}
        />
      </div>
    </>
  );
}

export default TicketsTab;
