import React, {Fragment, Suspense} from 'react'
import MyRouter from "./router";
import {connect} from "react-redux";
import Header from "./containers/HeaderContainer";
import selectors from "./selectors"

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                {this.props.isAuth && <Header/>}
                <MyRouter/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isAuth: selectors.auth.isAuth(state),
    userName:selectors.userInfo.getUserName(state)
});

export default connect(mapStateToProps)(App);