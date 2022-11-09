//  Homework week 02 / day 03 
//  Andika Yopi Prihartomo

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const delay = 1000

const makeAllCaps = (arrayOfWords) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const upperCaseWords = arrayOfWords.map(word => {
          if (typeof word == "string") return word.toUpperCase()
          return word
      })
      resolve(upperCaseWords);
    }, delay);
  })
}

const sortWords = (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result.sort());
    }, delay);
  }) 
}

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then(result => { console.log(result) })
  .catch(error => { console.log(error) })

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then(result => { console.log(result) })
  .catch(error => { console.log(error) })

