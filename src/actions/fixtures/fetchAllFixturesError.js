import {FETCH_ALL_FIXTURES_ERROR} from "../../const/actionTypes";

const fetchAllFixturesError = response => {
    return {
        type: FETCH_ALL_FIXTURES_ERROR,
        payload: response.data
    }
}

export default fetchAllFixturesError;