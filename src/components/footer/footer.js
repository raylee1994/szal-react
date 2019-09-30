import React,{Component} from "react";
import {connect} from "react-redux";
import {setCurrentNav, setVisibleSubNav} from "store/action";
import {NavLink} from "react-router-dom";
import "./footer.less";
import $ from "jquery";

const mapStateToProps = state => {
    return {
        currentNav: state.currentNav,
        visibleSubNav: state.visibleSubNav
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentNav(currentNav) {
            return () => {
                dispatch(setCurrentNav(currentNav))
            }
        },
        setVisibleSubNav(visibleSubNav) {
            return () => {
                dispatch(setVisibleSubNav(visibleSubNav))
            }
        }
    }
}

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: -1
        }
        this.switchBox.bind(this)
    }
    componentDidMount() {
        this.setState({
            currentIndex: this.props.currentNav
        })
        $("body div").on("touchstart", (e) => {
            if(e.currentTarget.className == "footer_link") {
                e.stopPropagation();
            }
            if(e.target.tagName == "A") {
                return
            }
            if(e.currentTarget.className !== "icon" && e.currentTarget.className !== "footer_link") {
                $(".footer_link_menu .footer_link_menu_box").removeClass("active")
                this.props.setVisibleSubNav(-1)
            }
        })
    }
    switchBox(index) {
        return () => {
            if(this.props.visibleSubNav == index) {
                this.props.setVisibleSubNav(-1)
            }else {
                this.props.setVisibleSubNav(index)
            }
        }
    }
    render() {
        let menu = ["景区", "酒店", "活动", "攻略", "服务"];
        let menuEle = menu.map((item, index) => {
            let className = this.state.currentIndex == index + 1 ? "active" : "";
            let icon = require("./images/icon_"+ (index+1) +".png");
            return (
                <a href="javascript:;" className="footer_link_btn {className}" onClick="{this.switchBox(index)}">
                    <div className="icon">
                        <img src={icon} alt="">
                    </div>
                    <p>{item}</p>
                </a>
            )
        })
        let classHome = this.state.currentIndex == 0 ? "active" : "";

        let subMenu = [
            [
                {
                    name: "森林世界",
                    path: "/park/forestWorld/forestWorld"
                },
                {
                    name: "森林水世界",
                    path: "/park/waterWorld/waterWorld"
                },
                {
                    name: "四季恒温水乐园",
                    path: "/park/waterPark/waterPark"
                },
                {
                    name: "苏鲜森餐厅",
                    path: "/park/suxiansen/suxiansen"
                },
                {
                    name: "森林小镇",
                    path: ""
                }
            ],
            [
                {
                    name: "四季悦度假酒店",
                    path: "/hotel/resortHotel/index"
                },
                {
                    name: "高新华美达",
                    path: "/hotel/ramada/index"
                },
                {
                    name: "苏州乐园浒关酒店",
                    path: "/hotel/ibis/index"
                }
            ],
            [
                {
                    name: "主题活动",
                    path: "/activity?type=activity"
                },
                {
                    name: "优惠信息",
                    path: "/activity?type=discount"
                }
            ],
            [
                {
                    name: "景区攻略",
                    path: "/strategy/strategy"
                },
                {
                    name: "交通指南",
                    path: "/strategy/traffic"
                },
                {
                    name: "游客咨询",
                    path: "/strategy/consult"
                }
            ],
            [
                {
                    name: "景区票价",
                    path: "/service/ticket"
                },
                {
                    name: "景区地图",
                    path: "/service/map"
                },
                {
                    name: "游客须知",
                    path: "/service/notice"
                },
                {
                    name: "常见问题",
                    path: "/service/FAQ"
                },
                {
                    name: "联系我们",
                    path: "/service/contactUs"
                },
                {
                    name: "景区新闻",
                    path: "/service/news"
                },
                {
                    name: "游园须知",
                    path: "/service/tips"
                }
            ]
        ];
        let subMenuEle = subMenu.map((item, index) => {
            let className = this.props.visibleSubNav == index ? "active" : "";
            let subMenuEleChild = item.map((item, index) => {
                let ele;
                if(item.path) {
                    ele = (
                        <NavLink className="subNavBtn" to={item.path}>{item}</NavLink>
                    )
                }else {
                    ele = (
                        <a className="subNavBtn" href='javascript:;'>{item}</a>
                    )
                }
                return ele
            })
            return (
                <div className="footer_link_menu_box" className={className}>
                    {subMenuEleChild}
                </div>
            )
        })
        return (
            <div className="footer">
                <div className="footer_link">
                    <a href="/" className="footer_link_btn {classHome}">
                        <div className="icon">
                            <img src="./images/home.png" alt="">
                        </div>
                        <p>首页</p>
                    </a>
                    {menuEle}
                </div>
                <div className="footer_link_menu">
                    {subMenuEle}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
