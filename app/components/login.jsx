import React, {Component} from 'react'

class Login extends Component {
    constructor(props, context) {
        super(props, context)

    }

    render() {
        return (
            <div className="signin-form profile">
                <h3>Welcome,
                    <span>Jennifer</span>
                </h3>

                <div className="login-form">
                    <form>
                        <input type="text" placeholder="输入手机号码"/>
                        <input type="password" placeholder="请输入密码"/>
                        <input type="submit" value="登录"/>
                    </form>
                </div>

            </div>
        )
    }
}

export default Login