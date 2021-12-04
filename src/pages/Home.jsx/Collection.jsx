import React from 'react';

import mainpage1_1 from '../../assets/img/mainpage/1-1.jpg';
import mainpage1_3 from '../../assets/img/mainpage/1-3.jpg';
import mainpage2_1 from '../../assets/img/mainpage/2-1.jpg';
import mainpage2_2 from '../../assets/img/mainpage/2-2.jpg';
import mainpage2_3 from '../../assets/img/mainpage/2-3.jpg';
import mainpage3_1 from '../../assets/img/mainpage/3-1.jpg';
import mainpage3_2 from '../../assets/img/mainpage/3-2.jpg';
import mainpage3_3 from '../../assets/img/mainpage/3-3.jpg';
import mainpage4_1 from '../../assets/img/mainpage/4-1.jpg';
import mainpage4_2 from '../../assets/img/mainpage/4-2.jpg';
import mainpage4_3 from '../../assets/img/mainpage/4-3.jpg';
import mainpage1_2 from '../../assets/img/mainpage/1-2.jpg';
import tip from '../../assets/img/tip.svg';


export default function Collection() {
    return (
        
    <div className="collection">
    <div className="row">

        <div className="public-header d-flex">
            <div className="col-6 col-md-8 ">
                <div className="d-flex">
                    <h2 className="default-title pull-right px-4 ">کالکشن آثار</h2>
                    <div className="popover-collection">
                        <a title="کالکشن آثار" data-toggle="popover" data-placement="left">
                            <img src={tip} width="18" height="18" alt="کالکشن آثار"/>
                        </a>
                        <div 
                            className="popover-content" style={{display: "none"}}
                        >
                            <p>با ایجاد کالکشن شما می‌توانید آثار مورد علاقه
                                خود را با آن اضافه و آن‌ها را طبقه‌بندی نمایید</p>
                            <a className="popover-btn" href="#" type="button">ایجاد کالکشن</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 ">
                <div className="btn-readmore pull-left ">همه کالکشن‌ها</div>
            </div>
        </div>

        <div className="col">
            <div className="collection-body">

                <div style={{overflow : 'auto'}} className="owl-carousel d-flex" id="tab6">

                    <div>
                        <a href="#" className="cols">
                            <div className="col-img mx-4">
                                <div className=" collection-firstrow m-0">
                                    <img src={mainpage1_1} className="img-responsive w-100"/>
                                </div>
                                <div className="d-flex collection-secondrow  px-0">
                                    <div className="col px-0  mt-2">
                                        <img  src={mainpage1_2} 
                                             className="img-responsive clolection-image w-100"/>
                                    </div>
                                    <div className="col px-0 mr-2 mt-2">
                                        <img src={mainpage1_3} 
                                             className="img-responsive clolection-image w-100"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-body">
                                <h6 className="col-title">
                                    <span className="col-name">هنر تراش بر روی چوب</span>
                                </h6>
                                <div className="col-dimension">
                                    <span className="col-dimension-title">بردیا صالح</span>
                                </div>
                            </div>
                        </a>
                    </div>


                    <div>
                        <a href="#" className="cols">
                            <div className="col-img mx-4">
                                <div className=" collection-firstrow m-0">
                                    <img src={mainpage2_1} className="img-responsive w-100"/>
                                </div>
                                <div className="d-flex collection-secondrow  px-0">
                                    <div className="col px-0  mt-2">
                                        <img  src={mainpage2_2} 
                                             className="img-responsive clolection-image w-100"/>
                                    </div>
                                    <div className="col px-0 mr-2 mt-2">
                                        <img src={mainpage2_3} 
                                             className="img-responsive clolection-image w-100"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-body">
                                <h6 className="col-title">
                                    <span className="col-name">هنر تراش بر روی چوب</span>
                                </h6>
                                <div className="col-dimension">
                                    <span className="col-dimension-title">بردیا صالح</span>
                                </div>
                            </div>
                        </a>
                    </div>


                    
                    <div>
                        <a href="#" className="cols">
                            <div className="col-img mx-4">
                                <div className=" collection-firstrow m-0">
                                    <img src={mainpage3_1} className="img-responsive w-100"/>
                                </div>
                                <div className="d-flex collection-secondrow  px-0">
                                    <div className="col px-0  mt-2">
                                        <img  src={mainpage3_2} 
                                             className="img-responsive clolection-image w-100"/>
                                    </div>
                                    <div className="col px-0 mr-2 mt-2">
                                        <img src={mainpage3_3} 
                                             className="img-responsive clolection-image w-100"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-body">
                                <h6 className="col-title">
                                    <span className="col-name">هنر تراش بر روی چوب</span>
                                </h6>
                                <div className="col-dimension">
                                    <span className="col-dimension-title">بردیا صالح</span>
                                </div>
                            </div>
                        </a>
                    </div>


                    <div>
                        <a href="#" className="cols">
                            <div className="col-img mx-4">
                                <div className=" collection-firstrow m-0">
                                    <img src={mainpage4_1} className="img-responsive w-100"/>
                                </div>
                                <div className="d-flex collection-secondrow  px-0">
                                    <div className="col px-0  mt-2">
                                        <img  src={mainpage4_2} 
                                             className="img-responsive clolection-image w-100"/>
                                    </div>
                                    <div className="col px-0 mr-2 mt-2">
                                        <img src={mainpage4_3} 
                                             className="img-responsive clolection-image w-100"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-body">
                                <h6 className="col-title">
                                    <span className="col-name">هنر تراش بر روی چوب</span>
                                </h6>
                                <div className="col-dimension">
                                    <span className="col-dimension-title">بردیا صالح</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    

                    {/* <div>
                        <a href="#" className="cols">
                            <div className="col-img mx-4">
                                <div className=" collection-firstrow m-0">
                                    <img src={mainpage4_1} className="img-responsive w-100"/>
                                </div>
                                <div className="d-flex collection-secondrow  px-0">
                                    <div className="col px-0  mt-2">
                                        <img  src={mainpage4_2} 
                                             className="img-responsive clolection-image w-100"/>
                                    </div>
                                    <div className="col px-0 mr-2 mt-2">
                                        <img src={mainpage4_3} 
                                             className="img-responsive clolection-image w-100"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-body">
                                <h6 className="col-title">
                                    <span className="col-name">هنر تراش بر روی چوب</span>
                                </h6>
                                <div className="col-dimension">
                                    <span className="col-dimension-title">بردیا صالح</span>
                                </div>
                            </div>
                        </a>
                    </div> */}
   
                    
                    
                </div>
            </div>
        </div>
    </div>
</div>
    )
}
