import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import App from './App';
import './i18n';


//create components using React.lazy
const FaTheme = React.lazy(() => import('../src/pages/FaTheme/FaTheme'));
const EnTheme = React.lazy(() => import('../src/pages/EnTheme/EnTheme'));

//create a parent component that will load the components conditionally using React.Suspense
const ThemeSelector = ({ children }) => {
  const CHOSEN_THEME = localStorage.getItem('i18nextLng') || 'fa-IR';
  return (
    <>
      <React.Suspense fallback={<></>}>
        {(CHOSEN_THEME === 'fa-IR' && <FaTheme />)}
        {(CHOSEN_THEME === 'en-US' && <EnTheme />)}
      </React.Suspense>
      {children}
      
    </>
  )
}


ReactDOM.render(
    <Suspense fallback={null}>
        <ThemeSelector>
            <App/>
        </ThemeSelector>
    </Suspense>,
    document.getElementById('root')
);

