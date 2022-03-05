import React from "react";

export const HeroExhabitions = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="col-img">
            <div className="tags tags-events">حضوری</div>
            <div className="tags tags-events">مجازی</div>
            {/* <img src="img/artworks/unnamed@3x.jpg" width="1152" height="1626" className="img-responsive" /> */}
          </div>
        </div>
        <div className="col-md-8">
          <div className="ex-title">
            <h3>نمایشگاه گروهی آثار نقاشی و حجمی جلوه‌های هنر معاصر</h3>
            <h6>نگارخانه آتشزاد</h6>
            <h4>زمان نمایشگاه حضوری</h4>
            <p>گشایش: جمعه ۲۹ مرداد ۱۳۹۹ از ساعت ۱۶ تا ۲۰</p>
            <p>بازدید برای عموم از ۲۰ الی ۲۷ مرداد از ساعت ۱۵ تا ۱۹</p>
            <p>نگارخانه روزهای شنبه تعطیل است</p>
            <h4>زمان نمایشگاه مجازی</h4>
            <p>زمان نمایشگاه مجازی</p>
            <button type="button" className="btn btn-default">
              مشاهده آثار نمایشگاه
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
