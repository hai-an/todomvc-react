import Hello from './components/Hello'
import Demo from './components/Demo.jsx'
import ReactDom from 'react-dom'

const element = (
  <div>
    <h1>类组件</h1>
    <Hello></Hello>
    <Demo></Demo>
  </div>
)
ReactDom.render(element, document.getElementById('root'))
