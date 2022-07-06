import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import mainPageReducer from "./mainPageReducer";
import messagesReducer from "./messagesReducer";
import { usersReducer } from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"; //! adds middleware

let rootReducer = combineReducers({
  profilePage: mainPageReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

type RootReducerType = typeof rootReducer;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<RootReducerType>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
