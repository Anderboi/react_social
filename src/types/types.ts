export interface IPost {
  text: string;
  id: number;
}
export interface IContacts {
  facebook: string | null;
  github: string | null;
  instagram: string | null;
  mainLink: string | null;
  twitter: string | null;
  vk: string | null;
  website: string | null;
  youtube: string | null;
}
export interface IPhotos {
  small: string | null;
  large: string | null;
}
export interface IUserInfo {
  photos: IPhotos | null;
  aboutMe?: string | null;
  contacts?: IContacts;
  fullName: string | null;
  lookingForAJob: boolean;
  lookingForAJobDescription?: string | null;
  userId: number;
}
export interface IUser {
  id: number;
  name: string;
  followed: boolean;
  photos: IPhotos;
  status: string | null;
  uniqueUrlName: string | null;
}

export interface IMessage {
  body: string;
  id: number;
  addedAt?: string;
  recipientId?: number | null;
  senderId?: number;
  senderName?: string;
  translatedBody?: string | null;
  viewed?: boolean;
}
