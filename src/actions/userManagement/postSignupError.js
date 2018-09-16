import { POST_SIGNUP_ERROR } from "../../const/actionTypes";

const postSignupError = response => {
  return {
    type: POST_SIGNUP_ERROR,
    payload: response.data
  };
};

export default postSignupError;
