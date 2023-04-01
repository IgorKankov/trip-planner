import env from "react-dotenv";
import mapboxApi from "./mapboxApi";

const directionsService = async (coordinates) => {
  const query = await fetch(
    mapboxApi(`/directions/v5/mapbox/driving/${coordinates}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=${env.MAPBOX_KEY}`),
    {method: 'GET'}
  )

  const response = await query.json();
  const data = response.routes[0];
  const route = data.geometry.coordinates;
  const geojson = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: route
    }
  };
  console.log('res', response)
  if (query.ok) return geojson
}

export default directionsService