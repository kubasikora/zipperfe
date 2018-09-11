import {FETCH_LOGIN_STATE_ACK} from "../../const/actionTypes";

const fetchLoginStateAck = response => {
    return {
        type: FETCH_LOGIN_STATE_ACK,
        payload: response.data
    }
}

export default fetchLoginStateAck;