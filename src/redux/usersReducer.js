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
            return { ...u, isFollowed: true };
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
            return { ...u, isFollowed: false };
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
