import { getUsers, followUserApi, unfollowUserApi } from "./../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET-PAGE";
const IS_LOADING = "IS_LOADING";
const IN_PROGRESS = "IN_PROGRESS";

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

export const getUsersThunkConstructor = (selectedPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleLoading(true));
    getUsers(selectedPage, pageSize).then((data) => {
      dispatch(toggleLoading(false));

      dispatch(setUsers(data.items, data.totalCount));
    });
  };
};

export const followUserTC = (id) => {
  return (dispatch) => {
    dispatch(requestInProgress(true, id));
    followUserApi(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followUser(id));
      }
      dispatch(requestInProgress(false, id));
    });
  };
};

export const unfollowUserTC = (id) => {
  return (dispatch) => {
    dispatch(requestInProgress(true, id));
    unfollowUserApi(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowUser(id));
      }
      dispatch(requestInProgress(false, id));
    });
  };
};
