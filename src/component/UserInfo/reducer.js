
import * as TYPES from './types';

const defaultState = {
  isLoading: false,
  userInfo: {},
  errorMsg: '',
  limit: {
    keyword: 'keykeykey'
  },
  data: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.GET_USER_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
        userInfo: {},
        errorMsg: ''
      };
    case TYPES.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: {"name": "brickspert", "intro": "please give me a star"},
        errorMsg: ''
      };
    case TYPES.GET_USER_INFO_FAIL:
      return {
        ...state,
        isLoading: false,
        userInfo: {},
        errorMsg: '请求错误123'
      };
    case TYPES.GET_SEARCH:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.INIT_TABLE:
      return {
        ...state,
        isLoading: false,
        data:action.data.rows
      };
    default:
      return state;
  }
};

export default reducer;
