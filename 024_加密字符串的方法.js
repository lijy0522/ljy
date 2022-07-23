// 使用base64
// import {Base64} from 'js-base64'
const {Base64} = require('js-base64')
const str = 'abskdhu'

// 加密
console.log(Base64.btoa(str))   //YWJza2RodQ==

// 解密
console.log(Base64.atob('YWJza2RodQ=='))