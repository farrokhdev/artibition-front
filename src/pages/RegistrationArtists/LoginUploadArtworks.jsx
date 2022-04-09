import React, { useEffect, useState } from 'react';
import { t } from 'i18next';
import artwork from '../../assets/img/artwork.svg'
import { Link } from 'react-router-dom';
import apiServices from '../../utils/api.services';
import { ARTIST, PRODUCTS_ME } from '../../utils';
import { handleShowImage } from '../../utils/showImageProduct';
import { DEFAULT_URL_IMAGE } from '../../utils/defaultImage';
import { GetLanguage } from '../../utils/utils';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function LoginUploadArtworks({ next, prev }) {

    const [productsMe, setProductsMe] = useState([]);
    const Language = GetLanguage();
    const { artistform } = useSelector((state) => state.artworkReducer)
    const navigate = useNavigate();


    const onFinish = (values) => {
        let payload = { ...artistform }

        if (productsMe?.length >= 3) {
            apiServices.post(ARTIST, payload)
                .then(res => {
                    if (res.data) {
                        // next()
                        navigate('/panel/profile')
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
        console.log('Success:', values);
    }

    const getProductList = () => {
        apiServices.get(PRODUCTS_ME, "")
            .then(res => {
                console.log("res.ProductsME==>", res.data.data.results);
                setProductsMe(res.data.data.results)
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        getProductList();
    }, []);
    return (
        <>
            <div class="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">
                <div class="artist-info">
                    <img src={artwork} width="136" height="136" alt="" class="center-block img-responsive" />
                    <h2 class="adv-title">آپلود ۳ اثر</h2>
                    <p>
                        جهت نهایی سازی پروفایل خود، حداقل ۳ اثر
                        <br />
                        از آثار خود را آپلود نمایید
                    </p>
                </div>
            </div>

            <div class="col-sm-12 upload-art-body">
                <table class="table table-responsive upload-art">
                    <thead>
                        <tr>
                            <td></td>
                            <td>ردیف</td>
                            <td>تصویر</td>
                            <td>عنوان اثر</td>
                            <td>رشته هنری</td>
                            <td>موضوع</td>
                            <td>تکنیک</td>
                            <td>متریال</td>
                            <td>ابعاد</td>
                            <td>قیمت</td>
                            <td>عملیات</td>
                        </tr>
                    </thead>
                    <tbody>
                        {productsMe?.length && productsMe?.map((item, key) => {
                            return (

                                <tr class="complete-row">
                                    <td data-label="ردیف" class="persian-num">{key + 1}</td>
                                    <td>
                                        <img src={item && handleShowImage(item)} width="1776" height="1776"
                                            class="img-responsive center-block" alt="" />
                                    </td>
                                    <td data-label="عنوان اثر">{Language === 'fa-IR' ? item?.translations?.fa?.title : item?.translations?.en?.title}</td>
                                    <td data-label="رشته هنری">{Language === 'fa-IR' ? item?.category?.translations?.fa?.title : item?.category?.translations?.en?.title}</td>
                                    <td data-label="موضوع">نقاشی خط</td>
                                    <td data-label="تکنیک">پاستل</td>
                                    <td data-label="متریال">کلاژ</td>
                                    <td data-label="ابعاد">
                                        <span class="dimension-width persian-num">{item?.width}</span>
                                        <span> در </span>
                                        <span class="dimension-height persian-num">{item?.height}</span>
                                    </td>
                                    <td data-label="قیمت">
                                        <span class="col-price-num">{Language === 'fa-IR' ? item?.toman_price : item?.dollar_price}</span>
                                        <span class="col-price-unit">{Language === 'fa-IR' ? 'تومان' : 'USD'}</span>
                                    </td>
                                    <td data-label="عملیات">
                                        <a href="#"><img src="img/edit_name.svg" width="32" height="32" alt="" /> </a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className="adv-btn">
                <button onClick={() => prev()} type="button" className="btn-prev ">
                    <span>مرحله قبل</span>
                </button>
                {/* <Link to="/panel/add-artwork">
                    <button
                        // onClick={() => next()} 
                        htmlType="submit" className="btn-next pull-left">
                        آپلود آثار
                    </button> 
                </Link>*/}

                <Link
                    to={"/panel/register-artist-add-artwork"}
                    state={{ from: "/panel/registration-artists" }}
                // to="/panel/add-artwork"
                >
                    <button type="button" class="btn-art-upload pull-left more-upload">آپلود آثار بیشتر</button>
                </Link>

                {productsMe?.length >= 3 ?
                    <button type="button" onClick={onFinish} class="btn-next pull-left">
                        <span>ثبت تغییرات</span>
                    </button>
                    : ""
                }

            </div>
        </>
    )
}

export default LoginUploadArtworks;