import {call, put, takeLatest,fork,join, takeEvery} from 'redux-saga/effects'
import actions from '../actions'
import JwtHelper from '../utils/jwtHelper'
import {USER_INFO_REQUEST} from "../actions/userInfo";
import {postman, setAccessToken} from "../utils/postman";

function* userInfo() {
    try {
        yield setAccessToken(JwtHelper.token);

        const userInfo = yield fork(() =>postman.get("/identity/userInfo"));
        const userInfoResult = yield join(userInfo);

        const appConfig = yield fork(() => postman.get("/appConfiguration"));
        const appConfigResult = yield join(appConfig);

        const profileInfo = yield fork(() => postman.get("/profile/info"));
        const profileInfoResult = yield join(profileInfo);

        yield put (actions.userInfoSuccess({profileInfo:profileInfoResult, userInfo:userInfoResult, appConfig:appConfigResult}))
    }catch (error) {
        console.error(error);
    }
}
export default function* watchUserInfo() {
    yield takeEvery(actions.USER_INFO_REQUEST,userInfo)
}