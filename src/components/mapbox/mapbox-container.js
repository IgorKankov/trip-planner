import React, { useRef, useEffect } from 'react';
import {connect} from "react-redux";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
// import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import Coordinates from "../coordinates-info/coordinates";
import {setLat, setLng, setZoom} from "./store/actions";
import ('./index.scss')

mapboxgl.accessToken = 'pk.eyJ1IjoiaWdvcmthIiwiYSI6ImNsMnZ4cm9mMDA1NDYza250c203Z3FsMW8ifQ.fwZUe2d8uSmy28Ce1wkJpw';

const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [props.lng, props.lat],
      zoom: props.zoom
    });

    // map.current.addControl(
    //   new MapboxDirections({
    //     accessToken: mapboxgl.accessToken
    //   }),
    //   'top-left'
    // );

    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      })
    );
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      props.setLng(map.current.getCenter().lng.toFixed(4));
      props.setLat(map.current.getCenter().lat.toFixed(4));
      props.setZoom(map.current.getZoom().toFixed(2));
    });
    map.current.on('idle',function(){
      map.current.resize()
    })
  });

  return (
    <div className='map'>
      <div ref={mapContainer} className="map-container" />
      <Coordinates lng={props.lng} lat={props.lat} zoom={props.zoom}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    lng: state.mapReducer.lng,
    lat: state.mapReducer.lat,
    zoom: state.mapReducer.zoom
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLng: (value) => dispatch(setLng(value)),
    setLat: (value) => dispatch(setLat(value)),
    setZoom: (value) => dispatch(setZoom(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)