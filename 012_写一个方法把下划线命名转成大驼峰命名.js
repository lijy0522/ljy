let test = 'abc_ab_bc____c'

function changeHump(str) {
    // 首先将字符串按下划线拆分成数组
    // 然后遍历数组将每一组字符串首字母转换为大写
    return str
            .split('_')
            .filter(value => !!value)
            .map((value, index) => (index === 0 ? value : value[0].toUpperCase() + value.slice(1)))
            .join('')
}

console.log('将下划线命名改为大驼峰命名', changeHump(test))