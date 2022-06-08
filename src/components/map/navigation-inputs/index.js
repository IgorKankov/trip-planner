import React, {useEffect, useState} from "react";
import geocodingService from "../../../services/geocodingService";
import classNames from "classnames";

import ('./index.scss')

const NavigationInputs = ({navigationPanelIsVisible}) => {
  const [startPoint, setStartPoint] = useState('')
  const [endPoint, setEndPoint] = useState('')
  const classes = classNames({
    'fields-container': true,
    'container-is-hidden': !navigationPanelIsVisible
  })
  const handleStartPoint = (e) => {
    e.stopPropagation()
    setStartPoint(e.target.value)
  }
  const handleEndPoint = (e) => {
    e.stopPropagation()
    setEndPoint(e.target.value)
  }

  useEffect(() => {
    if (!startPoint) return
    geocodingService(startPoint)
      .then((res) => {
        console.log('startPoint', res)
      })
  })

  useEffect(() => {
    if (!endPoint) return
    geocodingService(endPoint)
      .then((res) => {
        console.log('endPoint', res)
      })
  })
  return (
    <div className={classes}>
      <form>
        <div className={`input-field`}>
          <input type="text" name="start-point" id="start-point" onChange={handleStartPoint}/>
          <label htmlFor='start-point'>Enter Start Point</label>
        </div>
        <div className={`input-field`}>
          <input type="text" name="end-point" id="end-point" onChange={handleEndPoint}/>
          <label htmlFor='end-point'>Enter End Point</label>
        </div>
      </form>
    </div>
  )
}

export default NavigationInputs