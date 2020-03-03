import actionTypes from "../actions";

const initialState = {
    gridViews: {
        key: null,
        value: null
    },
    errors: false,
    isLoading: false,
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.GET_GRID_VIEW_REQUEST:
            return { ...state, ...payload, isLoading: true }
        case actionTypes.GET_GRID_VIEW_SUCCESS:
            return { ...state, ...payload, isLoading: false }
        case actionTypes.SAVE_GRID_VIEW_REQUEST:
            return { ...state, ...payload, isLoading: true }
        case actionTypes.SAVE_GRID_VIEW_SUCCESS:
            return { ...state, ...payload, isLoading: false }
        default:
            return state;
    }
}