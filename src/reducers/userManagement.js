import {
  LOGOUT_START,
  LOGOUT_ACK,
  LOGOUT_ERROR,
  LOGIN_SUCCESS,
  POST_SIGNUP_START,
  POST_SIGNUP_ACK,
  POST_SIGNUP_ERROR,
  RAISE_SIGNUP_ERROR,
  CLOSE_ERROR_INFO
} from "../const/actionTypes";

const initialState = {
  loading: false,
  isLogged: false,
  login: undefined,
  error: false
};

const userManagement = (state = initialState, action) => {
  switch (action.type) {
    case RAISE_SIGNUP_ERROR:
      return {
        ...state,
        error: true
      }

    case CLOSE_ERROR_INFO:
      return {
        ...state,
        error: false
      }

    case POST_SIGNUP_START:
      return {
        ...state,
        loading: true
      }

    case POST_SIGNUP_ACK:
      return {
        ...state,
        loading: false
      }  

    case POST_SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }  

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
        ...state,
        error: true
      };

    default:
      return {
        ...state
      };
  }
};

export default userManagement;
