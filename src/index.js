import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/base.css'
import './styles/index.css'

// 导入组件
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'

class App extends Component {
  state = {
    list: [
      { id: 1, name: '吃饭', done: false },
      { id: 2, name: '睡觉', done: true },
      { id: 3, name: '打豆豆', done: false },
    ],
  }
  render() {
    const { list } = this.state
    return (
      <section className="todoapp">
        <TodoHeader addTodo={this.addTodo}></TodoHeader>
        <TodoMain
          list={list}
          delTodoById={this.delTodoById}
          updateDoneById={this.updateDoneById}
          editTodo={this.editTodo}
        ></TodoMain>
        <TodoFooter></TodoFooter>
      </section>
    )
  }
  /*******
   * @description:  添加todo事件
   * @param {*} e 接收子组件中input框中的value值
   * @return {*}
   */
  addTodo = e => {
    console.log(e)
    this.setState({
      list: [
        {
          id: Date.now(),
          name: e,
          done: false,
        },
        ...this.state.list,
      ],
    })
  }
  /*******
   * @description: 删除todo事件
   * @param {*} id
   * @return {*}
   */
  delTodoById = id => {
    this.setState({ list: this.state.list.filter(item => item.id !== id) })
  }

  /*******
   * @description:更新todo事件-完成状态
   * @param {*} id
   * @return {*}
   */
  updateDoneById = id => {
    // 需要根据id把对应的那个任务状态取反
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          }
        } else {
          return item
        }
      }),
    })
  }
  editTodo = (id, name) => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return { ...item, name }
        } else {
          return item
        }
      }),
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
