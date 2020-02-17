import {call,takeLatest,put} from 'redux-saga/effects'
import JwtHelper from '../../utils/jwtHelper'
import UserService from "../../services/UserService";
import actionTypes from '../../constants/actionTypes'
import actions from '../actions'
import 'regenerator-runtime'

function* authorize({payload, history}) {
    try{
        const { data: { accessToken } } = yield call(() => UserService.userLogin(payload));
        yield JwtHelper.saveTokenToLS(accessToken);
        yield put(actions.LoginSuccess());
        console.log(history);
        yield history.push('/')

    }catch (error) {
        yield put(actions.LoginError(error))
    }
}

function* logoutSaga({history}) {
    try {
        const token = yield JwtHelper.token;
        yield JwtHelper.removeToken();
        yield history.push('/login')
    } catch (error) {
        console.error(error);
        yield put(actions.logoutError())
    }
}

export default function* watchLogin() {
    yield takeLatest(actionTypes.LOGIN_REQUEST, authorize);
        yield takeLatest(actionTypes.LOGOUT_SUCCESS, logoutSaga)
}










