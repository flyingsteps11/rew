import actionTypes from "../actions"

const initialState = {
    items:[]
};
export default function (state=initialState, {type, payload}) {
    switch (type) {
        case actionTypes.GRID_LOAD_REQUEST:
            return {...state, ...payload};
        case actionTypes.GRID_LOAD_SUCCESS:
            return {...state, ...payload};
        default:
            return state;
    }
}