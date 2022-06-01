import React from 'react'
import { func, string, array, object } from 'prop-types'
import {useSelector, useDispatch} from "react-redux";
import './index.scss'
import TodoDay from "./todo-day";
import ChangeMonth from "./change-month";
import WeekDays from "./week-days";
import MonthsDays from './months-days'
import { connect } from 'react-redux'

 import { increment, decrement, todoDateAction, addNote, completeNote } from '../store/actions'


const Calendar = (props) => {
  const todoDate = useSelector(state => state.plannerPanelReducer.todoDate);
  const notes = useSelector(state => state.plannerPanelReducer.notes);
  let date = useSelector(state => state.plannerPanelReducer.date);
  const panelIsVisible = useSelector(state => state.plannerPanelReducer.panelIsVisible)
  const dispatch = useDispatch()

  const handleDay = ({ target }) => {
    let todoDate = target.getAttribute('data-value')
    dispatch(todoDateAction(todoDate))
  }

  const handleNoteKeyPress = ({ target, key }) => {
    if (key === 'Enter' && target.value !== '') {
      dispatch(addNote(todoDate, target.value))
      target.value = ''
    }
  }

  const handleCompleted = ({ target }) => {
    let id = target.id
    setTimeout(() => dispatch(completeNote(id)), 700)
  }

  return (
    <div className={`planner${!panelIsVisible ? ' planner-hidden' : ''}`}>
      <TodoDay
        todoDate={todoDate}
        handleNoteKeyPress={handleNoteKeyPress}
        notes={notes}
        handleCompleted={handleCompleted}
      />
      <div className='calendar-container'>
        <ChangeMonth
          handleDateUp={props.increment}
          handleDateDown={props.decrement}
          date={date}
        />
        <div className='full-calendar'>
          <WeekDays />
          <MonthsDays
            date={date}
            handleDay={handleDay}
            notes={notes} />
        </div>
      </div>
    </div>
  )
}

Calendar.propTypes = {
  date: object.isRequired,
  notes: array.isRequired,
  todoDate: string.isRequired,
  increment: func.isRequired,
  decrement: func.isRequired,
  changeTodoDate: func.isRequired,
  addNote: func.isRequired,
  completeNote: func.isRequired
}

const mapStateToProps = ({ notes, date, todoDate }) => ({
  notes,
  date,
  todoDate
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)