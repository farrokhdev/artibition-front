import React from "react";
import successLogo from "../../assets/img/email/logo.svg";
import so_twitter from "../../assets/img/email/twitter.svg";
import so_instagram from "../../assets/img/email/instagram.svg";
import so_aparat from "../../assets/img/email/aparat.svg";

export const DiscountFromFavoritedArtist = () => {
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
          
            padding: "50px",
            marginBottom: "16px",
            backgroundColor: "#fff",
          }}
        >
           <img
            src="//api.artibition.gallery/static/img/artist.jpg"
            alt="Arthibition-artist"
            class="img-responsive round-img"
            style={{ width: "96px", height: "96px", borderRadius: "100%",display: "block",
            maxWidth: "100%",margin:"0 auto" }}
          ></img>
          <h2 style={{ fontSize: "16px",lineHeight: "1.5",fontWeight:"bold" }}>شیما خشخاشی</h2>
          <h1
            class="mrgt40-email"
            style={{
              marginTop: "40px",
              marginBottom: "40px",
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "1.1",
              marginTop: "60px"
            }}
          >
            تخفیف آثار هنرمند
          </h1>
          <p class="maxw400" style={{ maxWidth: "400px", margin: "0 auto" }}>
            هم اکنون تمامی آثار این هنرمند با{" "}
            <strong style={{ color: "#ec008c", fontWeight: "bold" }}>
              تخفیف ۳۰ درصدی
            </strong>{" "}
            از سایت آرتیبیشن قابل خریداری می‌باشد
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
            مشاهده آثار هنرمند
          </a>
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
