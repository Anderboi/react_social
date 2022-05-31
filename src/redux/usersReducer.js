const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

const initState = {
  users: [
    {
      name: "Ivan",
      surname: "Ivanov",
      age: 20,
      address: {
        country: "Belarus",
        city: "Minsk",
        street: "Pushkina",
      },
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt hic blanditiis perspiciatis quia",
      icon: "https://i.pinimg.com/564x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.jpg",
      isFollowed: true,
      id: 1,
    },
    {
      name: "Petr",
      surname: "Petrov",
      age: 27,
      address: {
        country: "Belarus",
        city: "Sluck",
        street: "Lenina",
      },
      description:
        "uia cupiditate, et atque iste officia nobis, quae asperiores, sequi aperiam! Asperiores blanditiis perspiciatis neque suscipit? Enim, esse?",
      icon: "https://i.pinimg.com/564x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.jpg",
      isFollowed: false,
      id: 2,
    },
  ],
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
        users: [...state.users, ...action.users],
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
export const setUsersActionCreator = (users) => {
  return { type: SET_USERS, users };
};
