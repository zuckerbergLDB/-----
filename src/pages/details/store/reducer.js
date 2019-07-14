import * as constants from './constants'
import { fromJS } from 'immutable'



const defaultState = fromJS({
  header: '',
  content:''
})

const deatailsReducer = (state = defaultState, action) => {
    switch (action.type){
        case constants.GET_DETAIL:
            return state.merge({
                header: action.title,
                content: action.content
            })
        default:
            return state
    }
    
}

export default deatailsReducer