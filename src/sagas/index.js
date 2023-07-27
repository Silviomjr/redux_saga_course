import * as entriesSaga from "./entriesSaga";
import * as entrySagaDeletion from "./entriesSagaDeletion";
import * as entrySagaAdd from "./entrySagaAdd";
export function initSagas(sagaMiddleWare) {
    Object.values(entriesSaga).forEach(sagaMiddleWare.run.bind(sagaMiddleWare));
    Object.values(entrySagaDeletion).forEach(sagaMiddleWare.run.bind(sagaMiddleWare));
    Object.values(entrySagaAdd).forEach(sagaMiddleWare.run.bind(sagaMiddleWare));
}