import React from 'react'
import BasketFooter from '../../components/BasketFooter/BasketFooter';
import { Steps, Button, message, Popover } from 'antd';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import { t } from 'i18next';
import ArtworkInformation from './ArtworkInformation';
import SellInformation from './SellInformation';
import LoginPersonalInfo from './LoginPersonalInfo';
import LoginArtistInfoForm from './LoginArtistInfoForm';
import LoginUploadArtworks from './LoginUploadArtworks';

const { Step } = Steps;


function AddArtwork() {

    const [current, setCurrent] = React.useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };


    const customDot = (dot, { status, index }) => (
        <Popover
          content={
            <span>
              مرحله {index} وضعیت: {status}
            </span>
          }
        >
          {dot}
        </Popover>
      );


    const steps = [
      // {
      //   title: t("content-panel-add-artwork.step1"),
      //   content: <LoginPersonalInfo next={next} />,
      //   icon : false
      // },
      // {
      //   title: t("content-panel-add-artwork.step2"),
      //   content: <LoginArtistInfoForm prev={prev} next={next} />,
      //   icon : false
      // },
      // {
      //   title: t("content-panel-add-artwork.step3"),
      //   content: <LoginUploadArtworks prev={prev} next={next} />,
      //   icon : false
      // },
        {
          title: t("content-panel-add-artwork.step4"),
          content: <ArtworkInformation prev={prev} next={next} />,
          icon : false
        },
        {
          title: t("content-panel-add-artwork.step5"),
          content: <SellInformation prev={prev} next={next}/>,
          icon : false
        }
      ];

    return (
        <>
    <HeaderPanel t={t} />

    <div className="panel-style container mx-auto px-0 w-100 bg-white">


        {/* <Steps 
            className='d-flex box-dir-reverse'
            progressDot={customDot}
            current={current}>
            {steps.map(item => (
            <Step key={item.title} title={item.title} />
            ))}
        </Steps> */}



        <Steps
          className='d-flex dir'
          progressDot current={current}
        >
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>

        <div className="steps-content pt-5 px-4 px-sm-0">{steps[current].content}</div>
        {/* <div className="steps-action">
            {current < steps.length - 1 && (
            <Button type="success" onClick={() => next()}>
                Next
            </Button>
            )}
            {current === steps.length - 1 && (
            <Button type="success" onClick={() => message.success('Processing complete!')}>
                Done
            </Button>
            )}
            {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
            </Button>
            )}
        </div> */}

      </div>
    </>
  )
}

export default AddArtwork;
