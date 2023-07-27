import { entryTypes } from "../actions/entries.actions";

export const entriesReducer = (state = initialEntries, action) => {
    switch (action.type) {
      

      case entryTypes.POPULATE_ENTRIES:
        return action.payload;
      case entryTypes.ADD_ENTRY_RESULT:
        const newEntries = state.concat({...action.payload});
        return newEntries;
      case entryTypes.REMOVE_ENTRY_RESULT:
        const newEntriesRemoved = state.filter(entry => entry.id !== action.payload.id)
        return newEntriesRemoved;
      case entryTypes.UPDATE_ENTRY_RESULT:
      case entryTypes.POPULATE_ENTRIES_DETAILS:
        let newEntriesToUpdate = [...state];
        const index = newEntriesToUpdate.findIndex(entry => entry.id === action.payload.id);
        newEntriesToUpdate[index] = {...newEntriesToUpdate[index], ...action.payload.entry};
        
        return newEntriesToUpdate;
      default:
        return state;
    }
  }

  var initialEntries = []