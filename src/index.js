import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './assets/style/main.scss';
import App from './App';
import './i18n';

ReactDOM.render(
    // <Suspense fallback="loading">
    <Suspense fallback={null}>
        <App/>
    </Suspense>,
    document.getElementById('root')
);

