import {
    FETCH_BETS_START,
    FETCH_BETS_ACK,
    FETCH_BETS_ERROR
  } from "../const/actionTypes";
  
  const initialState = {
    error: false,
    loading: false,
    userBets: []
  };
  
  const bets = (state = initialState, action) => {
    switch (action.type) {
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
  