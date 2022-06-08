import configs from '../config/development.json'
import mapboxApi from "./mapboxApi";

const directionsService = async (profile, coordinates) => {
  const response = await fetch(mapboxApi(`/matching/v5/${profile}/${coordinates}.json?access_token=${configs.MAPBOX_PUBLIC_KEY}`))
}

export default directionsService