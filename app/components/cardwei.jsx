import React from 'react';
import Header from './global/header';
import NavLink from './global/navlink';
export default class Cardwei extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {

        return (
            <div>
                <Header title='卡位'/>
                <div id="cardwei" className="container-fluid">
                    <div className="row">
                        <CardItem>300卡位</CardItem>
                        <CardItem>500卡位</CardItem>
                        <CardItem>3000卡位</CardItem>
                        <CardItem>7000卡位</CardItem>
                    </div>
                </div>
            </div>
        )
    }

};
class CardItem extends React.Component {
    constructor(props, context) {
        super(props, context)

    }
    render() {
        return (
            <div className="col-xs-6">
                <div className="card">
                    <div className="card-title">
                        {this.props.children}
                    </div>
                    <div className="card-state">
                        <h3>卡位状态：<span>未获得</span>
                        </h3>
                        <p>每个卡位每天只能购买一次</p>

                        <NavLink to='/card' className='btn btn-primary'>购买</NavLink>

                    </div>
                </div>
            </div>
        );
    }
}