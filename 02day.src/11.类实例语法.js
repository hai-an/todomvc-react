// 类实例语法
class Person {
  name = 'zs'
  age = 18
  say = () => {
    console.log('23', this)
  }
}
const p = new Person()
console.log(p)
p.say()
