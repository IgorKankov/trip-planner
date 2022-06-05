import {
  SET_LAT,
  SET_LNG,
  SET_ZOOM
} from "./constants";

export const setLat = (value) => {
  return {
    type: SET_LAT, value
  }
};

export const setLng = (value) => {
  return {
    type: SET_LNG, value
  }
};

export const setZoom = (value) => {
  return {
    type: SET_ZOOM, value
  }
}