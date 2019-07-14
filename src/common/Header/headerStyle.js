import styled from 'styled-components'
import logo from '../../static/jiansu.png'

export const HeaderWrapper = styled.div`
    height: 58px;
    border: 1px solid #f0f0f0;
`

export const Logo = styled.div`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 56px;
    width: 100px;
    background: url(${logo});
    background-size: contain;
`
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    position:abolute;
   padding-right: 70px;
   box-sizing: border-box; 
`
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    color: #333;
    font-size: 17px
    &.left{
        float: left;
    }
    &.right {
        float: right;
        color: #969696;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    }
    &.active{
        color:#ea6f5a
    }
`
export const SearchWrappper = styled.div`
    float: left;
    position: relative
    .slide-enter{
        transition: all .5s ease-out;
    }
    .slide-enter-active{
        width: 240px;
    }
    .slide-exit{
        transition: all .5s ease-out
    }
    .slide-exit-active{
        width: 160px;
    }
    .iconfont{
        margin: 0 auto;
        position: absolute; 
        right: 5px;
        bottom: 5px;
        width: 30px;
        border-radius: 15px;
        line-height: 30px;
        text-align: center;
        &.focus {
            background: #777;
            
        }
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder: 'search'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    padding:  0 20px ;
    box-sizing: border-box;
    border: 1px solid #eee; 
    outline: none;
    border-radius: 19px;
    background-color: #eee;
    font-size: 14px;
    &.focus {
        width: 240px;
    }
`

export const Addition = styled.div`
    height: 56px;
    position: absolute;
    right:0;
    top:0;

`
export const Button = styled.div`
    float: right;
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    border: 1px solid #ec6149;
    margin-left: 20px;
    padding: 0 20px;
    font-size: 14px;
    &.reg {
        color: #ec619;
    }
    &.writting {
        color: #fff;
        background:#ea6f5a;
    }
`

export const SearchInfo = styled.div`
    z-index: 999;
    position: absolute;
    left: 0 ;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    background-color:#fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2)
`
export const SearchInfoTitle = styled.div`
    display: inline;
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color:#969696;
`
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    
`

export const SearchInfoItem = styled.a`
    dispaly: block;
    float: left; 
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;

`
export const SearchInfoSearch = styled.div`
overflow: hidden;

`