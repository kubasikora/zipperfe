import axios from 'axios'
import fetchScoretableStart from './fetchScoretableStart'
import fetchScoretableAck from './fetchScoretableAck'
import fetchScoretableError from './fetchScoretableError'
import endpoint from "../../const/endpoint";
import Cookies from "js-cookie";

const logout = () => {
	return dispatch => {
		dispatch(fetchScoretableStart());
		axios.get(endpoint + "/api/userTable", {
            headers: {
              Authorization: `Bearer ${Cookies.get("authToken")}`
            }
        })
		.then(response => dispatch(fetchScoretableAck(response)))
		.catch(error => dispatch(fetchScoretableError(error)))
	}
}

export default logout;

