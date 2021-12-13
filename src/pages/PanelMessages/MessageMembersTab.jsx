import React , {useState} from 'react';

import avatar from '../../assets/img/unnamed.jpg'
import artist4 from '../../assets/img/artist-4.jpg'
import profile from '../../assets/img/arthibition_profile.svg'
import ModalMessageMember from './ModalMessageMember';
import { t } from 'i18next';

function MessageMembersTab() {

    const [visibleDetailMessageMember, setVisibleDetailMessageMember] = useState(false)

    const handleShowModal = () => {
        setVisibleDetailMessageMember(true)
    }

return (
    <div className="tickets members">

        
        <div className="ticket-block unread" data-toggle="modal" data-target="#ticket-modal">
            <div className="ticket-header ">

                <div className="d-block d-lg-flex box-dir-reverse ">
                    <div className="col ">
                       <div className="d-flex box-dir-reverse w-100">
                            <img src={avatar} width="56" height="56" alt="avatar"
                                className="member-avatar pull-right img-responsive" />

                            <div className="d-block d-lg-flex box-dir-reverse w-100">
                                <div className="col-12 col-lg-8 px-0">
                                    <h3 className='ticket-title text-dir'><span className="msg-title">پیام به مریم رضوی</span></h3>
                                </div>
                                <div className="col-12 col-lg-3 px-0">
                                    <h3 className='ticket-title text-dir'><span className=" msg-new m-0">{t("content-panel-messages.new")}</span></h3>
                                </div>
                            </div>

                       </div>
                    </div>
                    <div className="col ">
                        <div className="d-flex box-dir-reverse  mt-5  mt-lg-0 w-100  justify-content-lg-end">
                            <span className="ticket-date pull-dir persian-num ">{t("content-panel-messages.today")}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex ticket-body box-dir-reverse">
                <div className="row w-100">
                    <div className="col-12">
                        <p className="text-dir">
                            سرکار خانم مریم رضوی، سلام. بنده آثار شما رو در نمایشگاه نمایش
                            نئوکلاسیک گالری آران دیدم. یه تابلو داشتید که طرح یک اسب در جنگل
                            بود. اون رو در پروفایلتون پیدا نکردم. مایل
                            بودم اون رو در صورت امکان ازتون خریداری کنم. ممنون میشم راهنمایی
                            بفرمایید.
                        </p>
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-end">
                            <div onClick={handleShowModal} className="ticket-more pull-dir ">
                                <span>{t("content-panel-messages.veiw")}</span>
                                <span className="glyphicon glyphicon-menu-left"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





        <div className="ticket-block unread" data-toggle="modal" data-target="#ticket-modal">
            <div className="ticket-header ">

                <div className="d-block d-lg-flex box-dir-reverse ">
                    <div className="col ">
                       <div className="d-flex box-dir-reverse w-100">
                            <img src={artist4} width="56" height="56" alt="avatar"
                                className="member-avatar pull-right img-responsive" />

                            <div className="d-block d-lg-flex box-dir-reverse w-100">
                                <div className="col-12 col-lg-8 px-0">
                                    <h3 className='ticket-title text-dir'><span className="msg-title">پیام به عارف نیازی</span></h3>
                                </div>
                                <div className="col-12 col-lg-3 px-0">
                                    {/* <h3 className='ticket-title text-dir'><span className=" msg-new m-0">پیام جدید</span></h3> */}
                                </div>
                            </div>

                       </div>
                    </div>
                    <div className="col ">
                        <div className="d-flex box-dir-reverse  mt-5  mt-lg-0 w-100  justify-content-lg-end">
                            <span className="ticket-date pull-dir persian-num ">۱۳۹۹/۰۴/۲۲</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex ticket-body box-dir-reverse">
                <div className="row w-100">
                    <div className="col-12">
                        <p className="text-dir">
                            سرکار خانم مریم رضوی، سلام. بنده آثار شما رو در نمایشگاه نمایش
                            نئوکلاسیک گالری آران دیدم. یه تابلو داشتید که طرح یک اسب در جنگل
                            بود. اون رو در پروفایلتون پیدا نکردم. مایل
                            بودم اون رو در صورت امکان ازتون خریداری کنم. ممنون میشم راهنمایی
                            بفرمایید.
                        </p>
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-end">
                            <div onClick={handleShowModal} className="ticket-more pull-dir ">
                                <span>{t("content-panel-messages.veiw")}</span>
                                <span className="glyphicon glyphicon-menu-left"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="ticket-block unread" data-toggle="modal" data-target="#ticket-modal">
            <div className="ticket-header ">

                <div className="d-block d-lg-flex box-dir-reverse ">
                    <div className="col ">
                       <div className="d-flex box-dir-reverse w-100">
                       <img src={profile} width="56" height="56" alt="avatar"
                                className="member-avatar pull-right img-responsive" />

                            <div className="d-block d-lg-flex box-dir-reverse w-100">
                                <div className="col-12 col-lg-8 px-0">
                                    <h3 className='ticket-title text-dir'><span className="msg-title">پیام به فرخنده مرعشی</span></h3>
                                </div>
                                <div className="col-12 col-lg-3 px-0">
                                    {/* <h3 className='ticket-title text-dir'><span className=" msg-new m-0">پیام جدید</span></h3> */}
                                </div>
                            </div>

                       </div>
                    </div>
                    <div className="col ">
                        <div className="d-flex box-dir-reverse  mt-5  mt-lg-0 w-100  justify-content-lg-end">
                            <span className="ticket-date pull-dir persian-num ">۱۳۹۹/۰۴/۲۲</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex ticket-body box-dir-reverse">
                <div className="row w-100">
                    <div className="col-12">
                        <p className="text-dir">
                        سلام دوست عزیز، ممنون که پیام دادید. بله تابلوهای نقاشی همگی همراه
                            با قاب هستند.
                        </p>
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-end">
                            <div onClick={handleShowModal} className="ticket-more pull-dir ">
                                <span>{t("content-panel-messages.veiw")}</span>
                                <span className="glyphicon glyphicon-menu-left"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <ModalMessageMember
            visibleDetailMessageMember={visibleDetailMessageMember}
            setVisibleDetailMessageMember={setVisibleDetailMessageMember}
        />


    </div>
)
}

export default MessageMembersTab