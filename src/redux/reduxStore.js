import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import mainPageReducer from "./mainPageReducer";
import messagesReducer from "./messagesReducer";
import { usersReducer } from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'; //! adds middleware

let reducers = combineReducers({
  profilePage: mainPageReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
});



let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

