let c1 = "orange chicken"
let c2 = "muchroom chicken"
let c3 = "kung pao chicken"
let c4 = "terriaky chicken"
let c7 = "black pepper chicken"

let cb5 = "sweetfire chicken breast"

let b1 = "brocoli beef"
let b3 = "black pepper angus steak"
let b5 = "beijing beef"

let f4 = "honey walnut shrimp"

let m1 = "chow mein"
let r1 = "fried rice"
let r2 = "white rice"

let sides = [m1, r1, r2]
let entrees = [c1, c2, c3, c4, cb5, b1, b3, b5, f4]

let firstItem = document.getElementById("side")
let secondItem = document.getElementById("entree")
let firstPicture = document.getElementById("sidePic")
let secondPicture = document.getElementById("entreePic")

let i = 0

let getRandSide = function () {
    i = Math.floor(Math.random() * 3)
    console.log(i)
    firstItem.textContent = `${sides[i]}`
}
let j = 0

let getRandEntree = function () {
    j = Math.floor(Math.random() * entrees.length)
    console.log(j)
    secondItem.textContent = `${entrees[j]}`
}
orderButton = document.getElementById("orderButton")

let order = function (event) {
    getRandSide()
    getRandEntree()
}
