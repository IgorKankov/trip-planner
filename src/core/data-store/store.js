import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import  createSagaMiddleware from 'redux-saga'
import rootReducer from "./reducers/root-reducer";
import rootSaga from "./sagas/root-saga";

const sagaMiddleware = createSagaMiddleware()


export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({thunk: false, serializableCheck: false}), sagaMiddleware]
});

sagaMiddleware.run(rootSaga)