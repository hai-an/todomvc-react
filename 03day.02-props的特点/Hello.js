import { Component } from 'react'
// 类组件
export default class Hello extends Component {
  constructor(props) {
    // constructor中使用super(props)之后,就可以保证在 constructor中访问父组件传递过来的数据
    super(props)

    this.state = { isPerson: true }
    // 使用bind是为了在回调中使用 this,
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    // console.log(this.props)
    // props是只读的,不允许修改, => 单项数据流,父传子,
    return (
      <div>
        <h3>类组件</h3>
        <div>年龄: {this.props.age}</div>
        <div>年龄: {this.age}</div>
        <div>是否成人: {this.isPerson ? '是' : '否'}</div>
        <button onClick={this.handleClick}>查看this</button>
      </div>
    )
  }
  handleClick() {
    console.log('this', this)
  }
}
