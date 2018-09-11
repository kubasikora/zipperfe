import {LOGOUT_ACK} from "../../const/actionTypes";

const logoutAck = response => {
    return {
        type: LOGOUT_ACK,
        payload: response.data
    }
}

export default logoutAck;