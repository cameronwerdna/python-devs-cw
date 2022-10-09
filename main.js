var list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ]

var list2 = [
    { firstName: 'Jake', lastName: 'B.', country: 'Iceland', continent: 'Europe', age: 21, language: 'Python' },
    { firstName: 'Jesse', lastName: 'A.', country: 'Cuba', continent: 'Americas', age: 45, language: 'Python' },
    { firstName: 'Joe', lastName: 'J.', country: 'USA', continent: 'Europe', age: 31, language: 'Python' }
  ]

var list3 = [
    { firstName: 'Gerald', lastName: 'J.', country: 'Wales', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Robert', lastName: 'H.', country: 'Belize', continent: 'Americas', age: 30, language: 'Java' },
    { firstName: 'Soule', lastName: 'Z.', country: 'Ghana', continent: 'Africa', age: 19, language: 'C++' }
  ]

function getFirstPython(list) {
    let pythonDevs = []
    list.forEach(el => {
         if (el.language === 'Python') {
          pythonDevs.push(el)
      }
    })
    return pythonDevs.length > 0 ? `${pythonDevs[0].firstName}, ${pythonDevs[0].country}` : 'There will be no Python developers'
  }


console.log(getFirstPython(list1)) // => Victoria, Puerto Rico
console.log(getFirstPython(list2)) // => Jake, Iceland
console.log(getFirstPython(list3)) // => There will be no Python developers