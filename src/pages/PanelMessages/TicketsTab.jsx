import { t } from 'i18next';
import React , {useState} from 'react';

import add_white_icon from '../../assets/img/add-white.png';
import ModalAddTicket from './ModalAddTicket';
import ModalDatailTicket from './ModalDatailTicket';

    function TicketsTab() {

        const [visibleAddTicketModal, setVisibleAddTicketModal] = useState(false);
        const [visibleDetailTicket, setVisibleDetailTicket] = useState(false);


        const handleShowAddTicket = () => {
            setVisibleAddTicketModal(true)
        }  
        
        const handleShowDetailTicket = () => {
            setVisibleDetailTicket(true)
        }


    return (
    <>
    
    <div className="tickets">
    
        <div className="d-flex justify-custom mb-5">
            <button onClick={handleShowAddTicket} className='btn-blue btn-add-new-ticket'>
                <div className="d-flex box-dir-reverse">
                    <img src={add_white_icon} alt="add-icon" className='mx-2' />
                    <span>{t("content-panel-messages.tabs.tickets.new_ticket")}</span>
                </div>
            </button>
        </div>






        <div className="ticket-block inprogress" data-toggle="modal" data-target="#ticket-modal">
            <div className="ticket-header">
                <div className="d-block d-md-flex box-dir-reverse">
                    <div className="col ">
                        <div className="d-block d-md-flex box-dir-reverse ">
                            <div className="col px-0">
                                <div className="d-flex box-dir-reverse">
                                    <h3 className="ticket-title text-dir">
                                    <span>درخواست مرجوعی اثر</span>
                            </h3> 
                                </div>
                            </div>
                            <div className="col px-0">
                                <div className="d-flex box-dir-reverse">
                                    <h3 className="ticket-title text-dir">
                                        <span className="ticket-status ">{t("content-panel-messages.inprogress")}</span>
                                    </h3>  
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="d-flex box-dir-reverse   w-100  justify-content-md-end">
                            <span className="ticket-date  persian-num text-dir">۱۳۹۹/۰۵/۰۲</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ticket-body">
                <div className="d-flex box-dir-reverse mt-0 mt-lg-4">
                    <p className="text-justify text-dir ">
                                سلام من هفته گذشته از سایت شما خرید کردم امروز به دستم رسید. ولی فک
                                نمیکردم
                                تابلو انقد کوچیک ... باشه. میخواستم پس بدم اگه بشه. شماره سفارشمم
                                ۷۸۲۱۸ هست.
                                لطفا پیگیری کنید.
                            </p>
                </div>
                <div className="d-flex box-dir-reverse">
                    <div onClick={handleShowDetailTicket} className="ticket-more pull-dir">
                        <span>{t("content-panel-messages.veiw")}</span>
                        <span className="glyphicon glyphicon-menu-left"></span>
                    </div> 
                </div>
            </div>
        </div>





        <div className="ticket-block replied" data-toggle="modal" data-target="#ticket-modal">
            <div className="ticket-header">
                <div className="d-block d-md-flex box-dir-reverse">
                    <div className="col ">
                        <div className="d-block d-md-flex box-dir-reverse ">
                            <div className="col px-0">
                                <div className="d-flex box-dir-reverse">
                                    <h3 className="ticket-title text-dir">
                                    <span>مشکل خرید از سایت</span>
                            </h3> 
                                </div>
                            </div>
                            <div className="col px-0">
                                <div className="d-flex box-dir-reverse">
                                    <h3 className="ticket-title text-dir">
                                        <span className="ticket-status ">{t("content-panel-messages.waiting")}</span>
                                    </h3>  
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="d-flex box-dir-reverse   w-100  justify-content-md-end">
                            <span className="ticket-date  persian-num text-dir">۱۳۹۹/۰۴/۲۲</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ticket-body">
                <div className="d-flex box-dir-reverse mt-0 mt-lg-4">
                    <p className="text-justify text-dir ">
                                سلام من هفته گذشته از سایت شما خرید کردم امروز به دستم رسید. ولی فک
                                نمیکردم
                                تابلو انقد کوچیک ... باشه. میخواستم پس بدم اگه بشه. شماره سفارشمم
                                ۷۸۲۱۸ هست.
                                لطفا پیگیری کنید.
                            </p>
                </div>
                <div className="d-flex box-dir-reverse">
                    <div onClick={handleShowDetailTicket} className="ticket-more pull-dir">
                        <span>{t("content-panel-messages.veiw")}</span>
                        <span className="glyphicon glyphicon-menu-left"></span>
                    </div> 
                </div>
            </div>
        </div>






        <div className="ticket-block closed" data-toggle="modal" data-target="#ticket-modal">
            <div className="ticket-header">
                <div className="d-block d-md-flex box-dir-reverse">
                    <div className="col ">
                        <div className="d-block d-md-flex box-dir-reverse ">
                            <div className="col px-0">
                                <div className="d-flex box-dir-reverse">
                                    <h3 className="ticket-title text-dir">
                                    <span>مشکل خرید از سایت</span>
                            </h3> 
                                </div>
                            </div>
                            <div className="col px-0">
                                <div className="d-flex box-dir-reverse">
                                    <h3 className="ticket-title text-dir">
                                        <span className="ticket-status ">{t("content-panel-messages.closed")}</span>
                                    </h3>  
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="d-flex box-dir-reverse   w-100  justify-content-md-end">
                            <span className="ticket-date  persian-num text-dir">۱۳۹۹/۰۴/۲۲</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ticket-body">
                <div className="d-flex box-dir-reverse mt-0 mt-lg-4">
                    <p className="text-justify text-dir ">
                                سلام من هفته گذشته از سایت شما خرید کردم امروز به دستم رسید. ولی فک
                                نمیکردم
                                تابلو انقد کوچیک ... باشه. میخواستم پس بدم اگه بشه. شماره سفارشمم
                                ۷۸۲۱۸ هست.
                                لطفا پیگیری کنید.
                            </p>
                </div>
                <div className="d-flex box-dir-reverse">
                    <div onClick={handleShowDetailTicket} className="ticket-more pull-dir">
                        <span>{t("content-panel-messages.veiw")}</span>
                        <span className="glyphicon glyphicon-menu-left"></span>
                    </div> 
                </div>
            </div>
        </div>

        <ModalDatailTicket
            setVisibleDetailTicket={setVisibleDetailTicket}
            visibleDetailTicket={visibleDetailTicket}
        />

        <ModalAddTicket
            visibleAddTicketModal={visibleAddTicketModal}
            setVisibleAddTicketModal={setVisibleAddTicketModal}
        />


    </div>
</>
)
}

export default TicketsTab;