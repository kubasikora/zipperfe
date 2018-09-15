import axios from 'axios'
import fetchAvailableFixturesStart from './fetchAvailableFixturesStart'
import fetchAvailableFixturesAck from './fetchAvailableFixturesAck'
import fetchAvailableFixturesError from './fetchAvailableFixturesError'
import endpoint from "../../const/endpoint";
import Cookies from "js-cookie";

const fetchAvailableFixtures = () => {
	return dispatch => {
		dispatch(fetchAvailableFixturesStart());
		axios.get(endpoint + "/api/fixtures/available", {
            headers: {
              Authorization: `Bearer ${Cookies.get("authToken")}`
            }
        })
		.then(response => dispatch(fetchAvailableFixturesAck(response)))
		.catch(error => dispatch(fetchAvailableFixturesError(error)))
	}
}

export default fetchAvailableFixtures;

