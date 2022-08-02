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
// console.log(newArr)