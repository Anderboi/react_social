export const getUsers = (state)=>{
    return state.usersPage.users;
}
export const getUsersTotalCount = (state)=>{
    return state.usersPage.usersTotalCount;
}
export const getPageSize = (state)=>{
    return state.usersPage.pageSize;
}
export const getSelectedPage = (state)=>{
    return state.usersPage.selectedPage;
}
export const getIsLoading = (state)=>{
    return state.usersPage.isLoading;
}
export const getInProgressArray = (state)=>{
    return state.usersPage.inProgressArray;
}
