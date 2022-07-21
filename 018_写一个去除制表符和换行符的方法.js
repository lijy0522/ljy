/**
 * \n   换行符
 * \r   回车符
 * \t   制表符
 * \b   退格符
 * \f   换页符
 * 
*/
let str1 = '12\t34\nh8\t'

function delStr(str) {
    return str.replace(/[\t\n]/g, '')
}

console.log(str1)
console.log('-------------------------')
console.log(delStr(str1))