export const GET_GRID_VIEW_REQUEST = "GET_GRID_VIEW_REQUEST";
export const GET_GRID_VIEW_SUCCESS = "GET_GRID_VIEW_SUCCESS";

export const SAVE_GRID_VIEW_REQUEST = "SAVE_GRID_VIEW_REQUEST";
export const SAVE_GRID_VIEW_SUCCESS = "SAVE_GRID_VIEW_SUCCESS";

export const getGridViewRequest = gridName =>({
    type:GET_GRID_VIEW_REQUEST,
    gridName
});

export const getGridViewSuccess = payload => ({
    type: GET_GRID_VIEW_SUCCESS,
    payload
});

export const saveGridViewsRequest = ( gridName, gridColumns, viewName ) => ({
    type: SAVE_GRID_VIEW_REQUEST,
    gridName,
    gridColumns,
    viewName
});

export const saveGridViewsSuccess = payload => ({
    type: SAVE_GRID_VIEW_SUCCESS,
    payload
});