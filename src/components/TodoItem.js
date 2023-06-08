/**
 $ *Author: hai_an 1207783846@qq.com
 $ *Date: 2023-06-08 15:24:34
 $ *LastEditors: hai_an 1207783846@qq.com
 $ *LastEditTime: 2023-06-08 15:36:29
 $ *FilePath: \React\use-app\src\components\TodoItem.js
 $ *Description:
 $ *
 $ *Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react'
import classnames from 'classnames'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef() //初始化引用
    this.state = {
      // 当前双击的id和name
      currentId: '',
      currentName: '',
    }
  }
  render() {
    const { item } = this.props
    return (
      <li
        key={item.id}
        className={classnames({
          completed: item.done,
          editing: item.id === this.state.currentId,
        })}
      >
        <div className={classnames('view')}>
          <input
            className="toggle"
            type="checkbox"
            onChange={() => this.updateDone(item.id)}
            checked={item.done}
          />
          <label onDoubleClick={() => this.showEdit(item)}>{item.name}</label>
          <button
            className="destroy"
            onClick={() => this.delTodo(item.id)}
          ></button>
        </div>
        <input
          className="edit"
          value={this.state.currentName}
          onBlur={this.editTodo}
          onChange={e => this.setState({ currentName: e.target.value.trim() })}
          onKeyUp={e => this.keyup(e)}
          // autoFocus
          ref={this.inputRef}
        />
      </li>
    )
  }
  /*******
   * @description: 回车事件
   * @param {*} e
   * @return {*}
   */
  keyup = e => {
    //判断
    if (e.keyCode === 27) {
      // 按了 esc ,取消修改
      this.setState({
        currentName: '',
        currentId: '',
      })
    }
    if (e.keyCode === 13) {
      // 调用编辑todo函数-完成更新todo的任务名
      this.editTodo()
    }
  }
  // 删除任务
  delTodo = id => {
    console.log('id', id)
    // 传给父组件
    this.props.delTodoById(id)
  }
  // 修改任务状态
  updateDone = id => {
    this.props.updateDoneById(id)
  }
  // 编辑todo任务
  editTodo = () => {
    // 发送要编辑的数据给 父组件
    this.props.editTodo(this.state.currentId, this.state.currentName)
    // 关闭编辑状态
    this.setState({
      currentId: '',
      currentName: '',
    })
  }
  // 显示编辑框
  showEdit = ({ id, name }) => {
    console.log(id)
    // 赋值当前输入框的值
    this.setState({
      currentId: id,
      currentName: name,
    })
  }
  // 组件更新
  componentDidUpdate() {
    this.inputRef.current.focus()
  }
}

export default TodoItem
