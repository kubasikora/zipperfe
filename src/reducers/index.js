import { combineReducers } from "redux";
import userManagement from "./userManagement";
import scoretable from "./scoretable";
import bets from "./bets";
import fixtures from "./fixtures";

const rootReducer = combineReducers({
    userManagement,
    scoretable,
    bets,
    fixtures
});

export default rootReducer;