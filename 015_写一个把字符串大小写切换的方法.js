function changeStr(str) {
    return str
            .split('')
            .map((item) => {
                let upItem = item.toUpperCase()
                if(item === upItem){
                    return item.toLowerCase()
                }else{
                    return upItem
                }
            })
            .join('')
}

console.log(changeStr('sdcDSf'))