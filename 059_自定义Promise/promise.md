<!--
 * @Author: lijy
-->
## 理解：
Promise 是异步微任务，解决了异步多层嵌套回调的问题，让代码的可读性更高，更容易维护。

## 使用方法

Promise 是 ES6 提供的一个构造函数，可以使用 Promise 构造函数 new 一个实例，Promise 构造函数接收一个函数作为参数，这个函数有两个参数，分别为 'resolve' 和 'rejeck'，'resolve' 将 Promise 的状态改为成功，将异步操作的结果作为参数传递过去，'reject' 则将状态由等待转变为失败，在异步操作失败时调用，将异步操作报出的错误作为参数传递过去。实例创建完成后，可以使用 'then' 方法分别指定成功或者失败的回调函数，也可以使用 catch 捕获失败，'then' 和 'catch' 最终返回的也是一个 Promise，可以链式调用。

- new Promise((reslove, rejeck) => {
    resolve('ok')
}).then().catch()
- Promise.reslove()
- Promise.rejecked()
- Promise.all()
- Promise.race()