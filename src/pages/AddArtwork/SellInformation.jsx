import React from 'react';

import change_icon from '../../assets/img/change.png';

function sellInformation({prev}) {
    return (
        <>
            <div class="enter-price">
                <h3 class="infotitle-default text-dir">اطلاعات فروش</h3>
                <div class="row">
                    <div class="col-sm-12">
                        <label class="lable-checkbox public-group text-dir">
                            <input type="checkbox" value=""/>
                            <span>برای نمایش</span>
                            <span class="checkmark"></span>
                            <span class="input-help">با انتخاب این گزینه اثر تنها برای نمایش در سایت قرار می‌گیرد</span>
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="public-group">
                            <input class="form-control input-public " required placeholder="" value=""/>
                            <label class="lable-public">شماره ادیشن</label>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="public-group">
                            <input class="form-control input-public " required placeholder=""
                                   value=""/>
                            <label class="lable-public">قیمت اثر به تومان</label>
                        </div>
                        <a href="#" class="btn-change">
                            <img src={change_icon} width="24" height="24" alt="" class=""/>
                        </a>
                    </div>
                    <div class="col-sm-4">
                        <div class="public-group">
                            <input class="form-control input-public " required placeholder=""
                                   value=""/>
                            <label class="lable-public">معادل قیمت به دلار</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="public-group">
                            <input class="form-control input-public " required placeholder="" value=""/>
                            <label class="lable-public">شماره ادیشن</label>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="public-group">
                            <input class="form-control input-public " required placeholder=""
                                   value=""/>
                            <label class="lable-public">قیمت اثر به تومان</label>
                        </div>
                        <a href="#" class="btn-change">
                            <img src={change_icon} width="24" height="24" alt="" class=""/>
                        </a>
                    </div>
                    <div class="col-sm-4">
                        <div class="public-group">
                            <input class="form-control input-public " required placeholder=""
                                   value=""/>
                            <label class="lable-public">معادل قیمت به دلار</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="public-group">
                            <input class="form-control input-public " required placeholder="" value=""/>
                            <label class="lable-public">شماره ادیشن</label>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="public-group">
                            <input class="form-control input-public " required placeholder=""
                                   value=""/>
                            <label class="lable-public">قیمت اثر به تومان</label>
                        </div>
                        <a href="#" class="btn-change">
                            <img src={change_icon} width="24" height="24" alt="" class=""/>
                        </a>
                    </div>
                    <div class="col-sm-4">
                        <div class="public-group">
                            <input class="form-control input-public " required placeholder=""
                                   value=""/>
                            <label class="lable-public">معادل قیمت به دلار</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <label class="lable-checkbox public-group text-dir">
                            <input type="checkbox" value=""/>
                            <span>این اثر فروخته شده</span>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="col-sm-12">
                        <label class="lable-checkbox public-group text-dir">
                            <input type="checkbox" checked value=""/>
                            <span>امکان ارسال پیشنهاد قیمت</span>
                            <span class="checkmark"></span>
                            <span class="input-help">از طریق این قابلیت مشتریان شما می‌توانند پیشنهاد قیمتی خود را به شما ارسال نمایند</span>
                        </label>
                    </div>
                    <div class="col-sm-12">
                        <label class="switch pull-right">
                            <input type="checkbox"/>
                            <span class="switchbtn round"></span>
                            <span class="label-switchbtn">تخفیف قیمت</span>
                        </label>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group public-group">
                            <select class="form-control" id="sel1">
                                <option>تخفیف براساس درصد</option>
                                <option>تخفیف براساس درصد</option>
                                <option>تخفیف براساس درصد</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="public-group">
                            <input class="form-control input-public " required placeholder=""
                                   value=""/>
                            <label class="lable-public">درصد تخفیف قیمت ریالی</label>
                        </div>
                        <a href="#" class="btn-change">
                            <img src={change_icon} width="24" height="24" alt="" class=""/>
                        </a>
                    </div>
                    <div class="col-sm-6">
                        <div class="public-group">
                            <input class="form-control input-public " required placeholder=""
                                   value=""/>
                            <label class="lable-public">درصد تخفیف قمیت دلاری</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <h4 class="bolder-title mrgt10">مدت زمان تخفیف</h4>
                        <div class="public-group">
                            <input class="form-control input-public persian-num " required placeholder="" value="1368/06/21"/>
                            <label class="lable-public">تاریخ</label>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="adv-btn">
                    <button type="button" class="btn-prev ">انصراف</button>
                    <button onClick={() => prev()} type="button" class="btn-next pull-left">مرحله قبل</button>
                </div>
            </div>
        </>
    )
}

export default sellInformation;
