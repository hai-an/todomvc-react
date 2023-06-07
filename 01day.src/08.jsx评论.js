import ReactDom from 'react-dom'
// import classnames from 'classnames'
import './index.css'

// const isRed = true
// const isPink = true

// function classNames(obj) {
//   return Object.keys(obj)
//     .filter(key => obj[key])
//     .join(' ')
// }

// const classArr = ['box']
// if (isRed) classArr.push('red')
// if (isPink) classArr.push('pink')

// const element = (
//   <div>
//     <h1
//       className={classNames({ box: true, red: isRed, pink: isPink, as: true })}
//     >
//       我是标题
//     </h1>
//   </div>
// )
const list = [
  { id: 1, name: '刘德华', content: '给我一杯忘情水' },
  { id: 2, name: '五月天', content: '不打扰，是我的温柔' },
  { id: 3, name: '毛不易', content: '像我这样优秀的人' },
]
function render() {
  if (list.length === 0) return <div>暂无数据</div>
  return (
    <div>
      <ul>
        {list.map(item => {
          return (
            <li key={item.id}>
              <h3 className="pink">评论人: {item.name}</h3>
              <p className="skyblue">评论内容: {item.content}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
ReactDom.render(render(), document.getElementById('root'))
