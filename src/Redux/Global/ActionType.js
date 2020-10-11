import * as actionConstant from './ActionConstant';

export function userInit() {
  return {
    type: actionConstant.USER_INIT,
  };
}
export function userSuccess(payload) {
  return {
    type: actionConstant.USER_SUCCESS,
    payload,
  };
}
export function userFailed(payload) {
  return {
    type: actionConstant.USER_FAILED,
    payload,
  };
}
