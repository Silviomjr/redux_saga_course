export const entryTypes = {
    GET_ENTRIES: 'GET_ENTRIES',
    POPULATE_ENTRIES: 'POPULATE_ENTRIES',
    POPULATE_ENTRIES_DETAILS: 'POPULATE_ENTRIES_DETAILS',
    ADD_ENTRY: "ADD_ENTRY",
    REMOVE_ENTRY: "REMOVE_ENTRY",
    UPDATE_ENTRY: "UPDATE_ENTRY",
    REMOVE_ENTRY_RESULT: "REMOVE_ENTRY_RESULT",
    ADD_ENTRY_RESULT: "ADD_ENTRY_RESULT"
}

export const addEntryRedux = (payload) => {
    return {type: entryTypes.ADD_ENTRY, payload};
}

export const removeEntryRedux = (id) => {
    return {type: entryTypes.REMOVE_ENTRY, payload: { id }}
}

export const updateEntryRedux = (id, entry) => {
    return { type: entryTypes.UPDATE_ENTRY, payload: { id, entry }}
}

export const getAllEntries = () => {
    return { type: entryTypes.GET_ENTRIES}
};

export const populateEntries = (entries) => {
    return { type: entryTypes.POPULATE_ENTRIES, payload: entries}
}

export const populateEntryDetails = (entry, id) => {
    return { type: entryTypes.POPULATE_ENTRIES_DETAILS, payload: {entry, id} }
}
