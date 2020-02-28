import JwtHelper from "../utils/jwtHelper";
import {call, put, takeEvery} from "redux-saga/effects"
import actions from '../actions'
import {setAccessToken,postman} from "../utils/postman";

function* gridsSaga({ gridName, gridItemsCount }) {
    try {
        yield setAccessToken(JwtHelper.token);
        const data = {
            filter: {},
            skip: gridItemsCount,
            take: 20,
            sort: {
                name: "",
                desc: true
            }
        };
        const gridItems = yield call(() => postman.post(`/${gridName}/search`, data));
        yield put(actions.gridLoadSuccess(gridItems));
    } catch (error) {
        console.error(error)
    }
}

export default function* watchGrids() {
    yield takeEvery(actions.GRID_LOAD_REQUEST, gridsSaga)
}