import ReactDom from 'react-dom'
import React from 'react'

// 构造函数 组件
// function Teacher(name, age) {
//   this.name = name
//   this.age = age
// }

// Teacher.prototype.sayHi = function () {
//
// }

// 类组件
class Teacher {
  // 构造函数
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHi() {
    console.log('大家好一块儿吃饭玩乐')
  }
}

const stu = new Teacher('安哥', 23)
console.log(stu)

const element = (
  <div>
    <h1>类组件</h1>
    {/* {使用组件} */}
    <Teacher></Teacher>
  </div>
)

ReactDom.render(element, document.getElementById('root'))
