document.addEventListener("DOMContentLoaded", function(){
    input = document.querySelector(".header_text-field")
    inputIcon = document.querySelector(".header_search")
    inputIcon.addEventListener("click", () => {
        input.classList.toggle("active")
    })

    header = document.querySelector(".header")
    const width = document.documentElement.clientWidth
    let headerHeight = header.clientHeight

    let top = 0
    if (width > 1024) {
        document.addEventListener("scroll", () => {
            if (window.pageYOffset < top) {
                header.style.top = 0
            }
            else {
                if (window.pageYOffset > 200){
                    header.style.top = "-" + headerHeight + "px"
                }
            }
            top = window.pageYOffset
        })
    }
})