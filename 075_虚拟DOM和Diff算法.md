<!--
 * @Author: lijy
-->
## 虚拟DOM （Virtual DOM）
- 虚拟DOM 就是一个用来描述真实 DOM 的 javaScript 对象。
- 为什么使用虚拟 DOM  
    1. MVVM 框架解决视图和状态同步问题

    2. 模板引擎可以简化视图操作，没办法跟踪状态

    3. 虚拟DOM 跟踪状态变化

    4. virtual-dom 动机描述（参考github）
        - 虚拟DOM 可以维护程序的状态，跟踪上一次的状态
        - 通过比较两次状态差异更新真实DOM  

    5. 跨平台使用
        - 浏览器平台渲染 DOM 
        - 服务器渲染SSR，Nuxt.js -- >Vue，Next.js --> react
        - 原生应用（Weex/React Native）
        - 小程序（mpvue/uni-app）等

    6. 真实DOM 的属性很多，创建DOM 节点开销很大

    7. 虚拟DOM 只是普通 javaScript 对象，描述属性并不需要很多，创建开销很小

    8. 复杂视图情况下提升渲染性能

- 虚拟DOM 库
    - Snabbdom
    - virtual-dom       

-------------------------------------------------
-------------------------------------------------

## Diff 算法
- Diff 的对象是虚拟 DOM，更新真实 DOM 是 Diff 算法的结果。

- 核心
    1. init() 设置模块，创建 patch()
    2. 使用 h() 函数创建 javaScript 对象（Vnode）描述 真实DOM
    3. patch() 比较 新旧两个 Vnode
    4. 把变化的内容更新到 真实DOM树

### init 函数  
- init 函数时设置模块，然后创建 patch() 函数 

- h 函数先生成一个 vnode 函数，然后 vnode 函数在生成一个 Vnode 对象（虚拟DOM对象）

- patch 函数（核心）
    1. patch(oldVnode, newVnode)
    2. 把新节点中变化的内容渲染到真实 DOM，最后返回新节点作为下一次处理的旧节点
    3. 对比新旧 Vnode 是否是相同的节点（节点的 key 和 sel 相同）
    4. 如果不是相同的节点，删除之前的内容，重新渲染
    5. 如果是相同的节点，再判断新的 Vnode 是否有 text，如果有并且和 oldVnode 的 text 不同，直接更新文本内容（patchVnode）
    6. 如果新的 Vnode 有 children，判断子节点是否有变化（updateChildren）

- patchVnode  
    1. 第一阶段：触发 prepatch 函数以及 update 函数（都会触发prepatch 函数，两者不完全相同才会触发 update 函数）
    2. 第二阶段：真正对比新旧 vnode 差异的地方
    3. 第三阶段：触发 postpatch 函数更新节点