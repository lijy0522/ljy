<!--
 * @Author: lijy
-->
- undefined 是全局对象的一个属性，当一个变量没有被赋值或者一个函数没有返回值或者某个对象不存在某个属性却去访问或者函数定义了形参但没有传递实参，这些时候都是undefined。undefined 通过 typeof 判断类型是 'undefined'。null 代表对象的值未设置，相当于一个对象没有指针地址就是 null。null 通过 typeof 判断类型是 'object'，但其实它属于自己的类型 Null，之所以会判断为 object 类型是因为 JavaScript 数据类型在底层都是以二进制形式表示的，二进制的前三位为0会被typeof 判断为对象类型，而 null 的二进制恰好都是0，所以被误判了。
- 在实际使用过程中，不需要对一个变量显式的赋值 undefined，当需要释放一个对象时，直接赋值为 null 即可。让一个变量为 null，直接赋值即可。