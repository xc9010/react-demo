

import * as TYPES from './types';


export const getUserInfoRequest = (data) => ({
  type: TYPES.GET_USER_INFO_REQUEST,
  data,
});

export const getUserInfoSuccess = () => ({
  type: TYPES.GET_USER_INFO_SUCCESS,
});

export const getUserInfoFail = () => ({
  type: TYPES.GET_USER_INFO_FAIL,
});

export const search = (param) => ({
  type: TYPES.GET_SEARCH,
  param
});

export const initTable = (data) => ({
  type: TYPES.INIT_TABLE,
  data
});
