import mapboxApi from "./mapboxApi";
import configs from '../config/development.json'

const geocodingService = async (search) => {
  const response = await fetch(mapboxApi(`/geocoding/v5/mapbox.places/${search}.json?access_token=${configs.MAPBOX_PUBLIC_KEY}`))

  if (response.ok) return response.json()
}

export default geocodingService