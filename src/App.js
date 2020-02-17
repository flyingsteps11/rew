import React from 'react'
import MyRouter from "./router";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <MyRouter/>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;