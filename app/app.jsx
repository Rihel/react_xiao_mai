import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Index from './components/index';
import NavLink from './components/global/navlink';
import Card from './components/card';
import Cardwei from './components/cardwei';

import Setting from './components/setting';
import InviteFriends from './components/inviteFriends';
import PushReward from './components/pushReward';
import Teamers from './components/teamers';
import TeamReward from './components/teamreward';


import Login from './components/login';




import {getLocal } from './components/global/unity';
require('./scss/base.scss')
require('../node_modules/font-awesome/scss/font-awesome.scss');
<<<<<<< HEAD
let isLogin=false;
=======
let isLogin=getLocal('login');
>>>>>>> af75455f259db34fd8bf1191449d99ec07575246
class Root extends React.Component {
    
    render() {
        
        return (
            <div>

                {this.props.children}
                <div className="footer">
                    <ul className="nav">
                        <li>

                            <NavLink to='/index'>
                                <i className="fa fa-home"></i>
                                <p>首页</p>
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to='/cardwei'>
                                <i className="fa fa-superpowers"></i>
                                <p>命运扑克</p>
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}
let app = document.createElement('div');
let meta = document.createElement('meta');
meta.setAttribute('name', 'viewport');
meta.setAttribute('content', 'width=device-width, initial-scale=1');
document
    .head
    .appendChild(meta);
document
    .body
    .appendChild(app);
document.body.style.backgroundColor = "#fff";
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path='/' component={isLogins(Root)}>
            <IndexRoute component={Index}/>
            <Route path='/index' component={Index}/>

            <Route path='/cardwei' component={Cardwei}/>
            <Route path='/setting' component={Setting}/>
            <Route path='/inviteFriends' component={InviteFriends}/>
            <Route path='/pushReward' component={PushReward}/>
            <Route path='/teamers' component={Teamers}/>
            <Route path='/teamreward' component={TeamReward}/>
            <Route path='/card' component={Card}/>
        </Route>
    </Router>
), app)


function isLogins(component){
    if(isLogin){
        return component;
    }else{
        // alert('请先登录');
        return Login;
    }
}