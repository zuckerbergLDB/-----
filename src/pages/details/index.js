import React, { Component } from 'react'
import { connect } from 'react-redux'
import  * as actions  from './store/action'
import { 
    DetailWrapper ,
    Header,
    Content
} from './style'


class Deatails extends  Component {
    
    render() {
       
        const {header, content} = this.props
        return (
            <DetailWrapper>
                <Header>{ header }</Header>
                <Content dangerouslySetInnerHTML={{ __html:content}} />   
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
    }
}


const mapStateToProps = (state) =>({
    header: state.detail.get('header'),
    content: state.detail.get('content')
})
const mapDispachToProps = (dispatch) => ({
    getDetail(id){
        dispatch(actions.getDetails(id))
    }
})
 
export default connect(mapStateToProps, mapDispachToProps)(Deatails)

  /*
    <p>1、世界微尘里，我宁爱与憎。——《北青萝》</p>
                        <p>2、和别人谈起你，是我想你的方式。</p>
                        <p>3、你喜欢田野，恕我愚笨，只能植荒十年，换得一时春生。</p>
                        <p>4、我想你，没有什么特别的花样，可是说出来却觉得很是悲壮。</p>
                        <p>5、后来那些没有说出口的话，都成了走马的灯，前尘的尘，杏花树下，无字的碑文。</p>
                        <p>6、聚散离合中终有时，历来烟火不由人。</p>
                        <p>7、好多年了，你一直在我伤口中幽居。</p>
                        <p>8、若我亲爱的少年，他还能喜欢一个人，那是谁都没关系，我希望他从此幸福快乐。</p>
                        <p>9、你承诺过的月亮还是没有出现，而我无眠，或者，我只是衣单天寒地，替你多爱了一夜人间。——张子选</p>
                        <p>10、我是一个在黑暗中大雪纷飞的人哪，你再不来，我要下雪了。</p>
                        <p>11、岁岁年轮，你只是我一圈的认真。</p>
                        <p>13、后海有树的院子，夏代有工的玉，此时此刻的云，二十来岁的你。</p>
                        <p>14、或许我们终究会有那么一天，牵着别人的手，遗忘曾经的他。——《雨季不再来》</p>
                        <p>15、我想把我整个灵魂都给你，连同它的怪癖，耍小脾气，忽明忽暗，一千八百种毛病，它真讨厌，只有一点好，爱你。——王小波</p>
    */