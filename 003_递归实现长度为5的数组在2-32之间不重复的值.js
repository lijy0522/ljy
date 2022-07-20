// 递归实现长度为5的数组在2-32之间不重复的值

// 生成一个长度为5的数组
let arr = Array(5)
// 生成一个2-32之间随机数
let num = randomNumber()

let i = 0

randomArr(arr, num)

// 递归方法
function randomArr(arr, num){
    // 判断数组中是否有num这个随机数，没有则添加到arr数组中，反之重新生成随机数
    if(arr.indexOf(num) < 0){
        arr[i] = num
        i++
    }else{
        num = randomNumber()
    }
    // 判断数组是否被随机数填满，满则返回
    if(i >= arr.length){
        console.log(arr)
        return
    }else{
        randomArr(arr, num)
    }
}

// 生成随机数的方法
function randomNumber() {
    return Math.floor(Math.random()*31 + 2)
}