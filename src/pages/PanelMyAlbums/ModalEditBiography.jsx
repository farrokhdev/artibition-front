import React, { useState, useEffect } from 'react';
import { message, Modal, Checkbox } from 'antd';
import { Form, Input } from "antd";
import close_icon from '../../assets/img/clear.svg';

import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';
import { GetLanguage } from '../../utils/utils'
import apiServices from '../../utils/api.services';
import { ARTIST_ME } from '../../utils';

function ModalEditBiography({ visibleEditBiography, setVisibleEditBiography, callback, data }) {

    const [form] = Form.useForm();
    const navigate = useNavigate();
    let Language = GetLanguage();
    const { TextArea } = Input

    const onFinish = (value) => {
        const payload = {
            "translations": {
                "fa": {
                    "biography": value?.biography_fa
                },
                "en": {
                    "biography": value?.biography_en
                }
            }
        }
        apiServices.patch(ARTIST_ME, payload)
            .then(res => {
                if (res.data) {
                    message.success({
                        content: "با موفقیت ویرایش شد",
                        style: { marginTop: "110px" }
                    })
                    callback()
                    form.resetFields()
                    handleClose()
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleClose = () => {
        setVisibleEditBiography(false)
    }

    useEffect(() => {
        form.setFieldsValue({
            "biography_fa": data?.translations?.fa?.biography,
            "biography_en": data?.translations?.en?.biography
        })
    }, [data])



    return (
        <>
            <Modal
                style={{ marginTop: '100px' }}
                visible={visibleEditBiography}
                width={'700px'}
                footer={[]}
                destroyOnClose={true}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title mx-auto" id="exampleModalLabel">ویرایش بیوگرافی</h5>
                        <button>
                            <span onClick={handleClose} aria-hidden="true" aria-label="Close">
                                <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                            </span>
                        </button>
                    </div>
                    <Form
                        className=""
                        form={form}
                        onFinish={onFinish}
                    >
                        <Form.Item required name={"biography_fa"}>
                            <TextArea style={{ resize: "none" }} rows={"6"} placeholder={"بیوگرافی"} dir={"rtl"} />
                        </Form.Item>
                        <Form.Item required name={"biography_en"}>
                            <TextArea style={{ resize: "none" }} rows={"6"} placeholder={"Biograpgy"} dir={"ltr"} />
                        </Form.Item>
                        <button htmlType={"submit"} className='btn btn-black d-block mx-auto'>{"ثبت تغییرات"}</button>
                    </Form>
                </div>
            </Modal>
        </>
    )
}

export default ModalEditBiography
