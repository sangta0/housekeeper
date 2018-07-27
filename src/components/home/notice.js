/**
 * 首页通知栏
 * by sangtao
 */
import React, {Component} from 'react';
import { NoticeBar, Icon } from 'antd-mobile';
import './home.css'
import '../../fonts.css'

class Notice extends  Component{
    render(){
        var noticeMsg = this.props.noticeMsg;
        var agencyMsg = this.props.agencyMsg;
        const  more = <span ><span className="more">更多</span><Icon type="right" className="more-arrow" /></span>
        // const noticeIcon = <span className="am-icon-voice notice-voice "><i className="icon-index-header"></i></span>;
        const noticeIcon = <span className="icon-icon-01c notice-bar-icon"><span className="path1"></span><span className="path2"></span></span>
        const agencyIcon = <span className="icon-icon_2 notice-bar-icon"><span class="path1"></span><span class="path2"></span></span>
        return(
          <div className="notice-main">
              <NoticeBar mode="link" icon={noticeIcon} action={more} className="notice-bar notice-line">
                  <span className="title">公告</span>
                  <span>{noticeMsg}</span>
              </NoticeBar>
              <NoticeBar mode="link" icon={agencyIcon} action={more} className="notice-bar">
                  <span className="title">代办</span>
                  <span>{agencyMsg}</span>
              </NoticeBar>
          </div>
        );
    }
}
export  default Notice