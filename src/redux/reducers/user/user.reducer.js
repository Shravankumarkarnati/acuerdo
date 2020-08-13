import userTypes from "./user.types";

const INITIAL_STATE = {
  user: null,
  status: false,
  isWorking: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.LOGIN_START:
      return {
        ...state,
        isWorking: true,
      };
    case userTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isWorking: false,
        status: true,
        user: {
          ...action.payload,
        },
      };
    case userTypes.LOGIN_FAILED:
      return {
        ...state,
        isWorking: false,
        status: false,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
