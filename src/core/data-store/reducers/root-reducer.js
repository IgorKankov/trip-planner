import {combineReducers} from "redux";
import mapReducer from '../../../components/mapbox/store/reducer';
import plannerPanelReducer from "../../../components/planner-panel/store/reducer";

const rootReducer = combineReducers({
  mapReducer: mapReducer,
  plannerPanelReducer: plannerPanelReducer
});

export default rootReducer;