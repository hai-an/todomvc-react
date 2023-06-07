import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/base.css'
import './styles/index.css'

// 导入组件
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <TodoHeader></TodoHeader>
        <TodoMain></TodoMain>
        <TodoFooter></TodoFooter>
      </section>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
