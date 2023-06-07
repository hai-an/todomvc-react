import ReactDom from 'react-dom'

const username = '五天'
const address = '菜市场'
const friends = ['张三', '李四']
const age = 19
function hi() {
  return <h3>很好笑</h3>
}
const element = (
  <div>
    <div className="abs">
      大哥哥'{username}' 的年龄: {age}, 他现在去 {address} 的{friends[0]}{' '}
      的摊位上买鱼了
    </div>
    <div>性别: {age > 18 ? '男' : '女'}</div>
    <div>是否成年: {age > 18 ? '是' : '否'}</div>
    <div>打招呼: {hi()}</div>

    <hr />
    <p>哈哈哈</p>
  </div>
)
ReactDom.render(element, document.getElementById('root'))
