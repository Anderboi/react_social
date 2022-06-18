import { usersAPI } from "./../api/api";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET-USERS";
const SET_PAGE = "users/SET-PAGE";
const IS_LOADING = "users/IS_LOADING";
const IN_PROGRESS = "users/IN_PROGRESS";

const initState = {
  users: [],
  pageSize: 5,
  usersTotalCount: 100,
  selectedPage: 1,
  isLoading: false,
  inProgressArray: [],
};

export const usersReducer = (state = initState, action) => {
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

export const followUser = (id) => {
  return { type: FOLLOW, id: id };
};
export const unfollowUser = (id) => {
  return { type: UNFOLLOW, id: id };
};
export const setUsers = (users, total) => {
  return { type: SET_USERS, users, total };
};
export const setPage = (page) => {
  return { type: SET_PAGE, page };
};
export const toggleLoading = (isLoading) => {
  return { type: IS_LOADING, isLoading };
};
export const requestInProgress = (inProgress, id) => {
  return { type: IN_PROGRESS, inProgress, id };
};

export const getUsersThunkConstructor =
  (selectedPage, pageSize) => (dispatch) => {
    dispatch(toggleLoading(true));
    usersAPI.getUsers(selectedPage, pageSize).then((data) => {
      dispatch(setUsers(data.items, data.totalCount));
      dispatch(toggleLoading(false));
    });
  };

export const followUserTC = (id) => (dispatch) => {
  dispatch(requestInProgress(true, id));
  usersAPI.followUserApi(id).then((data) => {
    if (data.resultCode === 0) {
      dispatch(followUser(id));
    }
    dispatch(requestInProgress(false, id));
  });
};

export const unfollowUserTC = (id) => (dispatch) => {
  dispatch(requestInProgress(true, id));
  usersAPI.unfollowUserApi(id).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unfollowUser(id));
    }
    dispatch(requestInProgress(false, id));
  });
};
