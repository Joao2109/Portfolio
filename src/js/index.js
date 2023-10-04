const profile = document.querySelector('#profile-pic')
const background = document.querySelector('#profile-pic-fixed')
const image = document.querySelector('#profile-pic-fixed img')
profile.addEventListener('click',()=>{
    background.classList.add('visible')
})
background.addEventListener('click',()=>{
    background.classList.remove('visible')
})
image.addEventListener('click',(e)=>{
    e.stopPropagation()
})
