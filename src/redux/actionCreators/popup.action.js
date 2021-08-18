import { TOGGLE_REGISTER, TOGGLE_SIGNIN } from '../actionTypes/types';

export const signinPopupAction = (popupState) => {
  return { type: TOGGLE_SIGNIN, payload: popupState };
};
export const registerPopupAction = (popupState) => (dispatch) => {
  dispatch({ type: TOGGLE_REGISTER, payload: popupState });
};
