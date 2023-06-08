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
    list: [],
    type: 'active',
    // 默认 all active completed
  }
  render() {
    const { list, type } = this.state
    return (
      <section className="todoapp">
        <TodoHeader addTodo={this.addTodo}></TodoHeader>
        <TodoMain
          list={list}
          type={type}
          delTodoById={this.delTodoById}
          updateDoneById={this.updateDoneById}
          editTodo={this.editTodo}
          checkedAll={this.checkedAll}
        ></TodoMain>
        <TodoFooter
          list={list}
          clearTodo={this.clearTodo}
          type={type}
          changeType={this.changeType}
        ></TodoFooter>
      </section>
    )
  }
  /*******
   * @description: 全选功能-控制所有done的状态
   * @param {*} done 完成状态
   * @return {*}
   */
  checkedAll = done => {
    this.setState({
      list: this.state.list.map(item => {
        return {
          ...item,
          done,
        }
      }),
    })
  }
  /*******
   * @description: 改变todo任务状态
   * @param {*} type
   * @return {*}
   */
  changeType = type => {
    this.setState({ type })
  }
  /*******
   * @description: 清空已完成
   * @return {*}
   */
  clearTodo = () => {
    this.setState({
      list: this.state.list.filter(item => !item.done),
    })
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
  /*******
   * @description: 编辑todo任务
   * @param {*} id 唯一标识
   * @param {*} name 任务名
   * @return {*}
   */
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

  /*******
   * @description: 数据保存到本地-钩子函数
   * @return {*}
   */
  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.list))
  }
  /*******
   * @description: 从本地读取数据-钩子函数
   * @return {*}
   */
  componentDidMount() {
    this.setState({ list: JSON.parse(localStorage.getItem('todos')) || [] })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
