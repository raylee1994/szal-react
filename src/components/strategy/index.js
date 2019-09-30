import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import "./index.less";

class Stategy extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let strategyContent;
        let noContent;
        let contentEqLen1;
        let contentOverLen1;
        let contentEqLen2;
        let contentOverLen2;
        if(this.props.strategyList.length == 0) {
            noContent = (
                <p style="text-align: center; font-size: 14px; color: #333;">敬请期待</p>
            )
        }else {
            if(this.props.strategyList.length > 1) {
                contentOverLen1 = (
                    <div className="strategy_item">
                        <NavLink to={"/strategyDetail?id="+this.props.strategyList[1].id+"&from=recommend"}>
                            <img src={this.props.strategyList[1].image} alt="">
                            <p>{this.props.strategyList[1].title}</p>
                        </NavLink>
                    </div>
                )
            }
            if(this.props.strategyList.length > 2) {
                contentOverLen2 = (
                    <div className="strategy_item">
                        <NavLink to={'/strategyDetail?id='+this.props.strategyList[2].id+'&from=recommend'}>
                            <img src={this.props.strategyList[2].image} alt="">
                            <p>{this.props.strategyList[2].title}</p>
                        </NavLink>
                    </div>
                )
            }
            if(this.props.strategyList.length == 1) {
                contentEqLen1 = (
                    <div className="strategy_more1">
                        <p>更多游玩攻略<br>敬请期待！</p>
                    </div>
                )
            }
            if(this.props.strategyList.length == 2) {
                contentEqLen2 = (
                    <div className="strategy_more2">
                        <p>更多游玩攻略<br>敬请期待！</p>
                    </div>
                )
            }
            strategyContent = (
                <div className="strategy_common">
                    <div className="strategy_left">
                        <NavLink to="/strategyDetail?id="+this.props.strategyList[0].id+"&from=recommend">
                            <img src={this.props.strategyList[0].image} alt="">
                            <p>{this.props.strategyList[0].title}</p>
                        </NavLink>
                    </div>
                    <div className="strategy_right">
                        {contentOverLen1}
                        {contentOverLen2}
                        {contentEqLen1}
                        {contentEqLen2}
                    </div>
                </div>
            )
        }
        return (
            <React.Fragment>
                {strategyContent}
                {noContent}
            </React.Fragment>
        )
    }
}
Stategy.defaultProps = {
    strategyList: []
}
Stategy.propTypes = {
    strategyList: PropTypes.array
}

export default Stategy