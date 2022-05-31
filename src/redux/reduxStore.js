import { combineReducers, legacy_createStore as createStore } from "redux";
import mainPageReducer from "./mainPageReducer";
import messagesReducer from "./messagesReducer";
import { usersReducer } from "./usersReducer";

let reducers = combineReducers({
  profilePage: mainPageReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
