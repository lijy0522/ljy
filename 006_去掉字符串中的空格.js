/**
 * str = str.replace(/\s+/g,'')     去掉字符串内的所有空格
 * str = str.replace(/^\s*|\s*$/g,'')   去除字符串两头的空格
 * str = str.trim()     去除字符串两头的空格
 * str = $.trim(str)    去除字符串两头的空格
 * str = str.replace(/^\s* /,'')     去除字符串内左侧的空格
 * str = str.replace(/(\s*$)/g,'')      去除字符串右侧的空格
*/

function trim(str) {
    return str.replace(/\s+/g, '')
}
let str_1 = '  2 3  4 2   1 '
// console.log(trim(str_1))
console.log('去两端空格1', str_1.replace(/^\s*|\s*$/g,''))
console.log('去两端空格2', str_1.trim())
// console.log('3', $.trim(str_1))
console.log('去左侧空格', str_1.replace(/^\s*/,''))
console.log('去右侧空格', str_1.replace(/(\s*$)/g,''))

