import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from '../src/styles/globlaStyle'
import Routes from './routes';

ReactDOM.render(
    <>
        <Routes />
        <GlobalStyle />
    </>,
    document.getElementById('root')
);


