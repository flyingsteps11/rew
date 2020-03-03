import { put, takeEvery,call } from "redux-saga/effects";

import { postman, setAccessToken } from "../utils/postman";
import JwtHelper from "../utils/jwtHelper";

import actions from "../actions";

function* getGridViewSaga ({ gridName }) {
    try {
        yield setAccessToken(JwtHelper.token);
        const gridViewsResult = yield call(() => postman.get(`/userSettings/${gridName}`));
        yield put(actions.getGridViewSuccess({ gridViews: gridViewsResult }));
    } catch (error) {

    }
};

function* saveGridViewSaga ({ gridName, gridColumns, viewName }) {
    try {

        const { isError } = yield call(() => postman.post(`/userSettings/${gridName}`, {
            key: gridName,
            value: JSON.stringify({
                [viewName]: gridColumns
            })
        }));
        yield put(actions.saveGridViewsSuccess({ errors: isError }));
    } catch (error) {

    }
};

export default function* watchGrids() {
    yield takeEvery(actions.GET_GRID_VIEW_REQUEST, getGridViewSaga);
    yield takeEvery(actions.SAVE_GRID_VIEW_REQUEST, saveGridViewSaga);
};