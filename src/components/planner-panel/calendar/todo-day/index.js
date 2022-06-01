import React from 'react'
import { func, string, array } from 'prop-types'
import './index.scss'

import months from '../calendar-data/months'
import TodoNote from "../todo-note";

const TodoDay = ({todoDate, handleNoteKeyPress, notes, handleCompleted}) => {
  let infoToday = todoDate.split('/')
  let noteDate = `${infoToday[0]} ${months[infoToday[1] - 1]} of the ${infoToday[2]}`
  let searchNote = notes.map(note => note.date === todoDate ? note : ' ')
  searchNote = searchNote.filter(note => /\S/.test(note))

  return (
    <div className='todo-day'>
      <h5>{noteDate}</h5>
      <div className='input-field'>
        <input onKeyPress={handleNoteKeyPress} type='text' id='note' />
        <label htmlFor='note'>
          Enter a note
        </label>
      </div>
      <div className={'todo-list'}>
        {searchNote.length > 0 && searchNote.map(note => (
          <TodoNote key={note.id} note={note} handleCompleted={handleCompleted} />
        ))}
      </div>
    </div>
  )
}

TodoDay.propTypes = {
  todoDate: string,
  handleNoteKeyPress: func.isRequired,
  notes: array.isRequired,
  handleCompleted: func.isRequired
}

export default TodoDay