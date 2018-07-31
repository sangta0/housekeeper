import React, { Component } from 'react';
import IndexHeader from "../../components/header/indexHeader";
import Notice from "../../components/home/notice"
import { connect } from 'react-redux'
import * as homeAction from '../../store/actions/homeAction'
import IndexStyle from  '../../index.css'

const mapStateToProps =(state) => {
    return {
        detailInfo: state.getHomeDetail,
        detailInfo2:state.getHomeDetail
    }
};

class Home extends Component {
    componentWillMount () {
        this.getHomeDetail()
        window.scrollTo(0, 0)
    }
    getHomeDetail = () => {
        this.props.getHomeDetail()
    }
    render(){
        const {detailInfo,detailInfo2} = this.props
        console.log(detailInfo.data)
        return(
        <div>
            <IndexHeader />
            <div className={IndexStyle.content}>
                <Notice noticeMsg={detailInfo.data.companyCityName} agencyMsg={detailInfo2.data.connectMan} />
            </div>

        </div>
        );
    }
}
export default connect(mapStateToProps,homeAction)(Home)