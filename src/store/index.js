import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import thunk from 'redux-thunk';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const Enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers(rootReducer), Enhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store