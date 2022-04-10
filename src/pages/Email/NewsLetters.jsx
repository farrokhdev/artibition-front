import React from "react";
import successLogo from "../../assets/img/email/logo.svg";
import so_twitter from "../../assets/img/email/twitter.svg";
import so_instagram from "../../assets/img/email/instagram.svg";
import so_aparat from "../../assets/img/email/aparat.svg";

export const NewsLetters = () => {
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
          <h1 style={{ fontSize: "18px !important", marginBottom: "30px",fontWeight:"bold" }}>
            این هفته در آرتیبیشن
          </h1>
          <div
            class="news-block"
            style={{
              display: "inline-block",
              width: "100%",
              padding: "50px 0px",
              borderBottom: "1px solid #f3f3f3",
            }}
          >
            <img
              src="//api.artibition.gallery/static/img/news.jpg"
              alt="Arthibition-news"
              class="img-responsive"
              style={{
                width: "280",
                height: "280",
                float: "right",
                marginLeft: "32px",
                maxWidth: "280px",
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />
            <div class="news-detail" style={{ textAlign: "right" }}>
              <h3
                class="text-justify"
                style={{ textAlign: "justify", fontSize: "14px",fontWeight:"bold" }}
              >
                مروری بر نقاشی های جلال شباهنگی (از دشت ها و کویرها گل) و مرغ‌ها
                و حجم‌های شیشه ای
              </h3>
              <p
                class="text-justify"
                style={{
                  textAlign: "justify",
                  marginTop: "0",
                  marginBottom: "6px",
                }}
              >
                او در سال ۱۳۱۴ در تـهران به دنیا آمد و در جوانی با علاقه‌‌ای که
                به تصویر و نقاشی داشت، پیگیر یادگیری هنرهای تجسمی بود. او برای
                تحصیل وارد دانشگـاه سن خوزه‌ی ایالت کالیفرنیا شد
              </p>
              <a
                href="#"
                class="btn-outline-gray"
                style={{
                  float: "left",
                  background: "#fff",
                  padding: "5px 10px",
                  color: "#ec008c",
                  boxSizing: "border-box",
                  border: "1px solid #e5e5e5",
                  fontSize: "12px",
                }}
              >
                مشاهده خبر
              </a>
            </div>
          </div>
          <div
            class="news-block"
            style={{
              display: "inline-block",
              width: "100%",
              padding: "50px 0",
              borderBottom: "1px solid #f3f3f3",
            }}
          >
            <img
              src="//api.artibition.gallery/static/img/news.jpg"
              alt="Arthibition-news"
              class="img-responsive"
              style={{
                width: "280",
                height: "280",
                float: "right",
                marginLeft: "32px",
                maxWidth: "280px",
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />
            <div class="news-detail" style={{ textAlign: "right" }}>
              <h3
                class="text-justify"
                style={{ textAlign: "justify", fontSize: "14px",fontWeight:"bold" }}
              >
                مروری بر نقاشی های جلال شباهنگی (از دشت ها و کویرها گل) و مرغ‌ها
                و حجم‌های شیشه ای
              </h3>
              <p
                class="text-justify"
                style={{
                  textAlign: "justify",
                  marginTop: "0",
                  marginBottom: "6px",
                }}
              >
                او در سال ۱۳۱۴ در تـهران به دنیا آمد و در جوانی با علاقه‌‌ای که
                به تصویر و نقاشی داشت، پیگیر یادگیری هنرهای تجسمی بود. او برای
                تحصیل وارد دانشگـاه سن خوزه‌ی ایالت کالیفرنیا شد
              </p>
              <a
                href="#"
                class="btn-outline-gray"
                style={{
                  float: "left",
                  background: "#fff",
                  padding: "5px 10px",
                  color: "#ec008c",
                  boxSizing: "border-box",
                  border: "1px solid #e5e5e5",
                  fontSize: "12px",
                }}
              >
                مشاهده خبر
              </a>
            </div>
          </div>

          <a
            href="#"
            class="btn-pink mrgt60"
            style={{
              background: "#ec008c",
              padding: "10px",
              width: "100%",
              maxWidth: "250px",
              color: "#fff",
              display: "block",
              margin: "0 auto",
              marginTop:"60px",
              boxSizing: "border-box",
            }}
          >
            مشاهده همه اخبار
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
