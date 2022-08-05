/*
 * @Author: lijy
 */
/**
 * 宏任务
 *  分类：
 *  1.宏任务所处的队列就是宏任务队列
 *  2.第一个宏任务队列中只有一个宏任务，执行主线程的js代码
 *  3.宏任务队列可以有多个
 * 微任务
 *  分类：
 *  1.微任务所处的队列就是微任务队列
 *  2.只有一个微任务队列
 *  3.在上一个宏任务队列执行完毕后如果有微任务队列就会执行微任务队列中的所有任务
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