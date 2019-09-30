import React,{Component} from "react";
import PropTypes from "prop-types";

class Booking extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let innerClassname = this.props.inner
        return (
            <div className="booking {innerClassname}">
                <a href="http://weixin.szal.cn/wap/index.htm"><img src="./images/booking.png" alt="" className="booking_img"></a>
                <img src="./images/tree1.png" className="tree1" alt="">
                <img src="./images/tree2.png" className="tree2" alt="">
                <img src="./images/bird.gif" alt="" className="bird">
            </div>
        )
    }
}
Booking.defaultProps = {
    inner: false
}
Booking.propTypes = {
    inner: PropTypes.bool
}