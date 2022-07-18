import axios from "axios";
import { IUser, IUserInfo } from "../types/types";

//! axios logic
const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: { "API-KEY": "28c503a8-69f0-4690-8b12-9458b04eb020" }
}); //! instance create base parameters for axios request

export enum ResponseCodes {
  success = 0,
  bad_response = 1
}
export enum ResponseCodesForCaptcha {
  captcha_needed = 10
}

type GetUsersAPI = {
  items: Array<IUser>;
  totalCount: number;
  error: string | null;
};

export const usersAPI = {
  getUsers(
    selectedPage: number = 1,
    pageSize: number = 5,
    isFriend?: boolean,
    name: string = ""
  ) {
    return instance
      .get<GetUsersAPI>(
        `/users?page=${selectedPage}&count=${pageSize}&friend=${isFriend}&term=${name}`
      )
      .then((response) => response.data);
  },

  searchUsers(name: string) {
    return instance
      .get<GetUsersAPI>(`/users?term=${name}`)
      .then((response) => response.data);
  },

  followUserApi(userId: number) {
    return instance
      .post<RespnseType>(`/follow/${userId}`)
      .then((response) => response.data);
  },

  unfollowUserApi(userId: number) {
    return instance
      .delete<RespnseType>(`/follow/${userId}`)
      .then((response) => response.data);
  }
};

type AuthResponse = {
  data: { id: number; email: string; login: string };
  resultCode: ResponseCodes;
  messages: Array<string>;
};
type AuthLoginResponse = {
  resultCode: ResponseCodes | ResponseCodesForCaptcha;
  messages: Array<string>;
  data: { userId: number };
};

type AuthLogoutResponse = {
  resultCode: ResponseCodes;
};

export const authAPI = {
  authInfo() {
    return instance
      .get<AuthResponse>("/auth/me")
      .then((response) => response.data);
  },

  authLogin(data: {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string | null;
  }) {
    return instance
      .post<AuthLoginResponse>("auth/login", {
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe,
        captcha: data.captcha
      })
      .then((response) => response.data);
  },

  authLogout() {
    return instance.post<AuthLogoutResponse>("auth/logout");
  }
};

export const dialogsAPI = {
  setChatCompanion(userId: number) {
    return instance.put("dialogs/" + userId);
  },

  getAllMessages(userId: number, page: number = 1, count: number = 10) {
    return instance
      .get(`dialogs/${userId}/messages?page=${page}&count=${count}`)
      .then((response) => response.data.items);
  },

  sendMessage(userId: number, body: string) {
    return instance.post(`dialogs/${userId}/messages`, { body });
  },

  isMessageViewed(messageId: number) {
    return instance.get(`dialogs/messages/${messageId}/viewed`);
  }
};

type GetCaptchaType = {
  url: string;
};

export const securityAPI = {
  getCaptcha() {
    return instance
      .get<GetCaptchaType>("security/get-captcha-url")
      .then((response) => response.data);
  }
};

type RespnseType = {
  resultCode: ResponseCodes;
  messages: Array<string>;
  data: {};
};

type UploadPhotoType = {
  data: { photos: { small: string; large: string } };
  resultCode: ResponseCodes;
  messages: Array<string>;
};

export const profileAPI = {
  getUserStatus(userId: number) {
    return instance.get<string>("profile/status/" + userId);
  },

  setUserStatusApi(text: string) {
    return instance.put<RespnseType>("/profile/status", { status: text });
  },

  setUserProfile(data: IUserInfo) {
    return instance.put<RespnseType>(`/profile`, {
      userId: data.userId,
      aboutMe: data.aboutMe,
      lookingForAJob: data.lookingForAJob,
      lookingForAJobDescription: data.lookingForAJobDescription,
      fullName: data.fullName,
      contacts: {
        github: data.contacts!.github,
        vk: data.contacts!.vk,
        facebook: data.contacts!.facebook,
        instagram: data.contacts!.instagram,
        twitter: data.contacts!.twitter,
        website: data.contacts!.website,
        youtube: data.contacts!.youtube,
        mainLink: data.contacts!.mainLink
      }
    });
  },

  getUserProfile(userId: number) {
    return instance.get<IUserInfo>("profile/" + userId);
  },

  uploadPhoto(image: any) {
    const formData = new FormData();
    formData.append("image", image);

    return instance
      .put<UploadPhotoType>("/profile/photo", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then((response) => response.data);
  }
};
