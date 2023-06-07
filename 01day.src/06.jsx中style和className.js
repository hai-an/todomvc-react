import ReactDom from 'react-dom'

import './index.css'
const color = 'red'
const bgColor = 'pink'
const isRed = false
// style 标签控制样式,如果是长度单位,可以使用数据类型,省略px
const element = (
  <div>
    <h1 style={{ backgroundColor: bgColor, width: 400, height: 400 }}>
      通过style控制样式
    </h1>
    <p style={{ color }}>是金子总会花光</p>
    {/*  class 控制样式 */}
    <p className="red">我是卖报的小行家--class 控制</p>
    <p className={isRed ? 'red' : 'green'}>我是卖报的小行家2--class 动态控制</p>
  </div>
)

ReactDom.render(element, document.getElementById('root'))
