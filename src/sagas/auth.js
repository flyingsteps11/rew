import { call, put, takeLatest } from "redux-saga/effects";
import JwtHelper from "../utils/jwtHelper";
import actionTypes from '../constants/actionTypes'
import actions from "../actions";
import 'regenerator-runtime'
import { postman } from "../utils/postman";

function* loginSaga({ payload, history }) {
    try {
        const { accessToken } = yield call(() => postman.post("/identity/login", payload));
        yield JwtHelper.saveTokenToLS(accessToken);
        yield put(actions.LoginSuccess());
        yield history.push("/grid/orders");
    } catch (error) {
        yield put(actions.LoginError(error));
    }
};

function* logoutSaga({ history }) {
    try {
        yield JwtHelper.removeToken();
        yield history.push("/login")
    } catch (error) {
        yield put(actions.logoutError(error))
    }
}

export default function* watchLogin() {
    yield takeLatest(actionTypes.LOGIN_REQUEST, loginSaga);
        yield takeLatest(actionTypes.LOGOUT_SUCCESS, logoutSaga)

}
