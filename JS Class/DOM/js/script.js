// Object

let user = {
    firstName : "Umar",
    lastName : "Hayat",
    hobbies : ['','',''],
    cityName : "FSD",
    cityFSD : true,
    fullName : function () {
        return this.firstName + " " + this.lastName
    }
}
console.log(user)
console.log("Access Value of property firstName: ", user.firstName)
console.log("Access Action of Method of fullName:  ", user.fullName())


// getElement
let elementById = document.getElementById("header")
console.log(elementById)


let elementByHeading = document.getElementById("heading")
console.log(elementByHeading)


// getElementByTaq

let elementByTaq = document.getElementsByTagName('h2')
console.log("element: ",elementByTaq)       // it return Object


elementByTaq.value = "Hi"

// setAttribute
document.getElementById("para").setAttribute("class", "text-center");
document.getElementById("para").className = 'text-center'

// create element
let a = document.createElement('a')
a.innerHTML = "Go to google"
a.href = 'https://www.google.com'
document.getElementById("link").appendChild(a)





