import { Component } from 'react'

import ReactDom from 'react-dom'

// 给类组件提供状态
class App extends Component {
  // constructor() {
  //   super()
  //   // 给this增加一个属性
  //   this.state = {
  //     msg: 'hello',
  //     count: 0,
  //   }
  // }

  // 支持类实例语法
  state = {
    msg: 'hello',
    count: 0,
  }
  render() {
    return (
      <div>
        <h1>我是根组件</h1>
        <div>{this.state.msg}</div>
        <div>{this.state.count}</div>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
