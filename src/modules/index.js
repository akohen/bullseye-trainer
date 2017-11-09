import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import bullseye from './bullseye'

export default combineReducers({
  router: routerReducer,
  bullseye,
  form: formReducer,
})
