import React from 'react';
import { Pagination } from 'antd';
import collection1 from '../../assets/img/mainpage/hnrpqkfiup@3x.jpg';
import collection2 from '../../assets/img/mainpage/2.jpg';
import collection3 from '../../assets/img/mainpage/3.jpg';
import collection4 from '../../assets/img/mainpage/4.jpg';
import { t } from 'i18next';

function PanelCollectionsTab() {
return (
<>
    <div className="collection-block">
        <div className="collection-block-header">
            <div className="d-flex box-dir-reverse">
                <div className="d-block col-xs-9 px-0">
                    <div className="d-flex pull-dir">
                        <div className="col">
                            <h3 className="artist-title text-dir">هنر تراش بر روی چوب</h3>
                            <span className="collection-artistname text-dir">بردیا صالح</span>
                            <button type="button" className="btn-follow followed">{t("artwork.following")}</button>
                        </div>
                    </div>
                </div>
                <div className="col-xs-3">
                    <div className="d-flex btn-readmore box-dir-reverse ">{t("see-all")}</div>
                </div>
            </div>
        </div>
        <div className="clearfix"></div>

        <div style={{overflow : 'auto'}} className="owl-carousel d-flex" id="tab6">
           
                <div className="cols mx-3">
                    <div className="col-img">
                        <img src={collection1} width="840" height="840" alt="آرتیبیشن"
                            className="img-responsive" />

                    </div>
                </div>
                <div className="cols mx-3">
                    <div className="col-img">
                        <img src={collection2} width="180" height="180" alt="آرتیبیشن" className="img-responsive" />

                    </div>
                </div>
                <div className="cols mx-3">
                    <div className="col-img">
                        <img src={collection3} width="180" height="180" alt="آرتیبیشن" className="img-responsive" />

                    </div>
                </div>
                <div className="cols mx-3">
                    <div className="col-img">
                        <img src={collection4} width="180" height="180" alt="آرتیبیشن" className="img-responsive" />

                    </div>
                </div>
                <div className="cols mx-3">
                    <div className="col-img">
                        <img src={collection1} width="180" height="180" alt="آرتیبیشن"
                            className="img-responsive" />

                    </div>
                </div>
                <div className="cols mx-3">
                    <div className="col-img">
                        <img src={collection2} width="180" height="180" alt="آرتیبیشن" className="img-responsive" />

                    </div>
                </div>
     
        </div>
       
    </div>
    <div className="collection-block">
        <div className="collection-block-header">
            <div className="d-flex box-dir-reverse">
                <div className="d-block col-xs-9 px-0">
                    <div className="d-flex pull-dir">
                        <div className="col">
                            <h3 className="artist-title text-dir">تابلوی چوبی</h3>
                            <span className="collection-artistname text-dir">فرشید یگانه</span>
                            <button type="button" className="btn-follow">{t("artwork.follow")}</button>
                        </div>
                    </div>
                </div>
                <div className="col-xs-3">
                    <div className="d-flex btn-readmore box-dir-reverse">{t("see-all")}</div>
                </div>
            </div>
        </div>
        <div className="clearfix"></div>
        <div style={{overflow : 'auto'}} className="owl-carousel d-flex" id="tab6">
           
           <div className="cols mx-3">
               <div className="col-img">
                   <img src={collection1} width="840" height="840" alt="آرتیبیشن"
                       className="img-responsive" />

               </div>
           </div>
           <div className="cols mx-3">
               <div className="col-img">
                   <img src={collection2} width="180" height="180" alt="آرتیبیشن" className="img-responsive" />

               </div>
           </div>
           <div className="cols mx-3">
               <div className="col-img">
                   <img src={collection3} width="180" height="180" alt="آرتیبیشن" className="img-responsive" />

               </div>
           </div>
           <div className="cols mx-3">
               <div className="col-img">
                   <img src={collection4} width="180" height="180" alt="آرتیبیشن" className="img-responsive" />

               </div>
           </div>
           <div className="cols mx-3">
               <div className="col-img">
                   <img src={collection1} width="180" height="180" alt="آرتیبیشن"
                       className="img-responsive" />

               </div>
           </div>
           <div className="cols mx-3">
               <div className="col-img">
                   <img src={collection2} width="180" height="180" alt="آرتیبیشن" className="img-responsive" />

               </div>
           </div>

   </div>
    </div>
    
    <div className=" row-pagination">
        <Pagination  total={50} />
    </div>
    
</>
)
}

export default PanelCollectionsTab