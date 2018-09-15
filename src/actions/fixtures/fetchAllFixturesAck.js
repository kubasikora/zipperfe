import {FETCH_ALL_FIXTURES_ACK} from "../../const/actionTypes";

const fetchAllFixturesAck = response => {
    return {
        type: FETCH_ALL_FIXTURES_ACK,
        payload: response.data
    }
}

export default fetchAllFixturesAck;