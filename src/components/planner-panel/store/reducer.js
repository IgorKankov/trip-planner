import {
  SET_PANEL_VISIBILITY,
  INCREMENT,
  DECREMENT,
  TODO_DATE,
  NEW_NOTE,
  COMPLETE_NOTE
} from "./constants";
import NOTES from "../calendar/calendar-data/default-notes";

const initialTodoDate = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
const initialDate = new Date()

const INITIAL_STATE = {
  panelIsVisible: true,
  todoDate: initialTodoDate,
  date: initialDate,
  notes: NOTES
}

const plannerPanelReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case SET_PANEL_VISIBILITY:
      return {
        ...state, panelIsVisible: payload.panelIsVisible
      };
    case INCREMENT:
      let increment = new Date(state.date.getTime())
      increment.setMonth(increment.getMonth() + 1)
      return {
        ...state, date: increment
      };
    case DECREMENT:
      let decrement = new Date(state.date.getTime())
      decrement.setMonth(decrement.getMonth() - 1)
      return {
        ...state, date: decrement
      };
    case TODO_DATE:
      return {
        ...state, todoDate: payload.todoDate
      };
    case NEW_NOTE:
      return {
        ...state, notes: state.notes.concat({
          id: `${payload.id}`,
          description: payload.description,
          date: payload.date
        })
      };
    case COMPLETE_NOTE:
      return {
        ...state, notes: state.notes.filter(note => note.id !== payload.id)
      }
    default:
      return state;
  }
}

export default plannerPanelReducer