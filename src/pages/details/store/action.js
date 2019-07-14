import * as constants  from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'

export const getDetails = (id) =>{
    return (dispatch)=>{    
        axios.get('/api/detail.json?id='+id).then((res)=>{
            const result = res.data.data
            const action = {
                type: constants.GET_DETAIL,
                title: fromJS(result.title),
                content: fromJS(result.content)
            }
           dispatch(action)
        })
    }
    
}

