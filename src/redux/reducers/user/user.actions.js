import userTypes from "./user.types";
import { auth, firebase } from "../../../firebase/firebase.main";
import {
  createUserFirebase,
  getUsernameFirebase,
} from "../../../firebase/user.firebase";

const userLoginStart = () => {
  return {
    type: userTypes.LOGIN_START,
  };
};

const userLoginFailed = () => {
  return {
    type: userTypes.LOGIN_FAILED,
  };
};

const userLoginSuccess = (user) => {
  return {
    type: userTypes.LOGIN_SUCCESS,
    payload: user,
  };
};

export const userLogout = (user) => {
  return {
    type: userTypes.USER_LOGOUT,
  };
};

export const createUserWithEmailAndPasswordAsync = (data) => {
  return (dispatch) => {
    dispatch(userLoginStart());
    const { email, password, username } = data;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(userLoginSuccess({ email, username }));
        createUserFirebase(data);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("signin error", errorCode, errorMessage);
        dispatch(userLoginFailed());
      });
  };
};

export const signInWithEmailAndPassword = (data) => {
  return (dispatch) => {
    dispatch(userLoginStart());
    const { email, password } = data;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        return getUsernameFirebase(email);
      })
      .then(({ username }) => {
        if (username) {
          dispatch(userLoginSuccess({ email, username }));
        }
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("signin error", errorCode, errorMessage);
        dispatch(userLoginFailed());
      });
  };
};

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return (dispatch) => {
    dispatch(userLoginStart());
    auth
      .signInWithPopup(googleProvider)
      .then(async (result) => {
        const { displayName: username, email } = result.user;
        const exists = await getUsernameFirebase(email);
        return {
          exists,
          username,
          email,
        };
      })
      .then(({ exists, email, username }) => {
        if (!exists) {
          createUserFirebase({ email, username, password: "googleAuth" });
        }
        dispatch(userLoginSuccess({ email, username }));
      })
      .catch(function (error) {
        dispatch(userLoginFailed());
      });
  };
};
