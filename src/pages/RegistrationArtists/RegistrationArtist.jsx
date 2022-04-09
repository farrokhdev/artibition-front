import React, { useEffect, useState } from 'react';
import { Steps, Button, message, Popover } from 'antd';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import LoginPersonalInfo from './LoginPersonalInfo';
import LoginArtistInfoForm from './LoginArtistInfoForm';
import LoginUploadArtworks from './LoginUploadArtworks';
import { t } from 'i18next';
import apiServices from '../../utils/api.services';
import { ACCOUNT_PROFILE } from '../../utils';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
function RegistrationArtist() {
    const { Step } = Steps;
    const Location = useLocation();
    const [current, setCurrent] = useState(0);
    const [params, setParams] = useState({});
    const [userProfil, setUserProfil] = useState({});
    const [visibleEditMobile, setvisibleEditMobile] = useState(false);


    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    useEffect(() => {
        if (Location?.state?.current) {
            setCurrent(Location?.state?.current)
        }
    }, []);

    const getAccountProfile = () => {
        apiServices.get(ACCOUNT_PROFILE, queryString.stringify(params))
            .then(res => {
                setUserProfil(res.data.data)
                console.log(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getAccountProfile();
    }, []);


    const steps = [
        {
            title: t("content-panel-add-artwork.step1"),
            content: <LoginPersonalInfo
                next={next}
                userProfil={userProfil} />,
            icon: false
        },
        {
            title: t("content-panel-add-artwork.step2"),
            content: <LoginArtistInfoForm prev={prev} next={next} />,
            icon: false
        },
        {
            title: t("content-panel-add-artwork.step3"),
            content: <LoginUploadArtworks prev={prev} next={next} />,
            icon: false
        },
    ];

    return (
        <>
            <HeaderPanel t={t} />
            <div className="panel-style container mx-auto px-0 w-100 bg-white">

                <Steps
                    className='d-flex dir'
                    progressDot current={current}
                >
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>

                <div className="steps-content pt-5 px-4 px-sm-0">{steps[current].content}</div>


            </div>
        </>

    )
}

export default RegistrationArtist; 