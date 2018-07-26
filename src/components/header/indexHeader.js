import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import { Popover} from 'antd-mobile';
import '../../fonts.css'
import './header.css'

const Item = Popover.Item;
class IndexHeader extends Component{
    state = {
        visible: false,
        selected: '',
    };
    render(){
        return(
            <div className="header">
                <span className="icon-index-header header-left"></span>
                <span>首页</span>
                <span className="header-right">
                    <Popover mask
                             overlayClassName="fortest"
                             overlayStyle={{ color: 'currentColor' }}
                             visible={this.state.visible}
                             overlay={[
                                 (<Item key="4" value="scan" icon={<i className="icon-home"></i>} data-seed="logId"><NavLink to="/app/room" className="nav-link" >添加房源</NavLink></Item>),
                                 (<Item key="5" value="special" icon={<i className="icon-dealt"></i>} style={{ whiteSpace: 'nowrap' }}><NavLink to="/app/room" className="nav-link">添加代办</NavLink></Item>),
                                 (<Item key="6" value="button ct" icon={<i className="icon-accounting"></i>} ><NavLink to="/app/room" className="nav-link">收房核算</NavLink></Item>),
                             ]}
                             align={{
                                 overflow: { adjustY: 10, adjustX: 0 },
                                 offset: [-8, 5],
                             }}
                             onVisibleChange={this.handleVisibleChange}
                             onSelect={this.onSelect}
                    >
                    <div className="icon-itme" style={{
                        height: '100%',
                        padding: '0 10px',
                        marginRight: '-10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    >
                    </div>
                    </Popover>
                </span>

            </div>
        );
    }
}
export  default  IndexHeader