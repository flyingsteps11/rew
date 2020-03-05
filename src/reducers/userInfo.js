 import {USER_INFO_SUCCESS,USER_INFO_REQUEST, USER_INFO_ERROR} from "../actions/userInfo"

 const initialState = {
    userInfo:{data: {}},
     profile:{},
     appConfig: {
        grids: []
     }
 };
export  default function (state = initialState, {type, payload}) {
    switch (type) {
        case USER_INFO_REQUEST:
            return {...state, ...payload};
        case USER_INFO_SUCCESS:
            return {...state, ...payload};
        case USER_INFO_ERROR:
            return {...state};
        default:
            return state;
    }
}