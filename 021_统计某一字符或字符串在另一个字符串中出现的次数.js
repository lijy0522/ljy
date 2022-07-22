function checkStr(str, target) {
    return str.split(target).length - 1
}

console.log(checkStr('abcdacbc', 'bc'))