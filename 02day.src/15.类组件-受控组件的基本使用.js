import { Component } from 'react'

import ReactDom from 'react-dom'

// 给类组件提供状态
class App extends Component {
  state = {
    msg: 'hello',
  }
  render() {
    return (
      <div>
        <h1>受控组件</h1>
        {/* {input框值通过value属性进行控制, 并添加一个 onChange事件,监听value的变化,再赋值} */}
        <input type="text" value={this.state.msg} onChange={this.handlChange} />
      </div>
    )
  }
  handlChange = e => {
    console.log(e.target.value)
    this.setState({ msg: e.target.value })
  }
}

ReactDom.render(<App />, document.getElementById('root'))
