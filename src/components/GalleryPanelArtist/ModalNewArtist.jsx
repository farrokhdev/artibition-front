import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import OneUploadCircle from "../../components/OneUploadCircle/OneUploadCircle";
import { useTranslation } from "react-i18next";
import classnames from "classnames";
import { getTranslation } from "../../utils/fetchTranslation";

const ModalNewArtist = ({
  showNewArtist,
  setShowNewArtist,
  uploadList,
  setUploadList,
  form,
  onFinishNewArtist,
}) => {
  const { TextArea } = Input;
  const { t, i18n } = useTranslation();
  const [firstNameEn, setFirstNameEn] = useState("");

  const [lastNameEn, setLastNameEn] = useState("");
  const applyTranslation = async (name, fn) => {
    if (name?.length < 1) return;
    const tempFirstNameEn = await getTranslation(name);
    fn(tempFirstNameEn);
  };
  const formSubmit = (values) => {
    onFinishNewArtist({
      ...values,
      name_en: firstNameEn,
      family_en: lastNameEn,
    });
  };
  return (
    <Modal
      visible={showNewArtist}
      width={800}
      footer={[]}
      destroyOnClose={true}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            {t("gallery-panel-create-exhibition.add_new_artist.title")}
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              setShowNewArtist(false);
            }}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="modal-body">
          <div className="enter-address">
            <div className="row-addaddress">
              <h3 className="addressform-title text-dir">
                {t(
                  "gallery-panel-create-exhibition.add_new_artist.upload_artist_picture"
                )}
              </h3>
            </div>
            <OneUploadCircle
              uploadList={uploadList}
              setUploadList={setUploadList}
            />
            <Form
              form={form}
              name="add_new_artist"
              onFinish={formSubmit}
              className="row dir"
            >
              <h3 className="addressform-title text-dir w-100">
                {t(
                  "gallery-panel-create-exhibition.add_new_artist.artist_info"
                )}
              </h3>
              <br />
              <div
                className={classnames("", {
                  "col-sm-6": i18n.language === "fa-IR",
                  "d-none": i18n.language === "en-US",
                })}
              >
                <div className="public-group">
                  <Form.Item name="name_fa">
                    <Input
                      required={i18n.language === "fa-IR" ? true : false}
                      className="form-control input-public"
                      placeholder={t(
                        "gallery-panel-create-exhibition.add_new_artist.first_name_fa"
                      )}
                      onChange={(e) => {
                        applyTranslation(e.target.value, setFirstNameEn);
                      }}
                    />
                  </Form.Item>
                </div>
              </div>
              <div
                className={classnames("", {
                  "col-sm-6": i18n.language === "fa-IR",
                  "d-none": i18n.language === "en-US",
                })}
              >
                <div className="public-group">
                  <Form.Item name={"family_fa"}>
                    <Input
                      required={i18n.language === "fa-IR" ? true : false}
                      className="form-control input-public"
                      placeholder={t(
                        "gallery-panel-create-exhibition.add_new_artist.last_name_fa"
                      )}
                      onChange={async (e) => {
                        applyTranslation(e.target.value, setLastNameEn);
                      }}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="public-group en">
                  <Form.Item>
                    <Input
                      required
                      className="form-control input-public"
                      placeholder={t(
                        "gallery-panel-create-exhibition.add_new_artist.first_name_en"
                      )}
                      value={firstNameEn}
                      onChange={(e) => setFirstNameEn(e.target.value)}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="public-group en ">
                  <Form.Item>
                    <Input
                      required
                      className="form-control input-public"
                      placeholder={t(
                        "gallery-panel-create-exhibition.add_new_artist.last_name_en"
                      )}
                      value={lastNameEn}
                      onChange={(e) => setLastNameEn(e.target.value)}
                    />
                  </Form.Item>
                </div>
              </div>

              <div
                className={classnames("", {
                  "col-sm-12": i18n.language === "fa-IR",
                  "d-none": i18n.language === "en-US",
                })}
              >
                <div className="public-group ">
                  <Form.Item name={"bio_fa"}>
                    <TextArea
                      required={i18n.language === "fa-IR" ? true : false}
                      rows={"6"}
                      placeholder={t(
                        "gallery-panel-create-exhibition.add_new_artist.bio_fa"
                      )}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="public-group en">
                  <Form.Item name={"bio_en"}>
                    <TextArea
                      required
                      rows={"6"}
                      placeholder={t(
                        "gallery-panel-create-exhibition.add_new_artist.bio_en"
                      )}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="modal-footer justify-content-center">
                <Button htmlType="submit" className="btn btn-black">
                  {t(
                    "gallery-panel-create-exhibition.add_new_artist.confirm_btn"
                  )}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalNewArtist;
