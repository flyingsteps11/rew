import actionTypes from '../constants/actionTypes'
import JwtHelper from "../utils/jwtHelper";

const initialState={
    isAuth: JwtHelper.isTokenExist,
    isLoading: false
};

export default  function (state = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.LOGIN_REQUEST:
            return {...state, isLoading: false};
        case actionTypes.LOGIN_SUCCESS:
            return { ...state, isLoading: false, isAuth: true };
        case actionTypes.LOGIN_ERROR:
            return { ...state, ...payload, isLoading: false};
        case actionTypes.LOGOUT_SUCCESS:
            return {...state, isAuth: false };
        default:
            return state;
    }
}
