import React from "react";
import './index.scss'
import {useSelector, useDispatch} from "react-redux";
import {setPlannerVisibility} from "../planner-panel/store/actions";
import classNames from "classnames";
import ChevronLeft from 'mdi-react/ChevronLeftIcon'
import ChevronRight from 'mdi-react/ChevronRightIcon'
import {setNavigationVisibility} from "../map/store/actions";

const VisibilityButton = ({navigationVisibilityBtn, plannerVisibilityBtn}) => {
  const plannerPanelIsVisible = useSelector(state => state.plannerPanelReducer.plannerPanelIsVisible);
  const navigationPanelIsVisible = useSelector(state => state.mapReducer.navigationPanelIsVisible);
  const dispatch = useDispatch()
  const visibilityBtnClick = () => {
    if (plannerVisibilityBtn) return dispatch(setPlannerVisibility(!plannerPanelIsVisible))
    if (navigationVisibilityBtn) return dispatch(setNavigationVisibility(!navigationPanelIsVisible))
  }
  const classes = classNames({
    'visibility-button': true,
    'planner-visibility-btn': plannerVisibilityBtn,
    'navigation-visibility-btn': navigationVisibilityBtn,
    'planner-panel-hidden': !plannerPanelIsVisible,
    'navigation-panel-hidden': !navigationPanelIsVisible
  })
  return (
    <button className={classes}
            onClick={visibilityBtnClick}
            title={plannerPanelIsVisible || navigationPanelIsVisible ? 'Hide panel' : 'Show panel'}>
      {plannerVisibilityBtn && (plannerPanelIsVisible ? <ChevronRight size={16}/> : <ChevronLeft size={16}/>)}
      {navigationVisibilityBtn && (navigationPanelIsVisible ? <ChevronLeft size={16}/> : <ChevronRight size={16}/>)}
    </button>
  )
}

export default VisibilityButton