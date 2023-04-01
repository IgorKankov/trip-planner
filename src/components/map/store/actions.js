import {
  SET_LAT,
  SET_LNG,
  SET_ZOOM,
  SET_START_POINT,
  SET_END_POINT,
  SET_NAVIGATION_VISIBILITY,
  GET_GEOJSON,
  SET_GEOJSON
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

export const setStartPoint = (coordinates) => ({
  type: SET_START_POINT,
  payload: coordinates
});

export const setEndPoint = (coordinates) => ({
  type: SET_END_POINT,
  payload: coordinates
});

export const setNavigationVisibility = (value) => ({
  type: SET_NAVIGATION_VISIBILITY,
  payload: value
});

export const getGeoJSON = () => ({
  type: GET_GEOJSON
});
export const setGeoJSON = (geojson) => ({
  type: SET_GEOJSON,
  payload: geojson
});