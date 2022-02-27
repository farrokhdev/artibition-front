import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import apiServices from "../../utils/api.services";
import {FAQ_, FAQ_CATEGORY} from "../../utils";
import {useTranslation} from "react-i18next";
import queryString from "query-string";

export default function FAQ() {
    const { t, i18n } = useTranslation();
    const [categories, setCats] = useState([])
    const [faqs, setFaqs] = useState([])
    const [category, setCategory] = useState("")


    useEffect(() => {
        apiServices
            .get(FAQ_CATEGORY, "")
            .then((res) => {
                if (res.data) {
                    setCats(res.data.data);
                }
            })
            .catch((err) => {
                console.log("err", err);
            });
    }, [])


    useEffect(() => {
        apiServices
            .get(FAQ_, queryString.stringify({category: category}))
            .then((res) => {
                if (res.data) {
                    setFaqs(res.data.data.results);
                }
            })
            .catch((err) => {
                console.log("err", err);
            });
    }, [category])

    
    return (
        <>
            <div className="container">
                <Header />
                <Menu />
                <div className="container">
                    <div className="banner">
                        <div className="content-banner">
                            <h2 className="content-title">{t("FAQ")}</h2>
                            <div className="nl-input">
                                <input placeholder={t("filter-header.placeholder-input-search")} />
                                <button type="button" className="btn-black">{t("artworkList.box-banner.btn")}</button>
                            </div>
                        </div>
                    </div>
                    <div className="default-content">
                        <div className="inner-vertical-tab">
                            <div className="row dir">
                                <div className="col-md-2 col-sm-3">
                                    <ul className="nav nav-tabs text-dir">
                                        <li className={category === "" ? "active" : ""}>
                                            <a data-toggle="tab" onClick={() => setCategory("")}>{t("all_faq")}</a>
                                        </li>
                                        {categories.map((item, key) =>
                                            <li key={key} className={category === item.id ? "active" : ""}>
                                                <a data-toggle="tab" onClick={() => setCategory(item.id)}>
                                                    {i18n.language === "fa-IR" ? item.translations.fa.title : item.translations.en.title}
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className="col-md-7 col-sm-9">
                                    <div className="tab-content text-dir">
                                        <div id="faq1" className="tab-pane fade in active">
                                            <div className="panel-group accordion-body" id="accordion">

                                                {faqs?.map((item, key) =>

                                                    <div key={key} className="panel panel-default">
                                                        <div className="panel-heading">
                                                            <h4 className="panel-title d-flex">
                                                                <a data-toggle="collapse" data-parent="#accordion" href={"#collapse" + key}
                                                                   aria-expanded="true">
                                                                    {i18n.language === "fa-IR" ? item.translations.fa.question : item.translations.en.question}
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div id={"collapse" + key} className="panel-collapse collapse in">
                                                            <div className="panel-body">
                                                                <p>
                                                                    {i18n.language === "fa-IR" ? item.translations.fa.answer : item.translations.en.answer}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                )}

                                            </div>
                                            <div className="row-pagination">
                                                <ul className="pagination">
                                                    <li><a href="#">1</a></li>
                                                    <li className="active"><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                    <li ><a href="#">4</a></li>
                                                    <li><a href="#">5</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
