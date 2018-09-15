import axios from 'axios'
import fetchAllFixturesStart from './fetchAllFixturesStart'
import fetchAllFixturesAck from './fetchAllFixturesAck'
import fetchAllFixturesError from './fetchAllFixturesError'
import endpoint from "../../const/endpoint";
import Cookies from "js-cookie";

const fetchAllFixtures = () => {
	return dispatch => {
		dispatch(fetchAllFixturesStart());
		axios.get(endpoint + "/api/fixtures/all", {
            headers: {
              Authorization: `Bearer ${Cookies.get("authToken")}`
            }
        })
		.then(response => dispatch(fetchAllFixturesAck(response)))
		.catch(error => dispatch(fetchAllFixturesError(error)))
	}
}

export default fetchAllFixtures;

