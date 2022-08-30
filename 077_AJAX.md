<!--
 * @Author: lijy
-->
### AJAX = 异步 JavaScript 和 XML
- AJAX 是一种用于创建快速动态网页的技术。通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新

### 使用
  
```
    // 创建对象
    const xhr = new XMLHttpRequest()
    // 初始化
    xhr.open('GET', 'http://127.0.0.1:8080/server')
    // 发送
    shr.send()
    // 事件绑定，处理服务端返回的结果
    xhr.onreadystatechange = function(){
        // 判断（服务器返回了所有结果）
        if(xhr.readyState === 4){
            // 判断响应码
            if(xhr.status >= 200 && xhr.status < 300){
                // xhr.status   状态码
                // xhr.statusText   状态字符串
                // xhr.getAllResponseHeaders    所有响应头
                // xhr.response     响应体
                // 响应
            }
        }else{
            
        }
    }
```