import React from 'react';
import { Pagination } from 'antd';
import collection1 from '../../assets/img/mainpage/hnrpqkfiup@3x.jpg';
import collection2 from '../../assets/img/mainpage/2.jpg';
import collection3 from '../../assets/img/mainpage/3.jpg';
import collection4 from '../../assets/img/mainpage/4.jpg';

function PanelCollectionsTab() {
return (
<>
    <div class="collection-block">
        <div class="collection-block-header">
            <div class="d-flex box-dir-reverse">
                <div class="d-block col-xs-9 px-0">
                    <div className="d-flex pull-dir">
                        <div className="col">
                            <h3 class="artist-title text-dir">هنر تراش بر روی چوب</h3>
                            <span class="collection-artistname text-dir">بردیا صالح</span>
                            <button type="button" class="btn-follow followed">دنبال شده</button>
                        </div>
                    </div>
                </div>
                <div class="col-xs-3">
                    <div class="d-flex btn-readmore box-dir-reverse">مشاهده همه</div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>

        <div style={{overflow : 'auto'}} className="owl-carousel d-flex" id="tab6">
           
                <div class="cols mx-3">
                    <div class="col-img">
                        <img src={collection1} width="840" height="840" alt="آرتیبیشن"
                            class="img-responsive" />

                    </div>
                </div>
                <div class="cols mx-3">
                    <div class="col-img">
                        <img src={collection2} width="180" height="180" alt="آرتیبیشن" class="img-responsive" />

                    </div>
                </div>
                <div class="cols mx-3">
                    <div class="col-img">
                        <img src={collection3} width="180" height="180" alt="آرتیبیشن" class="img-responsive" />

                    </div>
                </div>
                <div class="cols mx-3">
                    <div class="col-img">
                        <img src={collection4} width="180" height="180" alt="آرتیبیشن" class="img-responsive" />

                    </div>
                </div>
                <div class="cols mx-3">
                    <div class="col-img">
                        <img src={collection1} width="180" height="180" alt="آرتیبیشن"
                            class="img-responsive" />

                    </div>
                </div>
                <div class="cols mx-3">
                    <div class="col-img">
                        <img src={collection2} width="180" height="180" alt="آرتیبیشن" class="img-responsive" />

                    </div>
                </div>
     
        </div>
       
    </div>
    <div class="collection-block">
        <div class="collection-block-header">
            <div class="d-flex box-dir-reverse">
                <div class="d-block col-xs-9 px-0">
                    <div className="d-flex pull-dir">
                        <div className="col">
                            <h3 class="artist-title text-dir">تابلوی چوبی</h3>
                            <span class="collection-artistname text-dir">فرشید یگانه</span>
                            <button type="button" class="btn-follow">دنبال کردن</button>
                        </div>
                    </div>
                </div>
                <div class="col-xs-3">
                    <div class="d-flex btn-readmore box-dir-reverse">مشاهده همه</div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div style={{overflow : 'auto'}} className="owl-carousel d-flex" id="tab6">
           
           <div class="cols mx-3">
               <div class="col-img">
                   <img src={collection1} width="840" height="840" alt="آرتیبیشن"
                       class="img-responsive" />

               </div>
           </div>
           <div class="cols mx-3">
               <div class="col-img">
                   <img src={collection2} width="180" height="180" alt="آرتیبیشن" class="img-responsive" />

               </div>
           </div>
           <div class="cols mx-3">
               <div class="col-img">
                   <img src={collection3} width="180" height="180" alt="آرتیبیشن" class="img-responsive" />

               </div>
           </div>
           <div class="cols mx-3">
               <div class="col-img">
                   <img src={collection4} width="180" height="180" alt="آرتیبیشن" class="img-responsive" />

               </div>
           </div>
           <div class="cols mx-3">
               <div class="col-img">
                   <img src={collection1} width="180" height="180" alt="آرتیبیشن"
                       class="img-responsive" />

               </div>
           </div>
           <div class="cols mx-3">
               <div class="col-img">
                   <img src={collection2} width="180" height="180" alt="آرتیبیشن" class="img-responsive" />

               </div>
           </div>

   </div>
    </div>
    
    <div class=" row-pagination">
        <Pagination  total={50} />
    </div>
    
</>
)
}

export default PanelCollectionsTab