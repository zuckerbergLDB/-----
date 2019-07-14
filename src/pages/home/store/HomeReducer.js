import { fromJS } from 'immutable'
import { CHANGE_HOME_DATA, MORE_LIST} from '../../../actions/actionTypes'
const defaultState = fromJS({
    list: [],
    recommendList: [],
    articlePage: 0,
    showScroll: false,
   
})



const HomeReducer = (state = defaultState ,action) => {
    switch (action.type) {
        case CHANGE_HOME_DATA:
           return state.merge({
               list: fromJS(action.list),
               recommendList: fromJS(action.recommendList)
           })
        case MORE_LIST:            
            return state.merge({
              list:   state.get('list').concat(action.addList),
              articlePage : action.nextPage ,  
            })
        case 'toogleTopShow':
            return state.set('showScroll', action.showScroll)
        default:
            return state   
    }
    
}

export default HomeReducer