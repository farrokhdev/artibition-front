import React,{useState} from 'react';
import { useTranslation } from 'react-i18next';
import GoogleMap from '../../components/GoogleMap/GoogleMap';

function GalleryContact({galleryIntroduction}) {
    const { t, i18n } = useTranslation();

    const [point, setPoint] = useState({})

    console.log("introduction",galleryIntroduction)
    return (
        <div id="gallery6" class="tab-pane fade in active">
            <div class="col-md-6 col-md-offset-3">
                <ul class="gallery-contact">
                    <li id="gallery-contact-address">
                    {galleryIntroduction ? i18n.language === 'fa-IR' ?
                         galleryIntroduction?.locations[0]?.translations?.fa?.city + " " + galleryIntroduction?.locations[0]?.translations?.fa?.address
                        :
                        galleryIntroduction?.locations[0]?.translations?.en?.city + " " + galleryIntroduction?.locations[0]?.translations?.en?.address
                    :null}
                        {/* شيراز، انتهاى خيابان عفيف آباد، نبش كوچه ١٩، ساختمان
                        ١٥٦،
                        زيرزمين */}
                    </li>
                    <li class="persian-num" id="gallery-contact-phone">
                        <a href={galleryIntroduction?.phone}>{galleryIntroduction?.phone}</a>
                    </li>
                    <li class="persian-num" id="gallery-contact-time">
                    {i18n.language === 'fa-IR' ?
                        galleryIntroduction?.translations?.fa?.work_hours 
                        :
                        galleryIntroduction?.translations?.en?.work_hours
                    }                        
                    </li>
                    <li id="gallery-contact-mail">
                        <a href="http://gallery-han.com" target="_blank">{galleryIntroduction?.web_site}</a>
                    </li>
                </ul>
                <div class="gallery-contact-map">
                    <GoogleMap lat={galleryIntroduction?.locations[0]?.point?.latitude} long={galleryIntroduction?.locations[0]?.point?.longitude}/>
                    {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12951.704953473436!2d51.4442248!3d35.7526177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8f743d766facda2d!2z2q_Yp9mE2LHbjCDYotix2KrbjNio24zYtNmGLSBBcnRpYml0aW9uIEFydCBHYWxsZXJ5!5e0!3m2!1sen!2s!4v1597140910520!5m2!1sen!2s"
                    width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""
                    aria-hidden="false" tabindex="0"></iframe> */}
                </div>
            </div>
        </div>
    )
}

export default GalleryContact;