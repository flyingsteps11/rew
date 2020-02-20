import React, {Suspense} from 'react'
import MyRouter from "./router";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import {CubeGrid} from "styled-loaders-react"
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Suspense fallback={<CubeGrid style={{position: "absolute", margin: "0 auto"}} />}>
                        <MyRouter/>
                    </Suspense>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;