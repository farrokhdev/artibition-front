import React from 'react'
import BasketFooter from '../../components/BasketFooter/BasketFooter';
import { Steps, Button, message, Popover } from 'antd';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import { t } from 'i18next';
import WelcomeToAdvistoryStep from './WelcomeToAdvistoryStep';
import SelectFavoriteArtworkStep from './SelectFavoriteArtworkStep';
import ExtraDescriptionStep from './ExtraDescriptionStep';
import BasketFooterPanelNoBox from '../GalleryPanelSelectArtworkSource/BasketFooterPanelNoBox';

const { Step } = Steps;


function Advisory() {

    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };


    // const customDot = (dot, { status, index }) => (
    //     <Popover
    //         content={
    //             <span>
    //                 مرحله {index} وضعیت: {status}
    //             </span>
    //         }
    //     >
    //         {dot}
    //     </Popover>
    // );


    const steps = [
        {
            //   title: t("content-panel-add-artwork.step1"),
            title: "",
            content: <WelcomeToAdvistoryStep next={next} prev={prev} />,
            // content: <div style={{ width: "20px", height: "20px", backgroundColor: "red" }} onClick={() => { next() }} />,
            icon: false
        },
        {
            //   title: t("content-panel-add-artwork.step2"),
            title: "",
            content: <SelectFavoriteArtworkStep prev={prev} next={next} />,
            // content: <div style={{ width: "20px", height: "20px", backgroundColor: "red" }} onClick={() => { next() }} />,
            icon: false
        },
        {
            //   title: t("content-panel-add-artwork.step2"),
            title: "",
            content: <ExtraDescriptionStep prev={prev} next={next} />,
            // content: <div style={{ width: "20px", height: "20px", backgroundColor: "red" }} onClick={() => { next() }} />,
            icon: false
        },
    ];

    return (
        <>
            <HeaderPanel t={t} />

            <div className="panel-style container mx-auto px-0 w-100 bg-white">
                <Steps
                    className="site-navigation-steps advisory-step-antd dir"
                    type="navigation"
                    current={current}
                    responsive={false}
                >
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} className="step-perisan-num" />
                    ))}
                </Steps>

                <div className="steps-content pt-5 px-4 px-sm-0 dir">{steps[current].content}</div>
            </div>
            <BasketFooterPanelNoBox />
        </>
    )
}

export default Advisory;
