import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// import AppHome from './AppHome';
// import AppGallery from './AppGallery';
// import AppContact from './AppContact';
// import AppContentSearch from './AppContentSearch';

import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom'

// ReactDOM.render(<AppHome />, document.getElementById('root'));
// ReactDOM.render(<AppGallery />, document.getElementById('root'))
// ReactDOM.render(<AppContact />, document.getElementById('root'))
// ReactDOM.render(<AppContentSearch />, document.getElementById('root'));

const rootEl = document.getElementById("root");
const render = Componet =>
ReactDOM.render(
    <BrowserRouter>
    <Componet />
    </BrowserRouter>,
    rootEl
);
render(AppRouter);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
