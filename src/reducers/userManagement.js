import {
  LOGOUT_START,
  LOGOUT_ACK,
  LOGOUT_ERROR,
  LOGIN_SUCCESS
} from "../const/actionTypes";

const initialState = {
  loading: false,
  isLogged: false,
  login: undefined
};

const userManagement = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        login: action.payload
      }

    case LOGOUT_START:
      return {
        ...state,
        loading: true
      };

    case LOGOUT_ACK:
      return {
        ...state,
        loading: false,
        isLogged: false,
        login: undefined
      };

     case LOGOUT_ERROR:
      console.log(action.payload);
      return {
        ...state
      };

    default:
      return {
        ...state
      };
  }
};

export default userManagement;
