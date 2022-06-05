import React, {useRef, useEffect} from 'react';
import {connect} from "react-redux";
import mapboxgl from 'mapbox-gl';
import Coordinates from "../coordinates-info/coordinates";
import GeocodingInput from "../geocoding-input";
import {setLat, setLng, setZoom} from "./store/actions";
import configs from '../../../config/development.json';
import 'mapbox-gl/dist/mapbox-gl.css';

import ('./index.scss');

mapboxgl.accessToken = configs.MAPBOX_PUBLIC_KEY;

const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = new mapboxgl.Marker({
    draggable: true
  }).setLngLat([props.lng, props.lat])

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [props.lng, props.lat],
      zoom: props.zoom
    });

    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      })
    );

    marker.addTo(map.current)

    marker.on('dragend', () => {
      const lngLat = marker.getLngLat();
      props.setLng(lngLat.lng.toFixed(4));
      props.setLat(lngLat.lat.toFixed(4));
    })
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      props.setLng(map.current.getCenter().lng.toFixed(4));
      props.setLat(map.current.getCenter().lat.toFixed(4));
      props.setZoom(map.current.getZoom().toFixed(2));
    });
    map.current.on('idle', function () {
      map.current.resize()
    })
    map.current.on('click', (e) => {
      props.setLng(e.lngLat.lng.toFixed(4));
      props.setLat(e.lngLat.lat.toFixed(4));
      marker.setLngLat([e.lngLat.lng, e.lngLat.lat])
    })
  });

  return (
    <div className='map'>
      <div ref={mapContainer} className="map-container"/>
      <GeocodingInput/>
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