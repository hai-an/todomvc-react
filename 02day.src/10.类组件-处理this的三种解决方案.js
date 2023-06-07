import { Component } from 'react'

import ReactDom from 'react-dom'

// 给类组件修改状态
class App extends Component {
  state = {
    msg: 'hello',
    count: 0,
  }
  // 解决react类组件中注册事件的this问题
  // 1.把函数调用包裹在 箭头函数中
  // 原本写法: onClick={this.clickFn}
  // 新写法:    onClick={()=>this.clickFn}

  // 2.使用bind修改this的指向
  // 新写法:  onClick={this.clickFn.bind(this)}

  // 3.class 的类实例语法: 因为箭头函数没有this,又因为mouseFn在App类中,所以this指向App类
  // 原本写法: mouseFn(){...}
  // 新写法: mouseFn=()=>{...}
  render() {
    return (
      <div>
        <h1>我是根组件</h1>
        <div>{this.state.msg}</div>
        <div>{this.state.count}</div>
        <button onClick={() => this.clickFn} onMouseEnter={this.mouseFn}>
          +1
        </button>
        <a href="http://www.baidu.com" onClick={this.clickFn.bind(this)}>
          百度一下
        </a>
      </div>
    )
  }
  clickFn(e) {
    console.log('12321')
    console.log('12321', this)
    e.preventDefault()
    e.stopPropagation()
    // this.state.count = this.state.count + 1
  }
  mouseFn = () => {
    console.log('鼠标进入事件')
    console.log('mouse', this)
  }
}
const c1 = new App()
console.log(c1)
c1.mouseFn()

ReactDom.render(<App />, document.getElementById('root'))
