// lastIndexOf 和 splice 方法
let str = 'asdfsdafsada'

function del(str, target) {
    str = [...str]
    // 定义value 为要删除字符的位置
    const value = str.lastIndexOf(target)
    // 删除指定位置的字符
    str.splice(value, 1)
    // 将数组作为字符串返回
    return str.join('')
}

console.log(del(str, 'd'))
