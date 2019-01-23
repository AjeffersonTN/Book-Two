
document.getElementById("message").addEventListener("keyup", function (event){
    
    document.getElementById("articleOne").textContent = event.target.value
    document.getElementById("articleTwo").textContent = event.target.value 
    
})
