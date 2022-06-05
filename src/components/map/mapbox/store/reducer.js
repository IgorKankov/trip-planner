import {
  SET_LAT,
  SET_LNG,
  SET_ZOOM
} from "./constants";

const INITIAL_STATE = {
  lat: 49.8415,
  lng: 24.0318,
  zoom: 12
}

const mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LAT:
      return {
        ...state, lat: action.value
      };
    case SET_LNG:
      return {
        ...state, lng: action.value
      };
    case SET_ZOOM:
      return {
        ...state, zoom: action.value
      };
    default:
      return state
  }
}

export default mapReducer