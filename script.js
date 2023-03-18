let mario = document.getElementById("mario")
let ninja = document.getElementById("ninja")
let result = document.getElementById("result")
let num = 0;
result.innerHTML = "Твой результат" + "  "  + num + "  " + " балл"
addEventListener("keydown",function(event){

    jump();

})

function jump () {

    if(mario.classList !== "jump"){

        mario.classList.add("jump")
        result.innerHTML = "Твой результат" + "  "  + num++  + "  " + " балл"
    }
   setTimeout(function(){

    mario.classList.remove("jump")

   },300)

}

let isAlive = setInterval (function(){

    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"))
    let ninjaLeft = parseInt(window.getComputedStyle(ninja).getPropertyValue("left"))

    if(ninjaLeft < 20 && ninjaLeft > 0 &&  marioTop >= 140){

        alert("game over")
        location.reload()

    }
    
},10)