// prompt 
// use for input from user
// return string but if cancel then null
document.getElementById("btnName").onclick=function(){
    // hard write
    // let fullName="umar"
    // document.getElementById("output").innerHTML=fullName
    // get input from user
    let fullName=prompt("Enter the Name:")
    console.log("type of fullName: ",fullName,typeof(fullName))
    document.getElementById("output").innerHTML=fullName
    
}

    // +prompt 
    // use for input from user in number
    // return nubmber but if cancel  and ok then 0

// document.getElementById("btnNumber").onclick=function(){
//     let num1=+prompt("Enter the number 1")
//     console.log("Num1",num1,"type",typeof(num1))
//     let num2=+prompt("Enter the number 2")
//     let sum=num1+num2
//     document.getElementById("output").innerHTML=sum
// }

// comparsion operator
// === for check value and type
// == for check value           , >,<,>=,<=!=,!==




// if(){} -- else if(){} -- else{}
document.getElementById("clickMe").onclick=function(){
    let weight=+prompt("Enter your weight")
    if (weight<='70'){
        console.log("your are fit man")
    }else{
        console.log("your are fat man")
    }
    
}
document.getElementById("clickMe").onclick=function(){
    let firstName=+prompt("Enter your name:")
    if (firstName==='2'){
        console.log("if")
    }else{
        console.log("else")
    }
    
}
document.getElementById("clickMe").onclick=function(){
    let firstName=prompt("Enter your name:")
    if (firstName==="umar"){
        console.log("your name is so good")
    }else if(firstName==="hayat"){
        console.log("Your name is also good")
    }else{
        console.log("No correct: ")
    }
    
}
document.getElementById("clickMe").onclick=function(){
    let weight=+prompt("Enter your weight:")
    let age=+prompt("Enter your age:")
   if (age<=18 && weight<70){
    console.log("your are very good")
   }else{
    console.log("your are fat")
   }
    
}
document.getElementById("clickMe").onclick=function(){
    let weight=+prompt("Enter your weight:")
    if(weight<70){
        let age=+prompt("Enter the age")
        if (age<=18){
            console.log("your are so good")
        }else{
            console.log("your age is no correct")
        }
    }else{
        console.log("your weighgt is greater:")
    }
    
}





