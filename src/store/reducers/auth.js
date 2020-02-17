import actionTypes from '../../constants/actionTypes'

const initialState={};

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
