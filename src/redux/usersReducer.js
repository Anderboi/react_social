const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET-PAGE";
const IS_LOADING = "IS_LOADING";

const initState = {
  users: [],
  pageSize: 5,
  usersTotalCount: 100,
  selectedPage: 1,
  isLoading: false,
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

    default:
      return state;
  }
};

export const followUserActionCreator = (id) => {
  return { type: FOLLOW, id: id };
};
export const unfollowUserActionCreator = (id) => {
  return { type: UNFOLLOW, id: id };
};
export const setUsersActionCreator = (users, total) => {
  return { type: SET_USERS, users, total };
};
export const setPageAC = (page) => {
  return { type: SET_PAGE, page };
};
export const isLoadingAC = (isLoading) => {
  return { type: IS_LOADING, isLoading };
};
