import {LOGIN_FAILURE} from "../../const/actionTypes";

const loginFailure = (username) => {
    return {
        type: LOGIN_FAILURE,
    }
}

export default loginFailure;