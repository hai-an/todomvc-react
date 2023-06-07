import ReactDom from 'react-dom'

import './index.css'
const isRed = true
const isGreen = true
const isPink = true

function classNames(obj) {
  return Object.keys(obj)
    .filter(key => obj[key])
    .join(' ')
}

const classArr = ['box']
if (isRed) classArr.push('red')
if (isPink) classArr.push('pink')

// const element = (
//   <div>
//     <h1 className={`box ${isRed ? 'red' : ''} ${isPink ? 'pink' : ''}`}>
//       我是标题
//     </h1>
//   </div>
// )
const element = (
  <div>
    <h1
      className={classNames({ box: true, red: isRed, pink: isPink, as: true })}
    >
      我是标题
    </h1>
  </div>
)

ReactDom.render(element, document.getElementById('root'))
