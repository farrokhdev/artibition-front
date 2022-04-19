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

    const steps = [
        {
           
            title: "",
            content: <WelcomeToAdvistoryStep next={next} prev={prev} />,
            icon: false
        },
        {
            title: "",
            content: <SelectFavoriteArtworkStep prev={prev} next={next} />,
            icon: false
        },
        {
            title: "",
            content: <ExtraDescriptionStep prev={prev} next={next} />,
            icon: false
        },
    ];

    return (
        <>
            <HeaderPanel t={t} />

            <div className="panel-style container mx-auto px-0 w-100 bg-white">
                
                <Steps
                    className="site-navigation-steps advisory-step-antd dir steps-costum"
                    type="navigation"
                    current={current}
                    responsive={false}
                >
                    {steps.map(item => (
                        <Step size="small" key={item.title} title={item.title} className="step-perisan-num" />
                    ))}
                </Steps>

                <div className="steps-content pt-5 px-4 px-sm-0 dir">{steps[current].content}</div>
            </div>
            <BasketFooterPanelNoBox />
        </>
    )
}

export default Advisory;
