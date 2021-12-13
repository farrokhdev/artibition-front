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
    
    <div class="tickets">
    
        <div className="d-flex justify-custom mb-5">
            <button onClick={handleShowAddTicket} className='btn-blue btn-add-new-ticket'>
                <div className="d-flex box-dir-reverse">
                    <img src={add_white_icon} alt="add-icon" className='mx-2' />
                    <span>{t("content-panel-messages.tabs.tickets.new_ticket")}</span>
                </div>
            </button>
        </div>






        <div class="ticket-block inprogress" data-toggle="modal" data-target="#ticket-modal">
            <div class="ticket-header">
                <div className="d-block d-md-flex box-dir-reverse">
                    <div className="col ">
                        <div className="d-block d-md-flex box-dir-reverse ">
                            <div className="col px-0">
                                <div className="d-flex box-dir-reverse">
                                    <h3 class="ticket-title text-dir">
                                    <span>درخواست مرجوعی اثر</span>
                            </h3> 
                                </div>
                            </div>
                            <div className="col px-0">
                                <div className="d-flex box-dir-reverse">
                                    <h3 class="ticket-title text-dir">
                                        <span class="ticket-status ">{t("content-panel-messages.inprogress")}</span>
                                    </h3>  
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="d-flex box-dir-reverse   w-100  justify-content-md-end">
                            <span class="ticket-date  persian-num text-dir">۱۳۹۹/۰۵/۰۲</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ticket-body">
                <div className="d-flex box-dir-reverse mt-0 mt-lg-4">
                    <p class="text-justify text-dir ">
                                سلام من هفته گذشته از سایت شما خرید کردم امروز به دستم رسید. ولی فک
                                نمیکردم
                                تابلو انقد کوچیک ... باشه. میخواستم پس بدم اگه بشه. شماره سفارشمم
                                ۷۸۲۱۸ هست.
                                لطفا پیگیری کنید.
                            </p>
                </div>
                <div className="d-flex box-dir-reverse">
                    <div onClick={handleShowDetailTicket} class="ticket-more pull-dir">
                        <span>{t("content-panel-messages.veiw")}</span>
                        <span class="glyphicon glyphicon-menu-left"></span>
                    </div> 
                </div>
            </div>
        </div>





        <div class="ticket-block replied" data-toggle="modal" data-target="#ticket-modal">
            <div class="ticket-header">
                <div className="d-block d-md-flex box-dir-reverse">
                    <div className="col ">
                        <div className="d-block d-md-flex box-dir-reverse ">
                            <div className="col px-0">
                                <div className="d-flex box-dir-reverse">
                                    <h3 class="ticket-title text-dir">
                                    <span>مشکل خرید از سایت</span>
                            </h3> 
                                </div>
                            </div>
                            <div className="col px-0">
                                <div className="d-flex box-dir-reverse">
                                    <h3 class="ticket-title text-dir">
                                        <span class="ticket-status ">{t("content-panel-messages.waiting")}</span>
                                    </h3>  
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="d-flex box-dir-reverse   w-100  justify-content-md-end">
                            <span class="ticket-date  persian-num text-dir">۱۳۹۹/۰۴/۲۲</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ticket-body">
                <div className="d-flex box-dir-reverse mt-0 mt-lg-4">
                    <p class="text-justify text-dir ">
                                سلام من هفته گذشته از سایت شما خرید کردم امروز به دستم رسید. ولی فک
                                نمیکردم
                                تابلو انقد کوچیک ... باشه. میخواستم پس بدم اگه بشه. شماره سفارشمم
                                ۷۸۲۱۸ هست.
                                لطفا پیگیری کنید.
                            </p>
                </div>
                <div className="d-flex box-dir-reverse">
                    <div onClick={handleShowDetailTicket} class="ticket-more pull-dir">
                        <span>{t("content-panel-messages.veiw")}</span>
                        <span class="glyphicon glyphicon-menu-left"></span>
                    </div> 
                </div>
            </div>
        </div>






        <div class="ticket-block closed" data-toggle="modal" data-target="#ticket-modal">
            <div class="ticket-header">
                <div className="d-block d-md-flex box-dir-reverse">
                    <div className="col ">
                        <div className="d-block d-md-flex box-dir-reverse ">
                            <div className="col px-0">
                                <div className="d-flex box-dir-reverse">
                                    <h3 class="ticket-title text-dir">
                                    <span>مشکل خرید از سایت</span>
                            </h3> 
                                </div>
                            </div>
                            <div className="col px-0">
                                <div className="d-flex box-dir-reverse">
                                    <h3 class="ticket-title text-dir">
                                        <span class="ticket-status ">{t("content-panel-messages.closed")}</span>
                                    </h3>  
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="d-flex box-dir-reverse   w-100  justify-content-md-end">
                            <span class="ticket-date  persian-num text-dir">۱۳۹۹/۰۴/۲۲</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ticket-body">
                <div className="d-flex box-dir-reverse mt-0 mt-lg-4">
                    <p class="text-justify text-dir ">
                                سلام من هفته گذشته از سایت شما خرید کردم امروز به دستم رسید. ولی فک
                                نمیکردم
                                تابلو انقد کوچیک ... باشه. میخواستم پس بدم اگه بشه. شماره سفارشمم
                                ۷۸۲۱۸ هست.
                                لطفا پیگیری کنید.
                            </p>
                </div>
                <div className="d-flex box-dir-reverse">
                    <div onClick={handleShowDetailTicket} class="ticket-more pull-dir">
                        <span>{t("content-panel-messages.veiw")}</span>
                        <span class="glyphicon glyphicon-menu-left"></span>
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