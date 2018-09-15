import {FETCH_AVAILABLE_FIXTURES_ACK} from "../../const/actionTypes";

const fetchAvailableFixturesAck = response => {
    return {
        type: FETCH_AVAILABLE_FIXTURES_ACK,
        payload: response.data
    }
}

export default fetchAvailableFixturesAck;