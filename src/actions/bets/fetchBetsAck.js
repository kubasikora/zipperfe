import {FETCH_BETS_ACK} from "../../const/actionTypes";

const fetchBetsAck = response => {
    return {
        type: FETCH_BETS_ACK,
        payload: response.data
    }
}

export default fetchBetsAck;