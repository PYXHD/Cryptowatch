import { SET_STABLE_STATE } from "../action/stable.action"

const initialState = { showStable: true }

function stableReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STABLE_STATE:
            return { showStable: action.payload };
        default:
            return state;
    }
}


export default stableReducer;