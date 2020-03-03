import {fork, all, call} from 'redux-saga/effects';
import auth from "./auth";
import userInfo from "./userInfo";
import grid from "./grid"
import gridView from "./gridView";
export default function * rootSaga(){

   yield all ([
       auth(),
       call(userInfo),
       call(grid),
       call(gridView)
       ]
   )
};