import React, { Component } from 'react';
import { Menu, Button,SearchBar,WingBlank,ActivityIndicator,ListView} from 'antd-mobile';
import CommonHeader from '../../components/header/commonHeader'
import dealtStyle from './dealt.css'

const data = [
    {
        value: '1',
        label: '全部',
    }, {
        value: '2',
        label: '未完成',
    },
    {
        value: '3',
        label: '已完成',
        isLeaf: true,
    },
];

class DealtList extends Component{
    constructor(...args) {
        super(...args);
        this.state = {
            initData: '',
            show: false,
            statusName:'未完成',
            status:'2'
        };
    }
    onChange = (value) => {
        let label = '';
        data.forEach((dataItem) => {
            if (dataItem.value === value[0]) {
                label = dataItem.label;
                if (dataItem.children && value[1]) {
                    dataItem.children.forEach((cItem) => {
                        if (cItem.value === value[1]) {
                            label += ` ${cItem.label}`;
                        }
                    });
                }
            }
        });
        this.setState({
            statusName:label,
            status:value
        })
        console.log( this.state.statusName);
    }
    handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        this.setState({
            show: !this.state.show,
        });
    }
    onMaskClick = () => {
        console.log(this.state.show)
        this.setState({
            show: false,
        });
    }
    render(){
        const {  show ,statusName,status} = this.state;
        const  menuEl = (
            <Menu
                className="single-foo-menu"
                data={data}
                value={status}
                level={1}
                onChange={this.onChange}
                height={document.documentElement.clientHeight * 0.3}
        />
        );
        const loadingEl = (
            <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.1, display: 'flex', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </div>
        );
        return(
            <div>
                <CommonHeader title='代办事项' />
                <div className={dealtStyle["dealt-list-content"]}>
                    <div className={dealtStyle["dealt-search"]}>
                        <div className={dealtStyle["dealt-search-left"]}> <Button size="small" inline icon="down" onClick={this.handleClick}>{statusName}</Button></div><WingBlank/>
                        <div className={dealtStyle["dealt-search-right"]}><SearchBar className={dealtStyle["dealt-search-bar"]} placeholder="Search" maxLength={8} /></div>
                    </div>
                    {show ?  menuEl : null}
                    {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}

                    <

                </div>
            </div>
        )
    }
}
export  default  DealtList