/*
 * @Author: lijy
 */

// console.log(newArr)

// 对象属性、new Set()、indexOf()、hasOwnProperty、reduce+includes、filter
// 第一种：利用对象属性 key 排除重复项。
let arr = [2,3,4,2,31]
let newArr = []
newArr[0] = arr[0]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
        if(newArr[j] == arr[i]){
            break
        }
        if (j == newArr.length-1) {
            newArr.push(arr[i])
        }
    }    
}

// 第二种：new Set() 方法会自动删除重复的元素，返回一个类数组。

// -----------------------------------待补充---------------------------------------

// 第三种：filter+indexof 去重：

// 第四种：

// 第五种