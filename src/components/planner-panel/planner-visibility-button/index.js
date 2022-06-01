import React from "react";
import './index.scss'
import {useSelector, useDispatch} from "react-redux";
import {setVisibility} from "../store/actions";
import classNames from "classnames";
import ChevronLeft from 'mdi-react/ChevronLeftIcon'
import ChevronRight from 'mdi-react/ChevronRightIcon'

const VisibilityButton = () => {
  const panelIsVisible = useSelector(state => state.plannerPanelReducer.panelIsVisible);
  const dispatch = useDispatch()
  const classes = classNames({
    'visibility-button': true,
    'panel-hidden': !panelIsVisible
  })
  return (
    <button className={classes} onClick={() => dispatch(setVisibility(!panelIsVisible))}
            title={panelIsVisible ? 'Hide panel' : 'Show panel'}>
      {panelIsVisible ? <ChevronRight size={16}/> : <ChevronLeft size={16}/>}
    </button>
  )
}

export default VisibilityButton