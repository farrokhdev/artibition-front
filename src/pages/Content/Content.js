import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import apiServices from "../../utils/api.services";
import {CONTENT_DETAIL, FAQ_, FAQ_CATEGORY} from "../../utils";
import {useTranslation} from "react-i18next";
import queryString from "query-string";
import Footer from "../../components/Footer/Footer";
import {useParams} from "react-router-dom";

export default function Content() {
    const { t, i18n } = useTranslation();
    let params = useParams();
    const [data, setData] = useState([])
    const [category, setCategory] = useState("")

    const getContent = (slug) => {
        apiServices
            .get(CONTENT_DETAIL(slug), "")
            .then((res) => {
                if (res.data) {
                    setData(res.data.data);
                }
            })
            .catch((err) => {
                console.log("err", err);
            });
    }


    useEffect(() => {
        getContent(params.slug)
    }, [])


    return (
        <>
            <div className="container">
                <Header />
                <Menu />
                <div className="container">

                    <div className="tab-pane fade in"
                         dangerouslySetInnerHTML=
                             {i18n.language === "fa-IR" ?
                                 {__html: data?.translations?.fa?.content} :
                                 {__html: data?.translations?.en?.content}
                             }
                    />

                </div>
            </div>
            <Footer/>
        </>
    )
}
