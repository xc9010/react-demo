

import { Message } from 'shineout';
import { put, takeLatest } from 'redux-saga/effects';
import {getUserInfo, search} from "./server";
import * as TYPES from './types';

import {
  getUserInfoSuccess, getUserInfoFail,initTable,
} from './actions';



function* init(action) {
  const data = JSON.parse(yield getUserInfo(action.data));
  if (data.data === 1) {
    Message.error(`查找失败: ${data.statusText}`);
    return yield put(getUserInfoFail());
  }
  return yield put(getUserInfoSuccess(data));
}

function* searchSaga(action) {
  const data = yield search(action);
  console.log(data)
  if(data.code === '0'){
    yield put(initTable(data.data))
  }

}

function* mySaga() {
  yield takeLatest(TYPES.GET_USER_INFO_REQUEST, init);
  yield takeLatest(TYPES.GET_SEARCH, searchSaga);
}

export default mySaga;
