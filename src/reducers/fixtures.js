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
  loadingAll: false,
  loadingAvailable: false,
  availableFixtures: [],
  allFixtures: []
};

const fixtures = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AVAILABLE_FIXTURES_START:
      return {
        ...state,
        loadingAvailable: true
      };

    case FETCH_AVAILABLE_FIXTURES_ACK:
      return {
        ...state,
        loadingAvailable: false,
        availableFixtures: action.payload
      };

    case FETCH_AVAILABLE_FIXTURES_ACK:
      return {
        ...state,
        loadingAvailable: false,
        error: true
      };

    case FETCH_ALL_FIXTURES_START:
      return {
        ...state,
        loadingAll: true
      };

    case FETCH_ALL_FIXTURES_ACK:
      return {
        ...state,
        loadingAll: false,
        allFixtures: action.payload.sort((fixture1, fixture2) => fixture1.date < fixture2.date)
      };

    case FETCH_ALL_FIXTURES_ACK:
      return {
        ...state,
        loadingAll: false,
        error: true
      };

    default:
      return {
        ...state
      };
  }
};

export default fixtures;
