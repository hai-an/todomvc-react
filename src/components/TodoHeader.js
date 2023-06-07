import React, { Component } from 'react'

export default class TodoHeader extends Component {
  state = { name: '' }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
          onKeyUp={this.addTodo}
        />
      </header>
    )
  }
  /*******
   * @description: 添加todo事件,把input中的值传给值给父组件
   * @return {*}
   */
  addTodo = e => {
    if (e.keyCode !== 13) return
    if (!this.state.name.trim()) {
      return alert('名称不能为空')
    }
    // 子传父-添加todo
    this.props.addTodo(this.state.name)
    // 清空输入框内容
    this.setState({ name: '' })
  }
}
