import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Demo from './Demo'
import Hello from './Hello'
class App extends Component {
  state = { money: 100 }
  buy = () => {
    this.setState({ money: this.state.money - 10 })
  }
  render() {
    return (
      <di>
        <h1>我是组件</h1>
        <div>父组件的金钱: {this.state.money}</div>
        <button onClick={this.buy}>买烟</button>
        <Demo
          name="zs"
          money={this.state.money}
          flag={true}
          fn={() => {
            console.log('fn函数')
          }}
          list={[1, 2, 4]}
          user={{ name: 'zs', age: 18 }}
          content={<div>我是内容</div>}
        ></Demo>
        <hr />
        <Hello age={200} name="王公公"></Hello>
      </di>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
