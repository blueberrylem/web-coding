console.log("Hello world")

let introField = document.querySelector(".intro-field")
let button = document.querySelector("button")

button.onclick = function(){
    let intro = introField.value
    let message ="he was_" +intro+"_because he wanted to. Why he was_"+intro+"? No one knows. He wanted to be_"+intro+"_because he wanted to be"
    console.log(message)
    document.write(message)
}