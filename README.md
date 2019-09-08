这个包主要用来在模块化之中对cookie进行操作  
在ts和js中均能够正常使用

#### 安装
```
npm install doc-cookie
or
yarn add doc-cookie
```

#### 使用
#####引入包
```javascript
// 在es6模块化里面
import {setCookie, geCookie, removeCookie} from 'doc-cookie'
// 在nodejs里面
const {setCookie, geCookie, removeCookie} = require('doc-cookie')
```
#####API 
```javascript
// 无操作
setCookie()
// 设定cookie的value
setCookie('key')
// 设定cookie的key和value
setCookie('key', 'value')
// 第三个参数是过期时间，传入number类型即可指定expires天后过期
setCookie('key', 'value', expires) 
// key和value必传，expires可选
setCookie({
       key: 'string', 
       value: 'string', 
        //expires: number
})
