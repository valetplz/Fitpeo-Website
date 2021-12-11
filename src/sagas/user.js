import { takeLatest, call, put } from "redux-saga/effects";
import {
  getBillingDetailResponse,
  getJobDetailsResponse,
  getResourcesResponse,
  loginUsersResponse,
  postContactInfoResponse,
  scheduleDemoResponse,
} from "../actions";
import * as types from "../constants/ActionTypes";
import { axiosGet, axiosPost } from "../Util/axios";

export function* loginUserEffectSaga({ payload }) {
  try {
    let { data } = yield call(() =>
      axiosPost(`/loginSuperAdmin`, payload)
    );
    console.log('apiCallmade--->')
    yield put(loginUsersResponse(data.data));
  } catch (e) {
    console.log(e);
    yield put(loginUsersResponse([]));
  }
}

export function* getJobDetailsSaga({ payload }) {
  try {
    let { data } = yield call(() =>
      axiosGet(`/getjobDetails`, payload)
    );
    yield put(getJobDetailsResponse(data));
  } catch (e) {
    console.log(e);
    yield put(getJobDetailsResponse([]));
  }
}

export function* getResourcesSaga({ payload }) {
  try {
    let { data } = yield call(() =>
      axiosGet(`/getResourceDetails`, payload)
    );
    yield put(getResourcesResponse(data));
  } catch (e) {
    console.log(e);
    yield put(getResourcesResponse({data: e.response.data}));
  }
}

export function* getBillingDetailSaga({ payload }) {
  try {
    let { data } = yield call(() =>
      axiosGet(`/getBillingResource`, payload)
    );
    yield put(getBillingDetailResponse(data));
  } catch (e) {
    console.log(e);
    yield put(getBillingDetailResponse({data: e.response.data}));
  }
}

export function* postContactInfoSaga({ payload }) {
  try {
    let { data } = yield call(() =>
      axiosPost(`/postContactInfo`, payload)
    );
    yield put(postContactInfoResponse(data));
  } catch (e) {
    console.log(e);
    yield put(postContactInfoResponse({data: e.response.data}));
  }
}

export function* getScheduleEffectSaga({ payload }) {
  try {
    console.log('beforeapicall--->', payload)
    let { data } = yield call(() => axiosPost(`/postDemoCallInfo`, payload));
    console.log('afterapicall--->', data, payload)
    yield put(scheduleDemoResponse(data));
  } catch (e) {
    console.log(e);
    yield put(scheduleDemoResponse({data: e.response.data}));
  }
}

export function* loginUserWatcherSaga() {
  yield takeLatest(types.LOGIN_USER, loginUserEffectSaga);
}

export function* getJobDetailsWatcherSaga() {
  yield takeLatest(types.GET_JOB, getJobDetailsSaga);
}

export function* getResourcesWatcherSaga() {
  yield takeLatest(types.GET_RESOURCE, getResourcesSaga);
}

export function* getBillingDetailWatcherSaga() {
  yield takeLatest(types.GET_BILLING_DETAILS, getBillingDetailSaga);
}

export function* postContactInfoWatcherSaga() {
  yield takeLatest(types.POST_CONTACT_INFO, postContactInfoSaga);
}

export function* scheduleDemoWatcherSaga() {
  yield takeLatest(types.SCHEDULE_DEMO, getScheduleEffectSaga);
}
