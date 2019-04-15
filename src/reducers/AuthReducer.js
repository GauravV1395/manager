import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from "../actions/types";

const INITIAL_STATE = {
  email: "",
  password: "",
  user: null,
  error: "",
  loading: false
}; // used to set the initial state of state to "" because a reducer can never return undefined.

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }; // this line says create a new object and throw the entire state inside and also add the email key or if email exists update the value of it.
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: "" };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: "Authentication Failed.",
        password: "",
        loading: false
      };
    default:
      return state;
  }
};
