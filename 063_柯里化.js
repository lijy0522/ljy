/*
 * @Author: lijy
 */
/*
 * @Author: lijy
 */
// 是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
// 未掌握

var  curry = fn => 
    judge = (...args) => 
        args.length === fn.length ? fn(...args) : (...arg) => judge(...args, ...arg)