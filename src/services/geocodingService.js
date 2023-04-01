import env from "react-dotenv";
import mapboxApi from "./mapboxApi";


const geocodingService = async (search) => {
  const response = await fetch(mapboxApi(`/geocoding/v5/mapbox.places/${search}.json`, `?access_token=${env.MAPBOX_KEY}&limit=3`))

  if (response.ok) return response.json()
}

export default geocodingService