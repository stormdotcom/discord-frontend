import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducers";
import alertReducer from "./reducers/alertReducers";
import friendReducer from "./reducers/friendsReducers"

const rootReducer = combineReducers({
    auth:authReducer,
    alert:alertReducer,
    friends:friendReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;