export type Post = {
  text: string;
  id: number;
};
export type Contacts = {
  facebook: string | null;
  github: string | null;
  instagram: string | null;
  mainLink: string | null;
  twitter: string | null;
  vk: string | null;
  website: string | null;
  youtube: string | null;
};
export type Photos = {
  small?: string | null;
  large?: string | null;
};
export type UserInfo = {
  photos?: Photos;
  aboutMe?: string | null;
  contacts?: Contacts;
  fullName: string | null;
  lookingForAJob: boolean;
  lookingForAJobDescription?: string | null;
  userId: number;
};
export type User = {
  id: number;
  name: string;
  followed: boolean;
  photos: Photos;
  status: string | null;
  uniqueUrlName: string | null;
};


export type Message = {
  text: string;
  id: number;
  isOwn: boolean;
};

