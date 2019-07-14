import styled from 'styled-components'


export const HomeWrapper = styled.div`
    z-index: -1;
    width: 960px;
    margin: 0 auto;
` 

export const HomeLeft = styled.div`
 z-index: -1
    float: left
    width: 640px;
    padding-left:15px;
    padding-top: 30px;
`
export const HomeRight = styled.div`
    float: right;
    width: 280px;
    padding-top: 30px;
`

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0 ;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        width: 125px;
        heiight: 100px;
        float: right;
        border-radius: 10px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .tiitle: {
        line-height: 27px;
        font-size: 18px;
        font-weigth: bold;
        color: #333
    }
    .desc {
       line-height:  24px;
        font-size: 13px;
        color:#999
    }
`
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 28opx;
`
export const RecommendItem = styled.div`
    height: 50px;
    width: 28opx;
    background: url(${(props) => props.url});
    background-size: contain
`

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0 ;
    background: #a5a5a5;
    border-radius: 20px;
    text-align: center;
    color: #fff;
    cursor: pointer;
`

export const BackTop = styled.div`
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 60px;
    height: 60px;
    border: 1px solid #b0a1a1;
    line-height: 60px;
    text-align: center;

`