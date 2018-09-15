import {FETCH_SCORETABLE_ERROR} from "../../const/actionTypes";

const fetchScoretableError = response => {
    return {
        type: FETCH_SCORETABLE_ERROR,
        payload: response.data
    }
}

export default fetchScoretableError;