import React from "react";
import gallery from "../../assets/img/gallery/101.jpg";
import arrowLeft from "../../assets/img/arrow-left.jpg";
import Timer from "react-compound-timer";
import { t } from "i18next";
import Item from "antd/lib/list/Item";
import { useTranslation } from "react-i18next";

function GalleyRelatedContent({ galleryExhibition, galleryIntroduction }) {
  const { t, i18n } = useTranslation();

  function timeExpire(time) {
    let expire = new Date(time);
    let now = new Date();
    if (expire > now) {
      return expire - now;
    } else {
      return 0;
    }
  }

  return (
    <div className="container-fluid">
      <div className="galley-related-content">
        {galleryExhibition?.results?.map((content) => {
          console.log(content);
          return (
            <div className="col-sm-6" style={{ maxWidth: "100%" }}>
              <div className="gallery-maxwidth">
                <div className="gallery-img">
                  <div className="tags tags-events">{t(`gallery-panel-exhibition.table.${content.type}`)}</div>
                  <img
                    src={content?.poster[0]?.exact_url}
                    height="840"
                    width="840"
                    alt=""
                    className="img-responsive"
                  />
                  <a className="gallery-link" href="#">
                    <img src={arrowLeft} width="16" height="16" alt="" />
                  </a>
                </div>
                <div className="gallery-content">
                  {i18n.language === "fa-IR" ? (
                    <>
                      <h3 className="gallery-content-title">
                        {content?.translations?.fa?.name}
                      </h3>
                      <h4 className="gallery-content-name">
                        {galleryIntroduction?.translations?.fa?.title}
                      </h4>
                    </>
                  ) : (
                    <>
                      <h3 className="gallery-content-title">
                        {content?.translations?.en?.name}
                      </h3>
                      <h4 className="gallery-content-name">
                        {galleryIntroduction?.translations?.en?.title}
                      </h4>
                    </>
                  )}
                  <div className="coundown">
                    <Timer
                      initialTime={timeExpire(
                        content.end_date[
                        `${content.type === "virtual_real"
                          ? "virtual"
                          : content.type
                        }_end_date`
                        ]
                      )}
                      direction="backward"
                    >
                      {({ start, resume, pause, stop, reset, timerState }) => (
                        <div
                          style={{
                            direction: "ltr",
                            textAlign: "center",
                          }}
                          className="timers"
                        >
                          <span
                            class="d-inline-block px-3 end"
                            style={{ position: "inherit" }}
                          >
                            {t("artist_profile.tabs.to_end")}
                          </span>
                          <span className="d-inline-block persian-num timer">
                            <Timer.Days />
                          </span>
                          <span className="d-inline-block coundown timers px-1">
                            :
                          </span>
                          <span className="d-inline-block persian-num timer">
                            <Timer.Hours />{" "}
                          </span>
                          <span className="d-inline-block coundown timers px-1">
                            :
                          </span>
                          <span className="d-inline-block persian-num timer">
                            <Timer.Minutes />
                          </span>
                        </div>
                      )}
                    </Timer>
                  </div>
                </div>
              </div>
            </div>

          );
        })}
      </div>

    </div>
  );
}

export default GalleyRelatedContent;
