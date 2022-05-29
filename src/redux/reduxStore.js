import { combineReducers, legacy_createStore as createStore } from "redux";
import mainPageReducer from "./mainPageReducer";
import messagesReducer from "./messagesReducer";

let reducers = combineReducers({
  profilePage: mainPageReducer,
  messagesPage: messagesReducer,
});

let store = createStore(reducers);

export default store;
