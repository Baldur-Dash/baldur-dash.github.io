let myImage = document.querySelector("img");
myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/hrbn1.jpg") {
        myImage.setAttribute("src", "images/undd.jpg");
        //https://www.pinterest.com/pin/527836018804619621/ Artist credit to Steven Marella
    } else {
        myImage.setAttribute("src","images/hrbn1.jpg");
    }
}
let myHeading=document.querySelector("h1");
function setUserName() {
    let myName=prompt("What is your name?");
    if(!myName  || myName === null) {
        setUserName();
    } else {
        localStorage.setItem("name",myName);
    myHeading.textContent="Welcome, "+ myName;
    }
    
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName=localStorage.getItem("name");
    myHeading.textContent= "Welcome, "+storedName;
}
myHeading.onclick=function() {
    setUserName();
}
