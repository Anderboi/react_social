import { RootState } from "../../redux/reduxStore";

export const getUsers = (state: RootState) => {
  return state.usersPage.users;
};

export const getSearchParam = (state:RootState)=>{
  return state.usersPage.searchParam;
}
// export const getFollowedUsers = (state: RootState) => {
//   return state.usersPage.followedUsers;
// };
export const getUsersTotalCount = (state: RootState) => {
  return state.usersPage.usersTotalCount;
};
export const getPageSize = (state: RootState) => {
  return state.usersPage.pageSize;
};
export const getSelectedPage = (state: RootState) => {
  return state.usersPage.selectedPage;
};
export const getIsLoading = (state: RootState) => {
  return state.usersPage.isLoading;
};
export const getInProgressArray = (state: RootState) => {
  return state.usersPage.inProgressArray;
};
