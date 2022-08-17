/*
 * @Author: lijy
 */
class Promise {
    // 构造方法
    constructor(executor) {
        // 定义初始状态与初始结果值
        this.PromiseState = 'pending'
        this.PromiseResult = null

        // 声明一个属性
        this.callbacks = []

        // 保存实例对象的this值
        const _this = this

        // resolve 方法
        function resolve(data) {
            // 判断状态
            if (_this.PromiseState !== 'pending') return
            // 1. 修改结果的状态（PromiseState）
            _this.PromiseState = 'fulfilled'
            // 2. 修改结果的结果值（PromiseResult）
            _this.PromiseResult = data
            // 3. 执行成功的回调
            _this.callbacks.forEach(item => {
                setTimeout(() => {
                    item.onResolved(data)
                }, 0);

            });
        }

        // reject 方法
        function reject(data) {
            // 判断状态
            if (_this.PromiseState !== 'pending') return
            // 1. 修改结果的状态（PromiseState）
            _this.PromiseState = 'rejected'
            // 2. 修改结果的结果值（PromiseResult）
            _this.PromiseResult = data
            // 3. 执行失败的回调
            _this.callbacks.forEach(item => {
                setTimeout(() => {
                    item.onRejected(data)
                }, 0);

            });
        }

        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    // then 方法封装
    then(onResolved, onRejected) {
        const _this = this

        // 判断回调函数参数
        if (typeof onRejected !== 'function') {
            onRejected = reason => {
                throw reason
            }
        }
        if (typeof onResolved !== 'function') {
            onResolved = value => value
        }

        return new Promise((resolve, reject) => {
            // 封装函数
            function callback(type) {
                try {
                    let result = type(_this.PromiseResult)
                    if (result instanceof Promise) {
                        // 如果是Promise 类型的对象
                        result.then(v => {
                            resolve(v)
                        }, r => {
                            reject(r)
                        })
                    } else {
                        resolve(result)
                    }
                } catch (error) {
                    reject(error)
                }
            }

            // 判断fulfilled状态
            if (this.PromiseState === 'fulfilled') {
                setTimeout(() => {
                    callback(onResolved)
                }, 0);

            }
            // 判断rejected状态
            if (this.PromiseState === 'rejected') {
                setTimeout(() => {
                    callback(onRejected)
                }, 0);

            }
            // 判断pending状态
            if (this.PromiseState === 'pending') {
                // 保存回调函数
                this.callbacks.push({
                    onResolved: function () {
                        callback(onResolved)
                    },
                    onRejected: function () {
                        callback(onRejected)
                    }
                })
            }
        })
    }

    // catch 方法封装
    catch(onRejected) {
        this.then(undefined, onRejected)
    }

    // resolve 方法封装
    static resolve(value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                this.then(v => {
                    resolve(v)
                }, r => {
                    reject(r)
                })
            } else {
                resolve(value)
            }
        })
    }

    // reject 方法封装
    static reject(value) {
        return new Promise((resolve, reject) => {
            reject(value)
        })
    }

    // all 方法封装
    static all(promises) {
        return new Promise((resolve, reject) => {
            // 声明变量
            let count = 0
            // 声明一个空数组
            let arr = []

            for (let i = 0; i < promises.length; i++) {
                // 判断状态是否为成功
                promises[i].then(v => {
                    count++
                    // 将成功的值存放到数组中
                    arr[i] = v
                    // 如果count 的值为数组的长度，说明全部状态都为成功
                    if (count === promises.length) {
                        // 修改状态
                        resolve(arr)
                    }
                }, r => {
                    reject(r)
                })
            }
        })
    }

    // race 方法封装
    static race(promises) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    // 修改返回对象为【成功】
                    resolve(v)
                }, r => {
                    reject(r)
                })

            }
        })
    }
}