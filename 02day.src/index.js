import React from 'react'
import ReactDOM from 'react-dom'
/*
  1. 展示评论列表功能
    1.1 通过state提供评论列表的数据
    1.2 通过map可以动态的渲染
  2. 清空评论的功能
  3. 发表新的评论功能
  4. 删除评论功能
  5. 没有更多评论的处理
*/
import './index.css'

class App extends React.Component {
  state = {
    list: [
      { id: 1, name: '王氏', content: '定一个小目标,转一个亿' },
      { id: 2, name: '马氏', content: '我对钱不感兴趣' },
    ],
    name: '',
    content: '',
  }
  render() {
    return (
      <div className="app">
        <div>
          <input
            className="user"
            type="text"
            placeholder="请输入评论人"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <br />
          <button onClick={this.add}>发表评论</button>
          <button onClick={this.clear}>清空评论</button>
        </div>
        {this.renderList()}
      </div>
    )
  }
  renderList() {
    if (this.state.list.length === 0) {
      return <div className="no-comment">暂无评论</div>
    }
    return (
      <ul>
        {this.state.list.map(item => (
          <li key={item.id}>
            <h3>评论人: {item.name}</h3>
            <p>评论内容: {item.content}</p>
            <button onClick={() => this.del(item.id)}>删除</button>
          </li>
        ))}
      </ul>
    )
  }
  add = e => {
    const { name, content, list } = this.state
    if (!name || !content) {
      return alert('信息不完整')
    }
    // 添加评论
    this.setState({
      list: [{ id: Date.now(), name, content }, ...list],
      name: '',
      content: '',
    })
  }
  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  del = id => {
    console.log(id)
    this.setState({ list: this.state.list.filter(item => item.id !== id) })
  }
  clear = () => {
    this.setState({ list: [] })
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
