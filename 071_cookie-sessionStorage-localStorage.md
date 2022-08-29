<!--
 * @Author: lijy
-->
- 思路  
    数据存储位置、生命周期、存储大小、写入方式、数据共享、发送请求是否携带、应用场景。

- Cookie、SessionStorage、LocalStorage都是浏览器的本地存储。它们都是存储在浏览器本地的。它们的区别：Cookie 是由服务器写入的，而SessionStorage、LocalStorage都是由前端写入的，Cookie 的生命周期是由服务器端写入的时候就设置好的，LocalStorage 是写入就一直存在，除非手动删除，SessionStorage 是页面关闭时会自动清除。Cookie 的存储空间比较小大概4KB，SessionStorage、LocalStorage 的存储空间比较大，大概是5M。Cookie、 SessionStorage、LocalStorage 数据共享都遵循同源原则，SessionStorage 还限制必须是同一个页面。在前端给后端发请求的时候会自动携带Cookie 中的数据，但是 SessionStorage、LocalStorage不会。
- Cookie 一般用于存储登陆验证信息 SessionID 或者 token，LocalStorage 常用于存储不易变动的数据，以减轻服务器的压力，SessionStorage 可以用来检测用户是否刷新进入页面，如音乐播放器恢复播放进度条的功能。