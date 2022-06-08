import {
  SET_LAT,
  SET_LNG,
  SET_ZOOM,
  SET_START_POINT,
  SET_END_POINT,
  SET_NAVIGATION_VISIBILITY
} from "./constants";

const INITIAL_STATE = {
  lat: 49.8415,
  lng: 24.0318,
  zoom: 12,
  startPoint: {},
  endPoint: {},
  navigationPanelIsVisible: true
}

const mapReducer = (state = INITIAL_STATE, {type, payload}) => {
  console.log('payload', payload)
  switch (type) {
    case SET_LAT:
      return {
        ...state, lat: payload
      };
    case SET_LNG:
      return {
        ...state, lng: payload
      };
    case SET_ZOOM:
      return {
        ...state, zoom: payload
      };
    case SET_START_POINT:
      return {
        ...state, startPoint: {
          lon: payload.lon,
          lat: payload.lat
        }
      };
    case SET_END_POINT:
      return {
        ...state, endPoint: {
          lon: payload.lon,
          lat: payload.lat
        }
      };
    case SET_NAVIGATION_VISIBILITY:
      return {
        ...state, navigationPanelIsVisible: payload
      };
    default:
      return state
  }
}

export default mapReducer