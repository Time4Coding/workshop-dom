'use strict';
// var x = 5;
// alert("hello world!")
// var y = prompt("give your age?")
// alert("your age is : " + y)


var tab = [1, 2, 3, 4, 5, 6]
var a = 5;
console.log(typeof a)
var str = "go my code!"

console.log(tab.length)

tab[tab.length - 1] = 7
tab.push(8)
tab.push(8)
tab.pop()
tab.pop()

console.log(tab.indexOf(1))

var str2 = str.split(' ')
console.log(str2)

console.log(str2.join("*"))

var user = {
    name: "melek",
    email: "melek@gmail.com"
}
user.age = 22
delete user.email
console.log(user)

function add() {
    var sum = 5 + 10
    return sum
}

var add2 = function () {
    console.log("hello add2")
}
add2()
console.log(typeof add2)
var res = 0
for (var i = 0; i < tab.length; i++) {
    res += tab[i];

}

var color = 1;

switch (color) {
    case 1:
        console.log("color is black")
        break;
    case 2:
        console.log("color is red")
        break;
    default:
        console.log("no color")
        break;
}

for (var index in tab) {
    console.log(tab[index] + 5)
}

for (var element of tab) {
    console.log(element + 5)
}