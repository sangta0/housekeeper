import React, { Component } from 'react';
import { Switch, Route,NavLink,Redirect } from 'react-router-dom'
import { Flex } from 'antd-mobile';
import NavContent from './navContent'
import  Home from '../../pages/home/home'
import  Room from '../../pages/room/index'
import  User from '../../pages/user/index'
import  Account from '../../pages/account/index'
import NotFound from '../../pages/notFound/index'
import Login from '../../pages/login/login'

class Nav extends  Component {
    render(){
        return(
            <div>
                <main>
                    <Switch>
                        <Route path={'/'} exact  component={Home} />
                        <Route path={'/app'} exact  component={Home} />
                        <Route path={'/app/home'}   component={Home} />
                        <Route path={'/app/room'} component={Room} />
                        <Route path={'/app/user'} component={User} />
                        <Route path={'/app/account'} component={Account} />
                        <Route path={'/login'} component={Login} />
                        <Route path={'/404'} component={NotFound} />
                        <Redirect to={'/404'} component={NotFound} />
                    </Switch>
                </main>
                <div className="bottom-nav">
                    <Flex>
                        <Flex.Item><NavLink to="/app/home" activeClassName="active"><NavContent text="首页" iconName="icon-home" /></NavLink></Flex.Item>
                        <Flex.Item><NavLink to="/app/room" activeClassName="active"><NavContent text="房态" iconName="icon-room-state" /></NavLink></Flex.Item>
                        <Flex.Item><NavLink to="/app/user" activeClassName="active"><NavContent text="核算" iconName="icon-accounting" /></NavLink></Flex.Item>
                        <Flex.Item><NavLink to="/app/account" activeClassName="active"><NavContent text="我的" iconName="icon-my" /> </NavLink></Flex.Item>
                    </Flex>
                </div>
            </div>

        );
    }
}
export default Nav