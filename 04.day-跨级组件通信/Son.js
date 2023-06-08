import React, { Component } from 'react'
import { Consumer } from './index'
import Sun from './sun'
export default class Son extends Component {
  render() {
    return (
      <Consumer>
        {({ color }) => (
          <div>
            <h4 style={{ color }}>我是子组件</h4>
            <Sun></Sun>
          </div>
        )}
      </Consumer>
    )
  }
}
