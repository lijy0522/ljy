const _Type = (function () {
    const types = {}
    const typesStr = [
        'String',
        'Number',
        'Boolean',
        'null',
        'undefined',
        'Object',
        'Function',
        'Array',
        'Date'
    ]

    for(let type of typesStr){
        // console.log(type)
        types[`is${type}`] = function (data) {
            console.log(Object.prototype.toString.call(data))
            console.log(`[object.${type}]`)
            return Object.prototype.toString.call(data) === `[object ${type}]`
        }
    }

    return types
})()

console.log(_Type.isNumber(123))
