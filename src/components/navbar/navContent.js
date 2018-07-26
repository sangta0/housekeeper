import React, { Component } from 'react';
import './nav-bar.css'

class NavContent extends Component {
    render(){
        var iconName = this.props.iconName;
        var text = this.props.text;
        return (
            <div className="icon">
                <span className={iconName}></span>
                <span className="icon-block">{text}</span>
            </div>
        );
    }
}
export default NavContent