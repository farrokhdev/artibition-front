import React from "react";
import successLogo from "../../assets/img/email/logo.svg";
import so_twitter from "../../assets/img/email/twitter.svg";
import so_instagram from "../../assets/img/email/instagram.svg";
import so_aparat from "../../assets/img/email/aparat.svg";

export const SuccessfullPurchaseEmail = () => {
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
            src="//api.artibition.gallery/static/img/done.png"
            alt=""
          style={{
            width:"56px",
            height:"56px"
          }}
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
خرید شما با موفقیت انجام شد
          </h1>
          <p
            className="maxw400-email"
            style={{ maxWidth: "400px", margin: "0 auto", lineHeight: "1.5" }}
          >
ضمن تشکر از خرید شما، به زودی فرآیند رسیدگی و ارسال اثر به آدرس شما انجام خواهد شد
          </p>
          <div class="grayback-mrgt20-maxw400" style={{background: "#fbfbfb",
width: "100%",
padding: "12px",
marginTop: "20px",
maxWidth: "400px",
marginRight: "auto",
marginLeft: "auto"
}}>
            <p style={{  fontWeight: "bold"
}}
            
            
            >شماره پیگیری خرید:<span class="greencolor mrgrl10">۱۲۶۲۳</span></p>
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
        مشاهده وضعیت سفارش
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
