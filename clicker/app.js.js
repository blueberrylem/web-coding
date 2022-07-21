

let button = document.querySelector("button")
let gameIsRunning = true
let score=0
let hp=10
function respondToUpArrow(event){
    if(event.key === 'ArrowUp'){
        console.log("UP")
        gif.style.top = parseInt(gif.style.top) + 5 + 'px'
        document.querySelector("gif").style["top"] = "3px"
}
}
///document.onkeydown = function(event) {
///    console.log("key pressed: " + event.key)
   /// if (event.key == "ArrowDown")[
    //gif.style.top = parseInt(gif.style.top) + 5 + 'px';]
   /// document.querySelector("gif").style["top"] = "3px"

   

/* this goes in your css
position: fixed;
left: 0;
top: 0;
*/

// let player = document.querySelector("TOOD: put  a selector here that finds your player in the DOM")
// let position = 0
// player.style["left"] = position + "px"

// let body = document.querySelector("body")
// body.addEventListener("keydown", e=>{if(e.key === 'w') console.log("UP")});
// body.addEventListener("keydown", e=>{if(e.key === 'ArrowUp') console.log("UP")});
// body.addEventListener("keydown", function(e){if(e.key === 'ArrowUp') console.log("UP")});

//   function respondToUpArrow(event){
//     if(event.key === 'ArrowUp') {
//         console.log("UP")
//     }
// }

// body.addEventListener("keydown", respondToUpArrow);

button.onclick = function(){
    

    
    let username= document.querySelector(".a1").value






    let message = username+", you must win this battle or you will die!"
    console.log(message)
    const sendMessageResponseArea = document.querySelector('.response-to-send-message')


    sendMessageResponseArea.textContent = message
}
   /// while (gameIsRunning==true)    
   ///  if (hp==0) {
   ///    gameIsRunning=false
    

   