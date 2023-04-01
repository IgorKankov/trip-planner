import React, {useEffect, useState} from "react";
import env from "react-dotenv";
import geocodingService from "../../../services/geocodingService";
import {useDispatch} from "react-redux";
import {setStartPoint, setEndPoint} from "../store/actions";
import classNames from "classnames";
import {AddressAutofill} from "@mapbox/search-js-react";

import ('./index.scss')

const NavigationInputs = ({navigationPanelIsVisible}) => {
  const [startPoint, setStart] = useState('')
  const [endPoint, setEnd] = useState('')
  const dispatch = useDispatch()
  const classes = classNames({
    'fields-container': true,
    'container-is-hidden': !navigationPanelIsVisible
  })
  const handleStartPoint = (e) => {
    e.stopPropagation()
    setStart(e.target.value)
  }
  const handleEndPoint = (e) => {
    e.stopPropagation()
    setEnd(e.target.value)
  }

  useEffect(() => {
    if (!startPoint) return
    geocodingService(startPoint)
      .then((res) => {
        const coordinates = res.features[0].center
        return coordinates
      })
      .then((coordinates) => {
        dispatch(setStartPoint(coordinates))
      })
  }, [startPoint, dispatch])

  useEffect(() => {
    if (!endPoint) return
    geocodingService(endPoint)
      .then((res) => {
        const coordinates = res.features[0].center
        return coordinates
      })
      .then((coordinates) => {
        dispatch(setEndPoint(coordinates))
      })
  }, [endPoint, dispatch])
  return (
    <div className={classes}>
      <form>
        <div className={`input-field`}>
          <AddressAutofill accessToken={env.MAPBOX_KEY}>
            <input type="text" name="start-point" id="start-point" autoComplete="address-line1" onChange={handleStartPoint}/>
            <label htmlFor='start-point'>Enter Start Point</label>
          </AddressAutofill>
        </div>
        <div className={`input-field`}>
          <AddressAutofill accessToken={env.MAPBOX_KEY}>
            <input type="text" name="end-point" id="end-point" autoComplete="address-line1" onChange={handleEndPoint}/>
            <label htmlFor='end-point'>Enter End Point</label>
          </AddressAutofill>
        </div>
      </form>
    </div>
  )
}

export default NavigationInputs