import React, { Component } from 'react';
import {TextareaItem,DatePicker,List,WhiteSpace,WingBlank,Button} from 'antd-mobile'
import dealtStyle from './dealt.css'
import CommonHeader from '../../components/header/commonHeader'


class Dealt extends Component{
    state = {
        date:''
    }
    render(){
        return(
            <div>
                <CommonHeader title='添加待办' />
                <div className={dealtStyle["dealt-content"]}>
                    <TextareaItem
                        rows={10}
                        placeholder="请输入待办内容"
                    />
                    <WhiteSpace />
                    <DatePicker
                        value={this.state.date}
                        onChange={date => this.setState({ date })}
                    >
                        <List.Item arrow="horizontal" className={dealtStyle["extra"]}>设置提醒时间</List.Item>
                    </DatePicker>
                </div>
               <div className={dealtStyle["dealt-btn"]}>
                   <WingBlank><Button type="primary">确认添加</Button> <WhiteSpace /></WingBlank>
               </div>
            </div>
        )
    }
}
export  default Dealt