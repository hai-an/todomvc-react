import { Component } from 'react'

import ReactDom from 'react-dom'

// 给类组件提供状态
class App extends Component {
  state = {
    count: 0,
    list: ['咱三', '李四', '万物'],
  }
  render() {
    return (
      <div>
        <h1>我是根组件</h1>
        <div>{this.state.msg}</div>
        <div>{this.state.count}</div>
        <ul>
          {this.state.list.map(item => (
            <li>{item}</li>
          ))}
        </ul>
        <button onClick={this.clickFn}>+1</button>
        <button onClick={this.add}>增加数据</button>
      </div>
    )
  }

  clickFn = () => {
    // 使用 setState 修改数据更新 UI
    this.setState({ count: this.state.count + 1 })
    console.log(this.state.count)
  }
  add = () => {
    this.setState({ list: [...this.state.list, '赵六'] })
  }
}

ReactDom.render(<App />, document.getElementById('root'))
