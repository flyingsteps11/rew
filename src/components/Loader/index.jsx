import React, {Component} from 'react';
import {CubeGrid} from 'styled-loaders-react';

class Loader extends Component {
    state = {
        loading: true
    };
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        },3000)
    }
}

this.state.loading ? <CubeGrid color black /> :
export default Loader;