import { combineReducers } from 'redux'
import { systemReducer } from 'app/system/redux/system'

export const rootReducer = combineReducers({
  system: systemReducer,
})