const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generatePw=document.getElementById("generate-pw")
let pwOne=document.getElementById("pw-one")
let pwTwo=document.getElementById("pw-two")


generatePw.addEventListener("click", ()=>{
    pwOne.textContent=""
    pwTwo.textContent=""
    for(let i=0; i<=15; i++){
        let a=Math.floor(Math.random()*characters.length)
        let b=Math.floor(Math.random()*characters.length)
        pwOne.textContent+=characters[a]
        pwTwo.textContent+=characters[b]
        pwOne.style.color="white"
        pwTwo.style.color="white"
    }   
}


)

