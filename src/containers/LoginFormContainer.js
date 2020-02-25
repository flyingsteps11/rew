import {compose, bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import actions from '../actions';
import LoginForm from '../components/LoginForm';
import {withTranslation} from "react-i18next";
import selectors from "../selectors";

const mapStateToProps= state =>({
    isLoading:selectors.auth.isLoading(state)
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({login:(data, history)=> actions.LoginRequest(data, history)}, dispatch);


export default compose(
    withRouter,
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps),
)(LoginForm)