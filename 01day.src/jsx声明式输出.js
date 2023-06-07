import ReactDom from 'react-dom'

const title = (
  <h1 className="git" title="nice">
    哈哈
  </h1>
)
function render() {
  return (
    <>
      <li>苹果</li>
      <li>香蕉</li>
      <li>西瓜</li>
    </>
  )
}





ReactDom.render(render(), document.getElementById('root'))
