import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class Writer extends Component {
    render() {
        const { loginStatus } = this.props
        console.log(loginStatus)
        if (loginStatus){

            return <div> 写文章 </div>
        }else{
           return  <Redirect to='/login' />
        }
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.login.get('login'),
})


export default connect(mapStateToProps )(Writer)