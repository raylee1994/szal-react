import originalJsonp from "jsonp"

export default function jsonp(url, data/* , opts */){
    url += (url.indexOf("?")>-1 ? '&' : '?') + param(data)

    return new Promise((resolve, reject) => {
        originalJsonp(url, /* opts, */ (err, data) => {
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
}

function param(data){
    let url = ""
    for(var i in data){
        let value = data[i] !== undefined ? data[i] : ''
        url += '&'+i+'='+value
    }
    return url ? url.substring(1) : ''
}
