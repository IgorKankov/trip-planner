import React from 'react'
import { func, object } from 'prop-types'

import './index.scss'
import months from '../calendar-data/months'

import ArrowLeftIcon from "mdi-react/ArrowLeftIcon";
import ArrowRightIcon from "mdi-react/ArrowRightIcon";

const ChangeMonth = ({handleDateUp, handleDateDown, date}) => (
  <div className='change-month'>
    <button onClick={handleDateDown} className='arrow'>
      <ArrowLeftIcon size={20} />
    </button>
    <div id='actual-date'>
      {months[date.getMonth()]} {date.getFullYear()}
    </div>
    <button onClick={handleDateUp} className='arrow'>
      <ArrowRightIcon size={20} />
    </button>
  </div>
)

ChangeMonth.propTypes = {
  handleDateUp: func.isRequired,
  handleDateDown: func.isRequired,
  date: object.isRequired
}

export default ChangeMonth