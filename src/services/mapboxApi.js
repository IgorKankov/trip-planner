import configs from '../config/development.json'

const mapboxApi = (route, queries) => {
  let url = new URL(`${configs.MAPBOX_API}${route}`);
  if (queries) {
    url.search = new URLSearchParams(queries).toString()
  }
  return url
}

export default mapboxApi;