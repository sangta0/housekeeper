//合租
import React, { Component } from 'react';
import CommonHeader from '../../components/header/commonHeader'
import {Steps,Picker,List,InputItem,Button,WhiteSpace,WingBlank} from 'antd-mobile'
import RoomStyle from './room.css'

const Step = Steps.Step;

const subdistrict = [
        {
            label: '汤臣一品',
            value: '001',
        },
        {
            label: '春晖地印',
            value: '002',
        },
        {
            label: '日月大地',
            value: '003',
        },
        {
            label: '爱我中华',
            value: '004',
        }
];

const city = [
    {
        label:'北京',
        value:'bj'
    },
    {
        label:'上海',
        value:'sh'
    },
    {
        label:'成都',
        value:'cd'
    },
    {
        label:'南京',
        value:'nj'
    },
]


class AddJointRent extends Component{
    state = {
        data: [],
        cols: 1,
        pickerValue: [],
        asyncValue: [],
        cValue: ['003', '日月大地'],
        visible: false,
        colorValue: ['#00FF00'],
    };
    render(){
        return(
            <div >
                <CommonHeader title="添加合租房源"/>
                <div className={RoomStyle["add-room"]}>
                    <Steps direction="horizontal" size="small">
                            <Step className={RoomStyle.step4} description="房源地址"/>
                            <Step className={RoomStyle.step4} description={"基本信息"}/>
                            <Step className={RoomStyle.step4} description={"房源图片"}/>
                            <Step className={RoomStyle.step4} description={"房源配置"}/>
                    </Steps>

                    <List style={{ backgroundColor: 'white' }} className={RoomStyle["picker-list"]}>
                        <Picker
                            data={subdistrict}
                            value={this.state.cValue}
                            cols={1}
                        >
                            <List.Item arrow="horizontal">选择小区</List.Item>
                        </Picker>
                        <Picker data={city} cols={1}  extra="请选择(可选)" className="forss">
                            <List.Item arrow="horizontal">市级</List.Item>
                        </Picker>
                        <Picker data={city} cols={1}  extra="请选择(可选)" className="forss">
                            <List.Item arrow="horizontal">区级</List.Item>
                        </Picker>
                        <Picker data={city} cols={1}  extra="请选择(可选)" className="forss">
                            <List.Item arrow="horizontal">区域</List.Item>
                        </Picker>
                    </List>

                    <List className={RoomStyle["picker-list"]}>
                        <InputItem  placeholder="请输入" >房源编号</InputItem>
                        <InputItem  placeholder="请输入">楼号</InputItem>
                        <InputItem  placeholder="请输入">单元</InputItem>
                        <InputItem  placeholder="请输入">室</InputItem>

                        <Picker data={city} cols={1}  extra="请选择" className="forss">
                            <List.Item arrow="horizontal">员工类型</List.Item>
                        </Picker>

                        <Picker data={city} cols={1}  extra="请选择" className="forss">
                            <List.Item arrow="horizontal">员工姓名</List.Item>
                        </Picker>
                    </List>
                    <WingBlank><Button type="primary">下一步</Button> <WhiteSpace /></WingBlank>
                </div>
            </div>
        )
    }
}
export default AddJointRent