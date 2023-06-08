/*
 * @Author: hai_an 1207783846@qq.com
 * @Date: 2023-06-07 15:19:19
 * @LastEditors: hai_an 1207783846@qq.com
 * @LastEditTime: 2023-06-07 15:50:14
 * @FilePath: \React\use-app\src\components\TodoMain.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class TodoMain extends Component {
  render() {
    const { list, type } = this.props
    let showList = []
    if (type === 'active') {
      showList = list.filter(item => !item.done)
    } else if (type === 'completed') {
      showList = list.filter(item => item.done)
    } else {
      showList = list
    }
    return (
      <section className="main">
        <input
          checked={list.every(item => item.done)}
          onChange={e => this.selectAll(e)}
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {showList.map(item => (
            <TodoItem {...this.props} item={item} key={item.id}></TodoItem>
          ))}
        </ul>
      </section>
    )
  }
  selectAll = e => {
    // console.log('完成', e.target.checked)
    this.props.checkedAll(e.target.checked)
  }
}
