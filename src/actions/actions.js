import { CHANGE_PAGE,MOUSE_LEAVE,MOUSE_ENTER,MORE_LIST, SEARCH_FOCUS, SEARCH_BLUR, CHANGE_HOME_DATA, CHANGE_SEARCH_LIST} from './actionTypes'
import { fromJS } from 'immutable'
 import axios from 'axios'

export const getSearchFocus = () => {
    return {
        type: SEARCH_FOCUS
    }
}

export const getSearchBlur = () => ({
    type: SEARCH_BLUR
})

export const getHomeData = (result) => ({
    type: CHANGE_HOME_DATA,
    list: result.list,
    recommendList: result.recommendList
})

export const getHomeInfo  = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
    
            dispatch(getHomeData(result))
        })
    }
}
const addHomeList = (result,nextPage) => ({
    type: MORE_LIST,
    addList: fromJS(result), 
    nextPage 
})
export const getMoreList = (page) =>{
    return (dispatch) =>{
        axios.get('./api/homeList.json?page'+page).then((res)=>{
          const result = res.data.data
            dispatch(addHomeList(result,page+1))
        })
    }
}

export const toogleTopShow = (bool) =>{
    return (dispatch)=>{
    const action = {
        type: 'toogleTopShow',
        showScroll: bool
    }
        dispatch(action)
}
}

export const getList = () => {
    return (dispatch) => {
        axios.get('./api/headSearchList.json').then((res)=>{
            const result = res.data.data
            console.log(res.data.data);
            var action = {
                type: CHANGE_SEARCH_LIST,
                data: result,
                totalPage: Math.ceil(result.length/10)
            }
            dispatch(action)
        })
    }
}


export const changeMouseEnter = () => ({
    type: MOUSE_ENTER
})

export const changeMouseLeave = () => ({
    type: MOUSE_LEAVE,
})  
export const changePage = (page) => ({
    type: CHANGE_PAGE,
    page,
})