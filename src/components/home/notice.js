/**
 * 首页通知栏
 * by sangtao
 */
import React, {Component} from 'react';
import { NoticeBar, Icon } from 'antd-mobile';
import HomeStyle from './home.css'
import FontsStyle from '../../fonts.css'


class Notice extends  Component{
    render(){
        var noticeMsg = this.props.noticeMsg;
        var agencyMsg = this.props.agencyMsg;
        var histstory = this.props.historys;
        const  more = <span ><span className={HomeStyle.more}>更多</span><Icon type="right" className={HomeStyle["more-arrow"]} /></span>

        const noticeIcon = <span className={FontsStyle["icon-icon-01c"] + " " + HomeStyle["notice-bar-icon"]}><span className={FontsStyle.path1}></span><span className={FontsStyle.path2}></span></span>
        const agencyIcon = <span className={FontsStyle["icon-icon_2"]+ " " + HomeStyle["notice-bar-icon"]}><span className={FontsStyle.path1}></span><span className={FontsStyle.path2}></span></span>
        return(
          <div className={HomeStyle["notice-main"]}>
              <NoticeBar mode="link" icon={noticeIcon} action={more} className={HomeStyle["notice-bar"]+" "+ HomeStyle["notice-line"]}>
                  <span className={HomeStyle.title}>公告</span>
                  <span>{noticeMsg}</span>
              </NoticeBar>
              <NoticeBar mode="link" icon={agencyIcon} action={more} className={HomeStyle["notice-bar"]} onClick={() => histstory.push("/app/dealtList")}>
                  <span className={HomeStyle.title}>代办</span>
                  <span>{agencyMsg}</span>
              </NoticeBar>
          </div>
        );
    }
}
export  default Notice