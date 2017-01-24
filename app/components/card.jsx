import React from 'react';
import Header from './global/header';
export default class Card extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    fanzhuan(e){
        e.stopPropagation();
        this.refs.card.className+=' active'
    }
    render() {
        return (

            <div>
                <Header title='抽卡'/>
                <div id="container" className="container-fluid">
                    <div className="row reg">
                        <div className="col-md-12">
                            <h2>抽奖规则</h2>
                            <p>至购买卡位计算，有10次翻牌机会24小时一次。解冻结时间5天120小时后。或者利息达到50%，既停止翻牌机会（不满五天也可提现）</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h4>还剩下10次翻牌机会</h4>
                        </div>
                    </div>
                    <div className="cards card" ref="card" onClick={this.fanzhuan.bind(this)}>
                        <div className="up"></div>
                        <div className="down">
                            中奖信息
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
