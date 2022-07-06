import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/api";
import { User } from "../types/types";
import { RootState } from "./reduxStore";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET-USERS";
const SET_PAGE = "users/SET-PAGE";
const IS_LOADING = "users/IS_LOADING";
const IN_PROGRESS = "users/IN_PROGRESS";
// const ADD_FOLLOWED_USERS = "users/ADD_FOLLOWED_USERS";
// const REMOVE_FOLLOWED_USERS = "users/REMOVE_FOLLOWED_USERS";

const initState = {
  users: [] as Array<User>,
  pageSize: 10,
  usersTotalCount: 100,
  selectedPage: 1,
  isLoading: false,
  inProgressArray: [] as Array<number>, //* Array of users ids
  followedUsers: [] as Array<number>,
};

export type State = typeof initState;

export const usersReducer = (state = initState, action: ActionType): State => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    // case ADD_FOLLOWED_USERS: {

    //   return {
    //     ...state,
    //     followedUsers: [...state.followedUsers, action.id],
    //   };
    // }
    // case REMOVE_FOLLOWED_USERS: {
    //   return {
    //     ...state,
    //     followedUsers: state.followedUsers.filter((u) => u !== action.id),
    //   };
    // }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
        usersTotalCount: action.total,
      };
    }

    case SET_PAGE: {
      return {
        ...state,
        selectedPage: action.page,
      };
    }

    case IS_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case IN_PROGRESS: {
      return {
        ...state,
        inProgressArray: action.inProgress
          ? [...state.inProgressArray, action.id]
          : state.inProgressArray.filter((id) => id !== action.id),
      };
    }

    default:
      return state;
  }
};

type ActionType =
  | FollowUserAction
  | UnfollowUserAction
  | SetUsersAction
  | SetPageAction
  | ToggleLoadingAction
  // | AddFilterFollowedUsers
  // | RemoveFilterFollowedUsers
  | RequestInProgressAction;

type FollowUserAction = {
  type: typeof FOLLOW;
  id: number;
};
export const followUser = (id: number): FollowUserAction => {
  return { type: FOLLOW, id: id };
};

type UnfollowUserAction = {
  type: typeof UNFOLLOW;
  id: number;
};
export const unfollowUser = (id: number): UnfollowUserAction => {
  return { type: UNFOLLOW, id: id };
};

type SetUsersAction = {
  type: typeof SET_USERS;
  users: Array<User>;
  total: number;
};
export const setUsers = (users: Array<User>, total: number): SetUsersAction => {
  return { type: SET_USERS, users, total };
};

// type AddFilterFollowedUsers = {
//   type: typeof ADD_FOLLOWED_USERS;
//   id: number;
// };
// export const addFilterFollowedUsers = (id: number): AddFilterFollowedUsers => {
//   return { type: ADD_FOLLOWED_USERS, id };
// };

// type RemoveFilterFollowedUsers = {
//   type: typeof REMOVE_FOLLOWED_USERS;
//   id: number;
// };
// export const removeFilterFollowedUsers = (
//   id: number
// ): RemoveFilterFollowedUsers => {
//   return { type: REMOVE_FOLLOWED_USERS, id };
// };

type SetPageAction = {
  type: typeof SET_PAGE;
  page: number;
};
export const setPage = (page: number): SetPageAction => {
  return { type: SET_PAGE, page };
};

type ToggleLoadingAction = {
  type: typeof IS_LOADING;
  isLoading: boolean;
};
export const toggleLoading = (isLoading: boolean): ToggleLoadingAction => {
  return { type: IS_LOADING, isLoading };
};

type RequestInProgressAction = {
  type: typeof IN_PROGRESS;
  inProgress: boolean;
  id: number;
};
export const requestInProgress = (
  inProgress: boolean,
  id: number
): RequestInProgressAction => {
  return { type: IN_PROGRESS, inProgress, id };
};

type ThunkActionType = ThunkAction<void, RootState, unknown, ActionType>;

export const getUsersThunkConstructor =
  (selectedPage: number, pageSize: number): ThunkActionType =>
  async (dispatch) => {
    dispatch(toggleLoading(true));
    const response = await usersAPI.getUsers(selectedPage, pageSize);
    dispatch(setUsers(response.items, response.totalCount));

    dispatch(toggleLoading(false));
  };

export const followUserTC =
  (id: number): ThunkActionType =>
  async (dispatch) => {
    dispatch(requestInProgress(true, id));
    const response = await usersAPI.followUserApi(id);
    if (response.resultCode === 0) {
      dispatch(followUser(id));
      // dispatch(addFilterFollowedUsers(id)); //! Experimental
    }
    dispatch(requestInProgress(false, id));
  };

export const unfollowUserTC =
  (id: number): ThunkActionType =>
  async (dispatch) => {
    dispatch(requestInProgress(true, id));
    const response = await usersAPI.unfollowUserApi(id);
    if (response.resultCode === 0) {
      dispatch(unfollowUser(id));
      // dispatch(removeFilterFollowedUsers(id)); //! Experimental
    }
    dispatch(requestInProgress(false, id));
  };
