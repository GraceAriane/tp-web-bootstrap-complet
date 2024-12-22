window.addEventListener( "scroll",()=>{
    const headersecond = document.querySelector(".container-header-second")
    const headerheight = document.querySelector(".header-second")
    if(window.scrollY>=40 || window.scrollY>43){
        headersecond.classList.add("scrolled")
        headerheight.classList.add("scrolled-height")
    }else{
        headersecond.classList.remove("scrolled")
        headerheight.classList.remove("scrolled-height")
    }
})


const bars = document.querySelector(".responsive-menu-header .fa-bars")
bars.addEventListener('click',()=>{
    const navigation = document.querySelector(".navigation")
    if(navigation.style.display==="none"){
        navigation.style.display="flex"
    }else{
        navigation.style.display="none"
    }
})
