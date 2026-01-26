export const SET_STABLE_STATE = "SET_STABLE_STATE";

function setStableState(bool) {
    return { type: SET_STABLE_STATE, payload: bool };
}

export default setStableState;
