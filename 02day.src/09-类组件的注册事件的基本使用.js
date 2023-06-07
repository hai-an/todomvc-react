import { Component } from 'react'

import ReactDom from 'react-dom'

// 给类组件修改状态
class App extends Component {
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
        <button onClick={this.clickFn} onMouseEnter={this.mouseFn}>
          +1
        </button>
        <a href="http://www.baidu.com" onClick={this.clickFn}>
          百度一下
        </a>
      </div>
    )
  }
  clickFn(e) {
    e.preventDefault()
    e.stopPropagation()
    console.log('你好生活')
    this.state.count = this.state.count + 1
  }
  mouseFn() {
    console.log('鼠标进入事件')
  }
}

ReactDom.render(<App />, document.getElementById('root'))
