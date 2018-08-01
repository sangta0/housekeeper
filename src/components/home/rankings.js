import React, {Component} from 'react'
import { Flex,WhiteSpace } from 'antd-mobile';
import HomeStyle from './home.css'
import FontStyle from '../../fonts.css'

class Rankings extends Component{
    render(){

        return(
            <div className={HomeStyle["rankings"]}>
                <div className={HomeStyle["rankings-item"]}>
                    <div className={HomeStyle["rankings-item-title"]}>
                        <span className={FontStyle["icon-house-1"] }><span className={FontStyle.path1}></span><span className={FontStyle.path2}></span><span className={FontStyle.path3}></span><span className={FontStyle.path4}></span></span>
                        <span>合租</span>
                    </div>
                    <div className={HomeStyle["rankings-item-content"]}>
                        <Flex>
                            <Flex.Item>空置率</Flex.Item>
                            <Flex.Item>可租</Flex.Item>
                            <Flex.Item>空置</Flex.Item>
                            <Flex.Item>转租</Flex.Item>
                            <Flex.Item>申退</Flex.Item>
                            <Flex.Item>遇到期</Flex.Item>
                        </Flex>
                    </div>
                </div>
            </div>
        )
    }
}
export  default  Rankings