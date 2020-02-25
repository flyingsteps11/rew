export const GRID_LOAD_REQUEST = "GRID_LOAD_REQUEST";
export const GRID_LOAD_SUCCESS = "GRID_LOAD_SUCCESS";

export const gridLoadRequest = (payload, match) => ({
    type: GRID_LOAD_REQUEST,
    payload,
    match
});

export const gridLoadSuccess = payload => ({
    type: GRID_LOAD_SUCCESS,
    payload
});