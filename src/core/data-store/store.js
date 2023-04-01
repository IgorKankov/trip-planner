import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import  createSagaMiddleware from 'redux-saga'
import rootReducer from "./reducers/root-reducer";
import index from "./sagas";

const sagaMiddleware = createSagaMiddleware()


export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({thunk: false, serializableCheck: false}), sagaMiddleware]
});

sagaMiddleware.run(index)