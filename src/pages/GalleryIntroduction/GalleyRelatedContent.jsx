import React from 'react';
import gallery from '../../assets/img/gallery/101.jpg';
import arrowLeft from '../../assets/img/arrow-left.jpg';
import Timer from 'react-compound-timer';

function GalleyRelatedContent() {


    function timeExpire(time) {
        let expire = new Date(time)
        let now = new Date()
        if (expire > now) {
            return expire - now
        } else {
            return 0

        }
    }

    return (
        <>
            {[1, 2, 3, 4].map((content) => {
                return (
                    <div className="galley-related-content">
                        <div className="col-sm-6">
                            <div className="gallery-maxwidth">
                                <div className="gallery-img">
                                    <div className="tags tags-events">مجازی</div>
                                    <img src={gallery} height="840" width="840" alt=""
                                        className="img-responsive" />
                                    <a className="gallery-link" href="#"><img src={arrowLeft}
                                        width="16" height="16"
                                        alt="" /></a>
                                </div>
                                <div className="gallery-content">
                                    <h3 className="gallery-content-title">نمایشگاه مجازی هنر نورانی نئون</h3>
                                    <h4 className="gallery-content-name">گالری آران</h4>
                                    <div className="coundown">
                                        <Timer
                                            initialTime={timeExpire("2023/10/12")}
                                            direction="backward"
                                        >
                                            {({ start, resume, pause, stop, reset, timerState }) => (
                                                <div style={{
                                                    direction: 'ltr',
                                                    textAlign: "right"
                                                }}
                                                    className="timers"
                                                >
                                                    <span className="d-inline-block px-3 end" style={{ position: 'inherit' }}>تا پایان</span>
                                                    <span className="d-inline-block persian-num timer"><Timer.Days /></span>
                                                    <span className="d-inline-block coundown timers px-1">:</span>
                                                    <span className="d-inline-block persian-num timer"><Timer.Hours /> </span>
                                                    <span className="d-inline-block coundown timers px-1">:</span>
                                                    <span className="d-inline-block persian-num timer"><Timer.Minutes /></span>

                                                </div>
                                            )}
                                        </Timer>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                )
            })}
        </>
    )
}

export default GalleyRelatedContent;