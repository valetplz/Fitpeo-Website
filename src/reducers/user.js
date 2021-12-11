import {
  GET_BILLING_DETAILS_RESPONSE,
  GET_JOB_RESPONSE,
  GET_RESOURCE_RESPONSE,
  LOGIN_USER_RESPONSE,
  POST_CONTACT_INFO_RESPONSE,
  SCHEDULE_DEMO_RESPONSE,
} from "../constants/ActionTypes";

import { getCookie } from "../Util/Cookies";

const initialState = {
  listUser: [],
  logoUpload: {},
  login:
    getCookie("__user") && getCookie("__user") !== ""
      ? { login: JSON.parse(getCookie("__user")) }
      : [],
  jobDetails: [],
  resourceDetails: [],
  billingDetails: [],
  contactInfoResponse: {},
  scheduleDemoResponse: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_RESPONSE:
      return { ...state, login: true };
    case GET_JOB_RESPONSE:
      return { ...state, jobDetails: action.data };
    case GET_RESOURCE_RESPONSE:
      return { ...state, resourceDetails: action.data };
    case GET_BILLING_DETAILS_RESPONSE:
      return { ...state, billingDetails: action.data };
    case POST_CONTACT_INFO_RESPONSE:
      return {
        ...state,
        contactInfoResponse: action.data,
      };
    case SCHEDULE_DEMO_RESPONSE:
      return {
        ...state,
        scheduleDemoResponse: action.data,
      };
    default:
      return state;
  }
};
export default userReducer;
