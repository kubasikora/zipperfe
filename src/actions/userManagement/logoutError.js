import {LOGOUT_ERROR} from "../../const/actionTypes";

const logoutError = response => {
    return {
        type: LOGOUT_ERROR,
        payload: response.data
    }
}

export default logoutError;