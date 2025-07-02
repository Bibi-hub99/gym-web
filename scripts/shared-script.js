const showSlideBtn = document.getElementById("menu-btn")
const closeSlideBtn = document.getElementById("close-btn")

showSlideBtn.addEventListener("click",showSlideMenu)
closeSlideBtn.addEventListener("click",closeSlideMenu)



function showSlideMenu(){
    const slideMenu = document.getElementById("slide-menu")
    slideMenu.style.width = '50%'
    slideMenu.style.paddingLeft = '.5rem'
    slideMenu.style.paddingRight = '1rem'
}

function closeSlideMenu(){
    const slideMenu = document.getElementById("slide-menu")
    slideMenu.style.width = '0%'
    slideMenu.style.paddingLeft = '0'
    slideMenu.style.paddingRight = '0'
}