interface Index {
    key: string;
    value: any;
    expires?: number;
}
export declare function setCookie(): void;
export declare function setCookie(key: string): void;
export declare function setCookie(key: string, value: string): void;
export declare function setCookie(key: string, value: string, expires: number): void;
export declare function setCookie(cookie: Index): void;
export declare function getCookie(key: string): string;
export declare function removeCookie(key: string): void;
export {};
