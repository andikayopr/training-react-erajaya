// kalo penulisan class PascalCase 


// const hero = {
//     name : "superman",
// }

// const hero = function (name) {
//     this.name = name
// }

// class Hero {

// }

// constructor berguna untuk menangkap nilai pada class
// yang didalam constructor itu property (local)
// 

class Hero {
    type = "human"

    constructor (name, attack, defense) {
        this.name = name
        this.attack = attack
        this.defense = defense
    }
}

const Superman = new Hero("Superman", 50, 10)
const Batman = new Hero("Batman", 100, 30)

console.log(Superman, Batman)


// 0, undefined, null, NaN, string kosong = falsy
// salah satu dari falsy masuk ke if pasti masuk ke false


// bikin module = npm init
// dengan ada package.json bisa export import


// const myName = require("./app")
// console.log(myName)

// bisa import dengan mendefine type = module di package.json jadi tidak pakai require
import myName from "./app.js"
import {otherName} from "./app.js"

console.log(myName)
console.log(otherName)