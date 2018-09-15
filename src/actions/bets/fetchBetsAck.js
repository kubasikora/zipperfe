import {FETCH_BETS_ACK} from "../../const/actionTypes";

const fetchBetssAck = response => {
    return {
        type: FETCH_BETS_ACK,
        payload: response.data
    }
}

export default fetchBetssAck;