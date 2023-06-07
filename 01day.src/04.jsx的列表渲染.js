import ReactDom from 'react-dom'

// const list = [
// {id: 1, name: 'No1'},
// {id: 2, name: 'No2'},
// {id: 3, name: 'No3'},
// ]
const list = ['刘备', '关羽', '张飞']
// const arr = list.map((item,index) => <li>{item}-老{index+1}</li>)
const element = (
  <div>
    <h1>列表渲染</h1>
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
)

ReactDom.render(element, document.getElementById('root'))
