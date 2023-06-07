import React from 'react'
class Child extends React.Component {
  // react中,一个组件的数据来源, state props
  render() {
    return (
      <div>
        <h3>我是子组件</h3>
        <div>金钱: {this.props.money}</div>
        <button onClick={this.buy}>买皮肤</button>
      </div>
    )
  }
  buy = () => {
    // 子组件不允许自己修改props属性
    this.props.buy(128.2)
  }
}

export default Child
