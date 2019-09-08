function expireTime(delay: number): string {
    let now = new Date();
    now.setDate(now.getDate() + delay);
    return (now as any).toGMTString()
}

interface Index {
    key: string
    value: any,
    expires?: number,
}

export function setCookie(): void;

export function setCookie(key: string): void;

export function setCookie(key: string, value: string): void;

export function setCookie(key: string, value: string, expires: number): void;

export function setCookie(cookie: Index): void;

export function setCookie(...arg: any) {
    if (arg.length === 0) {
        document.cookie = ''
    } else if (arg.length === 1) {
        if (typeof arg[0] === 'string') {
            document.cookie = arg
        } else {
            let cookieObj: Index = arg[0];
            if (cookieObj.expires === undefined) {
                setCookie(cookieObj.key, cookieObj.value)
            } else {
                setCookie(cookieObj.key, cookieObj.value, cookieObj.expires)
            }
        }
    } else if (arg.length === 2) {
        document.cookie = `${arg[0]}=${arg[1]}`
    } else if (arg.length === 3) {
        document.cookie = `${arg[0]}=${arg[1]};expires=${expireTime(arg[2])}`
    }
}

export function getCookie(key: string): string {
    let cookies: string = document.cookie;
    let arrCookies: string[] = cookies.split("; ");
    let len = arrCookies.length;
    for (let i = 0; i < len; i++) {
        let arr: string[] = arrCookies[i].split('=');
        if (arr[0] === key) {
            return arr[1]
        }
    }
    return ''
}

export function removeCookie(key: string): void {
    let cookie: string = getCookie(key);
    setCookie(key, cookie, -1)
}
