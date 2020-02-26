import React, {Suspense} from 'react';
import {render} from 'react-dom'
import './i18n';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter} from "react-router-dom";
import {CubeGrid} from "styled-loaders-react";

render(
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<CubeGrid style={{position: "absolute", margin: "0 auto"}}/>}>
                <App/>
            </Suspense>
        </BrowserRouter>
    </Provider>,
document.getElementById("root")
);
