import axios from 'axios';
import { t } from 'i18next';
import React, { useState,useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import lfpqikbjzo from '../../assets/img/mainpage/lfpqikbjzo@3x.jpg';
import pqjkkwfnml from '../../assets/img/mainpage/pqjkkwfnml@3x.jpg';

export default function News() {
    const{i18n} =useTranslation()


      // GET BLOGS 
  const[blogs,setBlogs]=useState([])
  const blogsUrl = "https://artchart.net/api/v1/articles/recent";
  const getBlogs = async () => {
 
     await axios
       .get(blogsUrl, {
         headers: {
           Accept:
             "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
           "Accept-Encoding": "gzip, deflate, br",
           "Accept-Language": "en-US,en;q=0.5",
           Connection: "keep-alive",
           Host: "artchart.net",
           "Sec-Fetch-Dest": "document",
           "Sec-Fetch-Mode": "navigate",
           "Sec-Fetch-Site": "none",
           "Sec-Fetch-User": "?1",
           "Upgrade-Insecure-Requests": "1",
           "User-Agent":
             "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0",
           "Accept-Language":  i18n.language === "fa-IR" ? "fa" : "en",
           "Access-Control-Allow-Origin": "*",
           "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
         },
       })
       .then((res) => {
         console.log(res.status);
         setBlogs(res.data);

       })
       .catch((err) => console.log(err));
   };
 
   console.log(blogs);
   useEffect(() => {
     getBlogs();
   }, []);
    return (
        <div  className="news">
        <div  className="row dir">
            <div className="public-header">
                <div className="d-flex">
                    <h2 className="default-title">
                        
                        {t("news-and-article-art.title")}
                        
                        </h2>
                </div>
            </div>
            <div style={{overflowX : 'hidden'}} className="d-flex news-body">
{blogs?.data?.map(blog=>{
    return(

                <a href={blog.url} className="news-col col-md-6">
                    <div className="row">
                        <div className="col col-md-6 col-sm-4">
                            <div className="news-imgblock">
                                <div className="news-date">
                                    <span className="persian-num">29</span>
                                    <span>اردیبهشت</span>
                                </div>
                                <img src={blogs.data && blog.introImageUrl} width="840" height="840"
                                     className="img-responsive"
                                     alt="آرتیبیشن"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-8">
                            <h3 className="news-title">{blog.title}</h3>
                            <p className="news-short-body hidden-xs">
                               {blog.introDescription.slice(0,120) + "..."}
                            </p>
                            <div className="btn-readmore-black">{t("news-and-article-art.more")}</div>
                        </div>
                    </div>
                </a>
    )
})}
               
                
                <button className="btn btn-default more-news hidden-xs">
                    مشاهده خبرهای بیشتر
                    <span className="glyphicon glyphicon-menu-left"></span>
                </button>
            </div>
        </div>
    </div>
    )
}
