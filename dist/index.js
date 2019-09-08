"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function expireTime(delay) {
    var now = new Date();
    now.setDate(now.getDate() + delay);
    return now.toGMTString();
}
function setCookie() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    if (arg.length === 0) {
        document.cookie = '';
    }
    else if (arg.length === 1) {
        if (typeof arg[0] === 'string') {
            document.cookie = arg;
        }
        else {
            var cookieObj = arg[0];
            if (cookieObj.expires === undefined) {
                setCookie(cookieObj.key, cookieObj.value);
            }
            else {
                setCookie(cookieObj.key, cookieObj.value, cookieObj.expires);
            }
        }
    }
    else if (arg.length === 2) {
        document.cookie = arg[0] + "=" + arg[1];
    }
    else if (arg.length === 3) {
        document.cookie = arg[0] + "=" + arg[1] + ";expires=" + expireTime(arg[2]);
    }
}
exports.setCookie = setCookie;
function getCookie(key) {
    var cookies = document.cookie;
    var arrCookies = cookies.split("; ");
    var len = arrCookies.length;
    for (var i = 0; i < len; i++) {
        var arr = arrCookies[i].split('=');
        if (arr[0] === key) {
            return arr[1];
        }
    }
    return '';
}
exports.getCookie = getCookie;
function removeCookie(key) {
    var cookie = getCookie(key);
    setCookie(key, cookie, -1);
}
exports.removeCookie = removeCookie;
