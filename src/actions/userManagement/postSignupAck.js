import { POST_SIGNUP_ACK } from "../../const/actionTypes";

const postSignupAck = response => {
  return {
    type: POST_SIGNUP_ACK,
    payload: response.data
  };
};

export default postSignupAck;
