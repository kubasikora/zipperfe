import axios from "axios";
import postSignupStart from "./postSignupStart";
import postSignupAck from "./postSignupAck";
import postSignupError from "./postSignupError";
import endpoint from "../../const/endpoint";

const postSignup = body => {
  return dispatch => {
    dispatch(postSignupStart());
    axios({
      method: "POST",
      url: `${endpoint}/register`,
      data: {
        name: body.name,
        login: body.login,
        password: body.password,
        UCLwinner: body.UCLwinner 
      }
    })
    //axios.post(endpoint + "/register", body)
      .then(response => {
        document.location = "/";
        dispatch(postSignupAck(response));
      })
      .catch(error => dispatch(postSignupError(error)));
  };
};

export default postSignup;
