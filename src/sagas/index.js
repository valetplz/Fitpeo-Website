import { all } from "redux-saga/effects";

import {
  getBillingDetailWatcherSaga,
  getJobDetailsWatcherSaga,
  getResourcesWatcherSaga,
  loginUserWatcherSaga,
  postContactInfoWatcherSaga,
  scheduleDemoWatcherSaga,
} from "./user";


export default function* rootSaga() {
  yield all([
    loginUserWatcherSaga(),
    getJobDetailsWatcherSaga(),
    getResourcesWatcherSaga(),
    getBillingDetailWatcherSaga(),
    postContactInfoWatcherSaga(),
    scheduleDemoWatcherSaga()
  ]);
}
