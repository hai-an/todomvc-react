import { Component } from 'react'
// 类组件
export default class Hello extends Component {
  render() {
    // console.log(this.props)
    // props是只读的,不允许修改, => 单项数据流,父传子,
    const { car, money, check } = this.props
    return (
      <div>
        <h3>类组件</h3>
        <div>车型: {car}</div>
        <div>价格 :{money}</div>
        <div>是否购买: {check ? '是' : '否'}</div>
      </div>
    )
  }
}
