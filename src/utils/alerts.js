import { Alert } from 'antd';


export const  alertSuccess = (className , icon , description , closable) => {
    return (
        <Alert
            className={className}
            icon={icon}
            description={description}
            closable={closable}
            type="info"
            showIcon
        />
    )
  };


  export const  alertNotice = (className , icon , description , closable) => {
      return (
        <Alert
            className={className}
            icon={icon}
            description={description}
            closable={closable}
            type="info"
            showIcon
    />)
  }


