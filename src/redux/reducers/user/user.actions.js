import userTypes from "./user.types";

export const userLoginStart = (data) => {
  return {
    type: userTypes.LOGIN_START,
  };
};

const SignInWithEmailAndPassWord = (data) => {};

export const userLoginSuccess = ({ user }) => {
  return {
    type: userTypes.LOGIN_SUCCESS,
    payload: user,
  };
};
