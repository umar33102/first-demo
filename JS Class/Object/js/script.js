const getValueFromInputField = id => document.getElementById(id).value 

const getIdRandom = () => Math.random().toString(36).slice(2)

let users = []

const handlePrintUsers = () => {
    event.preventDefault()
    let fullName = getValueFromInputField("fullName")
    fullName = fullName.trim()
    if (!fullName) {
        return alert("Enter Your Full Name: ")
    }
    let password = getValueFromInputField("password")
    if (!password) {
        return alert("Enter Your Password: ")
    }
    let email = getValueFromInputField("email")
    let user = {
        fullName : fullName,
        password : password,
        email : email,
        id : getIdRandom(),
        rollNumber : users.length + 1
    }
    users.push(user)
    console.log("fullName",user.fullName)
    console.log("password",user.password)
    console.log("email",user.email)
    console.log("id",user.id)
    console.log("rollNo",user.rollNumber)
}


const handlePrintUser = () => {
    let rollNoUser = getValueFromInputField("rollNo")
    if (!rollNoUser) {
        alert("Enter Roll Number: ")
        return
    }
    let user = users.find(element => rollNoUser == element.rollNumber)
    user = users.find((element) => {
        element.rollNumber === Number(rollNoUser)
    })
    console.log("user",user)
}
