import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import actions from '../actions';
import selectors from '../selectors';
import Header from '../components/Header';
import {withTranslation} from "react-i18next";

const mapStateToProps = state => ({
    userName: selectors.userInfo.getUserName(state),
    grids: selectors.userInfo.getGrids(state),
    settingFields:selectors.userInfo.getSettingFields(state),
    dictionaries: selectors.userInfo.getDictionaries(state)
});

const mapDispatchToProps = dispatch => ({
    logout: history => dispatch(actions.logoutSuccess(history)),
    getUserInfo: () => dispatch(actions.userInfoRequest())
});

export default compose(
    withRouter,
    withTranslation(),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Header)