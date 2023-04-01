import {all, takeEvery, put, call} from 'redux-saga/effects'
import {GET_GEOJSON} from "../../../components/map/store/constants";
import directionsService from "../../../services/directionsService";
import {setGeoJSON} from "../../../components/map/store/actions";

export function* handleGeoData(action) {
  const data = yield call(directionsService, action.coordinates)
  yield put(setGeoJSON(data))
}

export function* watchSagaChange() {
  yield takeEvery(GET_GEOJSON, handleGeoData)
}

export default function* index() {
  yield all([watchSagaChange()])
}