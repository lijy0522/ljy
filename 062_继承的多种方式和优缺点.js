/*
 * @Author: lijy
 * 
 */
// 1. 原型链继承
// function Parent() {
//     this.name = 'name'
// }

// Parent.prototype.getName = function(){
//     return this.name
// }

// function Child() {  }

// Child.prototype = new Parent()

// var child = new Child()
// console.log(child.getName()) // name
// 缺点：多个实例对引用类型的操作会被篡改

// --------------------------------------------------------------

// 2. 借用构造函数（经典继承）
function Parent() {
    this.names = ['name1', 'name2']
}
function Child() {
    Parent.call(this)
}
let child1 = new Child()
child1.names.push('name3')
console.log(child1.names)   // [ 'name1', 'name2', 'name3' ]

let child2 = new Child()
console.log(child2.names)   // [ 'name1', 'name2' ]
// 优点：1. 避免了引用类型的属性被所有实例共享；2. 可以在 Fun2 中向 Fun传参
// 缺点：方法都在构造函数中定义，每次创建实例都会创建一边方法

// -------------------------------------------------------------------

// 3. 组合继承
// function Parent(name) {
//     this.name = name
//     this.colors = ['red', 'green', 'blue']
// }
// Parent.prototype.getName = function () {
//     return this.name
// }
// function Child(name, age) {
//     Parent.call(this, name)
//     this.age = age
// }
// Child.prototype = new Parent()
// Child.prototype.constructor = Child

// let child1 = new Child('lijy', 23)
// child1.colors.push('black')
// console.log(child1.name)    // lijy
// console.log(child1.colors)  // [ 'red', 'green', 'blue', 'black' ]
// console.log(child1.age)     // 23
// 融合了原型链继承和构造函数的优点，是一种常用的继承模式

// ----------------------------------------------------------------------------

// 4. 原型式继承
// function createObj(fn) {
//     function Fun() {
//         Fun.prototype = fn
//         return new Fun()
//     }
// }

// ---------------------------------------------------------------------------

// 5. 寄生式继承
// 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象
// function createObj(fn) {
//     let clone = Object.create(fn)
//     clone.sayName = function () {
//         console.log('hi')
//     }
//     return clone
// }

// ----------------------------------------------------------------------------

// 6. 寄生组合式继承
// function Parent(name) {
//     this.name = name
//     this.colors = ['red', 'bule']
// }
// Parent.prototype.getName = function () {
//     return this.name
// }
// function Child(name, age) {
//     Parent.call(this, name)
//     this.age = age
// }

// let Fun = function () {  }
// Fun.prototype = Parent.prototype
// Child.prototype = new Fun

// let child = new Child('lijy', 23)
// console.log(child)  // Parent { name: 'lijy', colors: [ 'red', 'bule' ], age: 23 }

// --------------------------------------------------------------------------------

// 7. extends 继承
// class Animal {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     run(){
//         return '动物跑了'
//     }
// }
// class Cat extends Animal {
//     eat(){
//         return '猫吃鱼'
//     }
// }
// let cat1 = new Cat('猫', '2')
// console.log(cat1.name)      // 猫
// console.log(cat1.age)       // 2
// console.log(cat1.run())     // 动物跑了
// console.log(cat1.eat())     // 猫吃鱼