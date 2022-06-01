import React from "react";
import {useSelector} from "react-redux";
import classNames from "classnames";
import './planner.scss'
import VisibilityButton from "./planner-visibility-button";
import Calendar from "./calendar";

const Planner = () => {
  const panelIsVisible = useSelector(state => state.plannerPanelReducer.panelIsVisible)
  const classes = classNames({
    'planner-panel': true,
    'panel-hidden': !panelIsVisible
  })
  return (
    <aside className={classes}>
      <VisibilityButton />
      <Calendar />
    </aside>
  )
}

export default Planner