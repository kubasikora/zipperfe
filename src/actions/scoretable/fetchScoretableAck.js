import {FETCH_SCORETABLE_ACK} from "../../const/actionTypes";

const fetchScoretableAck = response => {
    return {
        type: FETCH_SCORETABLE_ACK,
        payload: response.data
    }
}

export default fetchScoretableAck;