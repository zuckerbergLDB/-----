import * as constants  from './constants'
import axios from 'axios'
export const logout = () => ({
    type: constants.LOGOUT,
    login: true

})
export const login = (textValue , passwordValue) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + textValue + '&password=' + passwordValue).then((res)=>{
            const result = res.data.data  
            if (result) {
                const action = {
                    type: constants.CHANGE_LOG_IN,
                    login: true
                }
                dispatch(action)
                }else{
                    alert('登入失败')
                }
        })
    }
}

