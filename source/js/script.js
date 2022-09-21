'use strict'

function hello() {
   console.log('hello', this)
}
const person = {
   name: 'Vladimir',
   age: 18,
   job: "front-end developer",
   phone: '0979033080',
   sayHello: hello,
   sayHelloWindow: hello.bind(document),
   logInfo: function (job, phone) {
      console.group(`${this.name} info:`)
      console.log(`My name is ${this.name}`)
      console.log(`My age is ${this.age}`)
      console.log(`My job is ${job}`)
      console.log(`My phone is ${phone}`)
      console.groupEnd()
   },
}


const lena = {
   name: "Elena",
   age: 23,
   job: "programmer",
   phone: '0979033080',
}
person.logInfo.bind(lena, "back-end", '1230981111')()
person.logInfo.call(lena, "back-end", '1230981111')
person.logInfo.apply(lena, ["back-end", '1230981111'])
/// =======================

const array = [1, 2, 3, 4, 5]
/*
function myltBy(arr, n) {
   return arr.map(function (i) {
      return i + n
   })
}
*/

Array.prototype.myltBy = function (n) {
   return this.map(function (i) {
      return i * n
   })
}
console.log(array.myltBy(2))
