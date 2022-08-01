// let test = 'abc_ab_bc____c'

// function changeHump(str) {
//     // 首先将字符串按下划线拆分成数组
//     // 然后遍历数组将每一组字符串首字母转换为大写
//     return str
//             .split('_')
//             .filter(value => !!value)
//             .map((value, index) => (index === 0 ? value : value[0].toUpperCase() + value.slice(1)))
//             .join('')
// }

// console.log('将下划线命名改为大驼峰命名', changeHump(test))



function _toString(foo) {
    let arr = foo.split('-')
    // console.log(arr[1].charAt(0).toUpperCase() + arr[1].substring(1, arr[1].length))
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1, arr[i].length)
    }
    return arr.join('')
}

let foo = _toString('get-element-by-id')
console.log(foo)