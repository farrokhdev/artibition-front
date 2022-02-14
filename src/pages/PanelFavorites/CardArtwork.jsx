import React,{useState} from 'react'
import { t } from 'i18next';
import artwork_image from '../../assets/img/mainpage/rdbewaopdm840.jpg';
import { deletFollow, GetLanguage } from '../../utils/utils'
import { handleShowImage } from '../../utils/showImageProduct';
import { follow } from "../../utils/utils";
import apiServices from '../../utils/api.services';
import queryString from "query-string";
import { DELETE_FOLLOW } from '../../utils';
import { message } from 'antd';

function CardArtwork({ artworks }) {
    const Language = GetLanguage();
    const [params, setParams] = useState({
        activity: "like",
        content: "product",
    });
    console.log("artworks==> ", artworks)


    const deletFollow = ({ id }) => {
       
        apiServices
          .deleteByParams(DELETE_FOLLOW(id),queryString.stringify(params) )
          .then((res) => {
            if (res.data) {
              message.success({
                content: "درخواست شما با موفقیت ثبت شد",
                style: {
                  marginTop: "110px",
                },
              });
            }
          })
          .catch((err) => {
            console.log("err", err);
          });
      };

    return (
        <div className="col-sm-3">
            <a href="#" className="cols margin-bottom-32">
                <div className="col-img">
                    <div className="tags tags-off ">{artworks?.discount?.type === "percentage" ? artworks?.discount?.value : artworks?.discount?.duration} %</div>
                    <img src={artworks && handleShowImage(artworks)} width="840" height="840" alt="Arthibition" className="img-responsive" />
                    <div className="tab-overly">
                        <span className="btn-see hidden-xs hidden-sm">
                            <span className="view-icon pull-left"></span>
                            <span>{t("artwork.view-artwork")}</span>
                        </span>
                        <button type="button" className="btn-sale">
                            <span className="hidden-xs hidden-sm">{t("artwork.btn-action-to-shop")}</span>
                            <span className="shopping-cart-xs visible-xs visible-sm"></span>
                        </button>
                        <button
                            onClick={() =>
                                deletFollow({
                                    activity: "like",
                                    content: "product",
                                    id: artworks.id,
                                })
                            }
                            // onClick={()=>{
                            //     Follow(
                            //         // item?.following?.follow?.is_active ?
                            //         //     item?.following?.follow?.id :
                            //         //     item?.id, item?.following?.follow?.is_active)
                            // }}
                            type="button" className="like-icon isLike"
                        ></button>
                    </div>
                </div>
                <div className="col-body">
                    <h6 className="col-title">
                        <span className="col-name">{Language === 'fa-IR' ? artworks?.translations?.fa?.artist_name : artworks?.translations?.en?.artist_name}</span>
                        {/* <span className="col-name">Hoseini</span> */}
                    </h6>
                    <div className="col-dimension">
                        <span className="col-dimension-title">Size:</span>
                        <span className="col-dimension-body">
                            <span className="dimension-width">{artworks?.width}</span>
                            <span>x</span>
                            <span className="dimension-height">{artworks?.height}</span>
                        </span>
                    </div>
                    <div className="col-price">
                        <span className="col-price-num">{Language === 'fa-IR' ? artworks?.toman_price : artworks?.dollar_price}</span>
                        <span className="col-price-unit">{Language === 'fa-IR' ? 'تومان' : 'USD'}</span>
                        <span className="col-price-off">{artworks?.discount?.duration}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CardArtwork