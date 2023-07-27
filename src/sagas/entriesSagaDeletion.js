import { call, put, take } from "redux-saga/effects";
import { entryTypes } from "../actions/entries.actions";
import axios from "axios";

export function* deleteEntrySaga() {
    while(true) {
        const {payload} = yield take(entryTypes.REMOVE_ENTRY);
        yield call(deleteEntry, payload.id);
        yield put({type: 'REMOVE_ENTRY_RESULT', payload: {id: payload.id}})
    }
}

function deleteEntry(id) {
    axios.delete(`http://localhost:3001/entries/${id}`);
    axios.delete(`http://localhost:3001/values/${id}`)
}