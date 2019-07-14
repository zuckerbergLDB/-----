
import {fromJS} from 'immutable'

import { CHANGE_PAGE,MOUSE_ENTER,SEARCH_FOCUS, SEARCH_BLUR, CHANGE_SEARCH_LIST, MOUSE_LEAVE } from '../../../actions/actionTypes'

const defaultState = fromJS({
    mouseIn: false,
    focused: false,
    list: [],
    page: 1,
    totalPage: 1
})

const headerReducer = (state = defaultState, action) => {
    switch (action.type){
        case SEARCH_FOCUS:
            return state.set('focused', true)
        case SEARCH_BLUR:
             return state.set('focused', false)
        case CHANGE_SEARCH_LIST:
            return state.set('list', fromJS(action.data)).set('totalPage', fromJS(action.totalPage))
        case MOUSE_ENTER:
            return state.set('mouseIn', true)
        case MOUSE_LEAVE:
            return state.set('mouseIn',false)
        case CHANGE_PAGE:
            return state.set('page',action.page)
        default:
            return state
    }

}

export default headerReducer