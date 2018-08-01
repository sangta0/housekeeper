import React, { Component } from 'react';
import AppStyle from './App.css';
import { NavLink,Route,Switch } from 'react-router-dom'
import { Flex } from 'antd-mobile';
import NavContent from './components/navbar/navContent'
import './utils/authenticatedComponent'

import  Home from './pages/home/home'
import  Room from './pages/room/index'
import  User from './pages/user/index'
import  Account from './pages/account/index'

class App extends Component {
  render() {
    return (
      <div className={AppStyle.App}>
        <div>
          <Switch>
            <Route path={'/'} exact  component={Home} />
            <Route path={'/app'} exact   component={Home} />
            <Route path={'/app/home'}    component={Home} />
            <Route path={'/app/room'}  component={Room} />
            <Route path={'/app/user'}  component={User} />
            <Route path={'/app/account'}  component={Account} />
          </Switch>  
        </div>
        <div className={AppStyle["bottom-nav"]}>
      
        <Flex>
            <Flex.Item><NavLink to="/app/home" activeClassName={AppStyle.active} className={AppStyle["nav-a"]}><NavContent text="首页" iconName="icon-home" /></NavLink></Flex.Item>
            <Flex.Item><NavLink to="/app/room" activeClassName={AppStyle.active} className={AppStyle["nav-a"]}><NavContent text="房态" iconName="icon-room-state" /></NavLink></Flex.Item>
            <Flex.Item><NavLink to="/app/user" activeClassName={AppStyle.active} className={AppStyle["nav-a"]}><NavContent text="核算" iconName="icon-accounting" /></NavLink></Flex.Item>
            <Flex.Item><NavLink to="/app/account" activeClassName={AppStyle.active} className={AppStyle["nav-a"]}><NavContent text="我的" iconName="icon-my" /> </NavLink></Flex.Item>
        </Flex>
      </div>
      </div>
    );
  }
}

export default App;