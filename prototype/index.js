'use strict'

const delay = (wait = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Repeat to-do...')
    }, wait)
  })
  return promise
}

// delay(2500)
//   .then(() => {
//     console.log('After 2 second.')
//   })
//   .catch(err => console.error('Error:', err))
//   .finally(() => console.log('Finaly'))

const getData = () => new Promise(resolve => resolve([
  1,1,2,3,5,8,13
]))

// getData().then(data => console.log(data))

async function asyncExample() {
  try {
    await delay(3000)
    const data = await getData()
    console.log('Data:', data)
  } catch (error) {
    console.log(error)
  } finally {
    console.log('Finally.')
  }
}

asyncExample()

// const delay = (callback, wait = 1000) => {
//   setTimeout(callback, wait)
// }

// delay(() => {
//   console.log('After 2 second.')
// }, 2000)

// const person = {
//   name: 'Tony',
//   age: 42,
//   isProgrammer: true,
//   languages: ['ru', 'en', 'de'],
//   'complex key': 'Complex value',
//   // [Date.now()]: '',
//   ['key_' + (40 + 2)]: 'key42',
//   hello() {
//     console.log('Hello!')
//   },
//   info() {
//     console.info('Information about Person [name]:', this.name)
//   }
// }

// const logger = {
//   keys() {
//     console.log('Object: ', Object.keys(this))
//   },

//   keysAndValues() {
//     Object.keys(this).forEach(function(key) {
//       console.log(`'${key}': ${this[key]}`)
//     }.bind(this))
//   }
// }

// logger.keysAndValues.call(person)

// const bound = logger.keys.bind(person)
// bound()

// logger.keys.call(person)

// Object.keys(person).forEach((key) => {
//   console.log(person[key]);
// })

// const {name, age: personAge = 10, languages} = person
// console.log(name, personAge, languages)

// for(let key in person) {
//   if(person.hasOwnProperty(key)) {
//     console.log(person[key])
//   }
// }

// person.hello()
// console.log(person.name)
// console.log(person.age)
// console.log(person['age'])
// console.log(person['complex key'])
// console.log(person['key_42'])

// person.age++
// console.log(person.age)
// console.log(person)
// // person.key_42 = undefined
// delete person.key_42
// console.log(person)

// const cars = ['Mazda', 'Ford', 'F1']

// const upperCaseCars = cars.map( car => {
//   return car.toUpperCase()
// })

// console.log(upperCaseCars)

// const cars = ['Mazda', 'Ford', 'F1']
// console.log(cars.includes('Mazda'))

// const reverseItem = (text) => console.log(text.split('').reverse().join(''))
// reverseItem('Hello')

// const cars = ['Mazda', 'Ford', 'F1']

// console.log(cars.indexOf('F1'))
// const index = cars.indexOf('F1')
// console.log(cars[index])


// let people = [
//   {name: 'Tony', budget: 3800},
//   {name: 'Elena', budget: 2700},
//   {name: 'Vladilen', budget: 1100},
//   {name: 'Branch', budget: 1300},
//   {name: 'Empty', budget: 0}
// ]

// let cmd = 100
// const lambdaPerson = people.find(person => {
//   if(person.budget === cmd) {
//     return person.budget;
//   }
//   if(typeof person.budget === undefined) {
//     return person.budget === cmd ? person.budget : 'Empty';
//   }
// })
// console.log(lambdaPerson)

// const index = people.findIndex(function(person) {
//   return person.budget === 3800
// })

// console.log(index)
// console.log(people[index])

// const indexPerson = people.find(function(person) {
//   return person.budget === 2700
// })

// console.log(indexPerson)

// for (const personFor of people) {
//   if(personFor.name === 'Vladilen') console.log(personFor)
// }

// const cars = ['Mazda', 'Ford', 'F1']

// cars.push('BMW')
// cars.unshift('Volga')

// console.log(cars)

// const firsItem = cars.shift()
// console.log(firsItem)
// console.log(cars)
// const endItem = cars.pop()
// console.log(endItem)
// console.log(cars)


// function createMember(name) {
//   return function(lastName) {
//     console.log(name + ' ' + lastName);
//   }
// }

// const logName = createMember('Tony')
// console.log(logName('Branch'));
// console.log(logName);
// console.log(createMember);

// const arrow = (a = 5, b = a ** 2) => a + b
// console.log(arrow(5, 8));
// console.log(arrow());

// let counter = 0
// const interval = setInterval(function() {
//   if(counter === 5) {
//     clearInterval(interval)
//   } else {
//     console.log(++counter)
//   }
// }, 1000)

// function nameInput(name, age) {
//   console.log(`Name user: ${name}, ${age}`);
// }

// nameInput('Tony', 35)

// const arrow = (name) => {
//   console.log(`Name user: ${name}`);
// }

// arrow('Branch')

// function sumAll(...all) {
//   console.log(all)
//   let count = 0
//   all.forEach(element => {
//     count = count + element
//     // console.log(count);
//   });
//   console.log(count);
// }

// sumAll(1,2,3,4,5)

// function sumAll2(...all) {
//   console.log(all);
//   let cmd = 0
//   for(let num of all) {
//     cmd += num
//   }
//   console.log(cmd);
// }

// sumAll2(2,4,6,8)


// function hello() {
//   const data = 'World'
//   console.log(`Hello, ${data}!`)
// }

// const hello2 = function hello() {
//   const data = 'World2'
//   console.log(`Hello2, ${data}!`)
// }

// hello()
// hello2()

// console.log(typeof hello);
// console.log(typeof hello2);

// console.dir(hello)



// let counter = 0

// const interval = setInterval(function() {
//   if (counter === 5) {
//     clearInterval(interval)
//   } else {
//     console.log(++counter)
//   }
// }, 1000)

// const name = 'Tony'
// console.log(name.startsWith('T'))
// console.log(name);

// function logPerson(s, name, age) {
//   console.log(s, name, age)
//   return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }

// const personNane = 'Tony'
// const personAge = 26
// const output = logPerson`Имя: ${personNane}, Возраст: ${personAge}!`

// console.log(output)

// const person = {
//   firstName: 'Tony',
//   lastName: 'Branch',
//   year: 1985,
//   prnt: function() {
//     console.log('Print text - person')
//   }
// }

// person.prnt()
// console.log(person.firstName, person.lastName, person.year.toString())

// console.log(person['year'])
// const key = 'lastName'
// console.log(person[key])

// person.goGo = true
// console.log(person)
// console.log(person.goGo)

