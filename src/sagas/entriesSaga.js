import { call, fork, put, take } from "redux-saga/effects";
import { entryTypes, populateEntries, populateEntryDetails } from "../actions/entries.actions";
import axios from "axios";

export function* getAllEntries() {
    yield take(entryTypes.GET_ENTRIES);
    console.log('dentro da saga de conseguir um certificado')
    const {data} = yield call(axios, 'http://localhost:3001/entries');
    yield put(populateEntries(data));
}

export function* getAllEntriesDetails() {
    const { payload } = yield take(entryTypes.POPULATE_ENTRIES);
    for (let i = 0; i < payload.length; i++) {
        const entry = payload[i];
        yield fork(getEntryDetails, entry.id);
    }
}

function* getEntryDetails(id) {
    const {data} = yield call(axios, `http://localhost:3001/values/${id}`);
    yield put(populateEntryDetails(data, id));
}

