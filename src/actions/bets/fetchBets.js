import axios from 'axios'
import fetchBetsStart from './fetchBetsStart'
import fetchBetsAck from './fetchBetsAck'
import fetchBetsError from './fetchBetsError'
import endpoint from "../../const/endpoint";
import Cookies from "js-cookie";

const fetchBets = (userID) => {
	return dispatch => {
		dispatch(fetchBetsStart());
		axios.get(`${endpoint}/api/betHistory?userID=${userID}`, {
            headers: {
              Authorization: `Bearer ${Cookies.get("authToken")}`
            }
        })
		.then(response => dispatch(fetchBetsAck(response)))
		.catch(error => dispatch(fetchBetsError(error)))
	}
}

export default fetchBets;

