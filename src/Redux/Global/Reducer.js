import * as actionConstant from './ActionConstant';

const initialState = {
  user: [],
};

function GlobalReducer(state = initialState, action) {
  switch (action.type) {
    case actionConstant.USER_INIT:
      return {
        ...state,
      };
    case actionConstant.USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case actionConstant.USER_FAILED:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default GlobalReducer;
