import React from 'react';
import NavLink from './global/navlink';

const config = {
    setting: [
        {
            name: '资料设置',
            url: 'setting'
        }
    ],
    cardwei: [
        {
            name: '卡位500',
            url: 'cardwei'
        }, {
            name: '卡位700',
            url: 'cardwei'
        }, {
            name: '卡位3000',
            url: 'cardwei'
        }, {
            name: '卡位7000',
            url: 'cardwei'
        }
    ]

}
export default class Index extends React.Component {
    constructor(...props) {
        super(...props)
    }
    render() {
        return (
            <div className="login-form" id="container">
                <div className="banner">

                    <div className="banner-text">

                        <div className="title">
                            <div className="title-left">
                                <img src={require('../img/img1.jpg')} alt=""/>
                            </div>
                            <div className="title-right">
                                <h2>Bruce_lee</h2>

                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
                <div className="banner-bottom">
                    <div className="banner-bottom-left">
                        <h3>13</h3>
                        <p>团队人数</p>
                    </div>
                    <div className="banner-bottom-right">
                        <h3>25</h3>
                        <p>可用余额</p>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="work-text">
                    <h3>TODAY</h3>
                    <section className="ac-container">
                        <section className="ac-container">
                            <Container list={config.cardwei}>命运扑克</Container>
                            <div>
                                <input id="ac-2" name="accordion-1" type="checkbox"/>
                                <label htmlFor="ac-2" className="grid2">
                                    <i></i>我的团队</label>
                                <article className="ac-small">
                                    <p>邀请好友</p>
                                    <p>直推奖励</p>
                                    <p>团队成员</p>
                                    <p>团队奖励</p>
                                </article>
                            </div>
                            <div>
                                <input id="ac-3" name="accordion-1" type="checkbox"/>
                                <label htmlFor="ac-3" className="grid3">
                                    <i></i>余额提现</label>
                                <article className="ac-small">
                                    <p>普通提现</p>
                                    <p>极速提现</p>
                                </article>
                            </div>
                            <Container list={config.setting}>安全中心</Container>
                        </section>
                    </section>
                </div>
            </div>
        )
    }
}

class Container extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            list: props.list
        }
    }
    render() {
        return (
            <div>
                <input id="ac-4" name="accordion-1" type="checkbox"/>
                <label htmlFor="ac-4" className="grid4">
                    <i></i>{this.props.children}</label>
                <article className="ac-small">
                    {this
                        .state
                        .list
                        .map((item, index) => {
                            return <p key={index}>
                                <NavLink to={`/${item.url}`}>{item.name}</NavLink>
                            </p>
                        })
}
                </article>
            </div>
        )
    }
}