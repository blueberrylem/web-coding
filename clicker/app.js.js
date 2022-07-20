

let button = document.querySelector("button")
let gameIsRunning = true
let score=0
let hp=10
document.onkeydown = function(event) {
    event.key == "down"
    "jumo.jfif".style["top"] = "200px"
}

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
    

   