import ReactDom from 'react-dom'
import React from 'react'
// 1.创建一个组件
// 2.局部或全局 导入一个组件
// 3.使用组件 -> 必须使用 大驼峰命名

// function Hello() {
//   return <div>我是Hello组件</div>
// }
// 函数组件
const Hello = () => <div>我是Hello组件</div>

const element = (
  <div>
    <h1>函数组件</h1>
    {/* {使用组件} */}
    <Hello></Hello>
  </div>
)

ReactDom.render(element, document.getElementById('root'))
