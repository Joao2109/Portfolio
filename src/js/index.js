$(function () {
    const profile = document.querySelector('#profile-pic')
    const background = document.querySelector('#profile-pic-fixed')
    const image = document.querySelector('#profile-pic-fixed img')
    $('#profile-pic-fixed').fadeOut(0)
    profile.addEventListener('click', () => {
        $('#profile-pic-fixed').fadeIn(150)
    })
    background.addEventListener('click', () => {
        $('#profile-pic-fixed').fadeOut(150)
    })
    image.addEventListener('click', (e) => {
        e.stopPropagation()
    })
})
