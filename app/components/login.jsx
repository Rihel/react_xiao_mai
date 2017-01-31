import React, {Component} from 'react'

class Login extends Component {
    constructor(props, context) {
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
        }
    }
    render() {
        return (
            <div className="signin-form profile">
                <h3>Welcome,
                    <span>Jennifer</span>
                </h3>

                <div className="login-form">
                    <form>
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
                    </form>
                </div>

            </div>
        )
    }
}

export default Login