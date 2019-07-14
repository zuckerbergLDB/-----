import * as constants from './constants'
import { fromJS } from 'immutable'



const defaultState = fromJS({
    login: false

})

const deatailsReducer = (state = defaultState, action) => {
    switch (action.type){
        case constants.CHANGE_LOG_IN:
            return state.set('login',fromJS(action.login))
        case constants.LOGOUT:
            return state.set('login', false)
        default:
            return state
    }
    
}

export default deatailsReducer