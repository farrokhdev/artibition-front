import React from "react";
import successLogo from "../../assets/img/email/logo.svg";
import so_twitter from "../../assets/img/email/twitter.svg";
import so_instagram from "../../assets/img/email/instagram.svg";
import so_aparat from "../../assets/img/email/aparat.svg";

export const CongratulationsEmail = () => {
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
        <div class="banner-email">
          <img
            src="//api.artibition.gallery/static/img/congratulations.svg"
            class="img-responsive"
            style={{ width: "640px", height: "120px",display: "block",objectFit:"cover",objectPosition:"center",
            width: "100%",
            height: "auto" }}
            alt=""
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
          <p
            className="maxw400-email"
            style={{ maxWidth: "400px", margin: "0 auto", lineHeight: "1.5" }}
          >
            ضمن خوش‌آمدگویی به شما برای عضویت در آرتیبیشن، از هم اکنون می‌توانید
            با مراجعه به لیست آثار از مجموعه کامل و دیدنی آثار هنرمندان ایرانی و
            خارجی بازدید نمایید
          </p>
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
            بازدید آثار
          </a>
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
          <p
            className="maxw400-email"
            style={{ maxWidth: "400px", margin: "0 auto", lineHeight: "1.5" }}
          >
            در صورتی که دارای اثر هنری هستید و می‌خوانید آن را در آرتیبیشن به
            فروش برسانید از طریق دکمه زیر اقدام نمایید
          </p>
          <a
            href="#"
            className="btn-pink-email mrgt60-email"
            style={{
              background: " #fff",
              padding: "10px",
              width: "100%",
              maxWidth: " 250px",
              color: "#141414 ",
              display: "block",
              margin: "0 auto",
              marginTop: "60px",
              boxSizing: "border-box",
              border: "1px solid #ec008c",
              marginTop: "30px",
              marginBottom: "30px"
            }}
          >
            ثبت نام هنرمندان
          </a>
          <p
            class="maxw300"
            style={{ maxWidth: "400px", margin: "0 auto", lineHeight: "1.5"
          } }
          >
            و یا در صورتی که صاحب گالری هستید می‌توانید از{" "}
            <a href="#" style={{ color: "#ec008c" }}>
              اینجا
            </a>{" "}
            برای ثبت گالری و آثار مجموعه خود اقدام نمایید
          </p>
        </div>
        <ul className="social" style={{ textAlign: "center" }}>
          <li style={{ display: "inline-block" }}>
            <a
              href="#"
              style={{
                padding: "30px",
                display: "block",
                transition: "all 0.5s ease 0s",
              }}
            >
              <img src={so_twitter} alt="twitter-artibition" />
            </a>
          </li>
          <li style={{ display: "inline-block" }}>
            <a
              href="#"
              style={{
                padding: "30px",
                display: "block",
                transition: "all 0.5s ease 0s",
              }}
            >
              <img src={so_aparat} alt="aparrat-artibition" />
            </a>
          </li>
          <li style={{ display: "inline-block" }}>
            <a
              href="#"
              style={{
                padding: "30px",
                display: "block",
                transition: "all 0.5s ease 0s",
              }}
            >
              <img src={so_instagram} alt="instagram-artibition" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
