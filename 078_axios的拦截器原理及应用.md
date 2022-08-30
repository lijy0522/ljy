<!--
 * @Author: lijy
-->
- axios 是一个基于 Promise 的 HTTP 库，可以用在浏览器和 node.js 中。
- 请求拦截器用于在接口请求之前做的处理，比如为每个请求带上相应的参数（token，时间戳等）
- 响应拦截器用于用于在接口返回之后做的处理，比如对返回的状态进行判断（token是否过期等）
- 拦截器原理
    创建一个 chn 数组，数组中保存了拦截器相应方法以及 dispatchRequest，把请求拦截器的方法 unshift 到 chn 数组中 dispatchRequest 的前面，把响应拦截器的方法 push 到 chn 数组中 dispatchRequest 的后面。为了保证他们的执行顺序，使用 promise 以出队列的方式对 chn 数组中的方法挨个执行。