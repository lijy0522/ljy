function alipArr(arr) {
    for (let i = 0; i < arr.length/2; i++) {
        let item = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = item
    }

    return arr
}

console.log(alipArr([1,2,3,4,5,6,7,8,9]))