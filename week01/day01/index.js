console.log("Day 01")

// hoisting = ditaro dipaling atas
// akan menaikan ke scope paling atas
// berdasarkan scopenya
// name = undefined

// jika ada variable baru diassing
console.log(name) // undefined karena dihoisting
var name = "yopi"


// suatu keadaan dimana semua variable. 
// jalan dalam keadaan baris per baris

// var
// cara menulis variable yang kena hoisting

// let 
// hoisting tapi lebih jelas.
console.log(name1) // error. cannot access before initialization
let name1 = "yopi"


const fullName = "andika yopi prihartomo"

// lebih cepet yang ini
const newValue = "Name saya adalah " + fullName

// dibanding yang ini.
// sesuaikan kebutuhan
const newValue2 = `Nama saya adalah ${fullName} wa saya ${phoneNumber}`

const d = "45"