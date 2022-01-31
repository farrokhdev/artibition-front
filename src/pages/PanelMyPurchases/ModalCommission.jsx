import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Checkbox, message, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { t } from 'i18next';
import apiServices from '../../utils/api.services';
import { ADDRESSES, RETERND_ORDER_ITEM } from '../../utils';
import { GetLanguage } from '../../utils/utils'

function ModalCommission({ showModal, setShowModal, editionValue }) {

    const [addresses, setAddresses] = useState([]);
    const [addressId, setAddressId] = useState({ address_id: undefined })
    const [form] = Form.useForm();
    const Language = GetLanguage();
    console.log("addresses", addresses);

    const handleClose = () => {
        setShowModal(false)
        console.log("close", showModal);
    }

    const onFinish = (valuse) => {
        let payload = {
            "description": valuse?.description,
            "location_id": addressId?.address_id
        }
        apiServices.post(RETERND_ORDER_ITEM(editionValue?.id), payload)
            .then(res => {
                if (res.data) {
                    setTimeout(() => {
                        // console.log(res);
                        message.success("با موفقیت ارجاع شد")
                    }, 500);
                } else {
                    message.error("خطا")
                }
            })
    }

    const getData = () => {
        apiServices.get(ADDRESSES,"")
            .then((res) => {
                if (res?.data?.code === 200) {
                    //   setAddresses(res?.data?.data?.results);
                    setAddresses(res.data.data.results.map(item => {
                        if (Language === 'fa-IR') {
                            return { label: item?.translations?.fa?.address, value: item?.id }
                        } else {
                            return { label: item?.translations?.en?.address, value: item?.id }
                        }
                    }))
                }
            })
            .catch((err) => {
                console.log(err);
                message.error("دریافت آدرس با خطا مواجه شد.");
            });
    };

    const handleSetAddress = (value) => {
        setAddressId({
            ...addressId,
            address_id: value
        })
    }
    useEffect(() => {
        getData();
    }, [editionValue?.id]);

    return (

        <>
            <Modal
                centered
                className=""
                visible={showModal}
                onOk={handleClose}
                onCancel={handleClose}
                width={600}
                footer={[]}
            >
                <Form
                    className=""
                    form={form}
                    onFinish={onFinish}
                >


                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">ارجاع اثر</h5>
                            <button onClick={handleClose} type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="return-artwork">
                                <p>جهت مرجوع کردن اثر، لطفا اطلاعات زیر را به دقت تکمیل نمایید</p>
                                <div class="public-group">
                                    <Form.Item
                                        className="border-0 w-75"
                                        name="art-field"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'required',
                                            }
                                        ]}>

                                        {/* -------   input select categories   ------- */}

                                        <Select
                                            className='form-control input-public text-dir border-0 px-2  d-flex'
                                            placeholder="آدرس"
                                            options={addresses}
                                            allowClear
                                            onChange={handleSetAddress}
                                            id="info-203"
                                        >

                                        </Select>

                                    </Form.Item>
                                </div>
                            </div>
                            <div class="artist-msg">

                                <Form.Item
                                    className="w-100"
                                    name="description"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'required',
                                        }]}
                                >
                                    <TextArea className="default-input"
                                        placeholder="در صورتی که پیام و یا پرسشی از این هنرمند دارید، برای ایشان ارسال نمایید" rows="12" />
                                </Form.Item>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button htmlType="submit" class="btn btn-black">ارسال</button>
                        </div>
                    </div>

                </Form>
            </Modal>
        </>)
}

export default ModalCommission; 