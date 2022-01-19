import React from 'react';
import { t } from 'i18next';
import artwork from '../../assets/img/artwork.svg'

function LoginUploadArtworks({ next, prev }) {
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

            <div className="adv-btn">
                <button onClick={() => prev()} type="button" className="btn-prev ">
                    <span>مرحله قبل</span>
                </button>
                <button onClick={() => next()} htmlType="submit" className="btn-next pull-left">
                آپلود آثار
                </button>
            </div>
        </>
    )
}

export default LoginUploadArtworks;