import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import GoogleMap from '../../components/GoogleMap/GoogleMap';

function GalleryContact({ galleryIntroduction }) {
    const { t, i18n } = useTranslation();

    const [point, setPoint] = useState({})

    return (
        <div id="gallery6" class="tab-pane fade in active">
            <div class="col-md-6 col-md-offset-3">
                <ul class="gallery-contact">
                    <li className='text-dir' id="gallery-contact-address">
                        {galleryIntroduction ? i18n.language === 'fa-IR' ?
                            galleryIntroduction?.locations[0]?.translations?.fa?.city + " " + galleryIntroduction?.locations[0]?.translations?.fa?.address
                            :
                            galleryIntroduction?.locations[0]?.translations?.en?.city + " " + galleryIntroduction?.locations[0]?.translations?.en?.address
                            : null}
                        {/* شيراز، انتهاى خيابان عفيف آباد، نبش كوچه ١٩، ساختمان
                        ١٥٦،
                        زيرزمين */}
                    </li>
                    <li class="persian-num text-dir" id="gallery-contact-phone">
                        <a href={galleryIntroduction?.phone}>{galleryIntroduction?.phone}</a>
                    </li>
                    <li class="persian-num text-dir" id="gallery-contact-time">
                        {i18n.language === 'fa-IR' ?
                            galleryIntroduction?.translations?.fa?.work_hours
                            :
                            galleryIntroduction?.translations?.en?.work_hours
                        }
                    </li>
                    <li className='text-dir' id="gallery-contact-mail">
                        <a href="http://gallery-han.com" target="_blank">{galleryIntroduction?.web_site}</a>
                    </li>
                </ul>
                <div class="gallery-contact-map">
                    {galleryIntroduction?.locations[0]?.point &&
                        <GoogleMap lat={galleryIntroduction?.locations[0]?.point?.latitude} long={galleryIntroduction?.locations[0]?.point?.longitude} />
                    }
                </div>
            </div>
        </div>
    )
}

export default GalleryContact;