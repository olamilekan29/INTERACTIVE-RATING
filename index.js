// //select element with the "svg" tag and store them in a Nodelist called "stars"
// const stars = document.querySelectorAll(".stars svg");

// // loop through the "stars" Nodelist
// stars.forEach(stars, index1 => {
//     // Add an event listner that runs a function when the "click" event is triggered
//     star.addEventlistener("click",() => ){
//         // loop through the "stars" Nodelist Again
//         star.forEach((star, index2) =>{
//             // Add the "active" class to the clickad star and any star with a lower index
//             // and remove the "active" class from any star with higher index
//         }
//         )
//      index1 >= index2 ? star.classList.add("active") :  star.classList.remove("active")  
//     }
// });


let button1 = document.getElementById("one")
let button2 = document.getElementById("two")
let button3 = document.getElementById("three")
let button4 = document.getElementById("four")
let button5 = document.getElementById("five")

console.log(button1.innerHTML)
button1.addEventListener("click", () => {
    console.log("Button One Clicked")
    button1.classList.add("active")
    button2.classList.remove("active")
    button3.classList.remove("active")
    button4.classList.remove("active")
    button5.classList.remove("active")
    localStorage.setItem("rate", button1.innerHTML)

})

button2.addEventListener("click", () => {
    console.log("Button Two Clicked")
    button1.classList.remove("active")
    button2.classList.add("active")
    button3.classList.remove("active")
    button4.classList.remove("active")
    button5.classList.remove("active")
    localStorage.setItem("rate", button2.innerHTML)
})

button3.addEventListener("click", () => {
    console.log("Button Three Clicked")
    button1.classList.remove("active")
    button2.classList.remove("active")
    button3.classList.add("active")
    button4.classList.remove("active")
    button5.classList.remove("active")
    localStorage.setItem("rate", button3.innerHTML)
})

button4.addEventListener("click", () => {
    console.log("Button Four Clicked")
    button1.classList.remove("active")
    button2.classList.remove("active")
    button3.classList.remove("active")
    button4.classList.add("active")
    button5.classList.remove("active")
    localStorage.setItem("rate", button4.innerHTML)
})

button5.addEventListener("click", () => {
    console.log("Button Five Clicked")
    button1.classList.remove("active")
    button2.classList.remove("active")
    button3.classList.remove("active")
    button4.classList.remove("active")
    button5.classList.add("active")
    localStorage.setItem("rate", button5.innerHTML)
})