import React, { Component } from 'react'

import ReactDom from 'react-dom'

// ref使用步骤
// 1.React.createRef() 创建一个ref
// 2.通过ref={this.textRef}关联给某个Dom对象或组件
class App extends Component {
  txtRef = React.createRef()

  render() {
    return (
      <div>
        <h1>常见受控组件</h1>
        <h3>文本框</h3>
        <div>
          姓名:
          <input type="text" ref={this.txtRef} />
          <button onClick={this.clickFn}>获取值</button>
        </div>
      </div>
    )
  }
  clickFn = () => {
    console.log(this.txtRef.current.value)
  }
}

ReactDom.render(<App />, document.getElementById('root'))
