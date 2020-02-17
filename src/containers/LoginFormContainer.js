import {compose, bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import actions from '../store/actions'
import LoginForm from '../components/LoginForm'

const mapStateToProps=state=>({});

const mapDispatchToProps = dispatch =>
    bindActionCreators({login:(data, history)=> actions.LoginRequest(data, history)}, dispatch);


export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(LoginForm)