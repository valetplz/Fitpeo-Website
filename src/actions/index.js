import * as types from "../constants/ActionTypes";

export const loginUsers = (payload = {}) => ({
  type: types.LOGIN_USER,
  payload
});

export const loginUsersResponse = (data = {}) => ({
  type: types.LOGIN_USER_RESPONSE,
  data
});

export const getJobDetails = (payload = {}) => ({
  type: types.GET_JOB,
  payload
});

export const getJobDetailsResponse = (data = {}) => ({
  type: types.GET_JOB_RESPONSE,
  data
});

export const getResources = (payload = {}) => ({
  type: types.GET_RESOURCE,
  payload
});

export const getResourcesResponse = (data = {}) => ({
  type: types.GET_RESOURCE_RESPONSE,
  data
});

export const getBillingDetails = (payload = {}) => ({
  type: types.GET_BILLING_DETAILS,
  payload
});

export const getBillingDetailResponse = (data = {}) => ({
  type: types.GET_BILLING_DETAILS_RESPONSE,
  data
});

export const postContactInfo = (payload = {}) => ({
  type: types.POST_CONTACT_INFO,
  payload
});

export const postContactInfoResponse = (data = {}) => ({
  type: types.POST_CONTACT_INFO_RESPONSE,
  data
});

export const enqueueSnackbar = (notification) => {
  const key = notification.options && notification.options.key;

  return {
    type: types.ENQUEUE_SNACKBAR,
    notification: {
      ...notification,
      key: key || new Date().getTime() + Math.random(),
    },
  };
};

export const closeSnackbar = key => ({
  type: types.CLOSE_SNACKBAR,
  dismissAll: !key, // dismiss all if no key has been defined
  key,
});

export const removeSnackbar = key => ({
  type: types.REMOVE_SNACKBAR,
  key,
});

export const scheduleDemo = (payload = {}) => ({
  type: types.SCHEDULE_DEMO,
  payload,
});

export const scheduleDemoResponse = (data = {}) => ({
  type: types.SCHEDULE_DEMO_RESPONSE,
  data,
});