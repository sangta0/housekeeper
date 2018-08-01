import React, {Component} from 'react'
import { Flex,WhiteSpace } from 'antd-mobile';
import HomeStyle from './home.css'

class HomeBlock extends Component{
    render(){
        var leftTitle = this.props.leftTitle
        var rightTitle = this.props.rightTitle

        return(
            <div className={HomeStyle["block"]}>
                <Flex>
                    <Flex.Item>
                        <div className={HomeStyle["block-left"]+" "+ HomeStyle["block-content"]}>
                            <div className={HomeStyle["block-title"]}>
                                <div className={HomeStyle["block-content-title"]}><strong>房态</strong></div>
                                <div className={HomeStyle["block-content-msg"]}>查看房租状态</div>
                            </div>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div className={HomeStyle["block-right"]+" "+ HomeStyle["block-content"]}>
                            <div className={HomeStyle["block-title"]}>
                                <div className={HomeStyle["block-content-title"]}><strong>收房核算</strong></div>
                                <div className={HomeStyle["block-content-msg"]}>六月高成交</div>
                            </div>
                        </div>
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}
export  default HomeBlock