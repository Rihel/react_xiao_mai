import React, { Component } from 'react'
import {setLocal,getLocal} from './global/unity';
class Login extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            phone:'',
            password:'',
            message: '',
            isRemember: false
        }
    }
    hanldSubmit(e) {
        e.stopPropagation();
        let phone = this.refs.phone;
        let password = this.refs.password;

        if (phone.value === '') {
            this.setState({
                message: '手机号码不能为空~'
            });
            return false;
        }

        if (!(/^1(3|4|5|7|8)\d{9}$/.test(phone.value))) {
            this.setState({
                message: '请输入正确的手机号码'
            });
            return false;
        }
        if (password.value === '') {
            this.setState({
                message: '请输入密码'
            });
        }
        if(this.state.isRemember){
            setLocal('phone',this.state.phone);
            setLocal('password',this.state.password);
        }
        setLocal('login',true);
        window.location.href="/index"



    }
    handleCheckbox(e) {
        let isChecked = e.target.checked;
        if (isChecked) {
            this.setState({
                isRemember: true
            });
        } else {
            this.setState({
                isRemember: false
            });
        }
    }
    render() {
        let phone=getLocal('phone');
        let password=getLocal('password');
        if(phone&&phone!==undefined){
        
            this.setState({
                phone:phone
            });
        }
        if (password&&password!==undefined) {
            this.setState({
                password:password
            });
        }
        
        return (
            <div className="signin-form profile">
                <h3>Welcome,
                    <span>Jennifer</span>
                </h3>
                <p style={{ color: 'red' }}>{this.state.message}</p>
                <div className="login-form">
                    <form>
                        <input type="text" placeholder="输入手机号码" ref="phone" defaultValue={this.state.phone}/>
                        <input type="password" placeholder="请输入密码" ref="password" defaultValue={this.state.password} />
                        <p>
                        <input type="checkbox" checked={this.state.isRemember} onClick={this.handleCheckbox.bind(this)} />
                        <span>是否记住密码：<i style={{color:"red",fontWeight:"bold"}}>{this.state.isRemember?"是":"否"}</i></span>                            
                        </p>
                        <input type="submit" value="登录" onClick={this.hanldSubmit.bind(this)} />
                    </form>
                </div>

            </div>
        )
    }
}

export default Login