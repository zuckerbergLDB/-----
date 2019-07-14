import { combineReducers} from 'redux'
import  {headerReducer} from '../common/Header/store'
import HomeReducer from '../pages/home/store/HomeReducer'
import { deatailsReducer}  from '../pages/details/store'
import {loginReducer} from '../pages/login/store'

const reducer = combineReducers({
    header: headerReducer,
    home: HomeReducer,
    detail: deatailsReducer,
    login: loginReducer
})

export default reducer