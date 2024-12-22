const buttonconnexion = document.querySelector(".action-connexion")
const buttoninscription = document.querySelector(".action-inscription")


buttonconnexion.addEventListener('click',(e)=>{
    const inscription = document.querySelector(".inscription")
    const connexion = document.querySelector(".connexion")

    inscription.classList.remove('d-flex')
    inscription.classList.add('d-none')
    connexion.classList.remove('d-none')
    connexion.classList.add('d-flex')


    buttonconnexion.style.cssText=`
        background-color: rgb(30, 115, 190);
        color: white;
        font-weight: 700;
        cursor: default;
    `
    
    buttoninscription.style.cssText=`
        background-color: #c4c4c4;
        color: rgb(21,25,21);
        background-color:  rgb(224,224,224);
        font-weight: 300;
        cursor: pointer;
    `


    e.preventDefault()
})

buttoninscription.addEventListener('click',(e)=>{
    const inscription = document.querySelector(".inscription")
    const connexion = document.querySelector(".connexion")

    inscription.style.display="flex"
    connexion.style.display="none"
    inscription.classList.remove('d-none')
    inscription.classList.add('d-flex')
    connexion.classList.remove('d-flex')
    connexion.classList.add('d-none')

    buttoninscription.style.cssText=`
        background-color: rgb(30, 115, 190);
        color: white;
        font-weight: 700;
    `
    
    buttonconnexion.style.cssText=`
        background-color: #c4c4c4;
        color: rgb(21,25,21);
        background-color:  rgb(224,224,224);
    `

    buttoninscription.classList.add(".cursor")
    buttonconnexion.classList.remove(".cursor")

    e.preventDefault()
})

const eye = document.querySelector(".password-inscription .fa-eye")
const eyeslash = document.querySelector(".password-inscription .fa-eye-slash")
const inputpassword = document.querySelector(".password-inscription input")

eye.addEventListener('click',()=>{
    eye.style.display="none"
    eyeslash.style.display="block"
    if(inputpassword.getAttribute("type")==="password"){
        inputpassword.setAttribute("type","text")
    }
    
})
eyeslash.addEventListener('click',()=>{
    eye.style.display="block"
    eyeslash.style.display="none"
    if(inputpassword.getAttribute("type")==="text"){
        inputpassword.setAttribute("type","password")
    }

})

const eye2 = document.querySelector(".password-connexion .fa-eye")
const eyeslash2 = document.querySelector(".password-connexion .fa-eye-slash")
const inputpassword2 = document.querySelector(".password-connexion input")

eye2.addEventListener('click',()=>{
    eye2.style.display="none"
    eyeslash2.style.display="block"
    if(inputpassword2.getAttribute("type")==="password"){
        inputpassword2.setAttribute("type","text")
    }
    
})
eyeslash2.addEventListener('click',()=>{
    eye2.style.display="block"
    eyeslash2.style.display="none"
    if(inputpassword2.getAttribute("type")==="text"){
        inputpassword2.setAttribute("type","password")
    }

})


const inpUtilisateurInscription = document.querySelector('.inscription .user')
const inpMailInscription = document.querySelector('.inscription .mail')
const inpNom = document.querySelector('.inscription .name')
const inpTel = document.querySelector('.inscription .tel')

inpUtilisateurInscription.addEventListener('input', (e)=>{
    if(e.target.value.length>=3){
        inpUtilisateurInscription.classList.add('is-valid')
        inpUtilisateurInscription.classList.remove('is-invalid')

    }else{
        inpUtilisateurInscription.classList.add('is-invalid')
        inpUtilisateurInscription.classList.remove('is-valid')
    }
})

inpMailInscription.addEventListener('input', (e)=>{
    const regexEmail = /\S+@\S+\.\S+/;
    if(e.target.value.search(regexEmail)===0){
        inpMailInscription.classList.add('is-valid')
        inpMailInscription.classList.remove('is-invalid')  

    }else if(e.target.value.search(regexEmail) === -1){

        inpMailInscription.classList.add('is-invalid')
        inpMailInscription.classList.remove('is-valid')
    }
})

inpNom.addEventListener('input', (e)=>{
    if(e.target.value.length>=3){
        inpNom.classList.add('is-valid')
        inpNom.classList.remove('is-invalid')

    }else{
        inpNom.classList.add('is-invalid')
        inpNom.classList.remove('is-valid')
    }
})

inpTel.addEventListener('input', (e)=>{
    if(e.target.value.length===9){
        inpTel.classList.add('is-valid')
        inpTel.classList.remove('is-invalid')

    }else{
        inpTel.classList.add('is-invalid')
        inpTel.classList.remove('is-valid')
    }
})


