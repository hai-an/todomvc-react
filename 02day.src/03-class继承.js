// import ReactDom from 'react-dom'

class Person {
  constructor(name, gender) {
    this.name = name
    this.gender = gender
  }

  eat() {
    console.log('都会吃')
  }
}

// 中国人
class Chinese extends Person {
  constructor(name, gender) {
    super(name, gender)
    this.skin = 'white'
  }
  pingpong() {
    console.log('打乒乓球')
  }
}

// 非洲人
class African extends Person {
  constructor(name, gender) {
    super(name, gender)
    this.skin = 'block'
  }
  run() {
    console.log('我会跑')
  }
}

const c1 = new Chinese('姚明', 40)
console.log(c1)
c1.eat()
c1.pingpong()

const c2 = new African('老黑', 23)
console.log(c2)
c2.run()

// 0----------------------

class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  eat() {
    console.log('吃')
  }
}
class Dog extends Animal {
  constructor(name, type) {
    super(name, type)
    this.legs = 4
  }
  bark() {
    console.log('汪汪')
  }
}
const d = new Dog('小鸡', '金毛')
console.log(d)

// ReactDom.render()
