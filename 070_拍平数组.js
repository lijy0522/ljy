/*
 * @Author: lijy
 */
function flat(arr) {
    // 创建一个空数组
    let arrResult = []
    // 遍历
    arr.forEach(item => {
        // 判断
        if(Array.isArray(item)){
            arrResult.push(...arguments.callee(item))
        }else{
            arrResult.push(item)
        }
    });
    return arrResult
}

let arr = [1,2,3,[1,2,3,[1,2,3]]]
console.log(flat(arr))