import {
  SET_LAT,
  SET_LNG,
  SET_ZOOM,
  SET_START_POINT,
  SET_END_POINT,
  SET_NAVIGATION_VISIBILITY
} from "./constants";

export const setLat = (lat) => {
  return {
    type: SET_LAT,
    payload: lat
  }
};

export const setLng = (lng) => {
  return {
    type: SET_LNG,
    payload: lng
  }
};

export const setZoom = (zoom) => {
  return {
    type: SET_ZOOM,
    payload: zoom
  }
};

export const setStartPoint = (lon, lat) => ({
  type: SET_START_POINT,
  payload: {
    lon,
    lat
  }
});

export const setEndPoint = (lon, lat) => ({
  type: SET_END_POINT,
  payload: {
    lon,
    lat
  }
});

export const setNavigationVisibility = (value) => ({
  type: SET_NAVIGATION_VISIBILITY,
  payload: value
});