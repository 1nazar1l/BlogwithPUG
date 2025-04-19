console.log("hi")

document.addEventListener("DOMContentLoaded", function(){
    input = document.querySelector(".header_text-field")
    inputIcon = document.querySelector(".header_search")
    inputIcon.addEventListener("click", () => {
        input.classList.toggle("active")
    })
})