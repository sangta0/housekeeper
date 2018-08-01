import React, { Component } from 'react';
import { Switch, Route,Redirect } from 'react-router-dom'
import App from  '../../App'
import NotFound from '../../pages/notFound/index'
import Login from '../../pages/login/login'
import {requireAuthentication} from '../../utils/authenticatedComponent'
import  Home from '../../pages/home/home'
import  Room from '../../pages/room/index'
import  User from '../../pages/user/index'
import  Account from '../../pages/account/index'

class Nav extends  Component {
    render(){
        return(
            <div>
                <main>
                    <Switch>
                        <Route path={'/login'} exact component={Login} />
                        <Route path={'/404'} exact  component={NotFound} />
                        <Route path={'/'}  component={requireAuthentication(App)} />
                  
                        <Redirect to={'/404'} component={NotFound} />
                    </Switch>
                </main>
            </div>

        );
    }
}
export default Nav