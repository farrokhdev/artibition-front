import React from 'react';

import { Modal } from 'antd';
import close_icon from '../../assets/img/clear.svg';
import { t } from 'i18next';

import artist4 from '../../assets/img/artist-4.jpg';
import artist_30 from '../../assets/img/artists/artist-30.jpg';
import artist_31 from '../../assets/img/artists/artist-31.jpg';
import artist_32 from '../../assets/img/artists/artist-32.jpg';
import artist_33 from '../../assets/img/artists/artist-33.jpg';
import artist_34 from '../../assets/img/artists/artist-34.jpg';
import artist_35 from '../../assets/img/artists/artist-35.jpg';
import artist_36 from '../../assets/img/artists/artist-36.jpg';
import artist_37 from '../../assets/img/artists/artist-37.jpg';
import artist_38 from '../../assets/img/artists/artist-38.jpg';
import artist_39 from '../../assets/img/artists/artist-39.jpg';

function ModalVeiwAlbums(props) {

    const {visibleShowAlbums , setVisibleShowAlbums} = props;

    const handleClose = () => {
        setVisibleShowAlbums(false);
    }

    return (
        <React.Fragment>

        <Modal
            centered
            className=""
            visible={visibleShowAlbums}
            onOk={handleClose}
            onCancel={handleClose}
            width={'100vw'}
            footer={[]}
        >
                <div className="modal-content px-0 px-md-0">
                        <div className="d-flex justify-content-end">
                            <button onClick={handleClose} className='btn-close-modal-ant'>
                                <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                            </button>
                        </div>
                        
                        <div className="modal-body">
                            <div className="container modal-artwork-list">

                                <div className="avatar-caption ">

                                    <div className="d-block d-sm-flex box-dir-reverse ">
                                        <div className='d-flex box-dir-reverse'>
                                            <div className='avatar-container  '>
                                                <div className="artist-avatar">
                                                    <img src={artist4} width="312" height="312" alt=""
                                                        className="img-responsive center-block "/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-block '>
                                                 <div className=''>
                                                    <h4 className="default-title text-dir mt-4 mt-sm-0">
                                                        <span className='mx-0 mx-sm-5'>
                                                            <span className=''>عارف</span>
                                                            <span className='mar-r2'>نیازی</span>
                                                        </span>
                                                    </h4>     
                                                </div>   
                                                <div className=''>
                                                    <h3 className="fontbold19 text-dir "><span className='mx-0 mx-sm-5'>بوم رنگ</span></h3>     
                                                </div>   
                                                 <div className='mx-sm-5'>
                                                    <p className=' text-dir '>
                                                        <span className='mx-0 '>
                                                        آلبومی از مجموعه نقاشی‌های من بین سال‌های ۱۳۷۶ الی ۱۳۹۵. در این آثار از تکنیک پاستل و
                                                        آبرنگ استفاده شده است.
                                                        </span>
                                                    </p>     
                                                </div>   
                                        </div>
                                    </div>


                                    {/* <div className="d-block d-sm-flex">
                                       <div className="col">
                                            <div className="d-flex box-dir-reverse">
                                                <div className="avatar-container pull-dir">
                                                    <div className="artist-avatar">
                                                        <img src={artist4} width="312" height="312" alt=""
                                                            className="img-responsive center-block "/>
                                                    </div>
                                                </div>
                                                <div className="d-block mt-4 mt-md-0">
                                                    <h4 className="default-title text-dir">
                                                        <span className='mx-0 mx-md-5'>
                                                            <span className=''>عارف</span>
                                                            <span className=''>نیازی</span>
                                                        </span>
                                                    </h4>
                                                    <h3 className="fontbold19 text-dir "><span className='mx-0 mx-md-5'>بوم رنگ</span></h3>
                                                    <p className=' text-dir'>
                                                        <span className='mx-0 mx-md-5'>
                                                        آلبومی از مجموعه نقاشی‌های من بین سال‌های ۱۳۷۶ الی ۱۳۹۵. در این آثار از تکنیک پاستل و
                                                        آبرنگ استفاده شده است.
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                       </div>
                                    </div> */}
                                </div>

                                <div className="row-gridimg">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="cols">
                                                <div className="col-img">
                                                    <img src={artist_30} width="840" height="828" alt="آرتیبیشن"
                                                        className="img-responsive"/>
                                                    <div className="tab-overly">
                                                        <a href="#" className="btn-see">
                                                            <span className="view-icon pull-dir"></span>
                                                            <span>مشاهده اثر</span>
                                                        </a>
                                                        <a href="#" className="btn-sale">درخواست خرید</a>
                                                        <a href="#" className="like-icon"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cols">
                                                <div className="col-img">
                                                    <img src={artist_31} width="840" height="633" alt="آرتیبیشن"
                                                        className="img-responsive"/>
                                                    <div className="tab-overly">
                                                        <a href="#" className="btn-see">
                                                            <span className="view-icon pull-right"></span>
                                                            <span>مشاهده اثر</span>
                                                        </a>
                                                        <a href="#" className="btn-sale">درخواست خرید</a>
                                                        <a href="#" className="like-icon"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cols">
                                                <div className="col-img">
                                                    <img src={artist_32} width="840" height="633" alt="آرتیبیشن"
                                                        className="img-responsive"/>
                                                    <div className="tab-overly">
                                                        <a href="#" className="btn-see">
                                                            <span className="view-icon pull-right"></span>
                                                            <span>مشاهده اثر</span>
                                                        </a>
                                                        <a href="#" className="btn-sale">درخواست خرید</a>
                                                        <a href="#" className="like-icon"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="cols">
                                                <div className="col-img">
                                                    <img src={artist_33} width="840" height="624" alt="آرتیبیشن"
                                                        className="img-responsive"/>
                                                    <div className="tab-overly">
                                                        <a href="#" className="btn-see">
                                                            <span className="view-icon pull-right"></span>
                                                            <span>مشاهده اثر</span>
                                                        </a>
                                                        <a href="#" className="btn-sale">درخواست خرید</a>
                                                        <a href="#" className="like-icon"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cols">
                                                <div className="col-img">
                                                    <img src={artist_34} width="840" height="840" alt="آرتیبیشن"
                                                        className="img-responsive"/>
                                                    <div className="tab-overly">
                                                        <a href="#" className="btn-see">
                                                            <span className="view-icon pull-right"></span>
                                                            <span>مشاهده اثر</span>
                                                        </a>
                                                        <a href="#" className="btn-sale">درخواست خرید</a>
                                                        <a href="#" className="like-icon"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cols">
                                                <div className="col-img">
                                                    <img src={artist_35} width="840" height="834" alt="آرتیبیشن"
                                                        className="img-responsive"/>
                                                    <div className="tab-overly">
                                                        <a href="#" className="btn-see">
                                                            <span className="view-icon pull-right"></span>
                                                            <span>مشاهده اثر</span>
                                                        </a>
                                                        <a href="#" className="btn-sale">درخواست خرید</a>
                                                        <a href="#" className="like-icon"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="cols">
                                                <div className="col-img">
                                                    <img src={artist_36} width="840" height="624" alt="آرتیبیشن"
                                                        className="img-responsive"/>
                                                    <div className="tab-overly">
                                                        <a href="#" className="btn-see">
                                                            <span className="view-icon pull-right"></span>
                                                            <span>مشاهده اثر</span>
                                                        </a>
                                                        <a href="#" className="btn-sale">درخواست خرید</a>
                                                        <a href="#" className="like-icon"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cols">
                                                <div className="col-img">
                                                    <img src={artist_37} width="840" height="840" alt="آرتیبیشن"
                                                        className="img-responsive"/>
                                                    <div className="tab-overly">
                                                        <a href="#" className="btn-see">
                                                            <span className="view-icon pull-right"></span>
                                                            <span>مشاهده اثر</span>
                                                        </a>
                                                        <a href="#" className="btn-sale">درخواست خرید</a>
                                                        <a href="#" className="like-icon"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="cols">
                                                <div className="col-img">
                                                    <img src={artist_38} width="840" height="834" alt="آرتیبیشن"
                                                        className="img-responsive"/>
                                                    <div className="tab-overly">
                                                        <a href="#" className="btn-see">
                                                            <span className="view-icon pull-right"></span>
                                                            <span>مشاهده اثر</span>
                                                        </a>
                                                        <a href="#" className="btn-sale">درخواست خرید</a>
                                                        <a href="#" className="like-icon"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cols">
                                                <div className="col-img">
                                                    <img src={artist_39} width="840" height="834" alt="آرتیبیشن"
                                                        className="img-responsive"/>
                                                    <div className="tab-overly">
                                                        <a href="#" className="btn-see">
                                                            <span className="view-icon pull-right"></span>
                                                            <span>مشاهده اثر</span>
                                                        </a>
                                                        <a href="#" className="btn-sale">درخواست خرید</a>
                                                        <a href="#" className="like-icon"></a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
  
        </Modal>
    </React.Fragment>
    )
}

export default ModalVeiwAlbums;
