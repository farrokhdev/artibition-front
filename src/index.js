import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './assets/style/main.scss';
import App from './App';
import './i18n';

ReactDOM.render(
    <Suspense fallback="loading">
        <App/>
    </Suspense>,
    document.getElementById('root')
);

