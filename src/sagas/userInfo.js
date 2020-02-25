import {call, put, takeLatest} from 'redux-saga/effects'
import actions from '../actions'
import JwtHelper from '../utils/jwtHelper'
import UserService from "../services/UserService";
import {USER_INFO_REQUEST} from "../actions/userInfo";
import request from '../services/request'

function* userInfo() {
    try {
        yield request.setToken(JwtHelper.token);
        const userInfo = yield call (() =>UserService.userInfo());
        const appConfig = yield  call (()=> UserService.appConfig());
        const profileInfo = yield call (()=> UserService.profileInfo());
        yield put (actions.userInfoSuccess({profileInfo:profileInfo, userInfo:userInfo, appConfig:appConfig}))
    }catch (e) {
        console.log(e);
        yield put(actions.userInfoError(e));
    }
}
export default function* watchUserInfo() {
    yield takeLatest(USER_INFO_REQUEST,userInfo)
}