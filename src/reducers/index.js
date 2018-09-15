import { combineReducers } from "redux";
import userManagement from "./userManagement";
import scoretable from "./scoretable";

const rootReducer = combineReducers({
    userManagement,
    scoretable
});

export default rootReducer;