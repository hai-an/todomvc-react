import ReactDom from 'react-dom'
const list = [
  { id: 1, name: '87期', address: '北京' },
  { id: 2, name: '25期', address: '上海' },
  { id: 3, name: '29期', address: '南京' },
]
const element = (
  <div>
    <ul>
      {list.map(item => {
        return (
          <li key={item.id}>
            <h3>班级: {item.name}</h3>
            <p>工资: {item.address}</p>
          </li>
        )
      })}
    </ul>
  </div>
)

ReactDom.render(element, document.getElementById('root'))
