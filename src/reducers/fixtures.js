import {
  FETCH_AVAILABLE_FIXTURES_START,
  FETCH_AVAILABLE_FIXTURES_ACK,
  FETCH_AVAILABLE_FIXTURES_ERROR,
  FETCH_ALL_FIXTURES_START,
  FETCH_ALL_FIXTURES_ACK,
  FETCH_ALL_FIXTURES_ERROR
} from "../const/actionTypes";

const initialState = {
  error: false,
  loading: false,
  availableFixtures: [],
  allFixtures: []
};

const fixtures = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AVAILABLE_FIXTURES_START:
      return {
        ...state,
        loading: true
      };

    case FETCH_AVAILABLE_FIXTURES_ACK:
      return {
        ...state,
        loading: false,
        availableFixtures: action.payload
      };

    case FETCH_AVAILABLE_FIXTURES_ACK:
      return {
        ...state,
        loading: false,
        error: true
      };

    case FETCH_ALL_FIXTURES_START:
      return {
        ...state,
        loading: true
      };

    case FETCH_ALL_FIXTURES_ACK:
      return {
        ...state,
        loading: false,
        allFixtures: action.payload
      };

    case FETCH_ALL_FIXTURES_ACK:
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

export default fixtures;
