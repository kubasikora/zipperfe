import {LOGIN_SUCCESS} from "../../const/actionTypes";

const loginSuccess = (username) => {
    return {
        type: LOGIN_SUCCESS,
        payload: username
    }
}

export default loginSuccess;