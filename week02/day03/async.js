
// tanpa promise
setTimeout(() => {
    console.log("antrian 1")
}, 2000)

console.log("antrian 2")

// promise

let myName

myName = "tunggu antrian" 
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ok") // boleh object apa aja bahkan clas
    }, 2000)
    
    // pending = promise masih dalam proses
    // resolve = promise berhasil / terpenuhi
    // reject = promise gagal
}).then((result) => {
    console.log(result)
}).catch((err) => console.log(err))
.finally(() => {
    myName = "selena"
})

console.log(myName)


// async await harus dalam function
const request = async () => {

    // harus try catch supaya hindari crash

    try {
        const results = await fetch("https://jsonplaceholder.typicode.com/users")
        console.log(results)
    } catch(error) {
        console.log(error)
    } finally {
        console.log("end")
    }
}

console.log(request())


// tugas
// nunggu sekitar 2 detik ubah jadi capital terus disort
// kalo bukan string diabaikan minimal nunggu 5 detik