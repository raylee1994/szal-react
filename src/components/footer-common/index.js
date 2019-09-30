import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

class FooterCommon extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="footer_common">
                <div className="ewm">
                    <img src="./images/wechat.png" alt />
                </div>
                <ul className="link">
                    <li>
                        <NavLink to="aboutUsPath">关于我们</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service/FAQ">常见问题</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service/contactUs">联系我们</NavLink>
                    </li>
                </ul>
                <div className="hotline">
                    <a href={'tel:'+this.props.hotline}>
                        <p>
                        客服热线：{this.props.hotline}
                        <img src="./images/phone.png" alt />
                        </p>
                    </a>
                </div>
                <div className="copy_right">
                    <p>苏ICP备12061969号-1</p>
                    <p>苏州高新旅游产业集团有限公司版权所有</p>
                    <p>
                        <a href="http://m.ipow.cn">[互动力 承建 运营]</a>
                    </p>
                </div>
            </div>
        )
    }
}

FooterCommon.defaultProps = {
    aboutUsPath: "/aboutUs",
    hotline: ""
}
FooterCommon.propTypes = {
    aboutUsPath: PropTypes.string,
    hotline: PropTypes.string
}

export default FooterCommon;