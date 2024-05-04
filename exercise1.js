let p = 5
let l = 3

// 1. Write a code to find area of rectangle.
let luas = p * l
console.log("Luas persegi panjang = " + luas)

// 2. Write a code to find perimeter of rectangle.
let keliling = 2 * (p + l)
console.log("Keliling persegi panjang = " + keliling)

// 3. Write a code to find diameter, circumference and area of a circle.
let radius = 5

// diameter
let diameter = 2 * radius
console.log("Diameter: " + diameter)

// circumference
let circumference = Math.PI * diameter
console.log("Circumference: " + circumference)

// area
let area = Math.PI * (radius ** 2)
console.log("Area = " + area)

// 4. Write a code to find angles of triangle if two angles are given.
let a = 80
let b = 65
console.log("a = " + a + ", b = " + b + ", c = " + (180 - (a + b)))

// 5. Write a code to get difference between dates in days.
let date1 = new Date("2022-01-20")
let date2 = new Date("2022-01-22")

let differenceInDays = (date2 - date1) / (1000 * 60 * 60 * 24)
console.log(differenceInDays, "days")

// 6. Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days). 
let days = 400

let year = Math.floor(days / 365)
let yearLeft = days % 365
let month = Math.floor(yearLeft / 30)
let daysLeft = (days % 365) % 30

console.log(year, "years", month, "months", daysLeft, "days")