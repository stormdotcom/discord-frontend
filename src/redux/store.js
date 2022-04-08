import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// import authReducer from "./reducers/authReducer";
// import alertReducer from "./reducers/alertReducer";

const rootReducer = combineReducers({
    auth:2,
    alert:1
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;