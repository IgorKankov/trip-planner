import React from 'react'
import {useSelector} from "react-redux";
import './index.scss'
import VisibilityButton from "../../visibility-button";
import classNames from "classnames";
import NavigationInputs from "../navigation-inputs";

const Navigation = () => {
  const navigationPanelIsVisible = useSelector(state => state.mapReducer.navigationPanelIsVisible)
  const classes = classNames({
    'navigation-panel': true,
    'panel-hidden': !navigationPanelIsVisible
  })
  return (
    <aside className={classes}>
      <VisibilityButton navigationVisibilityBtn={true}/>
      <NavigationInputs navigationPanelIsVisible={navigationPanelIsVisible}/>
    </aside>
  )
}

export default Navigation