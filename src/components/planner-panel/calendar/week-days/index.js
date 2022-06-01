import React from 'react'
import './index.scss'
import weekDays from '../calendar-data/week-days'
const WeekDays = () => (
  <div className='day-container'>
    {weekDays.map((day) => <div className='week-days' key={day}>{day}</div>)}
  </div>
)
export default WeekDays