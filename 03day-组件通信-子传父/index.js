import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Child from './Child'

class App extends Component {
  state = {
    wife: '',
    sonWife: '',
  }

  render() {
    return (
      <div>
        <h1>我是App组件</h1>
        <div>
          配偶:{' '}
          <input
            type="text"
            placeholder="请输入配偶的名字"
            value={this.state.wife}
            onChange={this.handlerChange}
          />{' '}
        </div>
        <div>儿媳妇: {this.state.sonWife}</div>
        <hr />
        <Child wife={this.state.wife} changeName={this.changeName}></Child>
      </div>
    )
  }
  handlerChange = e => {
    this.setState({ wife: e.target.value })
  }
  changeName = name => {
    console.log('接收到了', name)
    // 接收子组件传值
    this.setState({ sonWife: name })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
