import React from 'react';
import {render} from 'react-dom'
import './i18n';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";

render(
    <App/>,
document.getElementById("root")
);
