import React, { useEffect, useState } from "react";
import { t } from 'i18next';

import whitePlus from "../../assets/img/plus-white.png"
import { Link } from "react-router-dom";
import { Button, message, Modal } from "antd";
import apiServices from "../../utils/api.services";
import { ARTIST } from "../../utils";
import queryString from "query-string";


function CreateArtist() {
    const [showArtistSource, setShowArtistSource] = useState(false)
    const [showExistArtist, setShowExistArtist] = useState(false)
    const [showNewArtist, setShowNewArtist] = useState(false)
    const [params, setParams] = useState({
        page_size: 9999999
    })




    useEffect(() => {
        apiServices.get(ARTIST, queryString.stringify(params))
            .then(res => {
                if (res.data) {
                    console.log(res.data.data);
                }
                else {
                    message.error(res.response.data.message)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <>
            <div className="box box-1 create-ex">
                <div className="pull-dir">
                    <span className="bolder-title">{t("gallery-panel-artist.create_artist")}</span>
                </div>
                <Button className="btn-box-1 btn-pink pull-left" onClick={() => { setShowArtistSource(true) }}>
                    <img src={whitePlus} width="16" height="16" className="center-block" />
                </Button>
                <div className="clearfix"></div>
            </div>
            <Modal visible={showArtistSource}
                width={"800px"}
                footer={[]}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{t("gallery-panel-create-exhibition.add_new_artist.title")}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowArtistSource(false) }}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>


                    <div className="modal-body">
                        <div className="adv-btn" style={{ flexDirection: "column" }}>
                            <button type="button" className="btn-black center-block" data-target="#exist-artworks" data-toggle="modal" onClick={() => { setShowExistArtist(true) }}>
                                انتخاب از هنرمندان سایت
                            </button>
                            <button type="button" className="btn-black center-block mrgt16" data-target="#modal-import { useLocation } from 'react-router-dom';edit-price" data-toggle="modal" onClick={() => { setShowNewArtist(true) }}>
                                اضافه کردن هنرمند جدید
                            </button>
                        </div>
                    </div>

                </div>
            </Modal>





            <Modal visible={ showExistArtist}
                width={"800px"}
                footer={[]}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{t("gallery-panel-create-exhibition.add_new_artist.title")}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowExistArtist(false) }}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>


                    <div className="modal-body">
                        ExistArtist
                    </div>

                </div>
            </Modal>



            <Modal visible={showNewArtist}
                width={"800px"}
                footer={[]}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{t("gallery-panel-create-exhibition.add_new_artist.title")}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowNewArtist(false) }}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>


                    <div className="modal-body">
                        newArtist
                    </div>

                </div>
            </Modal>
        </>

    )
}

export default CreateArtist