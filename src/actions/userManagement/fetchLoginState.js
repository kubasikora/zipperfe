import axios from 'axios'
import fetchLoginStateStart from './fetchLoginStateStart'
import fetchLoginStateAck from './fetchLoginStateAck'
import fetchLoginStateError from './fetchLoginStateError'
import endpoint from "../../const/endpoint";

const fetchLoginState = () => {
	return dispatch => {
		dispatch(fetchLoginStateStart());
		axios.get(endpoint + "/isLogged")
			.then(response => dispatch(fetchLoginStateAck(response)))
			.catch(error => dispatch(fetchLoginStateError(error)))
	}
}

export default fetchLoginState;

