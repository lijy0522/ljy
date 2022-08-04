/*
 * @Author: lijy0522 1816351526@qq.com
 * @Date: 2022-08-04 16:56:08
 * @LastEditors: lijy0522 1816351526@qq.com
 * @LastEditTime: 2022-08-04 17:20:33
 * @FilePath: \前端面试题\052_闭包.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* 理解：什么是闭包
    1.闭包的容器，类似于set、map容器，用来存储数据的
    2.闭包是一个对象，存放数据的格式为：key:value
形成的条件：
    1.函数嵌套
    2.内部函数引用外部函数的局部变量
闭包的优点：
    延长外部函数局部变量的生命周期
闭包的缺点：
    容易造成内存泄漏

注意点：
    1.合理地使用闭包
    2.用完闭包要及时清除（销毁）
 */

// 闭包的应用场景1
// function fun() {
//     let count = 1
//     return function () {
//         count++
//         console.log(count)
//     }
// }

// let fun2 = fun()
// fun2()
// fun2()

// ------------------------------------------------------

// 闭包的应用场景2

function fun(n, o) {
    console.log(o)
    return {
        fun: function (m) {
            return fun(m, n)
        }
    }
}
var a = fun(0)
a.fun(1)
a.fun(2)
a.fun(3)

var b = fun(0).fun(1).fun(2).fun(3)

var c = fun(0).fun(1)
c.fun(2)
c.fun(3)
