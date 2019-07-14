import React  from 'react'
import reading from '../../../static/readding.jpg'
import {connect } from 'react-redux'
import {getMoreList} from '../../../actions/actions'
import {Link} from 'react-router-dom'
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'
const  List = (props)=> {
    const { page,list, getMoreList} = props
    
        return (
            <div>
            {
                list.map((item,index)=> {
                    return (
                        <Link to={'./detail/'+item.get('id')} key = {index}>
                        <ListItem  >
                                <img className='pic' alt='' src={reading}/>
                            <ListInfo>
                             <h3 className = 'title'>{item.get('title')}</h3>
                             <p className = 'desc'>{item.get('content')} </p>
                            </ListInfo>
                        </ListItem>
                        </Link>
                    )
            })
        }
                <LoadMore onClick={() => { getMoreList(page) }}>阅读更多</LoadMore>
            </div>
        )
}

const mapStateToProps = (state)=> {
    return {
        list: state.home.get('list'),
        page: state.home.get('articlePage')
    }
}

const mapDispathToProps = (dispatch)=>{
    return {
        getMoreList(page){
            dispatch(getMoreList(page))
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(List)