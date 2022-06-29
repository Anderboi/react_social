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

  authLogin(data) {
    return instance
      .post("auth/login", {
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe,
      })
      .then((response) => response.data);
  },

  authLogout() {
    return instance.post("auth/logout");
  },
};

export const profileAPI = {
  getUserStatus(userId) {
    return instance.get("profile/status/" + userId);
  },

  setUserStatusApi(text) {
    return instance.put("/profile/status", { status: text });
  },

  getAuthUser(userId) {
    return instance.get(`/profile/${userId}`).then((response) => response.data);
  },

  setUserProfile(data) {
    return instance.put(`/profile`, {
      userId: data.userID,
      aboutMe: data.aboutMe,
      lookingForAJob: data.lookingForAJob,
      lookingForAJobDescription: data.lookingForAJobDescription,
      fullName: data.fullName,
      contacts: {
        github: data.github,
        vk: data.vk,
        facebook: data.facebook,
        instagram: data.instagram,
        twitter: data.twitter,
        website: data.website,
        youtube: data.youtube,
        mainLink: data.mainLink,
      },
    });
  },

  getUserProfile(userId) {
    return instance.get("profile/" + userId);
  },

  uploadPhoto(image) {
    const formData = new FormData();
    formData.append("image", image);

    return instance.put("/profile/photo", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
