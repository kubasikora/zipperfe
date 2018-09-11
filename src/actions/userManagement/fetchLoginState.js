import axios from 'axios'
import fetchLoginStateStart from './fetchLoginStateStart'
import fetchLoginStateAck from './fetchLoginStateAck'
import fetchLoginStateError from './fetchLoginStateError'

const fetchLoginState = () => {
	return dispatch => {
		dispatch(fetchLoginStateStart());
		axios.get("/isLogged")
			.then(response => dispatch(fetchLoginStateAck(response)))
			.catch(error => dispatch(fetchLoginStateError(error)))
	}
}

export default fetchLoginState;

