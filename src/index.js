import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import App from './App';
import './i18n';
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

//create components using React.lazy
const FaTheme = React.lazy(() => import('../src/pages/FaTheme/FaTheme'));
const EnTheme = React.lazy(() => import('../src/pages/EnTheme/EnTheme'));

//create a parent component that will load the components conditionally using React.Suspense
const ThemeSelector = ({ children }) => {
    let CHOSEN_THEME
    if (localStorage.getItem('i18nextLng') === null) {
        localStorage.setItem('i18nextLng', 'fa-IR')
        CHOSEN_THEME = 'fa-IR'
    } else {
        CHOSEN_THEME = localStorage.getItem('i18nextLng');
    }

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
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </ThemeSelector>
    </Suspense>,
    document.getElementById('root')
);

