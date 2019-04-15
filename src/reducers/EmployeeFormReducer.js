import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from "../actions/types";
import { employeeUpdate } from "../actions/EmployeeActions";

const INITIAL_STATE = {
  name: "",
  email: "",
  shift: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }; // key interpolation. es6 feature.
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
