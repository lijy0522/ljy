let arr = [5,41,32,2,1]
for(let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length-1-i; j++) {
        if(arr[j] > arr[j+1]){
            let item = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = item
        }
    }
}
console.log(arr)