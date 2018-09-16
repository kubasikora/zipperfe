import { RAISE_SIGNUP_ERROR } from "../../const/actionTypes";

const raiseSignupError = () => {
    return {
        type: RAISE_SIGNUP_ERROR
    }
}

export default raiseSignupError;