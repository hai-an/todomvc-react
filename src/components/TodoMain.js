/*
 * @Author: hai_an 1207783846@qq.com
 * @Date: 2023-06-07 15:19:19
 * @LastEditors: hai_an 1207783846@qq.com
 * @LastEditTime: 2023-06-07 15:50:14
 * @FilePath: \React\use-app\src\components\TodoMain.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import classnames from 'classnames'
export default class TodoMain extends Component {
  constructor(props) {
    super(props)
    this.inputRefs = {} //初始化引用
    this.state = {
      // 当前双击的id和name
      currentId: '',
      currentName: '',
      isEditing: false,
    }
  }

  render() {
    const { list } = this.props

    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {list.map(item => (
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
                <label onDoubleClick={() => this.showEdit(item)}>
                  {item.name}
                </label>
                <button
                  className="destroy"
                  onClick={() => this.delTodo(item.id)}
                ></button>
              </div>
              <input
                id={`edit-${item.id}`}
                className="edit"
                value={this.state.currentName}
                onBlur={this.editTodo}
                onChange={e => this.setState({ currentName: e.target.value.trim() })}
                onKeyUp={e => this.keyup(e)}
                // autoFocus
                ref={input => (this.inputRefs[item.id] = input)}
              />
            </li>
          ))}
        </ul>
      </section>
    )
  }
  // 生命周期函数
  componentDidUpdate(prevProps, prevState) {
    const { currentId } = this.state
    console.log(this.state.isEditing, prevProps, prevState)
    if (currentId !== prevState.currentId && this.inputRefs[currentId]) {
      // 自动聚焦
      // const input = document.getElementById(`edit-${this.state.currentId}`)
      // input.focus()
      this.inputRefs[currentId].focus()
    }
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
}
