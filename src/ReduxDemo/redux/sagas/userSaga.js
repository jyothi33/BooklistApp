import { call, put, takeEvery } from "redux-saga/effects";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

function getApi() {
  return fetch(apiUrl)
    .then((response) => {
      const users = response.json();
      return users;
    })
    .catch((error) => {
      throw error;
    });
}

function* fetchUsers() {
  try {
    const users = yield call(getApi);
    console.log("users", users);
    yield put({ type: "FETCH_SUCCESS", payload: users });
  } catch (e) {
    console.log("er - ", e.message);
    yield put({ type: "FETCH_ERROR", payload: e.message });
  }
}

function* userSaga() {
  yield takeEvery("FETCH_SAGA_USERS", fetchUsers);
}

export default userSaga;
