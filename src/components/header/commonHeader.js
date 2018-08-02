import React, {Component} from 'react';
import FontsStyle from '../../fonts.css'
import HeaderStyle from './header.css'


class CommonHeader extends Component{
    state = {
        visible: false,
        selected: '',
    };
    render(){
        var title = this.props.title
        return(
            <div className={HeaderStyle.header}>
                <span className={FontsStyle["icon-arrow-lef"]+" "+ HeaderStyle["header-left"]}></span>
                {title}
            </div>
        );
    }
}
export  default  CommonHeader