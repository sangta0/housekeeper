import React, {Component} from 'react'
import { Flex,WhiteSpace } from 'antd-mobile';
import HomeStyle from './home.css'
import FontStyle from '../../fonts.css'

class Rankings extends Component{
    render(){

        return(
            <div className={HomeStyle["rankings"]}>
                <div className={HomeStyle["rankings-item"] +" "+HomeStyle["rankings-item-border"]}>
                    <div className={HomeStyle["rankings-item-title"]}>
                        <span className={FontStyle["icon-house-1"] }><span className={FontStyle.path1}></span><span className={FontStyle.path2}></span><span className={FontStyle.path3}></span><span className={FontStyle.path4}></span></span>
                        <span className={HomeStyle["rankings-item-titile-content"]}><strong>合租</strong></span>
                    </div>
                    <div className={HomeStyle["rankings-item-content"]}>
                        <Flex>
                            <Flex.Item style={{flex:2}}><div className={HomeStyle["rankings-item-num"]}>14.36%</div><div>空置率</div></Flex.Item>
                            <Flex.Item><div className={HomeStyle["rankings-item-num"]}>16</div><div className={HomeStyle["rankings-item-label"]}>可租</div></Flex.Item>
                            <Flex.Item><div className={HomeStyle["rankings-item-num"]}>16</div><div className={HomeStyle["rankings-item-label"]}>空置</div></Flex.Item>
                            <Flex.Item><div className={HomeStyle["rankings-item-num"]}>5</div><div className={HomeStyle["rankings-item-label"]}>转租</div></Flex.Item>
                            <Flex.Item><div className={HomeStyle["rankings-item-num"]}>0</div><div className={HomeStyle["rankings-item-label"]}>申退</div></Flex.Item>
                            <Flex.Item><div className={HomeStyle["rankings-item-num"]}>0</div><div className={HomeStyle["rankings-item-label"]}>遇到期</div></Flex.Item>
                        </Flex>
                    </div>
                </div>

                <div className={HomeStyle["rankings-item"] +" "+HomeStyle["rankings-item-border"]}>
                    <div className={HomeStyle["rankings-item-title"]}>
                        <span className={FontStyle["icon-house-2"] }><span className={FontStyle.path1}></span><span className={FontStyle.path2}></span><span className={FontStyle.path3}></span><span className={FontStyle.path4}></span></span>
                        <span  className={HomeStyle["rankings-item-titile-content"]}><strong>整租</strong></span>
                    </div>
                    <div className={HomeStyle["rankings-item-content"]}>
                        <Flex>
                            <Flex.Item style={{flex:2}}><div className={HomeStyle["rankings-item-num"]}>14.36%</div><div>空置率</div></Flex.Item>
                            <Flex.Item><div className={HomeStyle["rankings-item-num"]}>16</div><div className={HomeStyle["rankings-item-label"]}>可租</div></Flex.Item>
                            <Flex.Item><div className={HomeStyle["rankings-item-num"]}>16</div><div className={HomeStyle["rankings-item-label"]}>空置</div></Flex.Item>
                            <Flex.Item><div className={HomeStyle["rankings-item-num"]}>5</div><div className={HomeStyle["rankings-item-label"]}>转租</div></Flex.Item>
                            <Flex.Item><div className={HomeStyle["rankings-item-num"]}>0</div><div className={HomeStyle["rankings-item-label"]}>申退</div></Flex.Item>
                            <Flex.Item><div className={HomeStyle["rankings-item-num"]}>0</div><div className={HomeStyle["rankings-item-label"]}>遇到期</div></Flex.Item>
                        </Flex>
                    </div>
                </div>

                <div className={HomeStyle["rankings-item"]}>
                    <div className={HomeStyle["rankings-item-title"]}>
                        <span className={FontStyle["icon-house-3"] }><span className={FontStyle.path1}></span><span className={FontStyle.path2}></span><span className={FontStyle.path3}></span><span className={FontStyle.path4}></span></span>
                        <span  className={HomeStyle["rankings-item-titile-content"]}><strong>集中</strong></span>
                    </div>
                    <div className={HomeStyle["rankings-item-content"]}>
                        <Flex>
                            <Flex.Item style={{flex:2}}><div className={HomeStyle["rankings-item-num"]}>14.36%</div><div>空置率</div></Flex.Item>
                            <Flex.Item><div className={HomeStyle["rankings-item-num"]}>16</div><div className={HomeStyle["rankings-item-label"]}>可租</div></Flex.Item>
                            <Flex.Item><div className={HomeStyle["rankings-item-num"]}>16</div><div className={HomeStyle["rankings-item-label"]}>空置</div></Flex.Item>
                            <Flex.Item><div className={HomeStyle["rankings-item-num"]}>5</div><div className={HomeStyle["rankings-item-label"]}>转租</div></Flex.Item>
                            <Flex.Item><div className={HomeStyle["rankings-item-num"]}>0</div><div className={HomeStyle["rankings-item-label"]}>申退</div></Flex.Item>
                            <Flex.Item><div className={HomeStyle["rankings-item-num"]}>0</div><div className={HomeStyle["rankings-item-label"]}>遇到期</div></Flex.Item>
                        </Flex>
                    </div>
                </div>
            </div>
        )
    }
}
export  default  Rankings