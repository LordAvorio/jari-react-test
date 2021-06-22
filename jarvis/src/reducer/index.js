import {combineReducers} from 'redux'

import customerReducer from './customerReducer'

const allReducer = combineReducers({
    customerReducer
})

export default allReducer