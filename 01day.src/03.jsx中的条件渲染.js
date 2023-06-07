import ReactDOM from 'react-dom'

const loading = true

function render() {
  // if (loading) {
  //   return <div>数据正在加载中...</div>
  // } else {
  //   return <div>数据加载完成</div>
  // }

  return loading ? <div>Loading...</div> : <div>done</div>
}

const element = <div>正在调用函数{loading && render()}</div>
ReactDOM.render(element, document.getElementById('root'))
