import React, {Component} from 'react' 
import { connect } from 'react-redux'
import { HomeWrapper, HomeRight, HomeLeft,BackTop}   from './style'
import Recommend  from './components/Recommend'
import Writter  from './components/Writter'
import List  from './components/List'
import { getHomeInfo, toogleTopShow } from '../../actions/actions';



class Home extends  Component {
    handleBackTop(){
        window.scrollTo(0,0);
    }
    render()  {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writter></Writter>
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleBackTop}>TOP</BackTop>:null}
                
            </HomeWrapper>           
        )
    }
    componentDidMount(){
        this.props.changeHomeData()
        this.bindEvents()
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollTop)
    }
    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTop)
    }
}
const mapStatToProps = (state)=> ({
    showScroll: state.home.get('showScroll')
})
const mapDispatchToProps = (dispacth) =>{
    return ({
        changeHomeData(){
            const action = getHomeInfo()
            dispacth(action)
        },
        changeScrollTop(e){
            if(document.documentElement.scrollTop > 400){
                dispacth(toogleTopShow(true))
            }else{
                dispacth(toogleTopShow(false))
            }
        }
    })
}

export default connect(mapStatToProps,mapDispatchToProps)(Home)