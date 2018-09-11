import axios from 'axios'
import logoutStart from './logoutStart'
import logoutAck from './logoutAck'
import logoutError from './logoutError'
import endpoint from "../../const/endpoint";

const logout = () => {
	return dispatch => {
		dispatch(logoutStart());
		axios.get(endpoint + "/logout")
			.then(response => dispatch(logoutAck(response)))
			.catch(error => dispatch(logoutError(error)))
	}
}

export default logout;

