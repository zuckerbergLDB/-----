import React , {Component} from 'react' 
import Header from './common/Header'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'
import store from './store'
import Writer from './pages/writer'
import GlobalStyle from './style.js'
import IconStyle from './static/iconfont/iconfont.js'
import Details from './pages/details';


class APP extends Component {
    render() {
        return (
            <Provider store= {store}>
                <GlobalStyle />
                <IconStyle />
                
                <Router>
                    <div>
                    <Header />
                    <Route exact path= '/' component = {Home} />
                    <Route exact path= '/login' component = {Login} />
                    <Route path = '/write' component = {Writer} />
                    <Route exact path= '/detail/:id' component = {Details} />
                    </div>
                </Router>
            </Provider>
        )
    }
} 

export default APP