import {FETCH_LOGIN_STATE_ERROR} from "../../const/actionTypes";

const fetchLoginStateError = error => {
    return {
        type: FETCH_LOGIN_STATE_ERROR,
        payload: error
    }
}

export default fetchLoginStateError;