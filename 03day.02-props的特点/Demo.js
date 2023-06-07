// 函数组件
export default function Demo(props) {
  console.log(props)

  const buy = () => {
    console.log('买')
    // props.money = 10
    props.user.gender = '男'
    props.user.name = 'ls'
    console.log(props.user.gender)
  }
  return (
    <div>
      <h3>我是Demo组件</h3>
      <div>金钱: {props.money}</div>
      <div>
        {props.user.name}-- {props.user.age} ---
      </div>
      <button onClick={buy}>买皮肤</button>
    </div>
  )
}
