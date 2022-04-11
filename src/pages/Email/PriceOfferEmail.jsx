import React from "react";
import successLogo from "../../assets/img/email/logo.svg";
import so_twitter from "../../assets/img/email/twitter.svg";
import so_instagram from "../../assets/img/email/instagram.svg";
import so_aparat from "../../assets/img/email/aparat.svg";

export const PriceOfferEmail = () => {
  return (
    <div
      style={{
        fontFamily: "Tahoma, Arial, sans-serif",
        textAlign: "center",
        fontSize: "14px",
        lineHeight: "1.5",
        color: "#141414",
        direction: "rtl",
      }}
    >
      <div
        className="container_email"
        style={{ width: "100%", maxWidth: "640px", margin: "0 auto" }}
      >
        <div
          className="logo_email"
          style={{ marginTop: "16px", marginBottom: "20px" }}
        >
          <img
            src="//api.artibition.gallery/static/img/logo.svg"
            alt="email-logo"
            style={{
              margin: "0 auto",
              display: "block",
              width: "160px",
              // aspectRatio: "auto 80 / 86",
              height: "42px",
            }}
          />
        </div>
        <div
          className="box"
          style={{
            background: "#fff",
            padding: "50px",
            marginBottom: "16px",
            backgroundColor: "#fff",
          }}
        >
          <img
            src="//api.artibition.gallery/static/img/bid.jpg"
            alt=""
            
          />
          <h1
            class="mrgt40-email"
            style={{
              marginTop: "40px",
              marginBottom: "40px",
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "1.1",
            }}
          >
         پیشنهاد قیمت برای اثر شما
          </h1>
          <p
            className="maxw400-email"
            style={{ maxWidth: "400px", margin: "0 auto", lineHeight: "1.5" }}
          >
 یک مبلغ پیشنهادی برای خرید اثر شما توسط یکی از کاربران ارسال شده است با مراجعه به حساب کاربری خود جهت تأیید، رد و یا ارائه پیشنهاد جدید اقدام نمایید 
          </p>
          <div class="artwork-block" style={{ marginTop: "20px",
  marginBottom: "20px",
  display: "inline-block",
  width:"100%"
}}>
            <img src="//api.artibition.gallery/static/img/artwork.png" alt="" class="img-responsive "  style={{
              width:"136px",height:"138px",
              float: "right",
              maxWidth: "30%",
              marginLeft: "16px"
            }} />
            <div class="artwork-detail-email" style={{
              float: "right",
              width: "70%"
            }}>
                <div class="artwork-row" style={{
                  display: "inline-block",
                  width: "100%",
                  padding: "1px 0 6px 0",
                  boxSizing: "border-box",
                  borderBottom: "1px solid #e8e8e8"
                }}>
                    <span class="fltr" style={{float: "right"}}>نام اثر</span>
                    <span class="fltl" style={{float: "left"}}>بدون عنوان</span>
                </div>
                <div class="artwork-row" style={{
                  display: "inline-block",
                  width: "100%",
                  padding: "1px 0 6px 0",
                  boxSizing: "border-box",
                  borderBottom: "1px solid #e8e8e8"
                }}>
                    <span class="fltr" style={{float: "right"}}>کد اثر</span>
                    <span class="fltl" style={{float: "left"}}>3172</span>
                </div>
                <div class="artwork-row" style={{
                  display: "inline-block",
                  width: "100%",
                  padding: "1px 0 6px 0",
                  boxSizing: "border-box",
                  borderBottom: "1px solid #e8e8e8"
                }}>
                    <span className="fltr" style={{float: "right"}}>ابعاد</span>
                    <span className="fltl" style={{float: "left"}}>60 در 60</span>
                </div>
                <div className="artwork-row" style={{
                  display: "inline-block",
                  width: "100%",
                  padding: "1px 0 6px 0",
                  boxSizing: "border-box",
                  borderBottom: "1px solid #e8e8e8"
                }}>
                    <span className="fltr" style={{float: "right"}}>ادیشن</span>
                    <span className="fltl" style={{float: "left"}}>ادیشن1</span>
                </div>
            </div>
            <div className="" style={{
              background: "#fbfbfb",
              display: "inline-block",
              width: "100%",
              boxSizing: "border-box",
              padding: "20px",
              marginTop:"20px"
            }}>
            <span className="fontbold greencolor fltr" style={{fontWeight: "bold",color: "#15aa56",float: "right"}}> قیمت پیشنهاد شده</span>
            <span className="fontbold greencolor fltl" style={{fontWeight: "bold",color: "#15aa56",float: "left"}}>۱۳,۰۰۰,۰۰۰<span class="font11">تومان</span></span>
        </div>
        </div>
          <a
            href="#"
            className="btn-pink-email mrgt60-email"
            style={{
              background: " #ec008c",
              padding: "10px",
              width: "100%",
              maxWidth: " 250px",
              color: "#fff",
              display: "block",
              margin: "0 auto",
              marginTop: "60px",
              boxSizing: "border-box",
            }}
          >
            مراجعه به داشبورد
          </a>
        </div>
     
      </div>
      <div class="phone-footer">
        <p class="graycolor font13" style={{fontSize: "13px" ,color: "#adafb3",marginTop: "0",
marginBottom: "6px"}}>در صورت ایجاد هر گونه سوال و یا مشکل، می‌توانید با ما تماس بگیرید:</p>
        <a href="tel:+982122922538" class="graycolor">538 22 229 021</a>
    </div>
    </div>
  );
};
