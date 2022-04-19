import React from "react";
import artwork10 from "../../assets/img/artworks/hnrpqkfiup@3x.jpg";
import change_icon from "../../assets/img/change.png";
import { Form, Input, Modal, Button } from "antd";

const ModalChangePrice = ({
  showChangePrice,
  setShowChangePrice,
  changePriceFinish,
  changePriceForm,
  artworkToChange,
}) => {
  return (
    <Modal visible={showChangePrice} width={"800px"} footer={[]}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            تغییرات قیمت
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              setShowChangePrice(false);
            }}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="modal-body">
          <Form
            name="changePrice"
            onFinish={changePriceFinish}
            form={changePriceForm}
          >
            <div className="container w-100">
              <div className="block-artworks">
                <img
                  src={artwork10}
                  width="840"
                  height="840"
                  alt=""
                  className="img-responsive center-block"
                />
                <h6 className="col-title" style={{ justifyContent: "center" }}>
                  <span className="col-name">آیدین</span>
                  <span className="col-name">آغداشلو</span>
                </h6>
                <span>بدون عنوان</span>
              </div>
              <div className="block-edit-price dir text-dir">
                <div className="row">
                  <div className="col-sm-12">
                    <label className="lable-checkbox public-group">
                      <input type="checkbox" value="" />
                      <span>برای نمایش</span>
                      <span className="checkmark"></span>
                      <span
                        className="input-help"
                        style={{ position: "block", top: "25px" }}
                      >
                        با انتخاب این گزینه اثر تنها برای نمایش در سایت قرار
                        می‌گیرد
                      </span>
                    </label>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "40px" }}>
                  <div className="col-sm-6">
                    <div className="public-group">
                      <Form.Item name={"tomanPrice"}>
                        <Input
                          className="form-control input-public persian-num "
                          placeholder="قیمت اثر با تومان"
                          defaultValue={artworkToChange.reserved_toman_price}
                        />
                      </Form.Item>
                    </div>
                    <a href="#" className="btn-change">
                      <img
                        src={change_icon}
                        width="24"
                        height="24"
                        alt=""
                        className=""
                      />
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <div className="public-group">
                      <Form.Item name={"dollarPrice"}>
                        <Input
                          className="form-control input-public persian-num "
                          placeholder="قیمت اثر با دلار"
                          defaultValue={artworkToChange.reserved_dollar_price}
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal-footer"
              style={{ flexDirection: "column", padding: "0 15px" }}
            >
              <Form.Item>
                <Button
                  htmlType="submit"
                  className="btn btn-black"
                  onClick={() => {
                    setShowChangePrice(false);
                  }}
                >
                  ثبت تغییرات
                </Button>
              </Form.Item>
              <span style={{ margin: "10px 0" }}>
                تغییرات قیمتی شما در مدت برگزاری نمایشگاه باقی خواهد ماند
              </span>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default ModalChangePrice;
