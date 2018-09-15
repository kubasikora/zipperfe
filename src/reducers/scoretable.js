import {
  FETCH_SCORETABLE_START,
  FETCH_SCORETABLE_ACK,
  FETCH_SCORETABLE_ERROR
} from "../const/actionTypes";

const initialState = {
  error: false,
  loading: false,
  results: []
};

const scoretable = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCORETABLE_START:
      return {
        ...state,
        loading: true
      };

    case FETCH_SCORETABLE_ACK:
      return {
        ...state,
        loading: false,
        results: action.payload.sort((el1, el2) => el1.pts > el2.pts)
      };

    case FETCH_SCORETABLE_ACK:
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

export default scoretable;
