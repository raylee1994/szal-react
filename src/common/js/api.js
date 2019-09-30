import jsonp from "common/js/jsonp";
import config from "common/js/config";
import axios from "axios";

export function getArea(areaname) {
    const url = `${config.domain}/api/Area/GetArea`;
    const data = {
        areaname: areaname
    };

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function getNews(areaname) {
    const url = `${config.domain}/api/News/GetNews`;
    const data = {
        areaname: areaname
    };

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function getNewsDetails(id) {
    const url = `${config.domain}/api/News/GetNewsDetails`;
    const data = {
        news_id: id
    };

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function getActivitys() {
    const url = `${config.domain}/api/Activity/Getactivity`;
    const data = {};

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function getActivityDetails(id) {
    const url = `${config.domain}/api/Activity/GetActivityDetils`;
    const data = {
        activity_id: id
    };

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function getDiscounts() {
    const url = `${config.domain}/api/Discounts/Getdiscounts`;
    const data = {};

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function getDiscountsDetails(id) {
    const url = `${config.domain}/api/Discounts/GetDiscountsDetils`;
    const data = {
        discount_id: id
    };

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function getStrategy(areaname) {
    const url = `${config.domain}/api/Strategy/Getstrategy`;
    const data = {
        areaname: areaname
    };

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function getStrategyDetails(id) {
    const url = `${config.domain}/api/Strategy/GetStrategyDetails`;
    const data = {
        strategy_id: id
    };

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function getMessageList(options) {
    const url = `${config.domain}/api/Message/messageList`;
    const opts = options || {}
    const data = {
        type: opts.type || "",
        search: opts.search || ""
    };

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function insertdata(opts) {
    const url = `${config.domain}/api/Message/insertdata`;
    const data = {
        type: opts.type,
        username: opts.username,
        userphone: opts.userphone,
        content: opts.content,
        captcha: opts.captcha
    };

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function captcha() {
    const url = `${config.domain}/api/Message/captcha`;
    const data = {};

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function getFacility(id) {
    const paramValue = parseInt(id)
    const param = isNaN(paramValue) ? "areaname" : "garden_id"
    const url = `${config.domain}/api/Facility/GetFacility`;
    const data = {
        [param]: id
    };

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function getFacilityDetails(id) {
    const url = `${config.domain}/api/Facility/GetFacilityDetails`;
    const data = {
        facility_id: id
    };

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function getRecommendFacility(areaname) {
    const url = `${config.domain}/api/Index/index`;
    const data = {
        areaname
    };

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function getSearch(keywords) {
    const url = `${config.domain}/api/Search/search`;
    const data = {
        search: keywords
    };

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function getRecommendActivity() {
    const url = `${config.domain}/api/Index/GetWapActivity`;
    const data = {};

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function getRecommendStrategy(areaname = "") {
    const url = `${config.domain}/api/Index/GetStrategy`;
    const data = {
        areaname: areaname
    };

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function getFacilityHot(areaname = "") {
    const url = `${config.domain}/api/Facility/GetFacilityHot`;
    const data = {
        areaname: areaname
    };

    return jsonp(url, data/* , config.jsonpOptions */)
}

export function wxShare() {
    const url = `${config.domain}/api/Index/share`;
    const data = {
        url: location.href.split('#')[0]
    };

    return axios.post(url, data).then(res => {
        return Promise.resolve(res.data)
    })
}
