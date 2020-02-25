import {fork, all, call} from 'redux-saga/effects';
import auth from "./auth";
import userInfo from "./userInfo";

export default function * rootSaga(){

    yield all([call(auth), call(userInfo)])
};