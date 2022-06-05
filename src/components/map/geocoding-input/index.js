import React, {useEffect, useState} from "react";
import geocodingService from "../../../services/geocodingService";

import ('./index.scss')

const GeocodingInput = () => {
  const [location, setLocation] = useState('')

  useEffect(() => {
    if (!location) return
    geocodingService(location)
      .then((res) => {
        console.log('res', res)
      })
  })
  return (
    <div className={`field-container`}>
      <form className={`input-field`}>
        <input type="text" name="input" id="geocoding-input" onChange={(e) => setLocation(e.target.value)}/>
        <label htmlFor='geocoding-input'>Search location</label>
      </form>
    </div>
  )
}

export default GeocodingInput