import axios from "axios";
import postBetStart from "./postBetStart";
import postBetAck from "./postBetAck";
import postBetError from "./postBetError";
import endpoint from "../../const/endpoint";
import Cookies from "js-cookie";

const postBet = (fixture, homeGoals, awayGoals) => {
  return dispatch => {
    dispatch(postBetStart());
    axios({
      method: "POST",
      url: `${endpoint}/api/addBet`,
      headers: {
        Authorization: `Bearer ${Cookies.get("authToken")}`
      },
      data: {
        userID: Cookies.get("userID"),
        fixture,
        result: `${homeGoals}:${awayGoals}`
      }
    })
      .then(resp => dispatch(postBetAck()))
      .catch(err => dispatch(postBetError()));
  };
};

export default postBet;