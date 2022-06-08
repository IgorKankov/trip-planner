import React from 'react'
import {func, string, array, object, bool} from 'prop-types'
import './index.scss'
import TodoDay from "./todo-day";
import ChangeMonth from "./change-month";
import WeekDays from "./week-days";
import MonthsDays from './months-days'
import {connect} from 'react-redux'

import {increment, decrement, todoDateAction, addNote, completeNote} from '../store/actions'


const Calendar = (props) => {
  const handleDay = ({target}) => {
    let todoDate = target.getAttribute('data-value')
    props.changeTodoDate(todoDate)
  }

  const handleNoteKeyPress = ({target, key}) => {
    if (key === 'Enter' && target.value !== '') {
      props.addNote(props.todoDate, target.value)
      target.value = ''
    }
  }

  const handleCompleted = ({target}) => {
    let id = target.id
    setTimeout(() => props.completeNote(id), 700)
  }

  return (
    <div className={`planner${!props.plannerPanelIsVisible ? ' planner-hidden' : ''}`}>
      <TodoDay
        todoDate={props.todoDate}
        handleNoteKeyPress={handleNoteKeyPress}
        notes={props.notes}
        handleCompleted={handleCompleted}
      />
      <div className='calendar-container'>
        <ChangeMonth
          handleDateUp={props.increment}
          handleDateDown={props.decrement}
          date={props.date}
        />
        <div className='full-calendar'>
          <WeekDays/>
          <MonthsDays
            todoDate={props.todoDate}
            date={props.date}
            handleDay={handleDay}
            notes={props.notes}/>
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
  completeNote: func.isRequired,
  plannerPanelIsVisible: bool
}

const mapStateToProps = (state) => ({
  notes: state.plannerPanelReducer.notes,
  date: state.plannerPanelReducer.date,
  todoDate: state.plannerPanelReducer.todoDate,
  plannerPanelIsVisible: state.plannerPanelReducer.plannerPanelIsVisible
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  completeNote: (id) => dispatch(completeNote(id)),
  changeTodoDate: (todoDate) => dispatch(todoDateAction(todoDate)),
  addNote: (date, description) => dispatch(addNote(date, description))
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)