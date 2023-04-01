import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import './index.scss'
import VisibilityButton from "../../visibility-button";
import classNames from "classnames";
import NavigationInputs from "../navigation-inputs";

const Navigation = () => {
  const navigationPanelIsVisible = useSelector(state => state.mapReducer.navigationPanelIsVisible)
  const startPoint = useSelector(state => state.mapReducer.startPoint)
  const endPoint = useSelector(state => state.mapReducer.endPoint)
  const coordinates = [startPoint, endPoint].join(';')
  const dispatch = useDispatch()
  const buildRoute = () => {
    dispatch({
      type: 'GET_GEOJSON',
      coordinates
    })
  }
  const classes = classNames({
    'navigation-panel': true,
    'panel-hidden': !navigationPanelIsVisible
  })
  return (
    <aside className={classes}>
      <VisibilityButton navigationVisibilityBtn={true}/>
      <NavigationInputs navigationPanelIsVisible={navigationPanelIsVisible}/>
      <button type='button' className='waves-effect waves-light btn rout-btn' onClick={buildRoute}>Build Route</button>
    </aside>
  )
}

export default Navigation