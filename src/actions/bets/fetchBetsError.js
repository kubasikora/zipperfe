import {FETCH_BETS_ERROR} from "../../const/actionTypes";

const fetchBetsError = response => {
    return {
        type: FETCH_BETS_ERROR,
        payload: response.data
    }
}

export default fetchBetsError;