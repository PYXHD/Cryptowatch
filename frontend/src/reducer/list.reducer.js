import { SET_LIST_DISPLAY } from "../action/list.action";

const initialState = { showList: false }

function listReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LIST_DISPLAY:
            return { showList: action.payload };
        default:
            return state;
    }
}


export default listReducer;