import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Child from './Child'
export default class App extends Component {
  constructor(props) {
    super(props)
    console.log('1', 'constructor')

    // 1. 提供数据
    // 2. 提供ref
    // 3. 绑定this指向
    this.state = {
      count: 0,
      msg: '1234',
    }
    this.inputRef = React.createRef()
  }
  render() {
    // render用于渲染组件的结构: 不能调用this.setState
    console.log('2. render')
    // render用于渲染组件的结构
    return (
      <div>
        app组件
        <button onClick={this.handleClick}>打豆豆</button>
        <div>点击次数：{this.state.count}</div>
        <Child count={this.state.count}></Child>
      </div>
    )
  }
  handleClick = () => {
    // 会影响性能
    // this.state.count++
    // this.forceUpdate()
    this.setState({
      count: this.state.count + 1,
    })
  }
  //组件挂载,(dom完成渲染后)
  // 作用: 1.发请求 2. dom操作
  componentDidMount() {
    console.log('3. componentDidMount')
  }

  componentDidUpdate() {
    console.log('4. componentDidUpdate')
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'))
