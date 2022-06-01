import {
  SET_PANEL_VISIBILITY,
  INCREMENT,
  DECREMENT,
  TODO_DATE,
  NEW_NOTE,
  COMPLETE_NOTE
} from "./constants";

export const setVisibility = (value) => {
  return {
    type: SET_PANEL_VISIBILITY,
    payload: {
      panelIsVisible: value
    }
  }
}

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

export const todoDateAction = (updateTodoDate) => ({
  type: TODO_DATE,
  payload: {
    todoDate: updateTodoDate
  }
})

export const addNote = (date, description) => ({
  type: NEW_NOTE,
  payload: {
    id: new Date().getUTCMilliseconds(),
    date,
    description
  }
})

export const completeNote = (id) => ({
  type: COMPLETE_NOTE,
  payload: {
    id
  }
})

