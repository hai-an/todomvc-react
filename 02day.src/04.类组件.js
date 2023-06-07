import { Component } from 'react'

import ReactDom from 'react-dom'

// 类组件
/**
 * 1.类组件必须继承 React.Component
 * 2.必须提供render方法
 * 3.render方法必须有返回值,需要返回一段结构
 */
class Hello extends Component {
  render() {
    return <div>我是Hello组件</div>
  }
}

const element = (
  <div>
    <h1>类组件</h1>
    <Hello></Hello>
    <Hello></Hello>
  </div>
)
ReactDom.render(element, document.getElementById('root'))
