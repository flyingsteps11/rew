export const GRID_LOAD_REQUEST = "GRID_LOAD_REQUEST";
export const GRID_LOAD_SUCCESS = "GRID_LOAD_SUCCESS";

export const gridLoadRequest = (gridName, gridItemsCount) => ({
    type: GRID_LOAD_REQUEST,
    gridName,
    gridItemsCount
});

export const gridLoadSuccess = payload => ({
    type: GRID_LOAD_SUCCESS,
    payload
});