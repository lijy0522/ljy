/*
 * @Author: lijy
 */
/**
 * 浏览器的事件循环：
 *  执行 js 代码的时候，遇见同步任务，直接推入调用栈中执行，遇到异步任务，将该任务挂起，等到异步任务有返回之后推入到任务队列中，
 *  当调用栈中的所有同步任务全被执行完成，将任务队列中的任务顺序一个一个的推入并执行，重复执行这一系列的行为。
 * 
 * 宏任务
 *  分类：
 *  1.宏任务所处的队列就是宏任务队列
 *  2.第一个宏任务队列中只有一个宏任务，执行主线程的js代码
 *  3.宏任务队列可以有多个
 *  常见的宏任务：
 *      script、setTimeout、setInterval、requestAnimationFrame
 * 微任务
 *  分类：
 *  1.微任务所处的队列就是微任务队列
 *  2.只有一个微任务队列
 *  3.在上一个宏任务队列执行完毕后如果有微任务队列就会执行微任务队列中的所有任务
 *  常见的微任务：
 *      Promise.then、process.nextTick、MutationObserver
*/
console.log('---start---')

setTimeout(()=>{
    console.log('setTimeout')
}, 0)

new Promise((resolve, reject) => {
    for(var i = 0; i < 5; i++){
        console.log(i)
    }
    resolve()
}).then(()=>{
    console.log('promise实例成功回调')
})

console.log('---end---')