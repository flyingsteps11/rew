import actionTypes from '../../constants/actionTypes';

export const LoginSuccess = (payload) => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload
});

export const LoginError = payload =>({
    type:actionTypes.LOGIN_ERROR,
    payload
});

export const LoginRequest = (payload, history) => ({
    type: actionTypes.LOGIN_REQUEST,
    payload,
    history
});
export const logoutSuccess = history => ({
    type: actionTypes.LOGOUT_SUCCESS,
    history
});
export const logoutError = payload => ({
    type: actionTypes.LOGOUT_ERROR,
    payload
});
