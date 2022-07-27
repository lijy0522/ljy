// 例如：url为https://baike.baidu.com/item/hello%20world/85501?x=xx&fr=aladdin#1

function getStringParam() {
    // 首先获取url，这里 _href 为一个完整的url
    let _href = window.location.href
    // 将获取到的url以？分开，存到一个数组 arg 中
    let args = _href.split('?')
    // 如果？之前的字符串与获取到的url相等，说明此url没有参数，返回空
    if(args[0] === _href){
        return ''
    }
    // 收集？右边的参数，以 & 为分隔符分割参数，存放在数组 newArgs 中
    let newArgs = args[1].split('&')
    let obj = {}
    // 对newArgs 中的每一组数据以“=”分割，左边为参数名，右边为参数
    for(let i = 0; i < newArgs.length; i++){
        let newArg = newArgs[i].split('=')
        obj[newArg[0]] = newArg[1]
    }

    return obj
}

console.log(getStringParam())