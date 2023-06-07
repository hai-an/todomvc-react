import { Component } from 'react'

import ReactDom from 'react-dom'

// 给类组件提供状态
class App extends Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <div>
        <h1>我是根组件</h1>
        <div>{this.state.count}</div>
        <button onClick={this.clickFn}>+1</button>
      </div>
    )
  }

  clickFn = () => {
    // 使用 setState 修改数据更新 UI
    this.setState({ count: this.state.count + 1 })
    console.log(this.state.count)
  }
}

ReactDom.render(<App />, document.getElementById('root'))
