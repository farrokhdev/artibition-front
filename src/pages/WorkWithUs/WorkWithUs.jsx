import React from 'react'
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

function WorkWithUs() {


    return (
        <>

            <div className="container mx-auto px-0 w-100 overflow-hidden">
                <Header />
                <Menu />

                <div className="container">
                    <div className="row partner-page default-content">
                        <div className="col-md-6 text-dir">
                            <h2 className="font24 mrgb32">شرایط همکاری با آرتیبیشن</h2>
                            <p>می‌خواهیم برای تعالی هنر سرزمین‌مان قدمی ارزشمند و بزرگ برداریم که این مهم، نیازمند دانش و ذوق هنری است.
                                از این‌رو بر آنیم با ایجاد محیطی صمیمی و حرفه‌ای در جهت خدمت‌رسانی به هنرمندان، هنردوستان و جامعه‌ی
                                هنرهای تجسمی گروهی توانا و قدرتمند گرد هم آوریم
                                :در صورت علاقه‌مندی به همراهی ما می‌توانید رزومه و اطلاعات خود را به ما ارسال نمائید
                            </p>

                            <ul className="content-list mrgt16">
                                <li>تهیه‌ی خبرهای هنری</li>
                                <li>معرفی هنرمندان به سایت</li>
                                <li>معرفی گالری ها و انجمن ها</li>
                                <li>آموزش هنر</li>
                                <li>مصاحبه با هنرمندان و ساخت کلیپ</li>
                            </ul>


                        </div>
                        <div className="col-md-6 text-dir">
                            <h2 className="font24 mrgb32 mrgt64-xs">پیشنهاد همکاری با ما</h2>
                            <form>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" placeholder="نام و نام خانوادگی" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" placeholder="ایمیل" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" placeholder="شماره همراه" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="upload-resume form-group">
                                            <label for="upload-resume">آپلود رزومه(PDF)</label>
                                            <input type="file" id="upload-resume" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <textarea className="form-control" rows="6" placeholder="توضیحات"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <button className="btn btn-black pull-left">ارسال</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default WorkWithUs;