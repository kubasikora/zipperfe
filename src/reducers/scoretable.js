import {
    FETCH_SCORETABLE_START,
    FETCH_SCORETABLE_ACK,
    FETCH_SCORETABLE_ERROR
  } from "../const/actionTypes";
  
  const initialState = {
    error: false,
    loading: false,
    scoretable: []
  };
  
  const userManagement = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SCORETABLE_START:
        return {
          ...state,
          loading: true
        }

      case FETCH_SCORETABLE_ACK:
        return {
          ...state,
          loading: false,
          scoretable: action.payload
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
  