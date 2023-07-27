import { applyMiddleware, combineReducers, createStore } from "redux";
import { entriesReducer } from '../reducers/entries.reducer'; 
import { composeWithDevTools } from "redux-devtools-extension";
import { modalsReducer } from "../reducers/modals.reducer";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "../sagas";

const sagaMiddleWare = createSagaMiddleware();
const middlewares = [sagaMiddleWare];

export const storeConfig = () => {
  const store = createStore(combineReducers(
    {
    entries: entriesReducer,
    modals: modalsReducer,
    }), 
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  );
  initSagas(sagaMiddleWare);

  return store;
};
