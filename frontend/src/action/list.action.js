export const SET_LIST_DISPLAY = "SET_LIST_DISPLAY";

function setListDisplay(bool) {
    return { type: SET_LIST_DISPLAY, payload: bool };
}

export default setListDisplay;