import {
    FETCH_BETS_START,
    FETCH_BETS_ACK,
    FETCH_BETS_ERROR,
    POST_BET_START,
    POST_BET_ACK,
    POST_BET_ERROR,
    CLOSE_BET_SNACKBAR
  } from "../const/actionTypes";
  
  const initialState = {
    error: false,
    loading: false,
    postSuccess: false,
    userBets: []
  };
  
  const bets = (state = initialState, action) => {
    switch (action.type) {
      case POST_BET_START:
        return {
          ...state
        }
      
      case POST_BET_ACK:
        return {
          ...state,
          postSuccess: true
        }

      case POST_BET_ERROR:
        return {
          ...state,
          error: true
        }

      case CLOSE_BET_SNACKBAR:
        return {
          ...state,
          error: false,
          postSuccess: false
        }
      case FETCH_BETS_START:
        return {
          ...state,
          loading: true
        };
  
      case FETCH_BETS_ACK:
        return {
          ...state,
          loading: false,
          userBets: action.payload
        };
  
      case FETCH_BETS_ERROR:
        return {
          ...state,
          loading: false,
          error: true
        };
  
      default:
        return {
          ...state
        };
    }
  };
  
  export default bets;
  