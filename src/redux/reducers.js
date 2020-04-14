import {combineReducers} from "redux";

import counter from '../component/Counter/reducer';
import userInfo from '../component/UserInfo/reducer';


export default combineReducers({
  counter,
  userInfo,
});
