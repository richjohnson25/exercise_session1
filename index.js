console.log("hello world ")
// this is my first comment
/*
    multi line
    comment
*/

let message

message = "hello"

console.log(message)

{
    let a = 10
    a = 89
    {
        let a = 14
        console.log(a)
    }
}
{
    let a = 11
    a = 90
    console.log(" ---> ", a)
}

var ab = 45
var ab = 12

{
    {
        console.log(" === > ", ab)
    }
}

console.log(ab)

const PI = 3.14
// PI = 9.0
// const PI = 56.80

console.log(PI)

let name = "felix lie pratama"
let isMarried = true
console.log(name, PI, ab, isMarried)
console.table([name, PI, ab, isMarried])

let person = {
    name:"Aries Dimas",
    age:33+" Tahun",
    hobby:"rocket league"
}

console.table(person)

let hobbies = ["rocket league","counter strike 1.6","genshin impact"]
const devices = ["mobile android","PS5","PC"]

console.table(hobbies)

console.log(">>>",name[2])

name[0] = "j"

console.log(name)

hobbies[2] = "valorant"

console.log(hobbies[1])
console.log(hobbies)

devices[0] = "Nintendo"

console.log(devices)

/*let myName = name
name = "rian"
console.log(myName, name)*/

let newPerson = person // object

person.hobby = "GTA 5"

console.log(newPerson)

let myDevice = devices

devices[0] = "XBox"

console.log(myDevice)

console.log(name.split(""))

console.log(name.indexOf("c"))
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(2))

let postalCode = 1157
let address = `Jl. padegangan
desa karangtengah
tangerang selatan - ${name}
postal code ${postalCode}`

console.log(address)

let age = "34"

console.log(typeof name)
console.log(typeof true)
console.log(typeof [1,2,3])
console.log(typeof {})
console.log(typeof null)

console.log(typeof Number(age))
console.log(typeof parseInt(age))

console.log(Number(name))
console.log(isNaN(NaN))

console.log({
    name:"Dimas"
})

console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(123))
console.log(Boolean(23.45))
console.log(Boolean(-234))

console.log(Boolean("a"))
console.log(Boolean("b"))
console.log(Boolean("abc"))
console.log(Boolean("name"))
console.log(Boolean(" "))
console.log(Boolean(""))

console.log(Boolean([]))

console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))

console.log(new Date())
console.log(new Date(0))
console.log(new Date("2024-05-01"))

console.log(new Date().getFullYear())
console.log(new Date().getMonth())

let x = 10
let y = 6
console.log(x)
console.log(y - x)

x += 5
x += 5
x += 5
x += 5

/*x -= 5
x *= 3
x /= 5*/

console.log(x)

console.log("Postfix --> ", x--)
console.log(x)
x++

console.log(--x)

console.log(" ----> ", (5 > 7) < (90 >= 90) <= 45)
console.log(5 >= 7)
console.log(5 >= 5)
console.log(5 < 7)
console.log(5 <= 7)
console.log(5 <= 5)

console.log(5 == 7)
console.log(5 == "5")
console.log(5 === "5")
console.log(5 === 5)

console.log(5 != 4)
console.log(!false)

console.log("a" > "B")
console.log(true > false)
console.log(true == false)

console.log(Math.abs(-67))
console.log(Math.abs(67))

console.log(4 % 2)
console.log(7 % 3)