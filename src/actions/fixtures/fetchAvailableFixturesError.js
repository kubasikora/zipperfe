import {FETCH_AVAILABLE_FIXTURES_ERROR} from "../../const/actionTypes";

const fetchAvailableFixturesError = response => {
    return {
        type: FETCH_AVAILABLE_FIXTURES_ERROR,
        payload: response.data
    }
}

export default fetchAvailableFixturesError;