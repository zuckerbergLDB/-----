 import React, {Component} from 'react'
 import {connect} from 'react-redux'
 import {Redirect} from 'react-router-dom'
import * as actions from './store/action'
import {
     LoginWrapper,
    LoginBox,
    Input,
    Button
     } from './style'
 class Login extends Component {
     render(){
         const { loginStatus} =  this.props
         if (!loginStatus){
             return (
                 <LoginWrapper>
                     <LoginBox>
                         <Input placeholder='账号 ' ref={(ele) => { this.textInput = ele }} />
                         <Input type='password' placeholder='密码 ' ref={(ele) => { this.passwordInput = ele }} />
                         <Button onClick={() => { this.props.login(this.textInput, this.passwordInput) }} >login</Button>
                     </LoginBox>
                 </LoginWrapper>
             )
         }else{
            return  <Redirect to = '/' />
         }
         
         
     }
    }

     const mapStateToProps = (state) => ({
            loginStatus: state.login.get('login'),
     })
     const mapDispatchToProps = (dispatch) => ({
        login(textInput, passwordInput){
            console.log('dd')
             dispatch(actions.login(textInput.value, passwordInput.value))
        }
     })

export default connect(mapStateToProps,mapDispatchToProps)(Login)