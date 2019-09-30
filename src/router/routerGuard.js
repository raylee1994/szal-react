import React, {Component} from "react";
import {Route, withRouter} from "react-router-dom";
import Loadable from "utils/loadable";
import {getWxConfig} from "common/js/utils";
import {setCurrentNav, setVisibleSubNav, setInit} from "store/action";


class RouterGuard extends Component {
    constructor(props) {
        super(props)
        this.renderFunc = this.renderFunc.bind(this)
        this.state = {
            routes: [
                "/", "park", "hotel", "activity", "strategy", "service"
            ]
        }
    }
    scrollBehavior() {

    }
    watchRoute() {
        getWxConfig(['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage'], "苏州乐园官方网站", "苏州乐园官方网站", window.location.href.split('#')[0]);
        this.state.routes.forEach((item, index) => {
            if(item == this.props.path || this.props.path.indexOf(item) > 0) {
                this.props.setCurrentNav(index);
            }
        });
        this.props.setVisibleSubNav(-1);

        return (
            <Loadable component={this.props.component}></Loadable>
        )
    }
    // scrollBehavior
    componentDidUpdate(prevProps) {
        if( ((prevProps.location.pathname == "/hotel/resortHotel/index" || prevProps.location.pathname == "/hotel/ibis/index" || prevProps.location.pathname == "/hotel/ramada/index") && (this.props.location.pathname == "/hotel/resortHotel/index" || this.props.location.pathname == "/hotel/ibis/index" || this.props.location.pathname == "/hotel/ramada/index")) || this.props.location.pathname.indexOf("/activity") > -1 ) {
            window.scrollTo(0, 0)
            return
        }
    }
    // enter hook
    renderFunc() {
        this.watchRoute()
    }
    // leave hook
    componentWillUnmount() {
        
    }
    render() {
        return (
            <Route path={this.props.path} render={this.renderFunc} exact={this.props.exact}></Route>
        )
    }
}

export default connect({
    setCurrentNav,
    setVisibleSubNav,
    setInit
})(withRouter(RouterGuard))