
import { fork } from 'redux-saga/effects';
import mySaga from "./component/UserInfo/saga";

export default function* rootSaga() {
  yield fork(mySaga);
}
