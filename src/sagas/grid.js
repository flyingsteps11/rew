import Request from '../services/request'
import JwtHelper from "../utils/jwtHelper";
import UserService from "../services/UserService";
import {call, put, takeEvery} from "redux-saga/effects"
import actions from '../actions'

function* gridsSaga({match}) {
    try {
        yield Request.setToken(JwtHelper.token)
        const data={

        }
    } catch (e) {

    }
}