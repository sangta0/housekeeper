import React, { Component } from 'react';
import NavBarStyle from  './nav-bar.css'
import FontsStyle from '../../fonts.css'
class NavContent extends Component {
    render(){
        var iconName = this.props.iconName;
        var text = this.props.text;
        return (
            <div className={NavBarStyle.icon}>
                <span className={FontsStyle[iconName]}></span>
                <span className={NavBarStyle["icon-block"]}>{text}</span>
            </div>
        );
    }
}
export default NavContent