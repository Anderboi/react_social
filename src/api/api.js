import * as axios from "axios";

//! axios logic
const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: { "API-KEY": "28c503a8-69f0-4690-8b12-9458b04eb020" },
}); //! instance create base parameters for axios request

export const usersAPI = {
  getUsers(selectedPage = 1, pageSize = 5) {
    return instance
      .get(`/users?page=${selectedPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getAuthUser(userId) {
    return instance.get(`/profile/${userId}`).then((response) => response.data);
  },
  followUserApi(userId) {
    return instance.post(`/follow/${userId}`).then((response) => response.data);
  },
  unfollowUserApi(userId) {
    return instance
      .delete(`/follow/${userId}`)
      .then((response) => response.data);
  },
};

export const authAPI = {
  authInfo() {
    return instance.get("/auth/me").then((response) => response.data);
  },
};
