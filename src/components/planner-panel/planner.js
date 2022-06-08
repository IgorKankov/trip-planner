import React from "react";
import {useSelector} from "react-redux";
import classNames from "classnames";
import './planner.scss'
import VisibilityButton from "../visibility-button";
import Calendar from "./calendar";

const Planner = () => {
  const plannerPanelIsVisible = useSelector(state => state.plannerPanelReducer.plannerPanelIsVisible)
  const classes = classNames({
    'planner-panel': true,
    'panel-hidden': !plannerPanelIsVisible
  })
  return (
    <aside className={classes}>
      <VisibilityButton plannerVisibilityBtn={true}/>
      <Calendar />
    </aside>
  )
}

export default Planner