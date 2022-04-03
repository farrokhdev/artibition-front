import React from "react";
import img from "../../assets/img/slider-en-2.jpg";
import moment from "jalali-moment";
import { isNil } from "lodash";

export const HeroExhabitions = ({ reference, exhibitionInfo }) => {
  function getDateObject(date) {
    if (isNil(date)) return;
    const tempDateMain = moment(date, "YYYY-MM-DD")
      .locale("fa")
      .format("YYYY-MMMM-DD-h-mm- dddd")
      .split("-");
    const templateDate = ["year", "month", "day", "hour", "minutes", "dayName"];
    let dateTimeMain;
    for (let i = 0; i < tempDateMain.length; i++) {
      dateTimeMain = { ...dateTimeMain, [templateDate[i]]: tempDateMain[i] };
    }
    return dateTimeMain;
  }
  const mainDateTime =
    !isNil(exhibitionInfo) &&
    getDateObject(Object.values(exhibitionInfo?.start_date)[0]);
  //secondary date is for Time when there is real_virtual exhibition
  let secondaryDateTime = undefined;

  if (exhibitionInfo?.type === "virtual_real") {
    secondaryDateTime = getDateObject(
      Object.values(exhibitionInfo?.start_date)[1]
    );
  }

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="col-img">
            {(exhibitionInfo?.type === "real" ||
              exhibitionInfo?.type === "virtual_real") && (
              <div className="tags tags-events">حضوری</div>
            )}
            {(exhibitionInfo?.type === "virtual" ||
              exhibitionInfo?.type === "virtual_real") && (
              <div className="tags tags-events">مجازی</div>
            )}
            <img
              src={exhibitionInfo?.poster?.[0]?.exact_url}
              width="1152"
              height="1626"
              className="img-responsive"
              alt="exhibition_posters"
            />
          </div>
        </div>
        <div className="col-md-8">
          <div className="ex-title">
            <h3>{exhibitionInfo?.translations?.fa?.name}</h3>
            <h6>{exhibitionInfo?.translations?.fa?.statement}</h6>

            <h4>
              زمان نمایشگاه{" "}
              {exhibitionInfo?.type === "virtual" ? "مجازی" : "حضوری"}
            </h4>

            <p className="persian-number">
              گشایش: {mainDateTime?.dayName} {mainDateTime?.day}{" "}
              {mainDateTime?.month} {mainDateTime?.year} از ساعت{" "}
              {mainDateTime?.hour}
            </p>
            <p>
              بازدید برای عموم {exhibitionInfo?.translations?.fa?.activity_time}
            </p>

            {exhibitionInfo?.type === "real_virtual" && (
              <div>
                <h4>زمان نمایشگاه مجازی</h4>

                <p className="persian-number">
                  گشایش: {secondaryDateTime?.dayName} {secondaryDateTime?.day}{" "}
                  {secondaryDateTime?.month} {secondaryDateTime?.year} از ساعت{" "}
                  {secondaryDateTime?.hour}
                </p>
                <p>
                  بازدید برای عموم{" "}
                  {exhibitionInfo?.translations?.fa?.activity_time}
                </p>
              </div>
            )}

            <button
              type="button"
              className="btn btn-default"
              onClick={() =>
                reference.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                })
              }
            >
              مشاهده آثار نمایشگاه
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
