import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Dialog from './Dialog'
class App extends Component {
  render() {
    return (
      <div>
        <h1>children属性</h1>
        <Header>首页</Header>
        <Header>登录</Header>

        <hr />
        <Dialog title={value => <h4>温馨提示-{value}</h4>}>
          <div>
            我是内容 <input type="text" autoFocus />
          </div>
        </Dialog>
      </div>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
