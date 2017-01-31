import React, { Component } from 'react'
import {setLocal,getLocal} from './global/unity';
class Login extends Component {
    constructor(props, context) {
<<<<<<< HEAD
        super(props, context);
        this.state = {
            phone: true
        }

    }
    handleChange(e) {

        let phone = this.refs.phone;
        if (/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone)) {
            this.setState({phone: false})
        } else {
            this.setState({phone: true})
=======
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
>>>>>>> af75455f259db34fd8bf1191449d99ec07575246
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
<<<<<<< HEAD
                        <input
                            type="text"
                            placeholder="输入手机号码"
                            onChange={this
                            .handleChange
                            .bind(this)}
                            ref="phone"/>
                        <p
                            style={{
                            display: this.state.phone
                                ? "none"
                                : "block"
                        }}>输入正确的手机号码</p>
                        <input type="password" placeholder="请输入密码"/>
                        <input type="submit" value="登录"/>
=======
                        <input type="text" placeholder="输入手机号码" ref="phone" defaultValue={this.state.phone}/>
                        <input type="password" placeholder="请输入密码" ref="password" defaultValue={this.state.password} />
                        <p>
                        <input type="checkbox" checked={this.state.isRemember} onClick={this.handleCheckbox.bind(this)} />
                        <span>是否记住密码：<i style={{color:"red",fontWeight:"bold"}}>{this.state.isRemember?"是":"否"}</i></span>                            
                        </p>
                        <input type="submit" value="登录" onClick={this.hanldSubmit.bind(this)} />
>>>>>>> af75455f259db34fd8bf1191449d99ec07575246
                    </form>
                </div>

            </div>
        )
    }
}

export default Login