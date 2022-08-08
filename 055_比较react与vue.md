<!--
 * @Author: lijy
-->
### 相同点
- 都有组件化开发的Virtual DOM
- 都支持props进行父子组件间的数据通信
- 都支持数据驱动视图，不直接操作真实DOM，更新状态数据界面就会自动更新
- 都支持服务器端渲染
- 都有支持native的方案，React的React Native，Vue的Weex

### 不同点
- 数据绑定：vue实现了数据的双向绑定，react的数据流动是单向的
- 组件写法不一样，React推荐的做法是JSX，就是把HTML和CSS全部写进JavaScript中；Vue的推荐做法是webpack+vue+loader的单文件组件格式，即将html，css，js写在同一个文件
- state对象在react中是不可变的，需要使用setState方法更新状态；在vue中，state对象不是必须的，数据由data属性在vue对象中管理
- React严格上只针对MVC的view层，Vue则是MVVM模式