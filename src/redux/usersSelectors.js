import { createSelector } from 'reselect';

const getUsersPrimitiveSelector = (state) => {
  return state.usersPage.users
}

export const getUsers = createSelector(getUsersPrimitiveSelector, (users) => {
  return users.filter(u => true)
} ) //бесполезная штука, нужно было для обучения

export const getPageSize = (state) => {
  return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress
}
