import React, { useEffect, useState } from "react";
import { Form, Input, Select, Checkbox, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { t } from "i18next";
import download from "../../assets/img/download.svg";
import { ARTIST, CORE_CATEGORIS, PRODUCTS_CATEGORIES } from "../../utils";
import apiServices from "../../utils/api.services";
import { GetLanguage } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { artistForm } from "../../redux/reducers/Artwork/artwork.action";
import queryString from "query-string";
import { isNil } from "lodash";
function LoginArtistInfoForm({ next, prev }) {
  const [form] = Form.useForm();
  const dispach = useDispatch();
  const [categorys, setCategorys] = useState([]);
  const Language = GetLanguage();
  const [categoryId, setCategoryId] = useState();
  const [showCategoryError, setShowCategoryError] = useState(false);
  const onFinish = (values) => {
    if (isNil(categoryId)) {
      setShowCategoryError(true);
      return;
    }
    let payload = {
      artist_type_id: [categoryId],
      // "artist_type_id":[2],
      translations: {
        fa: {
          biography: values.biography,
        },
        en: {
          biography: values.biography_en,
        },
      },
    };
    dispach(artistForm(payload));
    next();
    // apiServices.post(ARTIST,payload)
    //     .then(res=>{
    //         if (res.data) {
    //             next()
    //         }
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     })
    // console.log('Success:', values);
  };

  // get list of sub category for show to user and select by users in dropdown to create art field
  const getListCategory = () => {
    apiServices
      .get(
        CORE_CATEGORIS,
        queryString.stringify({ page_size: 1000, usage: "artist" })
      )
      .then((res) => {
        setCategorys(
          res.data.data.results.map((item) => {
            if (Language === "fa-IR") {
              return {
                label: item?.translations?.fa?.title,
                value: item?.id,
              };
            } else {
              return {
                label: item?.translations?.en?.title,
                value: item?.id,
              };
            }
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getListCategory();
  }, []);

  return (
    <div class="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">
      <div class="artist-info">
        <h2 class="adv-title">تکمیل اطلاعات هنری</h2>
        <p>
          جهت تکمیل اطلاعات هنری خود لطفا فرم زیر را تکمیل نمایید.
          <br />
          این اطلاعات در پروفایل شما به کاربران سایت نمایش داده می‌شود.
        </p>
        <button type="button" class="btn">
          <img src={download} width="12" height="14" alt="" class="" />
          <span>راهنمای تکمیل رزومه</span>
        </button>
      </div>
      <h3 class="info-title mrgt64 require d-flex">حوزه فعالیت هنری شما</h3>
      <Form className="" form={form} onFinish={onFinish}>
        <div class="row">
          {/* <Form.Item
                        className="border-0 w-100"
                        name="art-field"
                        rules={[
                            {
                                required: true,
                                message: 'required',
                            }
                        ]}> */}

          {/* -------   input select categories   ------- */}

          <Select
            className="form-control input-public text-dir border-0 px-2  d-flex"
            placeholder={t("content-panel-add-artwork.art_info.artwork_field")}
            options={categorys}
            allowClear
            onChange={(e) => {
              setCategoryId(e);
              if (showCategoryError) setShowCategoryError(false);
            }}
            id="info-203"
          ></Select>
          {showCategoryError && (
            <span className="text-danger">
              {t("content-panel-add-artwork.please-select-category")}
            </span>
          )}
          {/* </Form.Item> */}
          <div class="col-xs-6">
            {/* <label className="d-flex box-dir-reverse lable-checkbox public-group text-dir">
                            <Form.Item name="remember" valuePropName="checked" noStyle >
                                <Checkbox type="checkbox" class="checkmark"></Checkbox>
                            </Form.Item>
                            <span>نقاشی</span>
                          
                        </label> */}
          </div>
          {/* <div class="col-xs-6">
                        <label className="d-flex box-dir-reverse lable-checkbox public-group text-dir">
                            <Form.Item name="remember" valuePropName="checked" noStyle >
                                <Checkbox type="checkbox" class="checkmark"></Checkbox>
                            </Form.Item>
                            <span>خوشنویسی</span>
                            
                        </label>
                    </div> */}
          {/* <div class="clearfix"></div>
                    <div class="col-xs-6">
                        <label className="d-flex box-dir-reverse lable-checkbox public-group text-dir">
                            <Form.Item name="remember" valuePropName="checked" noStyle >
                                <Checkbox type="checkbox" class="checkmark"></Checkbox>
                            </Form.Item>
                            <span>عکاسی</span>
                           
                        </label>
                    </div>
                    <div class="col-xs-6">
                        <label className="d-flex box-dir-reverse lable-checkbox text-dir">
                            <Form.Item name="remember" valuePropName="checked" noStyle >
                                <Checkbox type="checkbox" class="checkmark"></Checkbox>
                            </Form.Item>
                            <span>چاپ دستی</span>
                           
                        </label>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-xs-6">
                        <label className="d-flex box-dir-reverse lable-checkbox text-dir">
                            <Form.Item name="remember" valuePropName="checked" noStyle >
                                <Checkbox type="checkbox" class="checkmark"></Checkbox>
                            </Form.Item>
                            <span>مجسمه</span>
                            
                        </label>
                    </div>
                    <div class="col-xs-6">
                        <label className="d-flex box-dir-reverse lable-checkbox text-dir">
                            <Form.Item name="remember" valuePropName="checked" noStyle >
                                <Checkbox type="checkbox" class="checkmark"></Checkbox>
                            </Form.Item>
                            <span>گرافیک</span>
                           
                        </label>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-xs-6">
                        <label className="d-flex box-dir-reverse lable-checkbox text-dir">
                            <Form.Item name="remember" valuePropName="checked" noStyle >
                                <Checkbox type="checkbox" class="checkmark"></Checkbox>
                            </Form.Item>
                            <span>نقاشی خط</span>
                           
                        </label>
                    </div>
                    <div class="col-xs-6">
                        <label className="d-flex box-dir-reverse lable-checkbox text-dir">
                            <Form.Item name="remember" valuePropName="checked" noStyle >
                                <Checkbox type="checkbox" class="checkmark"></Checkbox>
                            </Form.Item>
                            <span>طراحی</span>
                           
                        </label>
                    </div> */}
        </div>
        <h3 class="info-title mrgt64 require d-flex">رزومه فارسی</h3>
        <div class="form-group">
          <Form.Item
            className="w-100"
            name="biography"
            rules={[
              {
                required: true,
                message: t(
                  "content-panel-add-artwork.please-fill-out-this-field"
                ),
              },
            ]}
          >
            <TextArea
              className="default-input"
              placeholder="رزومه خود را به فارسی وارد نمایید"
              rows="8"
            />
          </Form.Item>
        </div>
        <h3 class="info-title mrgt64 require d-flex">رزومه انگلیسی</h3>
        <div class="form-group">
          <Form.Item
            className="w-100"
            name="biography_en"
            rules={[
              {
                required: true,
                message: t(
                  "content-panel-add-artwork.please-fill-out-this-field"
                ),
              },
            ]}
          >
            <TextArea
              className="default-input"
              placeholder="رزومه خود را به انگلیسی وارد نمایید"
              rows="8"
            />
          </Form.Item>
        </div>
        <div className="adv-btn">
          <button onClick={() => prev()} type="button" className="btn-prev ">
            {t("content-panel-add-artwork.previous_step")}
          </button>
          <button htmlType="submit" className="btn-next pull-left">
            {t("content-panel-add-artwork.art_info.next_step")}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default LoginArtistInfoForm;
