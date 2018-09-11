import {
  FETCH_LOGIN_STATE_START,
  FETCH_LOGIN_STATE_ACK,
  FETCH_LOGIN_STATE_ERROR,
  LOGOUT_START,
  LOGOUT_ACK,
  LOGOUT_ERROR
} from "../const/actionTypes";

const initialState = {
  loading: false,
  isLogged: false,
  login: undefined
};

const userManagement = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_STATE_START:
      return {
        ...state,
        loading: true
      };

    case FETCH_LOGIN_STATE_ACK:
      return {
        ...state,
        loading: false,
        isLogged: action.payload.isAuthenticated,
        login: action.payload.login
      };

    case FETCH_LOGIN_STATE_ERROR:
      console.log(action.payload);
      return {
        ...state
      };

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
