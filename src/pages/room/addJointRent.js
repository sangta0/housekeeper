//合租
import React, { Component } from 'react';
import CommonHeader from '../../components/header/commonHeader'
import {Steps,WingBlank} from 'antd-mobile'
import RoomStyle from './room.css'
const Step = Steps.Step;
class AddJointRent extends Component{

    render(){
        return(
            <div >
                <CommonHeader title="添加合租房源"/>
                <div className={RoomStyle["add-room"]}>
                    <WingBlank>
                    <Steps direction="horizontal" size="small">
                            <Step description="房源地址"/>
                            <Step description={"基本信息"}/>
                            <Step description={"房源图片"}/>
                            <Step description={"房源配置"}/>
                    </Steps>
                    </WingBlank>
                </div>
            </div>
        )
    }
}
export default AddJointRent