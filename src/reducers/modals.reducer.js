import { modalsTypes } from "../actions/modals.actions";

export const modalsReducer = (state = {isOpen: false}, action) => {
    switch (action.type) {
        case modalsTypes.OPEN_MODAL:
            return {...state, isOpen: true, id: action.payload.id};
        case modalsTypes.CLOSE_MODAL:
            return {...state, isOpen: false, id: null};
        default:
            return state;
    }
}