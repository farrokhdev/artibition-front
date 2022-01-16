import React from 'react';
import search from '../../assets/img/search.svg';
import shopping_basket from '../../assets/img/shopping_basket.svg';
import NavbarMenuHeader from '../../components/NavbarMenuHeader/NavbarMenuHeader';

export default function Menu() {
    return (
        <div className="menu">
        <div className="row">
        <div className="col-md-1 "></div>
        <div className="col-md-10 col-sm-11 col-xs-12 w-100">

            <NavbarMenuHeader/>
            
        </div>
        <div className="col-md-1  show-xs">
            <a href="#" className="btn-show-xs btn-shoppingcard pull-left">
                <img src={shopping_basket} width="24" height="24" alt=""/>
            </a>
            <a href="#" className="btn-show-xs pull-left visible-xs search-xs">
                <img src={search} width="24" height="24" alt=""/>
            </a>
        </div>
        <div className="input-xs">
            <input type="text" className="form-control" id="search-xs"
                   placeholder="جستجوی نام اثر، نام هنرمند، گالری و غیره"
                   name="search" autocomplete="off"/>
            <div className="autocomplete" id="autocomplete-xs">
                <ul className="predict">
                    <li><a href="#">پرویز تناولی</a></li>
                    <li><a href="#">پرویز اعتصامی</a></li>
                    <li><a href="#">پرتو فرومنش</a></li>
                    <li><a href="#">پروین اعتصامی</a></li>
                    <li><a href="#">پرتره</a></li>
                    <li><a href="#">گالری هان - نمایشگاه عکاسی پرندگان</a></li>
                    <li><a href="#">گالری آرتیبیشن - نمایشگاه نقاشی آبرنگ پرتره</a></li>
                </ul>
                <div className="predict-cat">
                    {/* <span className="graycolor">فیلتر نتایج بر اساس:</span> */}
                    <ul>
                        <li><a href="#">هنرمند</a></li>
                        <li><a href="#">نام اثر</a></li>
                        <li><a href="#">نمایشگاه</a></li>
                        <li><a href="#">گالری</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}
