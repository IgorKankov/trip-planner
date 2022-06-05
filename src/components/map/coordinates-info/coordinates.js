import React from "react";
import './index.scss'

const Coordinates = (props) => {
  return (
    <div className="position-info">
      Longitude: {props.lng} | Latitude: {props.lat} | Zoom: {props.zoom}
    </div>
  )
}

export default Coordinates