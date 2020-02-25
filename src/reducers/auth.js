import actionTypes from '../constants/actionTypes'
import JwtHelper from "../utils/jwtHelper";

const initialState={
    isAuth: JwtHelper.isTokenExist
};

export default  function (state = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.LOGIN_REQUEST:
            return {...state};
        case actionTypes.LOGIN_SUCCESS:
            return { ...state, ...payload };
        case actionTypes.LOGIN_ERROR:
            return { ...state, ...payload };


        default:
            return state;
    }
}
