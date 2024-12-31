// document.getElementById("my-button").onclick=function(){
    // document.getElementById("heading1").innerHTML="Change heading by button"
    // document.getElementById("heading1").style.color="red"
    // document.getElementById("heading1").style.textAlign="center"
    // document.getElementById("my-button").innerHTML="<i><b class='text-primary'>Button</b></i>"

// }


document.getElementById("on-button").onclick=function(){
    document.getElementById("bulb").scr="https://www.w3schools.com/js/pic_bulbon.gif"
}
document.getElementById("off-button").onclick=function () {
    document.getElementById("bulb").scr="https://www.w3schools.com/js/pic_bulboff.gif"
    document.getElementById("body").style.backgroundColor="black"

}
document.getElementById("btn1").onclick=function () {
    document.write("<h1>This is first heading</h1><p>Your fee has been submitted")
    alert("alert")
    console.log("Alert")
    let a=0
    console.log(a)
    a=a+1
    console.log(a)
}