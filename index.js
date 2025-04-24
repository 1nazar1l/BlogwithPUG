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

    burger = document.querySelector(".header_burger")
    logo = document.querySelector(".header_top .header_logo")
    headerMobile = document.querySelector(".header_mobile")
    cross = document.querySelector(".header_mobile-cross")


    burger.addEventListener("click", () => {
        document.body.classList.add("active")
        logo.classList.add("active")
        headerMobile.classList.add("active")
    })
    document.addEventListener("click", (e) => {
        const withinHeaderMobile = e.composedPath().includes(headerMobile);
        const withinBurger = e.composedPath().includes(burger);
        if (!withinHeaderMobile && !withinBurger) {
            document.body.classList.remove("active")
            logo.classList.remove("active")
            headerMobile.classList.remove("active")
        }
    })

    cross.addEventListener("click", () => {
        document.body.classList.toggle("active")
        logo.classList.toggle("active")
        headerMobile.classList.toggle("active")
    })
})