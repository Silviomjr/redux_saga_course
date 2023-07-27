export const modalsTypes = {
    OPEN_MODAL: "OPEN_MODAL",
    CLOSE_MODAL: "CLOSE_MODAL"
}

export const openEditModal = (id) => {
    return { type: modalsTypes.OPEN_MODAL, payload: {id}}
}

export const closeEditModal = () => {
    return { type: modalsTypes.CLOSE_MODAL}
}