/*
 * @Author: lijy
 */
// 浅拷贝
// function clone(target) {
//     let cloneTarget = {}
//     for (const key in object) {
//         cloneTarget[key] = target[key]
//     }
//     return cloneTarget
// }

// 深拷贝
/* function deepClone(target) {
    if (typeof target === 'object') {
        // 如果是引用类型，创建一个对象，遍历需要克隆的对象，
        // 将需要克隆的对象的属性执行深拷贝后依次添加到新对象上
        let cloneTarget = Array.isArray(target) ? [] : {}
        for (const key in target) {
            cloneTarget[key] = deepClone(target[key])
        }
        return cloneTarget
    } else {
        // 如果是原始类型，直接返回
        return target
    }

} */

// 深拷贝-考虑循环
function deepClone(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        // 如果是引用类型，创建一个对象，遍历需要克隆的对象，
        // 将需要克隆的对象的属性执行深拷贝后依次添加到新对象上
        let cloneTarget = Array.isArray(target) ? [] : {}
        // 检查 map 中有无克隆过的对象
        if(map.get(target)){
            return target
        }
        map.set(target, cloneTarget)
        for (const key in target) {
            cloneTarget[key] = deepClone(target[key], map)
        }
        return cloneTarget
    } else {
        // 如果是原始类型，直接返回
        return target
    }

}
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
// target.target = target;
console.log(deepClone(target))