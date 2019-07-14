import React ,{Component} from 'react'

import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { getSearchFocus, getSearchBlur, getList, changeMouseEnter, changeMouseLeave, changePage} from '../../actions/actions'
import { CSSTransition } from 'react-transition-group'
import * as actions from '../../pages/login/store/action'
import { 
    HeaderWrapper,
    Logo,
    Nav, 
    NavItem,
    NavSearch,
    Addition ,
    Button,
    SearchWrappper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoSearch
} from './headerStyle';


class Header extends Component {

    getSearchShow(){
        const { focused, list, totalPage, page, handleMouseEnter, handldeMouseLeave, mouseIn, handleChangePage} = this.props
        const pageList = []
        for(let i = (page-1)*10 ; i < page*10 ; i++){
            pageList.push(<SearchInfoItem key={i}>{list.toJS()[i]}</SearchInfoItem> )  
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter = {handleMouseEnter}
                            onMouseLeave = {handldeMouseLeave}
                >
                    <SearchInfoTitle>热门搜索</SearchInfoTitle>
                    <SearchInfoSwitch onClick={() => { handleChangePage(totalPage,page) } }> 换一批</SearchInfoSwitch>
                    <SearchInfoSearch>
                        {
                            pageList 
                        }
                    </SearchInfoSearch>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
    render(){
        const { focused, handleOnfocus, handleOnBlur, login, logout } = this.props
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <Link to='/'>
                    <NavItem className='left active'>首页</NavItem>
                    </Link>
                    <NavItem className='left'>下载App</NavItem>
                    {login ? <NavItem className='right' onClick={logout}>退出</NavItem> :
                        <Link to='/login'><NavItem className='right'>登入</NavItem></Link>}
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrappper>
                        <CSSTransition
                            in={focused}
                            timeout={500}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focus' : ''}
                                onFocus={handleOnfocus}
                                onBlur={handleOnBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'iconfont focus' : 'iconfont'} >&#xe60b;</i>
                        {this.getSearchShow(focused)}
                    </SearchWrappper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='writting' ><span className="iconfont">&#xe641;</span>写文章</Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>

        )
    }
}

const mapStateToProps = (state) =>{
    return {
        focused: state.header.get('focused'),
        login: state.login.get('login'),
        list: state.header.get('list'),
        page: state.header.get('page'),
        mouseIn: state.header.get('mouseIn'),
        totalPage: state.header.get('totalPage')
    }
}
const mapDispatchToprops = (dispatch) => {
    return {
        handleOnfocus: () => {
            dispatch(getList())
            const action = getSearchFocus()
            dispatch(action)
        },
        handleOnBlur: () => {
            const action = getSearchBlur()
            dispatch(action)
        },
        logout() {
            dispatch(actions.logout())
        },
        handleMouseEnter() {
            dispatch(changeMouseEnter())
        },
        handldeMouseLeave(){
            dispatch(changeMouseLeave())
        },
        handleChangePage(totalPage,page){
            if(page<totalPage){
                dispatch(changePage(page+1))
            }else {
                dispatch(changePage(1))
            }
           
        }
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(Header)