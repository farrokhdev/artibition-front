import React,{useState} from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import { Tabs } from 'antd';
import { t } from 'i18next';

export default function FAQ() {

    const [tabPosition, setabPosition] = useState('left')
    const { TabPane } = Tabs;

    
    return (
        <>
            <div className="container">
                <Header />
                <Menu />
                <div class="container">
                    <div class="banner">
                        <div class="content-banner">
                            <h2 class="content-title">{t("FAQ")}</h2>
                            <div class="nl-input">
                                <input placeholder={t("filter-header.placeholder-input-search")} />
                                <button type="button" class="btn-black">{t("artworkList.box-banner.btn")}</button>
                            </div>
                        </div>
                    </div>
                    <div class="default-content">
                        <div class="inner-vertical-tab">
                            <div class="row dir">
                                <div class="col-md-2 col-sm-3">
                                    <ul class="nav nav-tabs text-dir">
                                        <li class=""><a data-toggle="tab" href="#faq1">{t("all_faq")}</a></li>
                                        <li><a data-toggle="tab" href="#faq2">{t("artist_profile.artists")}</a></li>
                                        <li><a data-toggle="tab" href="#faq3">{t("artist_profile.collection")}</a></li>
                                        <li><a data-toggle="tab" href="#faq4">{t("artist_profile.buyers")}</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-7 col-sm-9">
                                    <div class="tab-content text-dir">
                                        <div id="faq1" class="tab-pane fade in active">
                                            <div class="panel-group accordion-body" id="accordion">
                                                <div class="panel panel-default">
                                                    <div class="panel-heading">
                                                        <h4 class="panel-title d-flex">
                                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1"
                                                                aria-expanded="true">
                                                                شرایط ارسال اثر برای هنرمندان و خریداران چیست؟</a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapse1" class="panel-collapse collapse in">
                                                        <div class="panel-body">
                                                            <p>
                                                                زمانی که اثر هنری خود را فروختید، می‌بایست یک گواهی اعتبار داخل پاکتی
                                                                گذاشته و به همراه آن به دست خریدار
                                                                برسانید. این گواهی را هم خودتان می توانید تهیه کنید وهم می توانید از
                                                                سایت آرتیبیشن بخواهید آن را برای شما
                                                                ارسال کند. این الگو برای شما ایمیل خواهد شد
                                                                <br />
                                                                گواهی اعتبار یک سند با امضاء است که اعتبار کار هنری شما بوده و شامل
                                                                جزئیاتی درباره ی اثر می باشد. این سند
                                                                می بایست به همراه اثر فروخته شده به دست خریدار برسد
                                                                <br />
                                                                :اگر خودتان این گواهی را تهیه می کنید مطمعن باشید حتما این موارد در آن
                                                                بگنجد
                                                                <br />
                                                                نام اثر
                                                                اندازه و ابعاد اثر
                                                                )نسخه محدود# از#( اگر این موضوع به کار شما مربوط می شود
                                                                تاریخ به فروش رسیدن اثر در سایت ساعت چی آرت
                                                                امضای خالق اثر
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="panel panel-default">
                                                    <div class="panel-heading">
                                                        <h4 class="panel-title d-flex">
                                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2"
                                                                aria-expanded="false">
                                                                چگونه اثر هنری خود را قیمت گذاری کنم؟</a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapse2" class="panel-collapse collapse">
                                                        <div class="panel-body">
                                                            <p>
                                                                زمانی که اثر هنری خود را فروختید، می‌بایست یک گواهی اعتبار داخل پاکتی
                                                                گذاشته و به همراه آن به دست خریدار
                                                                برسانید. این گواهی را هم خودتان می توانید تهیه کنید وهم می توانید از
                                                                سایت آرتیبیشن بخواهید آن را برای شما
                                                                ارسال کند. این الگو برای شما ایمیل خواهد شد
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="panel panel-default">
                                                    <div class="panel-heading">
                                                        <h4 class="panel-title d-flex">
                                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse3"
                                                                aria-expanded="false">
                                                                منظور از گواهی اعتبار چیست؟</a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapse3" class="panel-collapse collapse">
                                                        <div class="panel-body">
                                                            <p>
                                                                نام اثر
                                                                اندازه و ابعاد اثر
                                                                )نسخه محدود# از#( اگر این موضوع به کار شما مربوط می شود
                                                                تاریخ به فروش رسیدن اثر در سایت ساعت چی آرت
                                                                امضای خالق اثر
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row-pagination">
                                                <ul class="pagination">
                                                    <li><a href="#">1</a></li>
                                                    <li class="active"><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                    <li ><a href="#">4</a></li>
                                                    <li><a href="#">5</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div id="faq2" class="tab-pane fade in active">
                                            <div class="panel-group accordion-body" id="accordion1">
                                                <div class="panel panel-default">
                                                    <div class="panel-heading">
                                                        <h4 class="panel-title d-flex">
                                                            <a data-toggle="collapse" data-parent="#accordion1" href="#collapse1"
                                                                aria-expanded="true">
                                                                شرایط ارسال اثر برای هنرمندان و خریداران چیست؟</a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapse10" class="panel-collapse collapse in">
                                                        <div class="panel-body">
                                                            <p>
                                                                زمانی که اثر هنری خود را فروختید، می‌بایست یک گواهی اعتبار داخل پاکتی
                                                                گذاشته و به همراه آن به دست خریدار
                                                                برسانید. این گواهی را هم خودتان می توانید تهیه کنید وهم می توانید از
                                                                سایت آرتیبیشن بخواهید آن را برای شما
                                                                ارسال کند. این الگو برای شما ایمیل خواهد شد
                                                                <br />
                                                                گواهی اعتبار یک سند با امضاء است که اعتبار کار هنری شما بوده و شامل
                                                                جزئیاتی درباره ی اثر می باشد. این سند
                                                                می بایست به همراه اثر فروخته شده به دست خریدار برسد
                                                                <br />
                                                                :اگر خودتان این گواهی را تهیه می کنید مطمعن باشید حتما این موارد در آن
                                                                بگنجد
                                                                <br />
                                                                نام اثر
                                                                اندازه و ابعاد اثر
                                                                )نسخه محدود# از#( اگر این موضوع به کار شما مربوط می شود
                                                                تاریخ به فروش رسیدن اثر در سایت ساعت چی آرت
                                                                امضای خالق اثر
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="panel panel-default">
                                                    <div class="panel-heading">
                                                        <h4 class="panel-title d-flex">
                                                            <a data-toggle="collapse" data-parent="#accordion1" href="#collapse2"
                                                                aria-expanded="false">
                                                                چگونه اثر هنری خود را قیمت گذاری کنم؟</a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapse11" class="panel-collapse collapse">
                                                        <div class="panel-body">
                                                            <p>
                                                                زمانی که اثر هنری خود را فروختید، می‌بایست یک گواهی اعتبار داخل پاکتی
                                                                گذاشته و به همراه آن به دست خریدار
                                                                برسانید. این گواهی را هم خودتان می توانید تهیه کنید وهم می توانید از
                                                                سایت آرتیبیشن بخواهید آن را برای شما
                                                                ارسال کند. این الگو برای شما ایمیل خواهد شد
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="faq3" class="tab-pane fade  in active">
                                            <h3>Menu 2</h3>
                                            <p>Some content in menu 2.</p>
                                        </div>
                                        <div id="faq4" class="tab-pane fade  in active">
                                            <h3>Menu 2</h3>
                                            <p>Some content in menu 2.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
