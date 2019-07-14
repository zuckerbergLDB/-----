import React from 'react'
import {connect} from 'react-redux'
import { RecommendWrapper, RecommendItem} from '../style'

const  Recommend =(props) => {
    const { recommendList} = props
        return (
            < RecommendWrapper >
                { recommendList.map((item) =>{
                    return <RecommendItem key = {item.get('id')} url={item.get('url')} />
                })}
         </RecommendWrapper >
         ) }

const mapStatetToProps = (state) => (
    
    {
    list: state.home.get('list'),
    recommendList: state.home.get('recommendList')
})
export default connect(mapStatetToProps)(Recommend)

   