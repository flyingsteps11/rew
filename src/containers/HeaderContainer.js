import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import actions from '../store/actions';
import selectors from '../store/selectors';
import Header from '../components/Header';

const mapStateToProps = state => ({
    name: selectors.auth.getUserName(state)
});

const mapDispatchToProps = dispatch => ({
    logout: history => dispatch(actions.logoutSuccess(history)),
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Header)