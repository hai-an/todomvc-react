import { Component } from 'react'

import ReactDom from 'react-dom'

// 给类组件提供状态
class App extends Component {
  state = {
    username: '你话',
    desc: '自我介绍',
    city: 3,
    agree: true,
  }
  render() {
    return (
      <div>
        <h1>常见受控组件</h1>
        <h3>文本框</h3>
        <div>
          姓名:
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
        <h3>文本域</h3>
        <div>
          <label htmlFor="desc">描述：</label>
          <textarea
            name="desc"
            id="desc"
            style={{
              verticalAlign: 'top',
            }}
            cols="30"
            rows="10"
            value={this.state.desc}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <h3>下拉框</h3>
        <div>
          选择城市
          <select
            name="city"
            onChange={this.handleChange}
            value={this.state.city}
          >
            <option value="1">北京大学</option>
            <option value="2">清华大学</option>
            <option value="3">南京大学</option>
          </select>
        </div>

        <h3>复习框</h3>
        <div>
          <input
            name="agree"
            type="checkbox"
            checked={this.state.agree}
            onChange={this.handleChange}
          />
          是否同意我们的协议
        </div>
      </div>
    )
  }
  handleChange = e => {
    console.log(e)
    const { name, type, value, checked } = e.target
    console.log('name', name)

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    })
  }
}

ReactDom.render(<App />, document.getElementById('root'))
