import { wxShare } from "common/js/api";
import wx from 'weixin-js-sdk';

export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)) + "年";
    }
    let o = {
        'M+': date.getMonth() + 1 + "月",
        'd+': date.getDate() + "日",
        'h+': date.getHours() + "时",
        'm+': date.getMinutes() + "分",
        's+': date.getSeconds() + "秒"
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

export function formatDate1(date, fmt) {
    let fmtDate = date
    let timeObj = {
        'M+': fmtDate.getMonth() + 1,
        'd+': fmtDate.getDate(),
        'h+': fmtDate.getHours(),
        'm+': fmtDate.getMinutes(),
        's+': fmtDate.getSeconds()
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (fmtDate.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    for (let time in timeObj) {
        if (new RegExp(`(${time})`).test(fmt)) {
            fmt = fmt.replace(RegExp.$1, ("00" + timeObj[time]).substr((("" + timeObj[time])).length))
        }
    }

    return fmt
}

export function back() {
    var _url1 = window.location.href;
    window.history.back();
    setTimeout(() => {
        var _url2 = window.location.href;
        if (_url1 == _url2) {
            window.location.href = "/";
        }
    }, 100)
}

export function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.hash.substr(window.location.hash.indexOf("?") + 1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

export function sortNumber(a, b) {
    return a.id - b.id
}

export function isEmptyObject(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

export function getWxConfig(jslist, title, desc, url) {
    wxShare().then((res) => {
        if (res.code == 200) {
            registerWeixin(res.data)
        } else {
            alert(res.msg)
        }
    })

    function registerWeixin(data) {
        //1.config
        wx.config({
            debug: false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: jslist
        });
        //2.ready
        wx.ready(function () {
            //检查客户端是否支持某个js接口
            wx.checkJsApi({
                jsApiList: jslist.splice(1), // 需要检测的JS接口列表，所有JS接口列表见附录2,
                success: function (data) {
                    // console.log(data)
                }
            });
            wx.showOptionMenu();

            wx.onMenuShareAppMessage({
                title: title,
                desc: desc,
                link: url,
                imgUrl: "http://m.szal.cn/static/img/logo.png",

            });
            wx.onMenuShareTimeline({
                title: title,
                desc: desc,
                link: url,
                imgUrl: "http://m.szal.cn/static/img/logo.png",
            });
        });
    }
}
